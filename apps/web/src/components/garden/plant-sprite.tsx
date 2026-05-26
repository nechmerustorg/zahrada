import type { SVGProps } from 'react';
import {
  RajceSprite,
  PaprikaSprite,
  OkurkaSprite,
  MrkevSprite,
  BramborySprite,
  CibuleSprite,
  CesnekSprite,
  SalatSprite,
  BazalkaSprite,
  PetrzelSprite,
  MataSprite,
  SalvejSprite,
  TymianSprite,
  RozmarynSprite,
  PazitkaSprite,
  JahodaSprite,
  MalinaSprite,
  JablonSprite,
  HrusenSprite,
  RibizSprite,
  RuzeSprite,
  HortenzieSprite,
  LevanduleSprite,
  MonsteraSprite,
  SukulentEcheveriaSprite,
} from './sprites';
import { categoryEmoji } from '@/lib/garden/urgency';

type SpriteComponent = (props: { size?: number } & SVGProps<SVGSVGElement>) => React.ReactNode;

const SPRITES: Record<string, SpriteComponent> = {
  rajce: RajceSprite,
  paprika: PaprikaSprite,
  okurka: OkurkaSprite,
  mrkev: MrkevSprite,
  brambory: BramborySprite,
  cibule: CibuleSprite,
  cesnek: CesnekSprite,
  salat: SalatSprite,
  bazalka: BazalkaSprite,
  petrzel: PetrzelSprite,
  mata: MataSprite,
  salvej: SalvejSprite,
  tymian: TymianSprite,
  rozmaryn: RozmarynSprite,
  pazitka: PazitkaSprite,
  jahoda: JahodaSprite,
  malina: MalinaSprite,
  jablon: JablonSprite,
  hrusen: HrusenSprite,
  ribiz: RibizSprite,
  ruze: RuzeSprite,
  hortenzie: HortenzieSprite,
  levandule: LevanduleSprite,
  monstera: MonsteraSprite,
  'sukulent-echeveria': SukulentEcheveriaSprite,
};

export function PlantSprite({
  slug,
  category,
  size = 48,
}: {
  slug: string | null | undefined;
  category: string | null | undefined;
  size?: number;
}) {
  const Component = slug ? SPRITES[slug] : undefined;
  if (Component) {
    return (
      <Component
        size={size}
        style={{ imageRendering: 'pixelated', display: 'block' }}
      />
    );
  }
  return (
    <span
      aria-hidden
      style={{ fontSize: size * 0.8, lineHeight: 1, display: 'inline-block' }}
    >
      {categoryEmoji(category ?? undefined)}
    </span>
  );
}
