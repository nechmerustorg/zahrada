CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"display_name" text,
	"locale" text DEFAULT 'cs' NOT NULL,
	"country" text,
	"climate_zone" text,
	"postal_code" text,
	"notification_prefs" jsonb DEFAULT '{"push": true, "email": true}'::jsonb NOT NULL,
	"family_owner_id" uuid,
	"onboarded_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"provider" text NOT NULL,
	"provider_customer_id" text,
	"provider_subscription_id" text,
	"tier" text NOT NULL,
	"status" text NOT NULL,
	"current_period_start" timestamp with time zone,
	"current_period_end" timestamp with time zone,
	"cancel_at_period_end" boolean DEFAULT false NOT NULL,
	"provider_data" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "family_invites" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_user_id" uuid NOT NULL,
	"code" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"consumed_by" uuid,
	"consumed_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "family_memberships" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_user_id" uuid NOT NULL,
	"member_user_id" uuid NOT NULL,
	"invited_at" timestamp with time zone DEFAULT now() NOT NULL,
	"joined_at" timestamp with time zone,
	"revoked_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "plants_catalog" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"scientific_name" text NOT NULL,
	"common_names" jsonb NOT NULL,
	"category" text NOT NULL,
	"family" text,
	"lifecycle" text,
	"sun_requirement" text,
	"water_requirement" text,
	"soil_type" text[],
	"hardiness_min_c" integer,
	"companion_plants" text[],
	"incompatible_plants" text[],
	"content" jsonb,
	"images" jsonb,
	"external_ids" jsonb,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "plant_care_rules" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"catalog_plant_id" uuid NOT NULL,
	"task_type" text NOT NULL,
	"trigger_type" text NOT NULL,
	"trigger_config" jsonb NOT NULL,
	"priority" integer DEFAULT 3 NOT NULL,
	"climate_regions" text[],
	"instructions_i18n" jsonb NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_plants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"catalog_plant_id" uuid,
	"custom_name" text NOT NULL,
	"nickname" text,
	"planted_at" date,
	"location_label" text,
	"location_type" text,
	"quantity" integer DEFAULT 1 NOT NULL,
	"notes" text,
	"cover_image_path" text,
	"last_watered_at" timestamp with time zone,
	"last_fertilized_at" timestamp with time zone,
	"state" text DEFAULT 'active' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "care_tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"user_plant_id" uuid NOT NULL,
	"task_type" text NOT NULL,
	"due_date" date NOT NULL,
	"due_window_start" date,
	"due_window_end" date,
	"title_i18n" jsonb,
	"instructions_i18n" jsonb,
	"status" text DEFAULT 'pending' NOT NULL,
	"completed_at" timestamp with time zone,
	"generated_by" text DEFAULT 'rule_engine' NOT NULL,
	"source_rule_id" uuid,
	"priority" integer DEFAULT 3 NOT NULL,
	"notification_sent_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "diagnostic_sessions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"user_plant_id" uuid,
	"image_path" text NOT NULL,
	"image_metadata" jsonb,
	"user_question" text,
	"status" text DEFAULT 'pending' NOT NULL,
	"claude_analysis" jsonb,
	"diagnosis_summary" text,
	"urgency" text,
	"recommended_actions" jsonb,
	"created_care_tasks" uuid[],
	"cost_cents" integer DEFAULT 0 NOT NULL,
	"prompt_version" text,
	"user_feedback" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"completed_at" timestamp with time zone,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "identifications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"session_id" uuid,
	"provider" text NOT NULL,
	"endpoint" text NOT NULL,
	"request_hash" text NOT NULL,
	"raw_response" jsonb NOT NULL,
	"cost_cents" integer DEFAULT 0 NOT NULL,
	"latency_ms" integer,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "usage_quotas" (
	"user_id" uuid NOT NULL,
	"period_year_month" text NOT NULL,
	"diagnoses_used" integer DEFAULT 0 NOT NULL,
	"ai_chat_messages_used" integer DEFAULT 0 NOT NULL,
	"tier_at_period_start" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "usage_quotas_user_id_period_year_month_pk" PRIMARY KEY("user_id","period_year_month")
);
--> statement-breakpoint
CREATE TABLE "notification_tokens" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"platform" text NOT NULL,
	"token" text NOT NULL,
	"last_active_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "family_invites" ADD CONSTRAINT "family_invites_owner_user_id_profiles_id_fk" FOREIGN KEY ("owner_user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "family_invites" ADD CONSTRAINT "family_invites_consumed_by_profiles_id_fk" FOREIGN KEY ("consumed_by") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "family_memberships" ADD CONSTRAINT "family_memberships_owner_user_id_profiles_id_fk" FOREIGN KEY ("owner_user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "family_memberships" ADD CONSTRAINT "family_memberships_member_user_id_profiles_id_fk" FOREIGN KEY ("member_user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "plant_care_rules" ADD CONSTRAINT "plant_care_rules_catalog_plant_id_plants_catalog_id_fk" FOREIGN KEY ("catalog_plant_id") REFERENCES "public"."plants_catalog"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_plants" ADD CONSTRAINT "user_plants_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_plants" ADD CONSTRAINT "user_plants_catalog_plant_id_plants_catalog_id_fk" FOREIGN KEY ("catalog_plant_id") REFERENCES "public"."plants_catalog"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "care_tasks" ADD CONSTRAINT "care_tasks_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "care_tasks" ADD CONSTRAINT "care_tasks_user_plant_id_user_plants_id_fk" FOREIGN KEY ("user_plant_id") REFERENCES "public"."user_plants"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "care_tasks" ADD CONSTRAINT "care_tasks_source_rule_id_plant_care_rules_id_fk" FOREIGN KEY ("source_rule_id") REFERENCES "public"."plant_care_rules"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diagnostic_sessions" ADD CONSTRAINT "diagnostic_sessions_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diagnostic_sessions" ADD CONSTRAINT "diagnostic_sessions_user_plant_id_user_plants_id_fk" FOREIGN KEY ("user_plant_id") REFERENCES "public"."user_plants"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "identifications" ADD CONSTRAINT "identifications_session_id_diagnostic_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."diagnostic_sessions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "usage_quotas" ADD CONSTRAINT "usage_quotas_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notification_tokens" ADD CONSTRAINT "notification_tokens_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "subscriptions_provider_sub_id_uniq" ON "subscriptions" USING btree ("provider","provider_subscription_id");--> statement-breakpoint
CREATE INDEX "subscriptions_user_idx" ON "subscriptions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "subscriptions_status_idx" ON "subscriptions" USING btree ("status");--> statement-breakpoint
CREATE UNIQUE INDEX "family_invites_code_uniq" ON "family_invites" USING btree ("code");--> statement-breakpoint
CREATE INDEX "family_invites_owner_idx" ON "family_invites" USING btree ("owner_user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "family_memberships_member_uniq" ON "family_memberships" USING btree ("member_user_id");--> statement-breakpoint
CREATE INDEX "family_memberships_owner_idx" ON "family_memberships" USING btree ("owner_user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "plants_catalog_slug_uniq" ON "plants_catalog" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "plants_catalog_category_idx" ON "plants_catalog" USING btree ("category");--> statement-breakpoint
CREATE INDEX "plant_care_rules_plant_idx" ON "plant_care_rules" USING btree ("catalog_plant_id");--> statement-breakpoint
CREATE INDEX "plant_care_rules_task_type_idx" ON "plant_care_rules" USING btree ("task_type");--> statement-breakpoint
CREATE INDEX "user_plants_user_idx" ON "user_plants" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "user_plants_state_idx" ON "user_plants" USING btree ("state");--> statement-breakpoint
CREATE INDEX "care_tasks_user_due_idx" ON "care_tasks" USING btree ("user_id","due_date");--> statement-breakpoint
CREATE INDEX "care_tasks_status_idx" ON "care_tasks" USING btree ("status");--> statement-breakpoint
CREATE INDEX "care_tasks_plant_idx" ON "care_tasks" USING btree ("user_plant_id");--> statement-breakpoint
CREATE INDEX "diagnostic_sessions_user_idx" ON "diagnostic_sessions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "diagnostic_sessions_status_idx" ON "diagnostic_sessions" USING btree ("status");--> statement-breakpoint
CREATE INDEX "diagnostic_sessions_created_idx" ON "diagnostic_sessions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "identifications_hash_idx" ON "identifications" USING btree ("request_hash");--> statement-breakpoint
CREATE INDEX "identifications_session_idx" ON "identifications" USING btree ("session_id");--> statement-breakpoint
CREATE UNIQUE INDEX "notification_tokens_token_uniq" ON "notification_tokens" USING btree ("token");--> statement-breakpoint
CREATE INDEX "notification_tokens_user_idx" ON "notification_tokens" USING btree ("user_id");