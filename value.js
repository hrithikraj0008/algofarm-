'use strict';

// ══════════════════════════════════════════
//  VALUE ADDITION DATABASE
// ══════════════════════════════════════════
const VALUE_DATA = [
  {
    name: 'Turmeric', emoji: '🟡', category: 'spice',
    rawPrice: 14, processedPrice: 300,
    processedForm: 'Turmeric Powder',
    multiplier: '3x', multValue: 3, unit: '₹/kg',
    defaultYield: 2500, defaultCost: 30000,
    processingCostPerKg: 12, processingInvestment: 50000,
    steps: ['Clean & Dry', 'Polishing', 'Grinding', 'Sieving', 'Packaging'],
    investment: '₹50,000', payback: '6 months',
    tags: ['spice'],
  },
  {
    name: 'Ginger', emoji: '🫚', category: 'spice',
    rawPrice: 40, processedPrice: 350,
    processedForm: 'Dry Ginger / Ginger Powder',
    multiplier: '4x', multValue: 4, unit: '₹/kg',
    defaultYield: 6000, defaultCost: 45000,
    processingCostPerKg: 30, processingInvestment: 30000,
    steps: ['Wash & Peel', 'Sun Dry (7 days)', 'Grind', 'Sieve', 'Pack & Export'],
    investment: '₹30,000', payback: '4 months',
    tags: ['spice'],
  },
  {
    name: 'Milk', emoji: '🥛', category: 'dairy',
    rawPrice: 35, processedPrice: 350,
    processedForm: 'Paneer / Cheese',
    multiplier: '10x', multValue: 10, unit: '₹/litre',
    defaultYield: 10000, defaultCost: 50000,
    processingCostPerKg: 20, processingInvestment: 15000,
    steps: ['Collect Fresh Milk', 'Heat & Coagulate', 'Strain Whey', 'Press & Set', 'Package & Sell'],
    investment: '₹15,000', payback: '3 months',
    tags: ['dairy'],
  },
  {
    name: 'Milk', emoji: '🧈', category: 'dairy',
    rawPrice: 35, processedPrice: 500,
    processedForm: 'Ghee / Clarified Butter',
    multiplier: '8x', multValue: 8, unit: '₹/litre',
    defaultYield: 10000, defaultCost: 50000,
    processingCostPerKg: 25, processingInvestment: 20000,
    steps: ['Collect Cream', 'Churn to Butter', 'Slow Heat', 'Clarify', 'Bottle & Brand'],
    investment: '₹20,000', payback: '5 months',
    tags: ['dairy'],
  },
  {
    name: 'Mango', emoji: '🥭', category: 'fruit',
    rawPrice: 20, processedPrice: 120,
    processedForm: 'Mango Pulp / Jam',
    multiplier: '4x', multValue: 4, unit: '₹/kg',
    defaultYield: 5000, defaultCost: 35000,
    processingCostPerKg: 15, processingInvestment: 80000,
    steps: ['Grade & Wash', 'Peel & De-seed', 'Pulp & Blend', 'Pasteurize', 'Aseptic Packing'],
    investment: '₹80,000', payback: '1 season',
    tags: ['fruit'],
  },
  {
    name: 'Tomato', emoji: '🍅', category: 'fruit',
    rawPrice: 8, processedPrice: 80,
    processedForm: 'Tomato Puree / Ketchup',
    multiplier: '7x', multValue: 7, unit: '₹/kg',
    defaultYield: 12000, defaultCost: 40000,
    processingCostPerKg: 8, processingInvestment: 60000,
    steps: ['Wash & Sort', 'Blanch at 90°C', 'Peel & Pulp', 'Cook & Season', 'Bottle & Label'],
    investment: '₹60,000', payback: '8 months',
    tags: ['fruit'],
  },
  {
    name: 'Sunflower', emoji: '🌻', category: 'oil',
    rawPrice: 58, processedPrice: 160,
    processedForm: 'Cold-pressed Edible Oil',
    multiplier: '3x', multValue: 3, unit: '₹/kg seed',
    defaultYield: 600, defaultCost: 15000,
    processingCostPerKg: 20, processingInvestment: 120000,
    steps: ['Dry Seeds', 'Cold Press', 'Filter & Settle', 'Bottle', 'Brand & Sell Local'],
    investment: '₹1.2L', payback: '10 months',
    tags: ['oil'],
  },
  {
    name: 'Lemongrass', emoji: '🌿', category: 'oil',
    rawPrice: 5, processedPrice: 800,
    processedForm: 'Lemongrass Essential Oil',
    multiplier: '10x', multValue: 10, unit: '₹/kg grass',
    defaultYield: 8000, defaultCost: 20000,
    processingCostPerKg: 3, processingInvestment: 250000,
    steps: ['Harvest Fresh', 'Steam Distil (3–4 hrs)', 'Separate Oil/Water', 'Filter & Test', 'Pack in Glass Vials'],
    investment: '₹2.5L', payback: '14 months',
    tags: ['oil'],
  },
  {
    name: 'Cotton', emoji: '💮', category: 'fiber',
    rawPrice: 72, processedPrice: 250,
    processedForm: 'Ginned Cotton / Yarn',
    multiplier: '3.5x', multValue: 3.5, unit: '₹/kg raw',
    defaultYield: 400, defaultCost: 30000,
    processingCostPerKg: 30, processingInvestment: 300000,
    steps: ['Harvest & Dry', 'Gin (Seed Removal)', 'Clean & Bale', 'Spin to Yarn', 'Sell to Textiles'],
    investment: '₹3L', payback: '18 months',
    tags: ['fiber'],
  },
  {
    name: 'Bamboo', emoji: '🎋', category: 'fiber',
    rawPrice: 8, processedPrice: 500,
    processedForm: 'Bamboo Furniture / Craft',
    multiplier: '8x', multValue: 8, unit: '₹/kg raw',
    defaultYield: 5000, defaultCost: 10000,
    processingCostPerKg: 50, processingInvestment: 50000,
    steps: ['Cut Mature Culms', 'Treat & Season', 'Shape & Join', 'Polish & Finish', 'Direct Market'],
    investment: '₹50,000', payback: '1 year',
    tags: ['fiber'],
  },
  {
    name: 'Moringa', emoji: '🌱', category: 'spice',
    rawPrice: 15, processedPrice: 600,
    processedForm: 'Moringa Powder (Export)',
    multiplier: '5x', multValue: 5, unit: '₹/kg leaves',
    defaultYield: 4000, defaultCost: 18000,
    processingCostPerKg: 10, processingInvestment: 40000,
    steps: ['Harvest Leaves', 'Shade Dry', 'Grind Fine', 'Sieve & Pack', 'Export Certified'],
    investment: '₹40,000', payback: '6 months',
    tags: ['spice'],
  },
  {
    name: 'Aloe Vera', emoji: '🌵', category: 'oil',
    rawPrice: 5, processedPrice: 200,
    processedForm: 'Aloe Vera Gel (Cosmetic)',
    multiplier: '7x', multValue: 7, unit: '₹/kg leaf',
    defaultYield: 10000, defaultCost: 15000,
    processingCostPerKg: 15, processingInvestment: 60000,
    steps: ['Harvest Leaves', 'Fillet & Extract Gel', 'Stabilize & Filter', 'Add Natural Preservatives', 'Bottle & Brand'],
    investment: '₹60,000', payback: '10 months',
    tags: ['oil'],
  },
  {
    name: 'Maize', emoji: '🌽', category: 'spice',
    rawPrice: 20, processedPrice: 40,
    processedForm: 'Corn Flour / Cattle Feed',
    multiplier: '2x', multValue: 2, unit: '₹/kg',
    defaultYield: 2500, defaultCost: 15000,
    processingCostPerKg: 5, processingInvestment: 40000,
    steps: ['Sun Dry', 'Grind/Mill', 'Sieve', 'Package'],
    investment: '₹40,000', payback: '8 months',
    tags: ['spice'],
  },
  {
    name: 'Tomato', emoji: '🍅', category: 'spice',
    rawPrice: 15, processedPrice: 90,
    processedForm: 'Tomato Ketchup / Puree',
    multiplier: '6x', multValue: 6, unit: '₹/kg',
    defaultYield: 10000, defaultCost: 40000,
    processingCostPerKg: 10, processingInvestment: 50000,
    steps: ['Wash', 'Boil', 'Pulp', 'Add Preservatives', 'Bottle'],
    investment: '₹50,000', payback: '4 months',
    tags: ['spice'],
  },
  {
    name: 'Potato', emoji: '🥔', category: 'spice',
    rawPrice: 15, processedPrice: 60,
    processedForm: 'Potato Chips / Fries',
    multiplier: '4x', multValue: 4, unit: '₹/kg',
    defaultYield: 8000, defaultCost: 35000,
    processingCostPerKg: 12, processingInvestment: 60000,
    steps: ['Wash & Slice', 'Blanch', 'Fry', 'Season', 'Package'],
    investment: '₹60,000', payback: '5 months',
    tags: ['spice'],
  },
  {
    name: 'Soybean', emoji: '🫘', category: 'spice',
    rawPrice: 45, processedPrice: 135,
    processedForm: 'Soy Milk / Tofu',
    multiplier: '3x', multValue: 3, unit: '₹/kg',
    defaultYield: 1000, defaultCost: 18000,
    processingCostPerKg: 15, processingInvestment: 45000,
    steps: ['Soak', 'Grind', 'Boil & Filter', 'Coagulate (for Tofu)', 'Package'],
    investment: '₹45,000', payback: '6 months',
    tags: ['dairy'], // mimicking dairy
  },
  {
    name: 'Groundnut', emoji: '🥜', category: 'oil',
    rawPrice: 60, processedPrice: 240,
    processedForm: 'Peanut Butter / Cold-Pressed Oil',
    multiplier: '4x', multValue: 4, unit: '₹/kg',
    defaultYield: 800, defaultCost: 16000,
    processingCostPerKg: 20, processingInvestment: 75000,
    steps: ['Roast', 'De-skin', 'Grind thoroughly', 'Add Salt/Honey', 'Jar Packaging'],
    investment: '₹75,000', payback: '7 months',
    tags: ['oil'],
  }
];

