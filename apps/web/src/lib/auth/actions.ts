'use server';

import { z } from 'zod';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase/server';

const emailSchema = z.string().email();

export type SendMagicLinkResult =
  | { ok: true }
  | { ok: false; error: 'invalid_email' | 'send_failed' };

export async function sendMagicLink(formData: FormData): Promise<SendMagicLinkResult> {
  const email = String(formData.get('email') ?? '').trim();
  const parsed = emailSchema.safeParse(email);
  if (!parsed.success) return { ok: false, error: 'invalid_email' };

  const supabase = await createSupabaseServerClient();
  const origin = await getOrigin();

  const { error } = await supabase.auth.signInWithOtp({
    email: parsed.data,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      shouldCreateUser: true,
    },
  });

  if (error) {
    console.error('magic link error', error);
    return { ok: false, error: 'send_failed' };
  }
  return { ok: true };
}

export async function startGoogleSignIn(): Promise<void> {
  const supabase = await createSupabaseServerClient();
  const origin = await getOrigin();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
      queryParams: { access_type: 'offline', prompt: 'consent' },
    },
  });

  if (error || !data?.url) {
    console.error('google oauth error', error);
    redirect('/sign-in?error=google');
  }
  redirect(data.url);
}

export async function signOut(): Promise<void> {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect('/');
}

async function getOrigin(): Promise<string> {
  const h = await headers();
  const host = h.get('x-forwarded-host') ?? h.get('host');
  if (host) {
    const proto = h.get('x-forwarded-proto') ?? (host.startsWith('localhost') ? 'http' : 'https');
    return `${proto}://${host}`;
  }
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, '');
  return 'http://localhost:3000';
}
