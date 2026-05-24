-- Auto-generated plant catalog seed
-- Inserts ~25 Central European garden plants + their care rules
-- Idempotent via ON CONFLICT (slug) DO NOTHING

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('rajce', 'Solanum lycopersicum', '{"cs": ["rajče", "rajská jablíčka"], "sk": ["paradajka"], "en": ["tomato"]}'::jsonb, 'vegetable', 'Solanaceae', 'annual', 'full_sun', 'high', ARRAY['humózní','hluboká','well-drained']::text[], -2, ARRAY['bazalka','mrkev','cesnek','pazitka']::text[], ARRAY['brambory','okurka']::text[], '{"planting": {"cs": "Sázej až po Ledových mužích (kolem 15. května), jakmile noční teploty neklesají pod 10 °C. Sazenice pěstuj ze semen od března v teple. Hluboko zakopej — kořeny narostou i ze stonku.", "sk": "Vysádzaj po Ľadových mužoch (okolo 15. mája), keď nočné teploty neklesajú pod 10 °C. Sadenice pestuj zo semien od marca v teple. Hlboko zasaď — korene narastú aj zo stonky.", "en": "Plant out after mid-May once nights stay above 10 °C. Start from seed indoors in March. Plant deep — roots grow from the buried stem."}, "watering": {"cs": "Zalévej u kořene 2-3× týdně, 3-5 litrů na rostlinu. Vyhni se polévání listů a polednímu zalévání. Mulčuj slámou.", "sk": "Zalievaj pri koreni 2-3× týždenne, 3-5 litrov na rastlinu. Nepolievaj listy ani počas poludnia. Mulčuj slamou.", "en": "Water at the base 2-3× weekly, 3-5 liters per plant. Avoid wetting leaves and midday watering. Mulch with straw."}, "fertilizing": {"cs": "Při sázení přidej zralý kompost. Od kvetení každých 14 dní draslíkové hnojivo (Naturen Rajče nebo zředěná Kropvit).", "sk": "Pri sadení pridaj zrelý kompost. Od kvitnutia každých 14 dní draselné hnojivo.", "en": "Mix compost in when planting. From flowering, feed with a high-potassium fertilizer every 14 days."}, "pruning": {"cs": "Pravidelně odstraňuj zálistky (boční výhonky v úžlabí listů). U tyčkových odrůd nech 1-2 stonky, u keříčkových neřež.", "sk": "Pravidelne odstraňuj zálistky. Pri vyväzovaných odrodách nechaj 1-2 stonky, kríčkovité nestrihaj.", "en": "Pinch out side shoots regularly. Indeterminate varieties: keep 1-2 main stems. Determinates: leave alone."}, "harvesting": {"cs": "Sklízej červené plody od konce června (skleník) nebo poloviny července (venku) až do říjnu. Trhej i s kalichem.", "sk": "Zber červené plody od konca júna (skleník) alebo polovice júla (vonku) až do októbra. Trhaj aj s kalichom.", "en": "Harvest red fruits from late June (greenhouse) or mid-July (outdoors) into October. Pick with the calyx attached."}, "common_issues": {"cs": "Plíseň bramborová (hnědé skvrny na listech, hnijící plody), suchá květná hniloba (černé skvrny na spodku plodu — nedostatek vápníku), mšice.", "sk": "Pleseň zemiaková (hnedé škvrny, hnijúce plody), suchá kvetná hniloba (čierne škvrny zospodu — nedostatok vápnika), vošky.", "en": "Late blight (brown leaf spots, rotting fruit), blossom end rot (black spot on underside — calcium deficiency), aphids."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('paprika', 'Capsicum annuum', '{"cs": ["paprika"], "sk": ["paprika"], "en": ["pepper", "bell pepper"]}'::jsonb, 'vegetable', 'Solanaceae', 'annual', 'full_sun', 'medium', ARRAY['humózní','lehká']::text[], 0, ARRAY['bazalka','mrkev']::text[], ARRAY['cesnek','cibule']::text[], '{"planting": {"cs": "Sazenice ze semen od února v teple (potřebují 25 °C k vyklíčení). Ven až po Ledových mužích, do skleníku v dubnu. Spon 40×40 cm.", "sk": "Sadenice zo semien od februára v teple. Vonku po Ľadových mužoch, do skleníka v apríli.", "en": "Sow indoors in February (needs 25 °C). Plant out after mid-May, or in greenhouse from April."}, "watering": {"cs": "Pravidelně, 2× týdně, ale nepřemokřuj. Suchý povrch = signál k zálivce.", "sk": "Pravidelne, 2× týždenne, ale nepremokri.", "en": "Regular but moderate watering, 2× a week."}, "fertilizing": {"cs": "Od prvních květů draslíkové hnojivo každých 14 dní.", "sk": "Od prvých kvetov draselné hnojivo každých 14 dní.", "en": "Feed with potassium-rich fertilizer every 14 days from flowering."}, "pruning": {"cs": "Odstraň první korunový květ (větvení), dále nech růst přirozeně.", "sk": "Odstráň prvý korunový kvet, ďalej nechaj rásť prirodzene.", "en": "Pinch out the first king flower to encourage branching."}, "harvesting": {"cs": "Zelené plody od srpna, dozrávají na červenou/žlutou v září-říjnu. Stříhej, netrhej.", "sk": "Zelené plody od augusta, dozrievajú v septembri-októbri. Strihaj, netrhaj.", "en": "Green fruits from August, ripening red/yellow Sept-Oct. Cut, don''t pull."}, "common_issues": {"cs": "Suchá květná hniloba (vápník), molice ve skleníku, padání rostliny.", "sk": "Suchá kvetná hniloba, mušky v skleníku.", "en": "Blossom end rot, whitefly in greenhouses, damping off."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('okurka', 'Cucumis sativus', '{"cs": ["okurka", "okurka setá"], "sk": ["uhorka"], "en": ["cucumber"]}'::jsonb, 'vegetable', 'Cucurbitaceae', 'annual', 'full_sun', 'high', ARRAY['humózní','hluboká']::text[], 5, ARRAY['kopr','salat']::text[], ARRAY['rajce','salvej']::text[], '{"planting": {"cs": "Sázej do hluboké, prohnojené půdy po polovině května. Polní okurky výsev přímo, hadovky předpěstuj.", "sk": "Sadí sa do hlbokej pôdy po polovici mája. Vonkajšie priamo, hadovité predpestuj.", "en": "Plant in deep, rich soil after mid-May. Direct sow field types; start trellis types indoors."}, "watering": {"cs": "Hodně! 5-10 l na rostlinu denně v teple. Listy zalévat se nevyplácí (plísně), ale tolerují víc než rajčata.", "sk": "Veľa! 5-10 l denne v teple. Polievaniu listov sa vyhni.", "en": "Plenty! 5-10 L per plant daily in heat. Avoid wetting leaves."}, "fertilizing": {"cs": "Při sázení hodně kompostu. Pak každých 14 dní zředěný kopřivový výluh nebo komplexní hnojivo.", "sk": "Pri sadení veľa kompostu. Potom každých 14 dní hnojivo.", "en": "Plenty of compost at planting; then balanced feed every 14 days."}, "pruning": {"cs": "U hadovek odstraňuj boční výhonky a vyvazuj na svislou kulturu. Polní nechej plazit.", "sk": "Hadovité vyväzuj na zvislé pestovanie. Vonkajšie nechaj plaziť.", "en": "Trellis types: prune side shoots and train vertically. Field types: let sprawl."}, "harvesting": {"cs": "Sklízej obden, jakmile dosáhnou kulinární velikosti. Nechej ti přerostou — zastaví tvorbu nových.", "sk": "Zber každý druhý deň. Prerastené plody zastavia tvorbu nových.", "en": "Pick every other day. Over-mature fruit halts new growth."}, "common_issues": {"cs": "Padlí (bílý povlak na listech), plíseň okurková, hořkost plodů z nedostatku vody.", "sk": "Múčnatka, pleseň, horké plody z nedostatku vody.", "en": "Powdery mildew, downy mildew, bitterness from drought stress."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('mrkev', 'Daucus carota', '{"cs": ["mrkev", "karotka"], "sk": ["mrkva"], "en": ["carrot"]}'::jsonb, 'vegetable', 'Apiaceae', 'biennial', 'full_sun', 'medium', ARRAY['lehká','kyprá','písčitá']::text[], -8, ARRAY['rajce','cibule','salat']::text[], ARRAY['kopr']::text[], '{"planting": {"cs": "Výsev přímo od dubna do června do řádků 25 cm. Půda musí být kyprá a bez čerstvého hnojení (kořeny se větví).", "sk": "Výsev priamo od apríla do júna do riadkov 25 cm. Pôda kyprá, bez čerstvého hnojenia.", "en": "Direct sow April-June in rows 25 cm apart. Loose soil, no fresh manure (causes forking)."}, "watering": {"cs": "Stejnoměrně vlhká půda. Velké výkyvy = praskání kořenů.", "sk": "Rovnomerne vlhká pôda. Veľké výkyvy = praskanie koreňov.", "en": "Keep evenly moist. Big swings cause root cracking."}, "fertilizing": {"cs": "Žádné čerstvé hnojení v sezóně sázení. Komposovaná půda předtím stačí.", "sk": "Žiadne čerstvé hnojenie v sezóne. Stačí kompost pred sadením.", "en": "No fresh fertilizer at planting. Composted soil from previous season works best."}, "pruning": {"cs": "Po vzejití protrhej na vzdálenost 4-5 cm. Naťové zelené můžeš použít do salátu.", "sk": "Po vzídení pretrhaj na 4-5 cm. Vňať použiješ do šalátu.", "en": "Thin to 4-5 cm spacing after germination. Use tops in salads."}, "harvesting": {"cs": "Rané odrůdy 10 týdnů, pozdní 16 týdnů. Skladuj v písku ve sklepě přes zimu.", "sk": "Skoré 10 týždňov, neskoré 16 týždňov. Skladuj v piesku v pivnici.", "en": "Early types 10 weeks, main crop 16 weeks. Store in sand in a cool cellar."}, "common_issues": {"cs": "Pochmurnatka mrkvová (zaškrcení listů, hnijící kořeny — společné s cibulí pomáhá), praskání z nepravidelné zálivky.", "sk": "Pochmurnatka mrkvová, praskanie z nepravidelnej zálievky.", "en": "Carrot rust fly (interplant with onions), cracking from irregular watering."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('brambory', 'Solanum tuberosum', '{"cs": ["brambory", "zemáky"], "sk": ["zemiaky"], "en": ["potato"]}'::jsonb, 'vegetable', 'Solanaceae', 'annual', 'full_sun', 'medium', ARRAY['hluboká','humózní']::text[], -3, ARRAY['fazole','kukurice']::text[], ARRAY['rajce','okurka']::text[], '{"planting": {"cs": "Naklíčené sadbové brambory sázej od poloviny dubna do hloubky 10 cm, spon 30 cm v řádku, 70 cm mezi řádky.", "sk": "Naklíčené sadivo sadí sa od polovice apríla do hĺbky 10 cm, spon 30 cm, riadky 70 cm.", "en": "Plant chitted seed potatoes from mid-April, 10 cm deep, 30 cm apart, rows 70 cm apart."}, "watering": {"cs": "Nejdůležitější při tvorbě hlíz (kvetení). 20-30 mm týdně.", "sk": "Najdôležitejšie pri tvorbe hľúz. 20-30 mm týždenne.", "en": "Critical during tuber formation (flowering). 20-30 mm weekly."}, "fertilizing": {"cs": "Při sázení vyzrálý kompost. Nedávej čerstvý hnůj — kazí chuť.", "sk": "Pri sadení vyzretý kompost. Nedávaj čerstvý hnoj.", "en": "Mature compost at planting. No fresh manure (affects flavor)."}, "pruning": {"cs": "Pravidelně přihrnuj k stonkům, aby nevylezly hlízy na světlo (toxický solanin).", "sk": "Pravidelne prihrnaj k stonkám, aby hľuzy neboli na svetle.", "en": "Earth up regularly to prevent tubers turning green (toxic solanine)."}, "harvesting": {"cs": "Rané v červenci, pozdní v září. Po zaschnutí natě hlízy vykopej za suchého počasí.", "sk": "Skoré v júli, neskoré v septembri. Po zaschnutí vňate vykopaj za sucha.", "en": "Early in July, main crop in September. Dig after foliage dies back, in dry weather."}, "common_issues": {"cs": "Plíseň bramborová (hnědé skvrny, černé hlízy), mandelinka bramborová, drátovci.", "sk": "Pleseň zemiaková, pásavka zemiaková, drôtovce.", "en": "Late blight, Colorado potato beetle, wireworms."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('cibule', 'Allium cepa', '{"cs": ["cibule"], "sk": ["cibuľa"], "en": ["onion"]}'::jsonb, 'vegetable', 'Amaryllidaceae', 'biennial', 'full_sun', 'low', ARRAY['lehká','well-drained']::text[], -10, ARRAY['mrkev','salat','rajce']::text[], ARRAY['hrach','fazole']::text[], '{"planting": {"cs": "Sazečku sázej v březnu-dubnu špičkou nahoru, 2 cm hluboko, spon 10 cm. Ze semen na podzim na ozimou cibuli.", "sk": "Sadbu sadí v marci-apríli špičkou hore, 2 cm hlboko. Semená na jeseň pre ozimnú.", "en": "Plant sets in March-April, tip up, 2 cm deep, 10 cm apart. Sow seed in autumn for overwintering."}, "watering": {"cs": "Minimálně. Při dlouhém suchu jednou týdně. Po vytvoření krčku přestaň úplně (lepší skladovatelnost).", "sk": "Minimálne. Pri dlhom suchu raz týždenne. Po vytvorení krčka prestaň.", "en": "Minimal. Once a week during long droughts. Stop entirely once necks form (better storage)."}, "fertilizing": {"cs": "Vyzrálý kompost před sázením. Žádné čerstvé dusíkové hnojivo (oddaluje vytvoření cibulky).", "sk": "Zrelý kompost pred sadením. Žiadne čerstvé dusíkové hnojivo.", "en": "Composted soil before planting. No fresh nitrogen (delays bulbing)."}, "pruning": {"cs": "Odstraňuj květní stvol, kdyby se objevil (cibule se nevytvoří).", "sk": "Odstraňuj kvetné stonky.", "en": "Remove any flower stalks that appear."}, "harvesting": {"cs": "Po zlomu nati (srpen-září) vykopej a nech na slunci uschnout 2 týdny. Pak skladuj v suchu, vzdušně.", "sk": "Po zlomení vňate vykop a nechaj uschnúť 2 týždne. Skladuj v suchu.", "en": "When tops fall over (Aug-Sept), lift and dry in sun for 2 weeks. Store dry and airy."}, "common_issues": {"cs": "Plíseň cibulová, vrtalka cibulová, krčková hniloba (vlhko ve sklepě).", "sk": "Pleseň cibuľová, vrtivka, krčková hniloba.", "en": "Onion downy mildew, onion fly, neck rot (storage moisture)."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('cesnek', 'Allium sativum', '{"cs": ["česnek", "česnek kuchyňský"], "sk": ["cesnak"], "en": ["garlic"]}'::jsonb, 'vegetable', 'Amaryllidaceae', 'biennial', 'full_sun', 'low', ARRAY['lehká','well-drained']::text[], -15, ARRAY['rajce','mrkev','ruze']::text[], ARRAY['fazole','hrach']::text[], '{"planting": {"cs": "Paličáky na podzim (říjen-listopad), nepaličáky na jaře (březen). Hloubka 5-7 cm, spon 15 cm, špičkou nahoru.", "sk": "Pavlinov česnek na jeseň (október-november), nepavlinov na jar. Hĺbka 5-7 cm.", "en": "Hardneck in autumn (Oct-Nov), softneck in spring (March). 5-7 cm deep, 15 cm apart, tip up."}, "watering": {"cs": "Téměř nikdy. V suchém dubnu/květnu jednou týdně.", "sk": "Takmer nikdy. V suchom apríli/máji raz týždenne.", "en": "Almost never. Once a week in dry spring weather."}, "fertilizing": {"cs": "Vyzrálý kompost na podzim při zakládání záhonu.", "sk": "Zrelý kompost na jeseň.", "en": "Composted bed preparation in autumn."}, "pruning": {"cs": "U paličáků odlomi květní stvol (palič) v červnu — víc energie do hlavy. Palič můžeš sníst jako pažitku.", "sk": "Pri pavlinovom česneku odlom kvetný stonok (paličku) v júni. Použiješ ako pažítku.", "en": "Snap off hardneck scapes in June — more energy to the bulb. Scapes are edible like chives."}, "harvesting": {"cs": "Vykopej, když 5-6 spodních listů zaschne (červen-červenec). Suš 3 týdny na vzduchu.", "sk": "Vykopaj, keď 5-6 spodných listov zaschne (jún-júl). Suš 3 týždne.", "en": "Lift when 5-6 lower leaves yellow (June-July). Cure for 3 weeks in airy spot."}, "common_issues": {"cs": "Rez česneková, hniloba (mokrá zem), drátovci.", "sk": "Hrdza cesnaku, hniloba, drôtovce.", "en": "Garlic rust, basal rot (wet soil), wireworms."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('salat', 'Lactuca sativa', '{"cs": ["salát", "salát hlávkový"], "sk": ["šalát"], "en": ["lettuce"]}'::jsonb, 'vegetable', 'Asteraceae', 'annual', 'partial_shade', 'medium', ARRAY['humózní','vlhká']::text[], -2, ARRAY['mrkev','cibule','jahoda']::text[], NULL, '{"planting": {"cs": "Výsev od března do srpna v týdenních intervalech (postupný sběr). Spon 20×25 cm. V létě polostín, vyšší rostliny.", "sk": "Výsev od marca do augusta v týždňových intervaloch. V lete polotieň.", "en": "Sow March-August in weekly intervals. 20×25 cm spacing. Partial shade in summer."}, "watering": {"cs": "Pravidelně, mírně. Suchý salát je hořký a žluká rychle.", "sk": "Pravidelne, mierne. Suchý šalát je horký.", "en": "Regular, moderate. Drought-stressed lettuce turns bitter and bolts."}, "fertilizing": {"cs": "Lehké, vyrostlý kompost. Nadbytek dusíku = vodnaté listy.", "sk": "Ľahké, vyzretý kompost.", "en": "Light feeding only. Too much nitrogen = watery leaves."}, "pruning": {"cs": "U listových odrůd sklízej spodní listy průběžně. U hlávkových čekej na celou hlávku.", "sk": "Pri listových odrodách zbieraj spodné listy priebežne.", "en": "Pick outer leaves of leaf types continuously. Wait for full heads on head types."}, "harvesting": {"cs": "Ráno, kdy je salát křupavý a vlhký rosou. Listové od 4 týdnů, hlávkové 8-10 týdnů.", "sk": "Ráno, keď je šalát chrumkavý. Listový od 4 týždňov, hlávkový 8-10 týždňov.", "en": "Pick in the morning when crisp. Leaf types from 4 weeks, head types 8-10 weeks."}, "common_issues": {"cs": "Sliznatka, plíseň salátu, předčasné kvetení (vbíhání do květu při teple).", "sk": "Slimáky, pleseň šalátu, predčasné kvitnutie.", "en": "Slugs, lettuce downy mildew, bolting in heat."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('bazalka', 'Ocimum basilicum', '{"cs": ["bazalka", "bazalka pravá"], "sk": ["bazalka"], "en": ["basil", "sweet basil"]}'::jsonb, 'herb', 'Lamiaceae', 'annual', 'full_sun', 'medium', ARRAY['humózní','lehká']::text[], 5, ARRAY['rajce','paprika']::text[], ARRAY['rozmaryn']::text[], '{"planting": {"cs": "Sazenice ze semen od dubna (klíčí při 20+ °C). Ven až v polovině května. Spon 25 cm.", "sk": "Sadenice zo semien od apríla. Vonku v polovici mája.", "en": "Start from seed in April (germinates at 20+ °C). Plant out mid-May. 25 cm spacing."}, "watering": {"cs": "Pravidelně u kořene, ráno. Nelíbí se jí mokré listy ani vyschnutí.", "sk": "Pravidelne pri koreni, ráno. Nemá rada mokré listy ani vysušenie.", "en": "Regular at the base, morning. Dislikes wet leaves and dry soil equally."}, "fertilizing": {"cs": "Mírně, lehké organické hnojivo jednou za měsíc.", "sk": "Mierne, ľahké organické hnojivo raz mesačne.", "en": "Light organic feed once a month."}, "pruning": {"cs": "Vždy odštipuj nad uzlem listů — rostlina se rozvětvuje. Pravidelně odlamuj květní pupeny, jinak rostlina shoří.", "sk": "Vždy odštipni nad uzlom. Pravidelne odlamuj kvetné púčiky.", "en": "Always pinch above a leaf node — branches out. Remove flower buds to keep producing leaves."}, "harvesting": {"cs": "Sklízej celé větvičky ráno před žárem. Listy se sušením ztrácí aroma — lepší zmrazit do oleje.", "sk": "Zber celé vetvičky ráno. Sušením stráca arómu.", "en": "Harvest whole stems in the morning. Loses aroma when dried — freeze in oil instead."}, "common_issues": {"cs": "Plíseň bazalková (chladné vlhké letní noci), houbové onemocnění z přemokření.", "sk": "Pleseň bazalky, hubové ochorenie.", "en": "Basil downy mildew, root rot from overwatering."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('petrzel', 'Petroselinum crispum', '{"cs": ["petržel"], "sk": ["petržlen"], "en": ["parsley"]}'::jsonb, 'herb', 'Apiaceae', 'biennial', 'partial_shade', 'medium', ARRAY['humózní']::text[], -10, ARRAY['rajce','mrkev']::text[], NULL, '{"planting": {"cs": "Výsev od března přímo. Klíčí pomalu (3-4 týdny) — neopouštěj místo!", "sk": "Výsev od marca priamo. Klíči pomaly.", "en": "Direct sow from March. Slow germination (3-4 weeks) — don''t give up on the spot!"}, "watering": {"cs": "Stejnoměrná vlhkost, ale ne mokro.", "sk": "Rovnomerná vlhkosť.", "en": "Even moisture, not wet."}, "fertilizing": {"cs": "Lehké, vyzrálý kompost.", "sk": "Ľahké, kompost.", "en": "Light feeding, mature compost."}, "pruning": {"cs": "Sklízej zvenku dovnitř, srdce nech růst. Druhý rok kvete — semena na další osivo.", "sk": "Zber zvonku dovnútra. Druhý rok kvitne.", "en": "Pick outer stems first. Bolts in second year — collect seed."}, "harvesting": {"cs": "Od 12 týdnů. Zelená petržel celé léto, kořenová na podzim.", "sk": "Od 12 týždňov. Vňať celé leto, koreň na jeseň.", "en": "From 12 weeks. Leaf parsley all summer, root parsley in autumn."}, "common_issues": {"cs": "Pochmurnatka (jako u mrkve), padlí.", "sk": "Pochmurnatka, múčnatka.", "en": "Carrot rust fly, powdery mildew."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('mata', 'Mentha × piperita', '{"cs": ["máta", "máta peprná"], "sk": ["mäta"], "en": ["mint", "peppermint"]}'::jsonb, 'herb', 'Lamiaceae', 'perennial', 'partial_shade', 'medium', ARRAY['humózní','vlhká']::text[], -20, NULL, NULL, '{"planting": {"cs": "Pozor: invazivní! Pěstuj v květináči zapuštěném do země nebo v zahonku ohraničeném. Sazenice z odřezků.", "sk": "Pozor: invazívna! Pestuj v kvetináči alebo v ohranenom záhonku.", "en": "Warning: invasive! Grow in a buried container or contained bed. Propagate from cuttings."}, "watering": {"cs": "Pravidelně. Snáší i mokré nohy.", "sk": "Pravidelne. Znáša mokré nohy.", "en": "Regular. Tolerates wet feet."}, "fertilizing": {"cs": "Téměř nic. Příliš dusíku = slabší aroma.", "sk": "Takmer nič.", "en": "Minimal. Too much nitrogen weakens aroma."}, "pruning": {"cs": "Sestřihni nad zemí po odkvetení (srpen) — narostou nové aromatické výhonky.", "sk": "Zostrihni nad zemou po odkvitnutí.", "en": "Cut back hard after flowering (Aug) for fresh aromatic regrowth."}, "harvesting": {"cs": "Před květem je aroma nejsilnější (květen-červen).", "sk": "Pred kvitnutím je aróma najsilnejšia.", "en": "Strongest aroma just before flowering (May-June)."}, "common_issues": {"cs": "Rez máty (oranžové skvrny), padlí.", "sk": "Hrdza mäty.", "en": "Mint rust, powdery mildew."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('salvej', 'Salvia officinalis', '{"cs": ["šalvěj", "šalvěj lékařská"], "sk": ["šalvia"], "en": ["sage"]}'::jsonb, 'herb', 'Lamiaceae', 'perennial', 'full_sun', 'low', ARRAY['lehká','well-drained','vápenitá']::text[], -20, ARRAY['rozmaryn','tymian']::text[], ARRAY['okurka']::text[], '{"planting": {"cs": "Sazenice na jaře nebo na podzim do propustné, raději písčité půdy. Místo na plném slunci.", "sk": "Sadenice na jar alebo jeseň do priepustnej pôdy.", "en": "Plant in spring or autumn in well-drained, sandy soil. Full sun."}, "watering": {"cs": "Minimální. Stojatá voda zabije.", "sk": "Minimálna. Stojatá voda zabije.", "en": "Minimal. Standing water kills it."}, "fertilizing": {"cs": "Nepotřebuje. Bohatá půda = méně aromatu.", "sk": "Nepotrebuje.", "en": "Doesn''t need feeding. Rich soil reduces flavor."}, "pruning": {"cs": "Brzy na jaře sestřihni o třetinu — udržuješ kompaktní tvar a obnovíš mladé listy.", "sk": "Skoro na jar zostrihni o tretinu.", "en": "Cut back by a third in early spring for compact shape and fresh growth."}, "harvesting": {"cs": "Listy kdykoliv, nejlepší před kvetením. Suš v stínu.", "sk": "Listy kedykoľvek. Suš v tieni.", "en": "Leaves anytime, best before flowering. Dry in shade."}, "common_issues": {"cs": "Houbové choroby z přemokření, padlí.", "sk": "Hubové choroby z premokrenia.", "en": "Fungal diseases from wet conditions, powdery mildew."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('tymian', 'Thymus vulgaris', '{"cs": ["tymián", "tymián obecný"], "sk": ["tymian"], "en": ["thyme"]}'::jsonb, 'herb', 'Lamiaceae', 'perennial', 'full_sun', 'low', ARRAY['lehká','well-drained','kamenitá']::text[], -25, ARRAY['ruze','salvej']::text[], NULL, '{"planting": {"cs": "Velmi nenáročný. Plné slunce, chudá písčitá půda — to mu jde nejlépe.", "sk": "Veľmi nenáročný. Plné slnko, piesčitá pôda.", "en": "Very low maintenance. Full sun, poor sandy soil works best."}, "watering": {"cs": "Prakticky nikdy. Krátké zalévání v extrémním suchu.", "sk": "Prakticky nikdy.", "en": "Almost never. Brief watering during extreme drought only."}, "fertilizing": {"cs": "Nepotřebuje.", "sk": "Nepotrebuje.", "en": "Not needed."}, "pruning": {"cs": "Po kvetení (červenec) sestřihni o polovinu — udržíš kompaktní bochánek.", "sk": "Po kvitnutí zostrihni o polovicu.", "en": "After flowering (July), cut back by half to keep compact."}, "harvesting": {"cs": "Větvičky kdykoliv. Suš v svazečku v stínu.", "sk": "Vetvičky kedykoľvek.", "en": "Sprigs anytime. Dry in shade in small bunches."}, "common_issues": {"cs": "Vyrůstá ze zmáčené zimy — postavit do svahu nebo do nadzvednutého záhonu.", "sk": "Hnije v mokrej zime.", "en": "Rots in wet winters — plant in raised beds or slopes."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('rozmaryn', 'Salvia rosmarinus', '{"cs": ["rozmarýn", "rozmarýn lékařský"], "sk": ["rozmarín"], "en": ["rosemary"]}'::jsonb, 'herb', 'Lamiaceae', 'perennial', 'full_sun', 'low', ARRAY['lehká','well-drained','vápenitá']::text[], -8, ARRAY['salvej','tymian']::text[], ARRAY['bazalka']::text[], '{"planting": {"cs": "V ČR a SR ne plně mrazuvzdorný. Buď v květináči (uvnitř přes zimu), nebo na zima chráněnou stěnu s mulčem.", "sk": "V ČR a SR nie plne mrazuvzdorný. V kvetináči alebo pri chránenej stene.", "en": "Not fully hardy in CZ/SK. Grow in pot (move inside in winter) or against a sheltered south wall with mulch."}, "watering": {"cs": "V květináči podle vyschnutí povrchu, venku jen za sucha.", "sk": "V kvetináči podľa vysušenia, vonku len v suchu.", "en": "In pot, water when surface dries. Outdoors, only in drought."}, "fertilizing": {"cs": "Nepotřebuje.", "sk": "Nepotrebuje.", "en": "Not needed."}, "pruning": {"cs": "Na jaře tvarovací řez, neořezávej staré dřevo.", "sk": "Na jar tvarovací rez, nerež staré drevo.", "en": "Light shaping in spring. Don''t cut into old woody growth."}, "harvesting": {"cs": "Větvičky kdykoliv po celý rok.", "sk": "Vetvičky celý rok.", "en": "Sprigs anytime year-round."}, "common_issues": {"cs": "Vymrznutí v zimě, hniloba kořenů z přemokření.", "sk": "Vymŕza v zime, hniloba koreňov.", "en": "Winter freezing, root rot from wet soil."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('pazitka', 'Allium schoenoprasum', '{"cs": ["pažitka"], "sk": ["pažítka"], "en": ["chives"]}'::jsonb, 'herb', 'Amaryllidaceae', 'perennial', 'full_sun', 'medium', ARRAY['humózní']::text[], -25, ARRAY['mrkev','rajce','ruze']::text[], ARRAY['hrach','fazole']::text[], '{"planting": {"cs": "Sazenice ze semen na jaře, nebo dělením trsu na jaře/podzim.", "sk": "Zo semien na jar, alebo delením trsu.", "en": "From seed in spring, or by dividing clumps in spring/autumn."}, "watering": {"cs": "Pravidelně, mírně.", "sk": "Pravidelne.", "en": "Regular, moderate."}, "fertilizing": {"cs": "Jednou na jaře vyrostlý kompost.", "sk": "Raz na jar kompost.", "en": "Compost top-dress once in spring."}, "pruning": {"cs": "Sestříhej květy, pokud je nechceš použít (jedlé).", "sk": "Zostrihni kvety.", "en": "Cut off flowers unless you want to use them (edible)."}, "harvesting": {"cs": "Listy průběžně 5 cm nad zemí. Vzejdou znovu.", "sk": "Listy priebežne 5 cm nad zemou.", "en": "Cut leaves 5 cm above ground continuously — they regrow."}, "common_issues": {"cs": "Rez (jako u česneku).", "sk": "Hrdza.", "en": "Rust (same as garlic)."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('jahoda', 'Fragaria × ananassa', '{"cs": ["jahoda", "jahoda zahradní"], "sk": ["jahoda"], "en": ["strawberry"]}'::jsonb, 'fruit', 'Rosaceae', 'perennial', 'full_sun', 'medium', ARRAY['humózní','lehká']::text[], -20, ARRAY['salat','cesnek']::text[], ARRAY['brambory']::text[], '{"planting": {"cs": "Sazenice na konci léta (srpen) nebo na jaře (březen-duben). Spon 30×30 cm, srdíčko nad povrchem.", "sk": "Sadenice koncom leta alebo na jar. Spon 30×30 cm.", "en": "Plant in late summer (Aug) or early spring (Mar-Apr). 30×30 cm spacing. Crown above soil."}, "watering": {"cs": "Důležitá při kvetení a tvorbě plodů, jinak střídmá.", "sk": "Dôležitá pri kvitnutí a tvorbe plodov.", "en": "Critical during flowering and fruiting; moderate otherwise."}, "fertilizing": {"cs": "Na jaře vyzrálý kompost, po sklizni draslíkové hnojivo.", "sk": "Na jar kompost, po zbere draselné hnojivo.", "en": "Compost in spring, potassium feed after harvest."}, "pruning": {"cs": "Po sklizni odstřihni starší listy a šlahouny (pokud nemnožíš). Každé 3-4 roky obnov záhon.", "sk": "Po zbere odstrihni listy a šľachy.", "en": "After harvest remove old leaves and runners (unless propagating). Renew bed every 3-4 years."}, "harvesting": {"cs": "Měsíčné odrůdy od června do října, klasické odrůdy 3-4 týdny v červnu. Sklízej zralé, brzy zrána.", "sk": "Stálo plodiace od júna do októbra. Zber ráno.", "en": "Day-neutral from June to October, June-bearing for 3-4 weeks in June. Pick ripe, early morning."}, "common_issues": {"cs": "Plíseň šedá (Botrytis), sliznatky, ptáci. Pokrytí pletivem před sklizní.", "sk": "Pleseň šedá, slimáky, vtáky.", "en": "Grey mold (Botrytis), slugs, birds. Net before harvest."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('malina', 'Rubus idaeus', '{"cs": ["malina", "maliník"], "sk": ["malina"], "en": ["raspberry"]}'::jsonb, 'fruit', 'Rosaceae', 'perennial', 'partial_shade', 'medium', ARRAY['humózní','lehce kyselá']::text[], -25, ARRAY['cesnek']::text[], ARRAY['brambory','rajce']::text[], '{"planting": {"cs": "Na podzim nebo brzy na jaře do zem zbavené plevele, ke konstrukci. Spon 50 cm v řádku.", "sk": "Na jeseň alebo skoro na jar ku konštrukcii. Spon 50 cm.", "en": "Plant autumn or early spring along a support, 50 cm spacing in row."}, "watering": {"cs": "Pravidelně, hlavně při dozrávání plodů.", "sk": "Pravidelne, hlavne pri dozrievaní.", "en": "Regular, especially during fruit ripening."}, "fertilizing": {"cs": "Na jaře vyzrálý hnůj nebo kompost, mulčuj.", "sk": "Na jar hnoj alebo kompost.", "en": "Mature manure or compost in spring, mulch."}, "pruning": {"cs": "Letní odrůdy: po sklizni odřízni odplozené šlahouny u země. Podzimní: na jaře sestřihni úplně do země.", "sk": "Letné: po zbere odrež staré. Jesenné: na jar úplne k zemi.", "en": "Summer types: cut spent canes to ground after harvest. Autumn types: cut all canes to ground in early spring."}, "harvesting": {"cs": "Letní v červnu-červenci, podzimní v srpnu-říjnu.", "sk": "Letné jún-júl, jesenné aug-okt.", "en": "Summer types June-July, autumn types Aug-Oct."}, "common_issues": {"cs": "Strupovitost maliníku, viry (žluté skvrny), plíseň šedá.", "sk": "Strupovitosť, vírusy, pleseň.", "en": "Raspberry cane spot, viruses (yellow mosaic), grey mold."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('jablon', 'Malus domestica', '{"cs": ["jabloň", "jablko"], "sk": ["jabloň"], "en": ["apple", "apple tree"]}'::jsonb, 'tree', 'Rosaceae', 'perennial', 'full_sun', 'medium', ARRAY['humózní','hluboká']::text[], -25, ARRAY['pazitka']::text[], NULL, '{"planting": {"cs": "Na podzim (říjen-listopad) prostokořenné nebo celý rok kontejnerové. Jámu 60×60×60 cm, opora kůl.", "sk": "Na jeseň prostokorenné, alebo celoročne kontajnerové. Jama 60×60×60 cm.", "en": "Plant bare-root in autumn (Oct-Nov), container-grown anytime. Dig 60×60×60 cm hole, stake."}, "watering": {"cs": "V prvních 2 letech pravidelně. Vzrostlý strom jen v extrémním suchu.", "sk": "Prvé 2 roky pravidelne. Dospelý strom len v extrémnom suchu.", "en": "Regular for first 2 years. Mature trees only in extreme drought."}, "fertilizing": {"cs": "Na jaře kompost nebo zralý hnůj okolo kmene (ne přímo k němu).", "sk": "Na jar kompost.", "en": "Compost or mature manure around trunk in spring (not against it)."}, "pruning": {"cs": "Hlavní řez v lednu-únoru za bezmrazých dní. Odstraňuj vlčáci, křížící se větve, zahuštěné koruny. Letní řez okenicí v červenci-srpnu.", "sk": "Hlavný rez v januári-februári. Letný okenicový rez v júli.", "en": "Main pruning Jan-Feb in frost-free weather. Remove water sprouts, crossing branches. Summer pruning July-Aug for shape."}, "harvesting": {"cs": "Letní odrůdy srpen, podzimní září-říjen, zimní říjen-listopad. Test zralosti: jablko se otočí ve dlani a stopka pustí.", "sk": "Letné aug, jesenné sep-okt, zimné okt-nov.", "en": "Summer Aug, autumn Sept-Oct, winter Oct-Nov. Ripe when fruit twists off easily."}, "common_issues": {"cs": "Strupovitost (Venturia), padlí, monilióza, obaleč jablečný (červ v jablku).", "sk": "Chrastavitosť, múčnatka, červ.", "en": "Apple scab, powdery mildew, brown rot, codling moth (worm in fruit)."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('hrusen', 'Pyrus communis', '{"cs": ["hrušeň", "hruška"], "sk": ["hruška"], "en": ["pear", "pear tree"]}'::jsonb, 'tree', 'Rosaceae', 'perennial', 'full_sun', 'medium', ARRAY['hluboká','humózní']::text[], -25, NULL, NULL, '{"planting": {"cs": "Na podzim prostokořenné, celoroční kontejnerové. Potřebuje opylovače (nejméně 2 různé odrůdy).", "sk": "Na jeseň prostokorenné. Potrebuje opeľovača.", "en": "Plant bare-root in autumn. Needs a pollinator (at least 2 different varieties)."}, "watering": {"cs": "První 2 roky pravidelně.", "sk": "Prvé 2 roky pravidelne.", "en": "Regular for first 2 years."}, "fertilizing": {"cs": "Mírně, na jaře.", "sk": "Mierne, na jar.", "en": "Light, in spring."}, "pruning": {"cs": "Zimní řez podobný jablonem, ale opatrnější — hrušně reagují citlivěji.", "sk": "Zimný rez podobný jabloni.", "en": "Winter pruning similar to apple, but lighter — pears are more sensitive."}, "harvesting": {"cs": "Trhej, když se plod ohnutím lehce uvolní. Většinou dozrávají po sklizni v skladu (chladno).", "sk": "Zber, keď sa plod ľahko uvoľní. Dozrievajú v sklade.", "en": "Pick when fruit twists off easily. Usually ripens off-tree in cool storage."}, "common_issues": {"cs": "Rez hrušňová (oranžové skvrny — mezihostitel jalovec), strupovitost.", "sk": "Hrdza hrušňová, chrastavitosť.", "en": "Pear rust (orange spots — juniper as alternate host), scab."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('ribiz', 'Ribes rubrum', '{"cs": ["rybíz", "rybíz červený"], "sk": ["ríbezľa"], "en": ["redcurrant"]}'::jsonb, 'shrub', 'Grossulariaceae', 'perennial', 'partial_shade', 'medium', ARRAY['humózní']::text[], -30, NULL, NULL, '{"planting": {"cs": "Na podzim nebo brzy na jaře. Spon 1,5 m. Snáší polostín lépe než jiné ovoce.", "sk": "Na jeseň alebo skoro na jar. Spon 1,5 m.", "en": "Plant in autumn or early spring. 1.5 m spacing. Tolerates partial shade better than other fruits."}, "watering": {"cs": "Pravidelně při tvorbě bobulí.", "sk": "Pravidelne pri tvorbe bobúľ.", "en": "Regular during berry development."}, "fertilizing": {"cs": "Mulčuj kompostem na jaře.", "sk": "Mulčuj kompostom.", "en": "Mulch with compost in spring."}, "pruning": {"cs": "Zimní řez (únor): nech 8-10 silných výhonků různého stáří, odstraň ty starší 4 let.", "sk": "Zimný rez vo februári.", "en": "Winter pruning (Feb): keep 8-10 strong shoots of different ages, remove shoots older than 4 years."}, "harvesting": {"cs": "Cele hrozny v červenci, jakmile všechny bobule zčervenají.", "sk": "Celé strapce v júli.", "en": "Whole strigs in July once all berries are red."}, "common_issues": {"cs": "Padlí, hálka rybízová (deformované listy).", "sk": "Múčnatka, hálka.", "en": "Powdery mildew, currant blister aphid (deformed leaves)."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('ruze', 'Rosa hybrida', '{"cs": ["růže"], "sk": ["ruža"], "en": ["rose"]}'::jsonb, 'ornamental', 'Rosaceae', 'perennial', 'full_sun', 'medium', ARRAY['humózní','hluboká']::text[], -20, ARRAY['pazitka','cesnek','levandule']::text[], NULL, '{"planting": {"cs": "Na podzim prostokořenné, na jaře kontejnerové. Jáma 50 cm hluboká, místo štěpování 5 cm pod zem.", "sk": "Na jeseň prostokorenné. Miesto štepenia 5 cm pod zem.", "en": "Bare-root in autumn, container in spring. 50 cm deep hole; graft point 5 cm below soil."}, "watering": {"cs": "U kořene, ne na listy. V suchu 1× týdně dlouze.", "sk": "Pri koreni, nie na listy.", "en": "At the base, not on leaves. Deep watering once a week in drought."}, "fertilizing": {"cs": "Na jaře po řezu speciální hnojivo na růže, znovu po prvním kvetení.", "sk": "Na jar špeciálne hnojivo, znova po kvitnutí.", "en": "Rose feed in spring after pruning, again after first flush."}, "pruning": {"cs": "Jarní řez (březen-duben, jakmile pučí): velkokvěté na 4-6 oček, polyantky lehčeji. Odřízni odkvetlé květy během sezony.", "sk": "Jarný rez v marci. Odrezávaj odkvitnuté.", "en": "Spring pruning (March-April when buds swell): hybrid teas to 4-6 buds, polyanthas lighter. Deadhead spent flowers in season."}, "harvesting": {"cs": "Šípky na podzim. Květy ráno za rosy.", "sk": "Šípky na jeseň.", "en": "Hips in autumn. Cut flowers early morning."}, "common_issues": {"cs": "Černá skvrnitost (houby na listech), padlí, mšice.", "sk": "Čierna škvrnitosť, múčnatka, vošky.", "en": "Black spot, powdery mildew, aphids."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('hortenzie', 'Hydrangea macrophylla', '{"cs": ["hortenzie"], "sk": ["hortenzia"], "en": ["hydrangea"]}'::jsonb, 'shrub', 'Hydrangeaceae', 'perennial', 'partial_shade', 'high', ARRAY['humózní','lehce kyselá','vlhká']::text[], -15, NULL, NULL, '{"planting": {"cs": "Polostín, nejlépe ranní slunce. Pro modré květy kyselá půda (pH 5,5), pro růžové neutrální.", "sk": "Polotieň. Pre modré kvety kyslá pôda, pre ružové neutrálna.", "en": "Partial shade. Acid soil (pH 5.5) for blue flowers, neutral for pink."}, "watering": {"cs": "Hodně! Jméno znamená \"vodník\". V suchu vadne ihned.", "sk": "Veľa! Meno znamená vodník.", "en": "Plenty! Its name means \"water vessel\". Wilts immediately in drought."}, "fertilizing": {"cs": "Hnojivo pro azalky/hortenzie na jaře, mulčuj kůrou.", "sk": "Hnojivo na azalky.", "en": "Azalea/hydrangea fertilizer in spring, bark mulch."}, "pruning": {"cs": "NESTŘÍHEJ na podzim! Mladé pupeny pro příští sezonu jsou na koncích. Jarní lehký řez slabých výhonků.", "sk": "NESTRIHAJ na jeseň! Púčiky sú na koncoch.", "en": "DO NOT prune in autumn — next year''s buds are on the tips. Light spring pruning of weak shoots only."}, "harvesting": {"cs": "Květy v srpnu na sušení (zasychají rovnou na rostlině).", "sk": "Kvety v auguste na sušenie.", "en": "Flowers in August for drying (dry on the plant naturally)."}, "common_issues": {"cs": "Vymrznutí pupenů, hnědé okraje listů z vápnité vody, padlí.", "sk": "Vymŕzanie pukov, hnedé okraje listov.", "en": "Bud freeze, brown leaf edges from limey water, powdery mildew."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('levandule', 'Lavandula angustifolia', '{"cs": ["levandule", "levandule lékařská"], "sk": ["levanduľa"], "en": ["lavender"]}'::jsonb, 'ornamental', 'Lamiaceae', 'perennial', 'full_sun', 'low', ARRAY['lehká','well-drained','vápenitá']::text[], -20, ARRAY['ruze','salvej']::text[], NULL, '{"planting": {"cs": "Plné slunce, propustná spíš chudá půda. Spon 40 cm pro souvislý záhon.", "sk": "Plné slnko, priepustná pôda. Spon 40 cm.", "en": "Full sun, well-drained, rather poor soil. 40 cm spacing for solid border."}, "watering": {"cs": "Prakticky nikdy. V prvním roce po výsadbě jen za sucha.", "sk": "Takmer nikdy.", "en": "Almost never. Only in first year after planting during drought."}, "fertilizing": {"cs": "Nepotřebuje. Bohatá půda = méně květů.", "sk": "Nepotrebuje.", "en": "Doesn''t need it. Rich soil = fewer flowers."}, "pruning": {"cs": "Po odkvětu (srpen) sestřihni keře do koule, ale nikdy ne do starého dřeva. Jarní sanitární řez březen.", "sk": "Po odkvitnutí zostrihni do gule, nie do starého dreva.", "en": "After flowering (Aug) shape into a ball but never cut into old wood. Sanitary pruning in March."}, "harvesting": {"cs": "Stonky před úplným rozkvětem (50 % pupenů otevřených). Suš svazečky hlavou dolů ve stínu.", "sk": "Stonky pred úplným kvitnutím.", "en": "Stems just before full bloom (50% buds open). Dry bunches upside down in shade."}, "common_issues": {"cs": "Hnije v mokrých zimách. Stáří 10-15 let — pak vyměnit.", "sk": "Hnije v mokrých zimách.", "en": "Rots in wet winters. Lifespan 10-15 years — then replace."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('monstera', 'Monstera deliciosa', '{"cs": ["monstera", "okénatka"], "sk": ["monstera"], "en": ["monstera", "swiss cheese plant"]}'::jsonb, 'houseplant', 'Araceae', 'perennial', 'partial_shade', 'medium', ARRAY['humózní','well-drained']::text[], 10, NULL, NULL, '{"planting": {"cs": "Pokojová rostlina. Světlé místo bez přímého slunce. Substrát pro pokojovky s perlitem.", "sk": "Izbová rastlina. Svetlé miesto bez priameho slnka.", "en": "Houseplant. Bright spot, no direct sun. Houseplant mix with perlite."}, "watering": {"cs": "Zalévej, když vrchních 3 cm substrátu uschne. V zimě méně.", "sk": "Zalievaj, keď vrchné 3 cm vyschne.", "en": "Water when top 3 cm of soil dries. Less in winter."}, "fertilizing": {"cs": "Březen-září každé 2 týdny zředěné hnojivo na pokojovky.", "sk": "Mar-sep každé 2 týždne hnojivo na izbovky.", "en": "Diluted houseplant fertilizer every 2 weeks Mar-Sept."}, "pruning": {"cs": "Odřízni žluté listy. Vzdušné kořeny směřuj k tyči nebo nech volně viset.", "sk": "Odrež žlté listy.", "en": "Remove yellow leaves. Train aerial roots up a moss pole or let dangle."}, "harvesting": {"cs": "Z odřezků s 1-2 uzly a vzdušným kořínkem snadno množíš ve vodě.", "sk": "Z odrezkov množíš vo vode.", "en": "Propagate from cuttings with 1-2 nodes and aerial root in water."}, "common_issues": {"cs": "Žluté listy = přemokření, hnědé špičky = suchý vzduch, kapající voda z listů = zalitá.", "sk": "Žlté listy z premokrenia.", "en": "Yellow leaves = overwatering, brown tips = dry air, dripping leaves = overwatered."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

INSERT INTO plants_catalog (slug, scientific_name, common_names, category, family, lifecycle, sun_requirement, water_requirement, soil_type, hardiness_min_c, companion_plants, incompatible_plants, content, images, external_ids, published_at)
VALUES ('sukulent-echeveria', 'Echeveria elegans', '{"cs": ["echeverie", "sukulent"], "sk": ["echeveria", "sukulent"], "en": ["echeveria", "hens and chicks"]}'::jsonb, 'houseplant', 'Crassulaceae', 'perennial', 'full_sun', 'low', ARRAY['kaktusový','well-drained','písčitá']::text[], 5, NULL, NULL, '{"planting": {"cs": "Sukulentový substrát s 30 % perlitu/písku. Květináč s odtokovými otvory!", "sk": "Sukulentný substrát s perlitom. Kvetináč s odtokmi!", "en": "Succulent mix with 30% perlite/sand. Pot with drainage holes!"}, "watering": {"cs": "Důkladně, ale řídce — substrát musí mezi zálivkami úplně proschnout. V zimě téměř vůbec.", "sk": "Dôkladne ale riedko. V zime takmer vôbec.", "en": "Deep but infrequent — soil must dry completely between waterings. Almost never in winter."}, "fertilizing": {"cs": "Velmi řídce, 1× měsíčně hnojivem pro kaktusy v sezoně.", "sk": "Veľmi riedko, 1× mesačne.", "en": "Very sparingly, monthly cactus fertilizer in growing season."}, "pruning": {"cs": "Odstraň zaschlé spodní listy. Dlouhý \"krk\" (etiolace) = málo světla.", "sk": "Odstráň zaschnuté listy. Dlhý krk = málo svetla.", "en": "Remove withered lower leaves. Long stretched stem = not enough light."}, "harvesting": {"cs": "Od listů snadno množíš — listový řízek osušíš 3 dny a položíš na substrát.", "sk": "Množíš listovými odrezkami.", "en": "Easily propagate from leaves — let leaf callus 3 days, then lay on soil."}, "common_issues": {"cs": "Hnije z přelití (nejčastější problém!), molice a vlnatka v zimě v interiéru.", "sk": "Hnije z prelievania, mušky.", "en": "Rots from overwatering (most common!), mealybugs in winter indoors."}}'::jsonb, '[]'::jsonb, '{}'::jsonb, now())
ON CONFLICT (slug) DO NOTHING;

-- Care rules (referenced by slug)
INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 3}'::jsonb, 1, NULL, '{"cs": "Zalij 3-5 litrů na rostlinu u kořene.", "sk": "Zalej 3-5 litrov pri koreni.", "en": "Water 3-5 liters at the base."}'::jsonb, true
FROM plants_catalog WHERE slug = 'rajce'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 3}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'fertilize', 'recurring_days', '{"interval_days": 14, "starts_after_days": 30}'::jsonb, 2, NULL, '{"cs": "Přidej draslíkové hnojivo (lžíce na 10 l vody).", "sk": "Pridaj draselné hnojivo.", "en": "Apply high-potassium feed."}'::jsonb, true
FROM plants_catalog WHERE slug = 'rajce'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'fertilize'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 14, "starts_after_days": 30}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'prune', 'recurring_days', '{"interval_days": 10}'::jsonb, 3, NULL, '{"cs": "Odstraň zálistky pod listy.", "sk": "Odstráň zálistky.", "en": "Pinch out side shoots."}'::jsonb, true
FROM plants_catalog WHERE slug = 'rajce'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'prune'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 10}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 4}'::jsonb, 1, NULL, '{"cs": "Zalij 2-3 l vlažné vody u kořene.", "sk": "Zalej 2-3 l vlažnej vody pri koreni.", "en": "Water 2-3 L lukewarm at the base."}'::jsonb, true
FROM plants_catalog WHERE slug = 'paprika'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 4}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'fertilize', 'recurring_days', '{"interval_days": 14, "starts_after_days": 40}'::jsonb, 2, NULL, '{"cs": "Draslíkové hnojivo na kvetení.", "sk": "Draselné hnojivo.", "en": "Potassium feed."}'::jsonb, true
FROM plants_catalog WHERE slug = 'paprika'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'fertilize'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 14, "starts_after_days": 40}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 1}'::jsonb, 1, NULL, '{"cs": "Zalij 5-10 l, ráno nebo večer.", "sk": "Zalej 5-10 l, ráno alebo večer.", "en": "Water 5-10 L, morning or evening."}'::jsonb, true
FROM plants_catalog WHERE slug = 'okurka'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 1}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'pest_check', 'recurring_days', '{"interval_days": 7}'::jsonb, 3, NULL, '{"cs": "Zkontroluj listy na padlí (bílý povlak).", "sk": "Skontroluj listy na múčnatku.", "en": "Check leaves for powdery mildew."}'::jsonb, true
FROM plants_catalog WHERE slug = 'okurka'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'pest_check'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 7}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 4}'::jsonb, 2, NULL, '{"cs": "Zalij stejnoměrně, kořeny nesnášejí výkyvy.", "sk": "Zalej rovnomerne.", "en": "Water evenly to prevent cracking."}'::jsonb, true
FROM plants_catalog WHERE slug = 'mrkev'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 4}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'pest_check', 'recurring_days', '{"interval_days": 14}'::jsonb, 3, NULL, '{"cs": "Zkontroluj listy na pochmurnatku (kroucení).", "sk": "Skontroluj listy na pochmurnatku.", "en": "Check leaves for rust fly damage."}'::jsonb, true
FROM plants_catalog WHERE slug = 'mrkev'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'pest_check'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 14}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 5, "starts_after_days": 40}'::jsonb, 2, NULL, '{"cs": "Zalévej během kvetení a tvorby hlíz.", "sk": "Zalievaj počas kvitnutia.", "en": "Water during flowering and tuber formation."}'::jsonb, true
FROM plants_catalog WHERE slug = 'brambory'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 5, "starts_after_days": 40}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'mulch', 'days_after_planting', '{"days": 30}'::jsonb, 2, NULL, '{"cs": "Přihrň k rostlinám, ochrání hlízy před světlem.", "sk": "Prihrň k rastlinám.", "en": "Earth up the plants."}'::jsonb, true
FROM plants_catalog WHERE slug = 'brambory'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'mulch'
    AND pcr.trigger_type = 'days_after_planting'
    AND pcr.trigger_config = '{"days": 30}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'pest_check', 'recurring_days', '{"interval_days": 7, "starts_after_days": 30}'::jsonb, 3, NULL, '{"cs": "Hledej mandelinky a vajíčka pod listy.", "sk": "Hľadaj pásavky a vajíčka.", "en": "Look for Colorado beetles and eggs under leaves."}'::jsonb, true
FROM plants_catalog WHERE slug = 'brambory'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'pest_check'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 7, "starts_after_days": 30}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 7}'::jsonb, 3, NULL, '{"cs": "Zalij jen pokud je dlouhé sucho.", "sk": "Zalej iba pri dlhom suchu.", "en": "Water only during long droughts."}'::jsonb, true
FROM plants_catalog WHERE slug = 'cibule'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 7}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'harvest_check', 'days_after_planting', '{"days": 100}'::jsonb, 2, NULL, '{"cs": "Když se zlomí nať, je čas vykopat.", "sk": "Keď zlomí vňať, je čas vykopať.", "en": "When tops fall, time to harvest."}'::jsonb, true
FROM plants_catalog WHERE slug = 'cibule'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'harvest_check'
    AND pcr.trigger_type = 'days_after_planting'
    AND pcr.trigger_config = '{"days": 100}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'harvest_check', 'days_after_planting', '{"days": 240}'::jsonb, 2, NULL, '{"cs": "Zkontroluj žloutnutí spodních listů.", "sk": "Skontroluj žltnutie spodných listov.", "en": "Check for lower leaf yellowing."}'::jsonb, true
FROM plants_catalog WHERE slug = 'cesnek'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'harvest_check'
    AND pcr.trigger_type = 'days_after_planting'
    AND pcr.trigger_config = '{"days": 240}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 2}'::jsonb, 1, NULL, '{"cs": "Mírně zalij, hlavně ráno.", "sk": "Mierne zalej, ráno.", "en": "Water lightly, morning."}'::jsonb, true
FROM plants_catalog WHERE slug = 'salat'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 2}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'pest_check', 'recurring_days', '{"interval_days": 5}'::jsonb, 3, NULL, '{"cs": "Zkontroluj slimáky pod listy.", "sk": "Skontroluj slimákov.", "en": "Check for slugs under leaves."}'::jsonb, true
FROM plants_catalog WHERE slug = 'salat'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'pest_check'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 5}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 2}'::jsonb, 1, NULL, '{"cs": "Zalij u kořene, ráno.", "sk": "Zalej pri koreni, ráno.", "en": "Water at base, in the morning."}'::jsonb, true
FROM plants_catalog WHERE slug = 'bazalka'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 2}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'prune', 'recurring_days', '{"interval_days": 14}'::jsonb, 3, NULL, '{"cs": "Odštipni vrcholky, odstraň květy.", "sk": "Odštipni vrcholky.", "en": "Pinch tops, remove flower buds."}'::jsonb, true
FROM plants_catalog WHERE slug = 'bazalka'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'prune'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 14}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 3}'::jsonb, 2, NULL, '{"cs": "Zalij stejnoměrně.", "sk": "Zalej rovnomerne.", "en": "Water evenly."}'::jsonb, true
FROM plants_catalog WHERE slug = 'petrzel'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 3}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'prune', 'month', '{"month": 8}'::jsonb, 2, NULL, '{"cs": "Sestřihni keř po odkvetení.", "sk": "Zostrihni po odkvitnutí.", "en": "Cut back after flowering."}'::jsonb, true
FROM plants_catalog WHERE slug = 'mata'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'prune'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 8}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'prune', 'month', '{"month": 3}'::jsonb, 2, NULL, '{"cs": "Sestřihni o třetinu na jaře.", "sk": "Zostrihni o tretinu.", "en": "Cut back by a third."}'::jsonb, true
FROM plants_catalog WHERE slug = 'salvej'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'prune'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 3}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'prune', 'month', '{"month": 7}'::jsonb, 3, NULL, '{"cs": "Sestřihni o polovinu po kvetu.", "sk": "Zostrihni o polovicu.", "en": "Cut back by half."}'::jsonb, true
FROM plants_catalog WHERE slug = 'tymian'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'prune'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 7}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'cover', 'month', '{"month": 11}'::jsonb, 1, ARRAY['CZ-highland','CZ-mountain','SK-highland','SK-mountain']::text[], '{"cs": "Zakryj rouškou nebo přemísti dovnitř.", "sk": "Zakry alebo presťahuj dovnútra.", "en": "Cover with fleece or move indoors."}'::jsonb, true
FROM plants_catalog WHERE slug = 'rozmaryn'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'cover'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 11}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 4}'::jsonb, 3, NULL, '{"cs": "Mírně zalij.", "sk": "Mierne zalej.", "en": "Water moderately."}'::jsonb, true
FROM plants_catalog WHERE slug = 'pazitka'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 4}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 3, "starts_after_days": 60}'::jsonb, 1, NULL, '{"cs": "Zalij u kořene, ne na plody.", "sk": "Zalej pri koreni.", "en": "Water at base, not on fruits."}'::jsonb, true
FROM plants_catalog WHERE slug = 'jahoda'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 3, "starts_after_days": 60}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'prune', 'month', '{"month": 7}'::jsonb, 2, NULL, '{"cs": "Odstraň šlahouny a staré listy.", "sk": "Odstráň šľachy.", "en": "Remove runners and old leaves."}'::jsonb, true
FROM plants_catalog WHERE slug = 'jahoda'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'prune'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 7}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'prune', 'month', '{"month": 8}'::jsonb, 1, NULL, '{"cs": "Odřízni odplozené stonky u země.", "sk": "Odrez staré stonky.", "en": "Cut spent canes at ground."}'::jsonb, true
FROM plants_catalog WHERE slug = 'malina'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'prune'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 8}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'prune', 'month', '{"month": 1}'::jsonb, 1, NULL, '{"cs": "Zimní řez za bezmrazých dní.", "sk": "Zimný rez.", "en": "Winter pruning on frost-free days."}'::jsonb, true
FROM plants_catalog WHERE slug = 'jablon'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'prune'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 1}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'pest_check', 'month', '{"month": 6}'::jsonb, 2, NULL, '{"cs": "Zkontroluj plody na obaleče.", "sk": "Skontroluj plody na červíky.", "en": "Check fruit for codling moth."}'::jsonb, true
FROM plants_catalog WHERE slug = 'jablon'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'pest_check'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 6}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'prune', 'month', '{"month": 2}'::jsonb, 2, NULL, '{"cs": "Mírný zimní řez.", "sk": "Mierny zimný rez.", "en": "Light winter pruning."}'::jsonb, true
FROM plants_catalog WHERE slug = 'hrusen'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'prune'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 2}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'prune', 'month', '{"month": 2}'::jsonb, 2, NULL, '{"cs": "Zimní řez, odstraň staré výhonky.", "sk": "Zimný rez.", "en": "Winter pruning."}'::jsonb, true
FROM plants_catalog WHERE slug = 'ribiz'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'prune'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 2}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'prune', 'month', '{"month": 4}'::jsonb, 1, NULL, '{"cs": "Jarní řez na 4-6 oček.", "sk": "Jarný rez.", "en": "Spring pruning to 4-6 buds."}'::jsonb, true
FROM plants_catalog WHERE slug = 'ruze'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'prune'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 4}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'fertilize', 'month', '{"month": 4}'::jsonb, 2, NULL, '{"cs": "Hnojivo na růže.", "sk": "Hnojivo na ruže.", "en": "Rose feed."}'::jsonb, true
FROM plants_catalog WHERE slug = 'ruze'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'fertilize'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 4}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'pest_check', 'recurring_days', '{"interval_days": 14, "starts_after_days": 30}'::jsonb, 3, NULL, '{"cs": "Zkontroluj mšice na poupatech.", "sk": "Skontroluj vošky.", "en": "Check buds for aphids."}'::jsonb, true
FROM plants_catalog WHERE slug = 'ruze'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'pest_check'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 14, "starts_after_days": 30}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 2}'::jsonb, 1, NULL, '{"cs": "Hodně zalij, snáší přemokření.", "sk": "Veľa zalej.", "en": "Water generously."}'::jsonb, true
FROM plants_catalog WHERE slug = 'hortenzie'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 2}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'cover', 'month', '{"month": 11}'::jsonb, 2, ARRAY['CZ-highland','CZ-mountain','SK-highland','SK-mountain']::text[], '{"cs": "Zakryj mulčem před zimou.", "sk": "Zakry mulčom.", "en": "Mulch heavily before winter."}'::jsonb, true
FROM plants_catalog WHERE slug = 'hortenzie'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'cover'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 11}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'prune', 'month', '{"month": 8}'::jsonb, 2, NULL, '{"cs": "Sestřihni do koule po odkvětu.", "sk": "Zostrihni do gule.", "en": "Shape into a ball after flowering."}'::jsonb, true
FROM plants_catalog WHERE slug = 'levandule'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'prune'
    AND pcr.trigger_type = 'month'
    AND pcr.trigger_config = '{"month": 8}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 7}'::jsonb, 2, NULL, '{"cs": "Zalij, když vrch substrátu vyschne.", "sk": "Zalej, keď vrch vyschne.", "en": "Water when top dries."}'::jsonb, true