// ══════════════════════════════════════════
//  PROCESSING METHODS
// ══════════════════════════════════════════
const METHODS = [
  {
    icon: '☀️', name: 'Solar Drying',
    investment: '₹8,000 – ₹25,000', roi: '200–400%', space: '100–500 sq ft',
    desc: 'Use solar tunnel dryers to dry spices, vegetables, and fruits without electricity. Low-cost, highly effective for turmeric, chilli, moringa.',
  },
  {
    icon: '⚙️', name: 'Mini Oil Expeller',
    investment: '₹50,000 – ₹1.5L', roi: '150–300%', space: '200 sq ft',
    desc: 'Cold-press edible oils from sunflower, coconut, groundnut, or sesame. Premium unrefined oil sells at 3x refined oil price in urban markets.',
  },
  {
    icon: '🧪', name: 'Steam Distillation',
    investment: '₹1.5L – ₹5L', roi: '400–800%', space: '300–700 sq ft',
    desc: 'Extract essential oils from lemongrass, lavender, rose, and eucalyptus. 1 kg of essential oil can fetch ₹2,000–₹15,000 in B2B fragrance market.',
  },
  {
    icon: '🫙', name: 'Pickle & Preserve',
    investment: '₹10,000 – ₹40,000', roi: '300–600%', space: '150 sq ft',
    desc: 'Convert seasonal surplus mango, lemon, and vegetables into pickles and preserves. Zero complex equipment needed. Strong home-brand potential.',
  },
  {
    icon: '🍫', name: 'Food Processing Unit',
    investment: '₹2L – ₹10L', roi: '200–500%', space: '500–1500 sq ft',
    desc: 'Set up a cottage-scale unit for jam, juice, or dairy products. PMFME scheme provides 35% subsidy on machinery for food processing microenterprises.',
  },
  {
    icon: '🌾', name: 'Flour & Milling',
    investment: '₹30,000 – ₹1.2L', roi: '150–250%', space: '200–400 sq ft',
    desc: 'Mill wheat, maize, millets, or lentils to flour. Multi-grain flour units are extremely profitable in urban health-food markets. Sell directly or via D2C.',
  },
];

