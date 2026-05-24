import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import { updateSupabaseSession } from './lib/supabase/middleware';

const intlMiddleware = createMiddleware(routing);

const localeAgnosticPrefixes = ['/auth/callback', '/sign-out'];

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isLocaleAgnostic = localeAgnosticPrefixes.some((p) => pathname.startsWith(p));
  const response = isLocaleAgnostic ? NextResponse.next() : intlMiddleware(request);
  return await updateSupabaseSession(request, response as NextResponse);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
