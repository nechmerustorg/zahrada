import type { Locale } from '@pestuj/shared';

export type Urgency = 'overdue' | 'today' | 'soon' | 'ok';

export interface PlantUrgencySummary {
  urgency: Urgency;
  overdueCount: number;
  todayCount: number;
  soonCount: number;
  nextDueDate: string | null;
}

export function computeUrgency(
  plantId: string,
  tasks: Array<{ user_plant: { id: string }; due_date: string; status: string }>,
): PlantUrgencySummary {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const oneWeek = new Date(today);
  oneWeek.setDate(today.getDate() + 7);

  let overdueCount = 0;
  let todayCount = 0;
  let soonCount = 0;
  let nextDueDate: string | null = null;

  for (const t of tasks) {
    if (t.user_plant.id !== plantId) continue;
    if (t.status !== 'pending' && t.status !== 'overdue') continue;
    const due = new Date(t.due_date);
    due.setHours(0, 0, 0, 0);
    if (due < today) overdueCount++;
    else if (due.getTime() === today.getTime()) todayCount++;
    else if (due <= oneWeek) soonCount++;
    if (!nextDueDate || due < new Date(nextDueDate)) nextDueDate = t.due_date;
  }

  let urgency: Urgency = 'ok';
  if (overdueCount > 0) urgency = 'overdue';
  else if (todayCount > 0) urgency = 'today';
  else if (soonCount > 0) urgency = 'soon';

  return { urgency, overdueCount, todayCount, soonCount, nextDueDate };
}

export function urgencyColor(u: Urgency): {
  bg: string;
  border: string;
  text: string;
  dot: string;
} {
  switch (u) {
    case 'overdue':
      return {
        bg: 'bg-red-100',
        border: 'border-red-500',
        text: 'text-red-800',
        dot: 'bg-red-500',
      };
    case 'today':
      return {
        bg: 'bg-amber-100',
        border: 'border-amber-500',
        text: 'text-amber-800',
        dot: 'bg-amber-500',
      };
    case 'soon':
      return {
        bg: 'bg-yellow-50',
        border: 'border-yellow-400',
        text: 'text-yellow-800',
        dot: 'bg-yellow-400',
      };
    case 'ok':
    default:
      return {
        bg: 'bg-leaf-50',
        border: 'border-leaf-300',
        text: 'text-leaf-700',
        dot: 'bg-leaf-500',
      };
  }
}

export function urgencyLabel(u: Urgency, locale: Locale): string {
  const map: Record<Urgency, Record<Locale, string>> = {
    overdue: { cs: 'Po termínu', sk: 'Po termíne', en: 'Overdue' },
    today: { cs: 'Dnes', sk: 'Dnes', en: 'Today' },
    soon: { cs: 'Brzy', sk: 'Čoskoro', en: 'Soon' },
    ok: { cs: 'V pohodě', sk: 'V poriadku', en: 'All good' },
  };
  return map[u][locale];
}

/** Category fallback emoji used when no SVG sprite matches the slug. */
export function categoryEmoji(category: string | undefined): string {
  const byCategory: Record<string, string> = {
    vegetable: '🥬',
    herb: '🌿',
    fruit: '🍎',
    ornamental: '🌸',
    houseplant: '🪴',
    tree: '🌳',
    shrub: '🌿',
  };
  return (category && byCategory[category]) || '🌱';
}
