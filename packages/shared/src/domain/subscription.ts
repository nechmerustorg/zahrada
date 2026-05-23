export const SUBSCRIPTION_TIERS = ['monthly', 'yearly', 'family'] as const;
export type SubscriptionTier = (typeof SUBSCRIPTION_TIERS)[number];

export const SUBSCRIPTION_STATUSES = [
  'active',
  'trialing',
  'past_due',
  'canceled',
  'incomplete',
  'incomplete_expired',
  'unpaid',
] as const;
export type SubscriptionStatus = (typeof SUBSCRIPTION_STATUSES)[number];

export const FAMILY_PLAN_MAX_MEMBERS = 3;

export const TIER_PRICES_CZK = {
  monthly: 150,
  yearly: 1200,
  family: 350,
} as const;

export const TIER_DIAGNOSIS_QUOTA_PER_MONTH: Record<SubscriptionTier, number> = {
  monthly: 50,
  yearly: 80,
  family: 50,
};

export const TIER_AI_CHAT_QUOTA_PER_MONTH: Record<SubscriptionTier, number> = {
  monthly: 50,
  yearly: 80,
  family: 50,
};

export function isActiveStatus(status: SubscriptionStatus): boolean {
  return status === 'active' || status === 'trialing';
}
