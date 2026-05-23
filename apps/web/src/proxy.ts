import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import { updateSupabaseSession } from './lib/supabase/middleware';

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  const response = intlMiddleware(request);
  return await updateSupabaseSession(request, response as NextResponse);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
