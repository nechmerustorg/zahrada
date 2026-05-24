import type { ClimateRegion } from '../domain/region';
import type { Locale } from '../domain/region';

export const DIAGNOSE_PROMPT_VERSION = '2026-05-23.v1';

export const DIAGNOSE_SYSTEM_PROMPT = `Jsi zkušený zahradník specializovaný na klimatické podmínky střední Evropy (Česko, Slovensko, Rakousko, Německo, Polsko, Maďarsko).

Tvoje role:
- Analyzuješ identifikaci rostliny a zdravotní posouzení z Plant.id API
- Poskytuješ konkrétní, akční rady přizpůsobené sezóně a regionu uživatele
- Mluvíš česky (nebo slovensky / anglicky podle locale uživatele)
- Rady jsou praktické, ne akademické

Pravidla:
1. VŽDY použij tool "submit_diagnosis" pro odpověď. Nikdy neodpovídej čistým textem.
2. Buď konkrétní s množstvím (litry vody, gramy hnojiva), časem (dny, týdny), produkty (běžně dostupné v ČR/SK obchodech).
3. Zohledni aktuální měsíc a klimatický region — v lednu v horách neradíš zalévat venku.
4. Pokud confidence Plant.id je nízká (< 0.5), výslovně to zmiň v "long_term_advice".
5. Pro urgency = "critical" zvol jen pokud rostlina umírá / akutní napadení škůdcem.
6. Recommended actions seřaď podle priority (1 = nejdůležitější).
7. Vyhýbej se chemickým postřikům jako první volbě — preferuj biologické / mechanické postupy.
8. Nedávej zdravotní rady pro lidi (jedlost atd.) — jen pro rostlinu.

Formát výstupu je striktní JSON podle tool schématu. Žádný markdown, žádné backticks, žádné komentáře.`;

export function buildDiagnoseUserMessage(input: {
  plantIdIdentification: unknown;
  plantIdHealthAssessment: unknown;
  region: ClimateRegion;
  locale: Locale;
  currentMonth: number;
  userQuestion?: string | null;
  userPlantContext?: {
    customName?: string;
    plantedAt?: string | null;
    locationType?: string | null;
  } | null;
}): string {
  return JSON.stringify(
    {
      context: {
        region: input.region,
        locale: input.locale,
        current_month: input.currentMonth,
        user_question: input.userQuestion ?? null,
        user_plant: input.userPlantContext ?? null,
      },
      plant_id_identification: input.plantIdIdentification,
      plant_id_health: input.plantIdHealthAssessment,
    },
    null,
    2,
  );
}

export const SUBMIT_DIAGNOSIS_TOOL = {
  name: 'submit_diagnosis',
  description:
    'Submit the final diagnosis and recommendations. ALWAYS call this tool exactly once.',
  input_schema: {
    type: 'object' as const,
    properties: {
      identified_plant: {
        type: 'object',
        properties: {
          catalog_slug: { type: ['string', 'null'] },
          scientific_name: { type: 'string' },
          common_name_cs: { type: ['string', 'null'] },
          confidence: { type: 'number', minimum: 0, maximum: 1 },
        },
        required: ['scientific_name', 'confidence'],
      },
      health_status: {
        type: 'string',
        enum: ['healthy', 'stressed', 'diseased', 'pest', 'nutrient_deficiency', 'unknown'],
      },
      primary_issue: {
        type: ['object', 'null'],
        properties: {
          name_cs: { type: 'string' },
          name_en: { type: 'string' },
          description: { type: 'string' },
          confidence: { type: 'number', minimum: 0, maximum: 1 },
        },
        required: ['name_cs', 'name_en', 'description', 'confidence'],
      },
      secondary_issues: {
        type: 'array',
        items: { $ref: '#/properties/primary_issue' },
      },
      urgency: { type: 'string', enum: ['low', 'medium', 'high', 'critical'] },
      recommended_actions: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            action: { type: 'string' },
            when: { type: 'string', enum: ['today', 'this_week', 'this_month', 'ongoing'] },
            details: { type: 'string' },
            priority: { type: 'integer', minimum: 1, maximum: 5 },
          },
          required: ['action', 'when', 'details', 'priority'],
        },
      },
      long_term_advice: { type: 'string' },
      follow_up_in_days: { type: 'integer', minimum: 0, maximum: 365 },
    },
    required: [
      'identified_plant',
      'health_status',
      'urgency',
      'recommended_actions',
      'long_term_advice',
      'follow_up_in_days',
    ],
  },
} as const;
