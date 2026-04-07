'use strict';

// ══════════════════════════════════════════
//  DISEASE DATABASE
// ══════════════════════════════════════════
const DISEASE_DB = {
  rice: {
    name: '🌾 Rice',
    vulnerabilityScore: 72,
    seasonal: [
      { icon: '💧', text: 'High humidity (>80%) increases blast risk in April–June' },
      { icon: '🌡️', text: 'Temperature above 30°C favors bacterial blight' },
      { icon: '🌧️', text: 'Excess rainfall promotes sheath blight spread' },
    ],
    diseases: [
      {
        name: 'Rice Blast',
        icon: '🔴',
        pathogen: 'Pyricularia oryzae (Fungus)',
        severity: 'high',
        symptoms: 'Diamond-shaped lesions with gray center and brown border on leaves. Neck of panicle turns brown causing "neck rot". White or empty grains.',
        spread: 'Wind-borne spores, infected seeds, high humidity (>93%) at 20–28°C. Major outbreak risk during panicle emergence.',
        organic: 'Spray Pseudomonas fluorescens @ 5 g/L. Remove and burn infected plant debris. Use silicon-enriched manures to strengthen cell walls.',
        chemical: 'Tricyclazole 75 WP @ 0.6 g/L water. Isoprothiolane 40 EC @ 1.5 mL/L. Apply at tillering and booting stages.',
      },
      {
        name: 'Bacterial Leaf Blight',
        icon: '🟡',
        pathogen: 'Xanthomonas oryzae (Bacteria)',
        severity: 'high',
        symptoms: 'Water-soaked to yellowish stripes along leaf margins turning white. Milky droplets on leaves in the morning. Kresek (wilting) symptom in seedlings.',
        spread: 'Enters through wounds and stomata. Spread by rain splashes, irrigation water, and insects. Favored by heavy rains and strong winds.',
        organic: 'Spray 1% Bordeaux mixture. Use resistant varieties like IR 64, Swarna. Avoid excess nitrogen application.',
        chemical: 'Copper oxychloride 50 WP @ 2g/L. Streptocycline 90 SP @ 0.1 g/L mixed with copper oxychloride. No effective fungicide — focus on prevention.',
      },
      {
        name: 'Brown Plant Hopper',
        icon: '🟠',
        pathogen: 'Nilaparvata lugens (Insect Pest)',
        severity: 'high',
        symptoms: 'Circular patches of yellowing and drying in field ("hopper burn"). Insects found at base of plants. Plants collapse in severe cases.',
        spread: 'Resurgence due to overuse of pesticides. Migrates from nearby fields. Favored by dense planting and excess nitrogen.',
        organic: 'Release Cyrtorhinus lividipennis (natural predator). Avoid water-logged conditions. Light traps for monitoring.',
        chemical: 'Thiamethoxam 25 WG @ 0.3 g/L. Pymetrozine 50 WG @ 0.6 g/L. Avoid pyrethroids — they kill natural enemies and cause resurgence.',
      },
      {
        name: 'Sheath Blight',
        icon: '🟤',
        pathogen: 'Rhizoctonia solani (Fungus)',
        severity: 'medium',
        symptoms: 'Oval or irregular greenish-gray lesions with brown margins on leaf sheaths. Lesions coalesce and move upwards. White fungal growth in humid conditions.',
        spread: 'Soil-borne. Sclerotia float on water to infect plants. Thrives in dense canopy, high humidity, and excess nitrogen.',
        organic: 'Trichoderma harzianum @ 5 g/L spray. Reduce canopy density by increased spacing. Reduce nitrogen over-application.',
        chemical: 'Propiconazole 25 EC @ 1 mL/L. Hexaconazole 5 EC @ 2 mL/L. Spray at early tillering and repeat at maximum tillering.',
      },
    ]
  },

  wheat: {
    name: '🌾 Wheat',
    vulnerabilityScore: 55,
    seasonal: [
      { icon: '❄️', text: 'Cool, moist weather (10–20°C) favors yellow rust' },
      { icon: '💨', text: 'Wind-borne rust spores spread rapidly in February–March' },
      { icon: '🌡️', text: 'Warm temperatures (>25°C) reduce rust but increase aphid activity' },
    ],
    diseases: [
      {
        name: 'Yellow (Stripe) Rust',
        icon: '🟡',
        pathogen: 'Puccinia striiformis (Fungus)',
        severity: 'high',
        symptoms: 'Yellow-orange striped pustules in rows along leaf veins. Pustules contain yellow powdery spores. Severely infected plants look yellow from distance.',
        spread: 'Wind-borne spores travel long distances. Cool (10–15°C) moist weather. Can spread 1,000 km via wind currents.',
        organic: 'Plant resistant varieties (HD 2781, PBW 343). Crop rotation breaks cycle. Silicon-rich amendments strengthen leaves.',
        chemical: 'Propiconazole 25 EC @ 1 mL/L. Tebuconazole 250 EC @ 1 mL/L. Apply at first appearance and repeat in 15 days.',
      },
      {
        name: 'Loose Smut',
        icon: '⚫',
        pathogen: 'Ustilago tritici (Fungus)',
        severity: 'medium',
        symptoms: 'Entire wheat ear replaced by black smut mass (teliospores). Black dust blows away leaving bare rachis. Plants look normal until ear emergence.',
        spread: 'Seed-borne infection. Spores infect flowers at anthesis and survive in seed. No secondary infection during season.',
        organic: 'Hot water seed treatment at 49°C for 2 hours then dry. Use disease-free certified seed. Roguing infected plants.',
        chemical: 'Carboxin 75 WP seed treatment @ 2.5g/kg seed. Tebuconazole seed treatment @ 2g/kg. Apply before sowing.',
      },
      {
        name: 'Karnal Bunt',
        icon: '🟤',
        pathogen: 'Tilletia indica (Fungus)',
        severity: 'medium',
        symptoms: 'Partial conversion of wheat grains to black smut powder with fishy odor. Only 1–3 grains per spike affected. Quality reduction and export restriction.',
        spread: 'Soil and air-borne spores infect during flowering. Cool and humid weather (18–22°C) during flowering favors infection.',
        organic: 'Destroy infected plant material. Avoid irrigation during flowering. Use certified disease-free seed.',
        chemical: 'Propiconazole 25 EC foliar spray at heading. Tebuconazole spray at ear emergence. Thiram + Carboxin seed treatment.',
      },
    ]
  },

  tomato: {
    name: '🍅 Tomato',
    vulnerabilityScore: 85,
    seasonal: [
      { icon: '🔥', text: 'Hot dry weather promotes thrips and viral disease spread' },
      { icon: '💧', text: 'High humidity (>80%) triggers early and late blight' },
      { icon: '🦟', text: 'Whitefly populations peak in October–December' },
    ],
    diseases: [
      {
        name: 'Tomato Leaf Curl Virus',
        icon: '🦠',
        pathogen: 'Tomato Yellow Leaf Curl Begomovirus (Virus)',
        severity: 'high',
        symptoms: 'Upward curling of leaves, severe stunting, yellowing of leaf margins. Infected plants bear no fruit. Young leaves are small and crinkled.',
        spread: 'Transmitted exclusively by whitefly (Bemisia tabaci). No seed transmission. Spreads from infected plants to healthy ones through whitefly movement.',
        organic: 'Yellow sticky traps for whitefly monitoring. Neem oil spray @ 2% to repel whiteflies. Use reflective silver mulch. Rogue out infected plants immediately.',
        chemical: 'Imidacloprid 200 SL @ 0.3 ml/L for whitefly. Thiamethoxam 25 WG @ 0.3 g/L. No cure for infected plants — only prevent spread.',
      },
      {
        name: 'Early Blight',
        icon: '🟤',
        pathogen: 'Alternaria solani (Fungus)',
        severity: 'medium',
        symptoms: 'Circular dark brown spots with concentric rings (target-board pattern) on older leaves. Lesions enlarge and may have yellow halo. Severe defoliation possible.',
        spread: 'Soil and air-borne spores. Infects through wounds and stomata. Warm (24–29°C) and wet conditions favor rapid spread.',
        organic: 'Spray copper-based fungicides (Bordeaux 1%). Remove infected leaves. Mulch to prevent soil splash. Calcium application strengthens cell walls.',
        chemical: 'Mancozeb 75 WP @ 2.5 g/L. Chlorothalonil 75 WP @ 2g/L. Spray preventively every 7–10 days during humid weather.',
      },
      {
        name: 'Late Blight',
        icon: '⚫',
        pathogen: 'Phytophthora infestans (Oomycete)',
        severity: 'high',
        symptoms: 'Water-soaked greenish-gray spots on leaves, white fungal growth on underside. Brown lesions on stems. Fruit shows brown, firm rot. Can destroy crop in 7–10 days.',
        spread: 'Spreads explosively in cool (15–25°C) humid (>90%) weather. Air-borne sporangia travel long distances. Up to 1 km spread in ideal conditions.',
        organic: 'Copper hydroxide spray. Avoid overhead irrigation. Destroy infected plants away from field. Plant-to-plant spacing for air circulation.',
        chemical: 'Metalaxyl + Mancozeb (Ridomil Gold) @ 2.5g/L. Cymoxanil + Mancozeb @ 2g/L. Preventive spray every 5–7 days during risk period.',
      },
    ]
  },

  cotton: {
    name: '💮 Cotton',
    vulnerabilityScore: 68,
    seasonal: [
      { icon: '🌡️', text: 'Hot weather (35°C+) favors thrips and red spider mites' },
      { icon: '🌧️', text: 'Post-monsoon humidity increases boll rot risk' },
      { icon: '🦟', text: 'Pink boll worm peak in September–November' },
    ],
    diseases: [
      {
        name: 'Cotton Bollworm',
        icon: '🐛',
        pathogen: 'Helicoverpa armigera (Insect)',
        severity: 'high',
        symptoms: 'Circular entry holes in bolls and buds. Shed squares and bolls on ground. Damaged bolls have greenish frass. Caterpillars inside bolls consuming seeds.',
        spread: 'Moth lays eggs on tender parts. Multiple generations per season. Wide host range — threats from neighboring crops.',
        organic: 'Pheromone traps for monitoring (1/acre). Trichogramma release @ 1.5 lakh eggs/acre. NPV spray (250 LE/ha) at 1st instar. Light traps.',
        chemical: 'Spinosad 45 SC @ 0.3 mL/L. Emamectin benzoate 5 SG @ 0.4 g/L. Rotate chemistries to prevent resistance.',
      },
      {
        name: 'Alternaria Leaf Spot',
        icon: '🟤',
        pathogen: 'Alternaria macrospora (Fungus)',
        severity: 'medium',
        symptoms: 'Circular brown spots with purple-red margins. Concentric ring pattern. Yellow halo around lesions. Premature defoliation in severe cases.',
        spread: 'Seed-borne and air-borne. Warm humid weather. Spread by wind, rain splash, farming operations.',
        organic: 'Spray 1% Bordeaux mixture. Remove infected leaves. Use hot water seed treatment. Balanced fertilization.',
        chemical: 'Mancozeb 75 WP @ 2 g/L. Carbendazim 50 WP @ 1 g/L. Apply at first appearance of symptoms.',
      },
    ]
  },

  mango: {
    name: '🥭 Mango',
    vulnerabilityScore: 60,
    seasonal: [
      { icon: '💨', text: 'Mango hopper populations peak during flowering (Jan–Feb)' },
      { icon: '💧', text: 'High humidity at flowering increases powdery mildew risk' },
      { icon: '🌡️', text: 'Anthracnose spreads rapidly during monsoon season' },
    ],
    diseases: [
      {
        name: 'Powdery Mildew',
        icon: '⚪',
        pathogen: 'Oidium mangiferae (Fungus)',
        severity: 'high',
        symptoms: 'White powdery coating on inflorescences, young leaves, and fruitlets. Heavy infection causes flower drop and no fruit set. Affected fruits show brown-black spots.',
        spread: 'Air-borne conidia. Dry weather (25–35°C) with low humidity (50–60%) at night. Major issue during flowering stage.',
        organic: 'Spray sulfur dust @ 25 kg/ha. Wettable sulfur spray @ 2 g/L. Neem oil @ 2 mL/L. Removal of affected panicles.',
        chemical: 'Carbendazim 50 WP @ 0.5 g/L. Hexaconazole 5 EC @ 1 mL/L. Spray at 50% flowering and repeat in 20 days.',
      },
      {
        name: 'Mango Hopper',
        icon: '🦗',
        pathogen: 'Amritodus atkinsoni (Insect)',
        severity: 'medium',
        symptoms: 'Nymphs and adults suck plant sap from panicles and young leaves. Honeydew deposits on floral parts causing sooty mold. Flower drop and reduced fruiting.',
        spread: 'Spreads from affected trees. Populations build up during January–March. Multiple generations during fruiting season.',
        organic: 'Fish oil rosin soap spray @ 2.5 g/L. Neem oil 2% spray. Clean cultivation and removal of dried inflorescences.',
        chemical: 'Carbaryl 50 WP @ 2 g/L. Imidacloprid 200 SL @ 0.5 mL/L. Spray at bud burst and again at panicle emergence.',
      },
    ]
  },

  turmeric: {
    name: '🟡 Turmeric',
    vulnerabilityScore: 48,
    seasonal: [
      { icon: '💧', text: 'Waterlogged conditions in monsoon increase rhizome rot' },
      { icon: '🌡️', text: 'Thrips activity increases in dry summer months' },
      { icon: '🍂', text: 'Leaf blotch appears after heavy rains in September' },
    ],
    diseases: [
      {
        name: 'Rhizome Rot',
        icon: '⚫',
        pathogen: 'Pythium aphanidermatum (Oomycete)',
        severity: 'high',
        symptoms: 'Yellowing of leaves from lower leaves upward. Water-soaked brown discoloration of rhizomes. Foul smell from rotted rhizomes. Plant collapses and dies.',
        spread: 'Soil-borne pathogen. Spreads through contaminated seed rhizomes and waterlogged soils. Favored by poor drainage.',
        organic: 'Treat seed rhizomes with Trichoderma harzianum @ 10 g/kg. Use raised beds for planting. Avoid waterlogging. Soil drenching with Pseudomonas fluorescens.',
        chemical: 'Metalaxyl seed treatment @ 6 g/kg rhizome. Mancozeb 75 WP soil drench @ 3 g/L at planting.',
      },
      {
        name: 'Leaf Blotch',
        icon: '🟤',
        pathogen: 'Taphrina maculans (Fungus)',
        severity: 'low',
        symptoms: 'Rectangular brown lesions on leaves with yellow borders. Lesions limited by leaf veins. Premature drying of affected leaves.',
        spread: 'Seed-borne and soil-borne spores. Rainy and humid conditions facilitate spread in August–September.',
        organic: 'Spray Bordeaux mixture @ 1% before and after monsoon. Remove infected leaves.',
        chemical: 'Mancozeb 75 WP @ 2 g/L. Carbendazim 50 WP @ 1 g/L. Two sprays — one at 30 days and second at 60 days after planting.',
      },
    ]
  },

  sugarcane: {
    name: '🎋 Sugarcane',
    vulnerabilityScore: 58,
    seasonal: [
      { icon: '💧', text: 'Red rot risk increases during monsoon (July–October)' },
      { icon: '🌡️', text: 'Smut spreads during germination in warm months' },
      { icon: '🦟', text: 'Pyrilla hopper peak in April–June' },
    ],
    diseases: [
      {
        name: 'Red Rot',
        icon: '🔴',
        pathogen: 'Colletotrichum falcatum (Fungus)',
        severity: 'high',
        symptoms: 'Internal red discoloration of stalk with white patches and alcoholic smell. Yellowing of leaves starting from tips. Plant death in severe cases.',
        spread: 'Seed-borne (infected setts). Insect wounds. Waterlogged soils. Cool humid weather favors rapid spread.',
        organic: 'Dip setts in hot water at 50°C for 2 hours before planting. Select disease-free seed. Use resistant varieties (CO 453, CoSe 92423).',
        chemical: 'Carbendazim 50 WP sett treatment @ 1 g/L for 5 minutes. Triadimefon foliar spray @ 1 g/L.',
      },
    ]
  },

  potato: {
    name: '🥔 Potato',
    vulnerabilityScore: 78,
    seasonal: [
      { icon: '❄️', text: 'Late blight risk is highest in cool (15–20°C) foggy weather' },
      { icon: '💧', text: 'Excessive rain in November–January accelerates blight spread' },
      { icon: '🌡️', text: 'Tuber moth damage increases in warm April–May period' },
    ],
    diseases: [
      {
        name: 'Late Blight',
        icon: '⚫',
        pathogen: 'Phytophthora infestans (Oomycete)',
        severity: 'high',
        symptoms: 'Water-soaked lesions that turn brown/black on leaves. White sporulation on underside of leaves. Brown rot on tubers. Can destroy entire field in 5–7 days.',
        spread: 'Air-borne sporangia. Cool (15–25°C) and humid (>90%) weather. Infected seed tubers. Spreads 1 km in ideal conditions.',
        organic: 'Copper sulfate + lime (Bordeaux 1%) spray. Remove volunteer plants. Use certified disease-free seed. Ridge planting for drainage.',
        chemical: 'Metalaxyl + Mancozeb @ 2.5 g/L. Cymoxanil + Mancozeb @ 2g/L. Prophylactic sprays before disease onset during high-risk weather.',
      },
    ]
  },

  onion: {
    name: '🧅 Onion',
    vulnerabilityScore: 52,
    seasonal: [
      { icon: '💧', text: 'Purple blotch risk increases in wet weather conditions' },
      { icon: '🌡️', text: 'Thrips populations explode in dry post-monsoon months' },
      { icon: '🌧️', text: 'Downy mildew appears in foggy/misty mornings' },
    ],
    diseases: [
      {
        name: 'Purple Blotch',
        icon: '🟣',
        pathogen: 'Alternaria porri (Fungus)',
        severity: 'medium',
        symptoms: 'Small white spots with purple center. Lesions enlarge with concentric rings. Rotting of foliage from tip downward. Severe defoliation.',
        spread: 'Wind and rain-borne spores. Warm humid weather. Infected plant debris in soil. Thrips wounds facilitate entry.',
        organic: 'Neem oil 2% spray. Remove infected plant debris. Proper field sanitation. Use of certified seed.',
        chemical: 'Iprodione 50 WP @ 1.5 g/L. Chlorothalonil 75 WP @ 2 g/L. Three to four sprays from 30 days onward at 10-day intervals.',
      },
    ]
  },

  chilli: {
    name: '🌶️ Chilli',
    vulnerabilityScore: 75,
    seasonal: [
      { icon: '🌡️', text: 'Anthracnose (fruit rot) risk peaks in warm humid monsoon' },
      { icon: '💧', text: 'Phytophthora root rot in waterlogged conditions after rain' },
      { icon: '🔥', text: 'Thrips and mites damage dry-weather crops severely' },
    ],
    diseases: [
      {
        name: 'Anthracnose / Fruit Rot',
        icon: '🔴',
        pathogen: 'Colletotrichum capsici (Fungus)',
        severity: 'high',
        symptoms: 'Circular sunken dark lesions on ripe/ripening fruits. Salmon-pink to orange spore masses on lesions. Fruit mummifies and remains attached. Pre and post-harvest loss.',
        spread: 'Seed-borne. Rain splash during cropping. Post-harvest spread during storage. Warm humid conditions (25–30°C).',
        organic: 'Use disease-free seed. Hot water seed treatment at 55°C for 30 min. Post-harvest treatment with 200 ppm sodium hypochlorite solution.',
        chemical: 'Carbendazim 50 WP @ 1 g/L. Mancozeb 75 WP + Carbendazim combination spray. Apply during fruit development and at early disease onset.',
      },
    ]
  },

  maize: {
    name: '🌽 Maize',
    vulnerabilityScore: 60,
    seasonal: [
      { icon: '🌡️', text: 'Warm, humid weather favors leaf blight' },
      { icon: '🐛', text: 'Fall Armyworm is highly active during early growth stages' }
    ],
    diseases: [
      {
        name: 'Fall Armyworm',
        icon: '🐛',
        pathogen: 'Spodoptera frugiperda (Insect)',
        severity: 'high',
        symptoms: 'Deep feeding damage in the whorls, ragged leaves, and large amounts of frass.',
        spread: 'Moths fly long distances overnight. Larvae migrate between plants.',
        organic: 'Apply Neem oil (1500 ppm) @ 5ml/L. Erect pheromone traps.',
        chemical: 'Spinetoram 11.7 SC @ 0.5 ml/L or Chlorantraniliprole 18.5 SC @ 0.4 ml/L applied into whorls.'
      }
    ]
  },
  
  tomato: {
    name: '🍅 Tomato',
    vulnerabilityScore: 85,
    seasonal: [
      { icon: '🌧️', text: 'High moisture leads to early and late blight' }
    ],
    diseases: [
      {
        name: 'Late Blight',
        icon: '🟤',
        pathogen: 'Phytophthora infestans (Oomycete)',
        severity: 'high',
        symptoms: 'Large, dark brown blotches on leaves/stems. White fungal growth on undersides in wet conditions. Fruits rot rapidly.',
        spread: 'Airborne spores spread rapidly in cool, wet weather.',
        organic: 'Copper-based sprays (Bordeaux mixture). Ensure good air circulation and avoid overhead watering.',
        chemical: 'Mancozeb 75 WP @ 2g/L or Metalaxyl+Mancozeb @ 2.5g/L.'
      }
    ]
  },

  potato: {
    name: '🥔 Potato',
    vulnerabilityScore: 78,
    seasonal: [
      { icon: '🌧️', text: 'Late blight risk very high in cool humid conditions.' }
    ],
    diseases: [{
      name: 'Early Blight', icon: '🟤', pathogen: 'Alternaria solani', severity: 'medium',
      symptoms: 'Target board-like concentric rings on older leaves.', spread: 'Wind and rain splashes.',
      organic: 'Crop rotation, Trichoderma viride.', chemical: 'Mancozeb at 0.2% spray.'
    }]
  },

  soybean: {
    name: '🫘 Soybean',
    vulnerabilityScore: 65,
    seasonal: [
      { icon: '🦟', text: 'Whitefly vectors yellow mosaic virus.' }
    ],
    diseases: [{
      name: 'Yellow Mosaic Virus', icon: '🟡', pathogen: 'Mungbean yellow mosaic virus', severity: 'high',
      symptoms: 'Yellowing of leaves in patches.', spread: 'Transmitted purely by whitefly.',
      organic: 'Yellow sticky traps. Neem oil.', chemical: 'Thiamethoxam to control whiteflies.'
    }]
  },

  groundnut: {
    name: '🥜 Groundnut',
    vulnerabilityScore: 70,
    seasonal: [
      { icon: '🌧️', text: 'Leaf spots common during rains.' }
    ],
    diseases: [{
      name: 'Tikka Disease', icon: '🟤', pathogen: 'Cercospora arachidicola', severity: 'medium',
      symptoms: 'Circular brown spots with yellow halo.', spread: 'Wind-borne spores.',
      organic: 'Avoid early sowing. Neem formulation.', chemical: 'Carbendazim 0.1%.'
    }]
  }
};

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
let selectedCrop = '';
let selectedSeverity = 'all';

