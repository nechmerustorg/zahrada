import { getRequestConfig } from 'next-intl/server';
import { messages } from '@pestuj/i18n';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = (
    requested && routing.locales.includes(requested as (typeof routing.locales)[number])
      ? requested
      : routing.defaultLocale
  ) as keyof typeof messages;

  return {
    locale,
    messages: messages[locale],
  };
});