FROM plants_catalog WHERE slug = 'monstera'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 7}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'fertilize', 'recurring_days', '{"interval_days": 14}'::jsonb, 3, NULL, '{"cs": "Hnojivo na pokojovky (jen v sezoně).", "sk": "Hnojivo na izbovky.", "en": "Houseplant feed (only in growing season)."}'::jsonb, true
FROM plants_catalog WHERE slug = 'monstera'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'fertilize'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 14}'::jsonb
);

INSERT INTO plant_care_rules (catalog_plant_id, task_type, trigger_type, trigger_config, priority, climate_regions, instructions_i18n, active)
SELECT id, 'water', 'recurring_days', '{"interval_days": 14}'::jsonb, 3, NULL, '{"cs": "Zalij, jen pokud je substrát naprosto suchý.", "sk": "Zalej len pri úplnom suchu.", "en": "Water only when soil is bone dry."}'::jsonb, true
FROM plants_catalog WHERE slug = 'sukulent-echeveria'
AND NOT EXISTS (
  SELECT 1 FROM plant_care_rules pcr
  WHERE pcr.catalog_plant_id = plants_catalog.id
    AND pcr.task_type = 'water'
    AND pcr.trigger_type = 'recurring_days'
    AND pcr.trigger_config = '{"interval_days": 14}'::jsonb
);