// ══════════════════════════════════════════
//  NAVBAR
// ══════════════════════════════════════════
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {});

function scrollToSearch() {
  document.getElementById('cropSelect')?.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('cropSelect')?.focus();
}

// ══════════════════════════════════════════
//  LOAD DISEASES
// ══════════════════════════════════════════
function loadDiseases() {
  selectedCrop = document.getElementById('cropSelect').value;
  if (!selectedCrop) {
    document.getElementById('diseaseEmptyState').style.display = 'block';
    document.getElementById('diseaseContent').style.display = 'none';
    document.getElementById('seasonalTips').style.display = 'none';
    document.getElementById('cropHealthScore').style.display = 'none';
    return;
  }

  const data = DISEASE_DB[selectedCrop];
  if (!data) return;

  // Show results
  document.getElementById('diseaseEmptyState').style.display = 'none';
  document.getElementById('diseaseContent').style.display = 'block';

  // Set title
  document.getElementById('selectedCropTitle').textContent = data.name;
  document.getElementById('diseaseSubtitle').textContent =
    `${data.diseases.length} known diseases tracked`;

  // Seasonal tips
  const tipBox = document.getElementById('seasonalTips');
  const tipContent = document.getElementById('seasonalContent');
  if (data.seasonal) {
    tipContent.innerHTML = data.seasonal.map(t =>
      `<div class="seasonal-tip-item"><span>${t.icon}</span><span>${t.text}</span></div>`
    ).join('');
    tipBox.style.display = 'block';
  }

  // Health score
  const healthBox = document.getElementById('cropHealthScore');
  const healthBar = document.getElementById('healthBar');
  const healthLabel = document.getElementById('healthLabel');
  healthBox.style.display = 'block';
  const score = data.vulnerabilityScore;
  const color = score >= 70 ? '#ef4444' : score >= 50 ? '#eab308' : '#22c55e';
  setTimeout(() => {
    healthBar.style.width = score + '%';
    healthBar.style.background = color;
  }, 200);
  const risk = score >= 70 ? 'High Risk' : score >= 50 ? 'Moderate Risk' : 'Low Risk';
  healthLabel.textContent = `Vulnerability: ${risk} (${score}/100)`;
  healthLabel.style.color = color;

  renderDiseaseCards(data);
}