// ══════════════════════════════════════════
//  SUCCESS STORIES
// ══════════════════════════════════════════
const STORIES = [
  {
    avatar: '👨‍🌾', name: 'Raju Patel', location: 'Erode, Tamil Nadu',
    crop: 'Turmeric → Powder',
    quote: 'I used to earn ₹1.5 lakh per acre selling raw turmeric. After setting up a small grinding unit, I now earn ₹4.5 lakh per acre. My investment of ₹60,000 paid off in just 4 months.',
    result: '3x Income in 1 Season',
  },
  {
    avatar: '👩‍🌾', name: 'Meena Devi', location: 'Muzaffarpur, Bihar',
    crop: 'Lychee → Jam & Juice',
    quote: 'We formed an SHG and started making lychee jam. Earlier we sold lychees at ₹30/kg on a good day. Now our branded jars sell for ₹200/500g. Urban markets love local artisan products.',
    result: '6x Revenue Increase',
  },
  {
    avatar: '👨‍🌾', name: 'Krishnaswamy', location: 'Coimbatore, Tamil Nadu',
    crop: 'Lemongrass → Essential Oil',
    quote: 'My 2-acre lemongrass farm was just giving subsistence income. Now I send 10 kg of essential oil per month to a cosmetics company in Bangalore. Annual income jumped from ₹80,000 to ₹9 lakh.',
    result: '11x Annual Income',
  },
  {
    avatar: '👩‍🌾', name: 'Santosh Kaur', location: 'Amritsar, Punjab',
    crop: 'Milk → Ghee & Paneer',
    quote: 'I have 5 buffaloes producing 30 litres/day. Selling raw milk gave ₹35/L = ₹1,050/day. Making ghee and paneer and selling directly to households now gives me ₹4,500/day.',
    result: '4.3x Daily Revenue',
  },
];

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
let currentVCFilter = 'all';

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
document.addEventListener('DOMContentLoaded', () => {
  populateCalcCropSelect();
  renderValueGrid();
  renderMethods();
  renderStories();
});

