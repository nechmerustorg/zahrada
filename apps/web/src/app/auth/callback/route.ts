import { NextResponse, type NextRequest } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/onboarding';

  if (!code) {
    return NextResponse.redirect(`${origin}/sign-in?error=missing_code`);
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error('callback exchange error', error);
    return NextResponse.redirect(`${origin}/sign-in?error=exchange_failed`);
  }

  const { data: userResp } = await supabase.auth.getUser();
  const userId = userResp.user?.id;

  if (!userId) {
    return NextResponse.redirect(`${origin}/sign-in?error=no_user`);
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('climate_zone, onboarded_at')
    .eq('id', userId)
    .maybeSingle();

  const target = profile?.climate_zone ? '/moje-zahrada' : next;
  return NextResponse.redirect(`${origin}${target}`);
}
