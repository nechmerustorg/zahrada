-- ============================================================
-- 9999 — Extensions, helpers, RLS policies, auth triggers
-- Applied AFTER Drizzle-generated table migrations.
-- Filename starts with 9999 so it sorts last.
-- ============================================================

-- ----- extensions ----------------------------------------------
create extension if not exists "pgcrypto";

-- ----- generic helper: updated_at -------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ----- profiles --------------------------------------------------
alter table public.profiles enable row level security;

create policy "profiles: self select"
  on public.profiles for select
  using (id = auth.uid());

create policy "profiles: self insert"
  on public.profiles for insert
  with check (id = auth.uid());

create policy "profiles: self update"
  on public.profiles for update
  using (id = auth.uid())
  with check (id = auth.uid());

create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

-- Auto-create a profile row when a new auth user appears.
create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, locale)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'locale', 'cs')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_auth_user();

-- ----- subscriptions --------------------------------------------------
alter table public.subscriptions enable row level security;

create policy "subscriptions: self select"
  on public.subscriptions for select
  using (user_id = auth.uid());

create trigger subscriptions_set_updated_at
  before update on public.subscriptions
  for each row execute function public.set_updated_at();

-- ----- family --------------------------------------------------
alter table public.family_invites enable row level security;
alter table public.family_memberships enable row level security;

create policy "family_invites: owner select"
  on public.family_invites for select
  using (owner_user_id = auth.uid());

create policy "family_invites: owner insert"
  on public.family_invites for insert
  with check (owner_user_id = auth.uid());

create policy "family_memberships: owner or member select"
  on public.family_memberships for select
  using (owner_user_id = auth.uid() or member_user_id = auth.uid());

-- ----- plants_catalog: public read --------------------------------------------------
alter table public.plants_catalog enable row level security;
create policy "plants_catalog: public read"
  on public.plants_catalog for select
  using (true);

create trigger plants_catalog_set_updated_at
  before update on public.plants_catalog
  for each row execute function public.set_updated_at();

-- ----- plant_care_rules: public read --------------------------------------------------
alter table public.plant_care_rules enable row level security;
create policy "plant_care_rules: public read"
  on public.plant_care_rules for select
  using (true);

-- ----- user_plants --------------------------------------------------
alter table public.user_plants enable row level security;

create policy "user_plants: self all"
  on public.user_plants for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create trigger user_plants_set_updated_at
  before update on public.user_plants
  for each row execute function public.set_updated_at();

-- ----- care_tasks --------------------------------------------------
alter table public.care_tasks enable row level security;

create policy "care_tasks: self all"
  on public.care_tasks for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

create trigger care_tasks_set_updated_at
  before update on public.care_tasks
  for each row execute function public.set_updated_at();

-- ----- diagnostic_sessions --------------------------------------------------
alter table public.diagnostic_sessions enable row level security;

create policy "diagnostic_sessions: self select"
  on public.diagnostic_sessions for select
  using (user_id = auth.uid());

create policy "diagnostic_sessions: self insert"
  on public.diagnostic_sessions for insert
  with check (user_id = auth.uid());

create policy "diagnostic_sessions: self update"
  on public.diagnostic_sessions for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- ----- identifications --------------------------------------------------
alter table public.identifications enable row level security;

create policy "identifications: read via session ownership"
  on public.identifications for select
  using (
    exists (
      select 1 from public.diagnostic_sessions s
      where s.id = identifications.session_id and s.user_id = auth.uid()
    )
  );

-- ----- usage_quotas --------------------------------------------------
alter table public.usage_quotas enable row level security;

create policy "usage_quotas: self read"
  on public.usage_quotas for select
  using (user_id = auth.uid());

create trigger usage_quotas_set_updated_at
  before update on public.usage_quotas
  for each row execute function public.set_updated_at();

-- ----- notification_tokens --------------------------------------------------
alter table public.notification_tokens enable row level security;

create policy "notification_tokens: self all"
  on public.notification_tokens for all
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- ----- profiles.family_owner_id FK (after family table exists) -------------
alter table public.profiles
  add constraint profiles_family_owner_fk
  foreign key (family_owner_id) references public.profiles(id) on delete set null;

-- ----- Storage bucket for plant photos --------------------------------------------------
insert into storage.buckets (id, name, public)
values ('plant-photos', 'plant-photos', false)
on conflict (id) do nothing;

create policy "plant-photos: owner read"
  on storage.objects for select
  using (
    bucket_id = 'plant-photos'
    and (auth.uid())::text = (storage.foldername(name))[1]
  );

create policy "plant-photos: owner insert"
  on storage.objects for insert
  with check (
    bucket_id = 'plant-photos'
    and (auth.uid())::text = (storage.foldername(name))[1]
  );

create policy "plant-photos: owner delete"
  on storage.objects for delete
  using (
    bucket_id = 'plant-photos'
    and (auth.uid())::text = (storage.foldername(name))[1]
  );