// ══════════════════════════════════════════
//  FARMING COMPARISON CALCULATOR
// ══════════════════════════════════════════
function populateCalcCropSelect() {
  const sel = document.getElementById('calcCrop');
  if (!sel) return;
  const unique = VALUE_DATA.reduce((acc, v) => {
    if (!acc.find(a => a.name === v.name && a.processedForm === v.processedForm)) acc.push(v);
    return acc;
  }, []);
  sel.innerHTML = '<option value="">— Choose Crop —</option>' +
    unique.map(v => `<option value="${v.name}|${v.processedForm}">${v.emoji} ${v.name} → ${v.processedForm}</option>`).join('');
}

function onCalcCropChange() {
  const val = document.getElementById('calcCrop').value;
  if (!val) return;
  const [cropName, procForm] = val.split('|');
  const item = VALUE_DATA.find(v => v.name === cropName && v.processedForm === procForm);
  if (!item) return;
  // Auto-fill sensible defaults
  const yieldEl = document.getElementById('calcYield');
  const costEl  = document.getElementById('calcCost');
  if (yieldEl && !yieldEl.value) yieldEl.value = item.defaultYield;
  if (costEl  && !costEl.value)  costEl.value  = item.defaultCost;
}

function runComparison() {
  const cropVal   = document.getElementById('calcCrop').value;
  const acresVal  = parseFloat(document.getElementById('calcAcres').value);
  const yieldVal  = parseFloat(document.getElementById('calcYield').value);
  const costVal   = parseFloat(document.getElementById('calcCost').value) || 0;

  if (!cropVal)          { showToast('⚠️ Please select a crop', 'warn'); return; }
  if (!acresVal || acresVal <= 0) { showToast('⚠️ Enter a valid land area', 'warn'); return; }
  if (!yieldVal || yieldVal <= 0) { showToast('⚠️ Enter a valid yield per acre', 'warn'); return; }

  const [cropName, procForm] = cropVal.split('|');
  const item = VALUE_DATA.find(v => v.name === cropName && v.processedForm === procForm);
  if (!item) return;

  const totalKg = acresVal * yieldVal;

  // ── Normal Farming ──
  const normalRevenue  = Math.round(totalKg * item.rawPrice);
  const normalFarmCost = Math.round(costVal * acresVal);
  const normalNet      = normalRevenue - normalFarmCost;

  // ── Advanced (Value-Added) Farming ──
  const advRevenue     = Math.round(totalKg * item.processedPrice);
  const advFarmCost    = normalFarmCost;
  const advProcCost    = Math.round(totalKg * item.processingCostPerKg);
  const advInvestAmort = Math.round(item.processingInvestment / 3); // spread over 3 years
  const advTotalCost   = advFarmCost + advProcCost + advInvestAmort;
  const advNet         = advRevenue - advTotalCost;

  const extraProfit    = advNet - normalNet;
  const gainPct        = Math.round((extraProfit / Math.max(normalNet, 1)) * 100);

  // Show results
  document.getElementById('comparisonResult').style.display = 'block';
  document.getElementById('calcEmpty').style.display = 'none';

  // Banner numbers
  document.getElementById('normalNetProfit').textContent  = `₹${fmt(normalNet)}`;
  document.getElementById('advancedNetProfit').textContent = `₹${fmt(advNet)}`;
  document.getElementById('advancedDesc').textContent = `Process to ${item.processedForm}`;

  const gainEl = document.getElementById('gainText');
  gainEl.innerHTML = `
    <span class="gain-number">+₹${fmt(extraProfit)}</span>
    <span class="gain-label">Extra with value-addition<br/>(${gainPct}% more)</span>
  `;

  // Normal breakdown
  document.getElementById('normalBreakdown').innerHTML = buildBreakdown([
    { label: `Total Harvest (${fmt(totalKg)} kg × ₹${item.rawPrice})`, val: `₹${fmt(normalRevenue)}`, type: 'income' },
    { label: `Farming Cost (${acresVal} acres × ₹${fmt(costVal)})`, val: `− ₹${fmt(normalFarmCost)}`, type: 'cost' },
    { label: 'Net Profit', val: `₹${fmt(normalNet)}`, type: normalNet >= 0 ? 'total' : 'loss' },
    { label: 'Per Acre Profit', val: `₹${fmt(Math.round(normalNet / acresVal))}`, type: 'sub' },
  ]);

  // Advanced breakdown
  document.getElementById('advancedBreakdown').innerHTML = buildBreakdown([
    { label: `Sales Revenue (${item.processedForm})`, val: `₹${fmt(advRevenue)}`, type: 'income' },
    { label: `Farming Cost`, val: `− ₹${fmt(advFarmCost)}`, type: 'cost' },
    { label: `Processing Cost (₹${item.processingCostPerKg}/kg)`, val: `− ₹${fmt(advProcCost)}`, type: 'cost' },
    { label: `Equip. Investment (÷3 yrs)`, val: `− ₹${fmt(advInvestAmort)}`, type: 'cost' },
    { label: 'Net Profit', val: `₹${fmt(advNet)}`, type: advNet >= 0 ? 'total' : 'loss' },
    { label: 'Per Acre Profit', val: `₹${fmt(Math.round(advNet / acresVal))}`, type: 'sub' },
  ]);

  // Insight
  document.getElementById('calcInsight').innerHTML = `
    <span class="ci-icon">💡</span>
    <div>
      <strong>Key Insight:</strong> By converting your <strong>${fmt(totalKg)} kg</strong> of ${item.name} into 
      <strong>${item.processedForm}</strong>, you can earn an extra 
      <strong style="color:var(--green-700)">₹${fmt(extraProfit)}</strong> per year
      — that's <strong>${item.multiplier}</strong> times the raw selling profit.
      The processing investment of <strong>${item.investment}</strong> pays back in just <strong>${item.payback}</strong>.
    </div>
  `;

  showToast('✅ Comparison ready!');
}