function renderDiseaseCards(data) {
  const grid = document.getElementById('diseaseCardsGrid');
  const badge = document.getElementById('diseaseCountBadge');

  let diseases = data.diseases;
  if (selectedSeverity !== 'all') {
    diseases = diseases.filter(d => d.severity === selectedSeverity);
  }

  if (badge) badge.textContent = `${diseases.length} disease${diseases.length !== 1 ? 's' : ''}`;

  if (!grid) return;
  grid.innerHTML = diseases.map((d, idx) => {
    const sevLabel = d.severity.charAt(0).toUpperCase() + d.severity.slice(1);
    const sevIcon  = d.severity === 'high' ? '🔴' : d.severity === 'medium' ? '🟡' : '🟢';

    return `
      <div class="disease-card ${d.severity}-severity" style="animation-delay:${idx * 0.1}s">
        <div class="dc-header">
          <div class="dc-left">
            <span class="dc-icon">${d.icon}</span>
            <div>
              <div class="dc-name">${d.name}</div>
              <div class="dc-pathogen">${d.pathogen}</div>
            </div>
          </div>
          <div class="severity-badge ${d.severity}">${sevIcon} ${sevLabel} Severity</div>
        </div>

        <div class="dc-section">
          <div class="dc-section-title">🔬 Symptoms</div>
          <p>${d.symptoms}</p>
        </div>

        <div class="dc-section">
          <div class="dc-section-title">📡 How It Spreads</div>
          <p>${d.spread}</p>
        </div>

        <div class="dc-treatments">
          <div class="treatment-block organic">
            <div class="treatment-label">🌿 Organic / Biological</div>
            <p>${d.organic}</p>
          </div>
          <div class="treatment-block chemical">
            <div class="treatment-label">💊 Chemical Treatment</div>
            <p>${d.chemical}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function setSeverity(sev, el) {
  selectedSeverity = sev;
  document.querySelectorAll('.sev-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  if (selectedCrop) {
    const data = DISEASE_DB[selectedCrop];
    if (data) renderDiseaseCards(data);
  }
}


