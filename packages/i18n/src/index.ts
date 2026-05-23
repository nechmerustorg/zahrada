import cs from './messages/cs.json' with { type: 'json' };
import sk from './messages/sk.json' with { type: 'json' };
import en from './messages/en.json' with { type: 'json' };

export const messages = { cs, sk, en } as const;
export type Messages = typeof cs;
export const locales = ['cs', 'sk', 'en'] as const;
export const defaultLocale = 'cs' as const;