function buildBreakdown(rows) {
  return rows.map(r => `
    <div class="bk-row ${r.type}">
      <span class="bk-label">${r.label}</span>
      <span class="bk-val">${r.val}</span>
    </div>
  `).join('');
}

function fmt(n) {
  return Math.abs(n).toLocaleString('en-IN');
}

// ══════════════════════════════════════════
//  VALUE GRID
// ══════════════════════════════════════════
function setVCFilter(cat, el) {
  currentVCFilter = cat;
  document.querySelectorAll('.vc-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderValueGrid();
}

function renderValueGrid() {
  const grid = document.getElementById('valueGrid');
  if (!grid) return;

  const data = currentVCFilter === 'all'
    ? VALUE_DATA
    : VALUE_DATA.filter(v => v.tags.includes(currentVCFilter));

  grid.innerHTML = data.map((item, idx) => {
    const rawPct = Math.round((item.rawPrice / item.processedPrice) * 100);
    return `
      <div class="value-card" style="animation-delay:${idx * 0.06}s">
        <div class="vc-top">
          <span class="vc-emoji">${item.emoji}</span>
          <div class="multiplier-badge">${item.multiplier} Profit</div>
        </div>
        <div class="vc-name">${item.name}</div>
        <div class="vc-category">Raw → ${item.processedForm}</div>

        <div class="vc-comparison">
          <div class="comp-block raw">
            <div class="comp-label">Normal Farming</div>
            <div class="comp-price raw-price">₹${item.rawPrice}</div>
            <div class="comp-unit">${item.unit.split('→')[0].trim()}</div>
          </div>
          <div class="arrow-divider">→</div>
          <div class="comp-block processed">
            <div class="comp-label">Value-Added</div>
            <div class="comp-price proc-price">₹${item.processedPrice}</div>
            <div class="comp-unit">${item.unit.split('→').length > 1 ? item.unit.split('→')[1].trim() : item.unit}</div>
          </div>
        </div>

        <div class="mult-visual">
          <div class="mult-label-row">
            <span>Raw Value</span>
            <span style="color:var(--green-600)">Value-Added (${item.multiplier})</span>
          </div>
          <div class="mult-bar-wrap">
            <div class="mult-bar-raw" style="width:${rawPct}%"></div>
            <div class="mult-bar-proc" data-width="100" style="width:0%"></div>
          </div>
        </div>

        <div class="vc-process-steps">
          <div class="process-step-label">⚙️ Processing Steps</div>
          <div class="process-steps-flow">
            ${item.steps.map((s, i) => `
              <span class="ps-step">${s}</span>
              ${i < item.steps.length - 1 ? '<span class="ps-arrow">→</span>' : ''}
            `).join('')}
          </div>
        </div>

        <div style="display:flex;gap:8px;margin-top:0.75rem;padding-top:0.75rem;border-top:1px solid var(--border);font-size:0.75rem;color:var(--text-dim);">
          <span>💰 Setup: <strong style="color:var(--text-muted)">${item.investment}</strong></span>
          <span>•</span>
          <span>📅 Payback: <strong style="color:var(--text-muted)">${item.payback}</strong></span>
        </div>
      </div>
    `;
  }).join('');

  setTimeout(() => {
    grid.querySelectorAll('.mult-bar-proc[data-width]').forEach(bar => {
      bar.style.width = bar.getAttribute('data-width') + '%';
    });
  }, 200);
}

// ══════════════════════════════════════════
//  PROCESSING METHODS
// ══════════════════════════════════════════
function renderMethods() {
  const grid = document.getElementById('methodsGrid');
  if (!grid) return;
  grid.innerHTML = METHODS.map((m, idx) => `
    <div class="method-card" style="animation-delay:${idx * 0.07}s">
      <div class="method-header">
        <span class="method-icon">${m.icon}</span>
        <span class="method-name">${m.name}</span>
      </div>
      <div class="method-meta">
        <div class="method-meta-item">
          <div class="mm-label">Investment</div>
          <div class="mm-val">${m.investment}</div>
        </div>
        <div class="method-meta-item">
          <div class="mm-label">Expected ROI</div>
          <div class="mm-val" style="color:var(--green-600)">${m.roi}</div>
        </div>
        <div class="method-meta-item">
          <div class="mm-label">Space Needed</div>
          <div class="mm-val">${m.space}</div>
        </div>
        <div class="method-meta-item">
          <div class="mm-label">Category</div>
          <div class="mm-val">Processing</div>
        </div>
      </div>
      <p class="method-desc">${m.desc}</p>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
//  SUCCESS STORIES
// ══════════════════════════════════════════
function renderStories() {
  const grid = document.getElementById('storiesGrid');
  if (!grid) return;
  grid.innerHTML = STORIES.map((s, idx) => `
    <div class="story-card" style="animation-delay:${idx * 0.08}s">
      <div class="story-avatar">${s.avatar}</div>
      <p class="story-quote">"${s.quote}"</p>
      <div class="story-name">${s.name}</div>
      <div class="story-sub">📍 ${s.location} &nbsp;•&nbsp; ${s.crop}</div>
      <div class="story-result">📈 ${s.result}</div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════
function showToast(msg, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${msg}</span>`;
  if (type === 'warn') toast.style.borderColor = '#f59e0b';
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
