'use strict';

// ══════════════════════════════════════════
//  MARKET DATA
// ══════════════════════════════════════════
const MARKET_DATA = [
  { name: 'Turmeric',    emoji: '🟡', price: 14800, unit: '₹/quintal', msp: 10200, trend: 'rising',  change: +8.2,  market: 'Erode Mandi',    sparkle: [80,82,85,90,88,94,100] },
  { name: 'Saffron',     emoji: '🌸', price: 312000, unit: '₹/kg',     msp: 0,     trend: 'rising',  change: +5.1,  market: 'Srinagar',       sparkle: [75,78,80,82,85,90,100] },
  { name: 'Ginger',      emoji: '🫚', price: 6200,  unit: '₹/quintal', msp: 0,     trend: 'rising',  change: +12.4, market: 'Kozhikode',      sparkle: [60,68,72,80,88,92,100] },
  { name: 'Vanilla',     emoji: '🟤', price: 42000, unit: '₹/kg',      msp: 0,     trend: 'rising',  change: +3.8,  market: 'Pollachi',       sparkle: [85,87,88,90,92,95,100] },
  { name: 'Cardamom',    emoji: '💚', price: 1800,  unit: '₹/kg',      msp: 0,     trend: 'rising',  change: +6.5,  market: 'Kumily',         sparkle: [70,75,78,82,88,92,100] },
  { name: 'Dragon Fruit',emoji: '🫐', price: 125,   unit: '₹/kg',      msp: 0,     trend: 'rising',  change: +9.7,  market: 'Mumbai APMC',    sparkle: [55,62,70,78,86,92,100] },
  { name: 'Pomegranate', emoji: '🔴', price: 65,    unit: '₹/kg',      msp: 0,     trend: 'stable',  change: +0.8,  market: 'Nashik',         sparkle: [90,92,88,94,90,93,95] },
  { name: 'Strawberry',  emoji: '🍓', price: 120,   unit: '₹/kg',      msp: 0,     trend: 'stable',  change: -1.2,  market: 'Mahabaleshwar',  sparkle: [92,88,90,88,92,90,91] },
  { name: 'Moringa',     emoji: '🌱', price: 45,    unit: '₹/kg',      msp: 0,     trend: 'rising',  change: +4.3,  market: 'Dharmapuri',     sparkle: [65,70,75,80,85,90,95] },
  { name: 'Mango',       emoji: '🥭', price: 55,    unit: '₹/kg',      msp: 0,     trend: 'falling', change: -8.1,  market: 'Ratnagiri',      sparkle: [100,95,90,82,75,70,65] },
  { name: 'Rice',        emoji: '🌾', price: 2300,  unit: '₹/quintal', msp: 2183,  trend: 'stable',  change: +0.5,  market: 'NCDEX',          sparkle: [95,96,97,95,97,96,98] },
  { name: 'Wheat',       emoji: '🌾', price: 2150,  unit: '₹/quintal', msp: 2275,  trend: 'falling', change: -2.3,  market: 'NCDEX',          sparkle: [100,98,96,93,91,88,87] },
  { name: 'Cotton',      emoji: '💮', price: 7200,  unit: '₹/quintal', msp: 6620,  trend: 'falling', change: -5.4,  market: 'Rajkot',         sparkle: [100,94,90,86,82,79,78] },
  { name: 'Sunflower',   emoji: '🌻', price: 5800,  unit: '₹/quintal', msp: 6760,  trend: 'stable',  change: +1.8,  market: 'Bidar',          sparkle: [88,90,92,91,93,92,95] },
  { name: 'Black Pepper',emoji: '⚫', price: 480,   unit: '₹/kg',      msp: 0,     trend: 'rising',  change: +7.2,  market: 'Kochi',          sparkle: [68,72,76,82,88,92,100] },
  { name: 'Lemongrass',  emoji: '🌿', price: 28,    unit: '₹/kg',      msp: 0,     trend: 'stable',  change: +0.3,  market: 'Bareilly',       sparkle: [92,93,94,92,95,94,96] },
  { name: 'Aloe Vera',   emoji: '🌵', price: 18,    unit: '₹/kg',      msp: 0,     trend: 'rising',  change: +2.9,  market: 'Jodhpur',        sparkle: [80,83,85,88,90,92,95] },
  { name: 'Stevia',      emoji: '🍃', price: 280,   unit: '₹/kg',      msp: 0,     trend: 'rising',  change: +11.3, market: 'Pune',           sparkle: [55,62,70,80,88,94,100] },
  { name: 'Bamboo',      emoji: '🎋', price: 8,     unit: '₹/kg',      msp: 0,     trend: 'stable',  change: +0.0,  market: 'Assam',          sparkle: [90,90,90,91,90,90,91] },
  { name: 'Lavender',    emoji: '💜', price: 1200,  unit: '₹/kg (oil)',msp: 0,     trend: 'rising',  change: +4.7,  market: 'Kangra',         sparkle: [72,76,80,84,88,93,100] },
  { name: 'Maize',       emoji: '🌽', price: 2100,  unit: '₹/quintal', msp: 2090,  trend: 'stable',  change: +1.2,  market: 'Gulabbagh',      sparkle: [92,94,95,94,96,95,98] },
  { name: 'Soybean',     emoji: '🫘', price: 4600,  unit: '₹/quintal', msp: 4600,  trend: 'falling', change: -3.1,  market: 'Indore',         sparkle: [100,98,95,92,88,85,87] },
  { name: 'Groundnut',   emoji: '🥜', price: 6200,  unit: '₹/quintal', msp: 6377,  trend: 'stable',  change: -0.5,  market: 'Rajkot',         sparkle: [98,96,95,94,95,96,95] },
  { name: 'Potato',      emoji: '🥔', price: 1500,  unit: '₹/quintal', msp: 0,     trend: 'falling', change: -4.5,  market: 'Agra',           sparkle: [100,96,92,88,85,82,80] },
  { name: 'Onion',       emoji: '🧅', price: 2800,  unit: '₹/quintal', msp: 0,     trend: 'rising',  change: +14.2, market: 'Lasalgaon',      sparkle: [50,60,65,75,85,92,100] },
  { name: 'Tomato',      emoji: '🍅', price: 1800,  unit: '₹/quintal', msp: 0,     trend: 'stable',  change: +2.1,  market: 'Kolar',          sparkle: [85,88,90,85,92,95,95] },
  { name: 'Papaya',      emoji: '🍈', price: 22,    unit: '₹/kg',      msp: 0,     trend: 'rising',  change: +5.5,  market: 'Bengaluru',      sparkle: [75,78,82,85,88,94,100] },
];

// Add 7-day history
MARKET_DATA.forEach(c => {
  const base = c.price;
  c.history = c.sparkle.map((pct, i) => {
    return Math.round(base * (pct / 100) * (0.95 + Math.random() * 0.1));
  });
  c.history[6] = base;
});

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
let currentFilter = 'all';
let currentSort   = 'default';
let searchTerm    = '';

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
  updateSummaryBar();
  renderTopMovers();
  renderPriceGrid();
  renderInsights();
  populateChartSelect();
  setLastUpdated();
});

// ══════════════════════════════════════════
//  SUMMARY BAR
// ══════════════════════════════════════════
function updateSummaryBar() {
  const rising  = MARKET_DATA.filter(c => c.trend === 'rising').length;
  const falling = MARKET_DATA.filter(c => c.trend === 'falling').length;
  const stable  = MARKET_DATA.filter(c => c.trend === 'stable').length;
  const topEarner = [...MARKET_DATA].sort((a,b) => b.change - a.change)[0];

  document.getElementById('risingCount').textContent  = rising;
  document.getElementById('fallingCount').textContent = falling;
  document.getElementById('stableCount').textContent  = stable;
  document.getElementById('topCrop').textContent      = `${topEarner.emoji} ${topEarner.name}`;
}

function setLastUpdated() {
  const el = document.getElementById('lastUpdated');
  if (!el) return;
  const now = new Date();
  el.textContent = now.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
}

// ══════════════════════════════════════════
//  TOP MOVERS
// ══════════════════════════════════════════
function renderTopMovers() {
  const container = document.getElementById('topMovers');
  if (!container) return;

  const sorted = [...MARKET_DATA]
    .sort((a,b) => Math.abs(b.change) - Math.abs(a.change))
    .slice(0, 5);

  container.innerHTML = sorted.map(crop => {
    const dir = crop.change >= 0 ? 'up' : 'down';
    return `
      <div class="mover-card ${dir}">
        <div class="mover-top">
          <span class="mover-emoji">${crop.emoji}</span>
          <span class="mover-change ${dir}">
            ${crop.change >= 0 ? '▲' : '▼'} ${Math.abs(crop.change).toFixed(1)}%
          </span>
        </div>
        <div class="mover-name">${crop.name}</div>
        <div>
          <span class="mover-price">${formatPrice(crop)}</span>
          <span class="mover-unit">${crop.unit}</span>
        </div>
        <div style="margin-top:0.5rem;font-size:0.72rem;color:var(--text-dim);">${crop.market}</div>
      </div>
    `;
  }).join('');
}

// ══════════════════════════════════════════
//  PRICE GRID
// ══════════════════════════════════════════
function renderPriceGrid() {
  const grid = document.getElementById('priceGrid');
  if (!grid) return;

  let data = [...MARKET_DATA];

  // Filter
  if (currentFilter !== 'all') data = data.filter(c => c.trend === currentFilter);

  // Search
  if (searchTerm) data = data.filter(c => c.name.toLowerCase().includes(searchTerm));

  // Sort
  if (currentSort === 'price-high') data.sort((a,b) => b.price - a.price);
  else if (currentSort === 'price-low') data.sort((a,b) => a.price - b.price);
  else if (currentSort === 'change-high') data.sort((a,b) => b.change - a.change);
  else if (currentSort === 'name') data.sort((a,b) => a.name.localeCompare(b.name));

  // Count label
  const label = document.getElementById('resultCountLabel');
  if (label) label.textContent = `Showing ${data.length} of ${MARKET_DATA.length} crops`;

  grid.innerHTML = data.map((crop, idx) => {
    const trendBadge = crop.trend === 'rising'
      ? `<span class="trend-up">▲ ${crop.change.toFixed(1)}%</span>`
      : crop.trend === 'falling'
        ? `<span class="trend-down">▼ ${Math.abs(crop.change).toFixed(1)}%</span>`
        : `<span style="color:var(--earth-400);font-size:0.78rem;font-weight:600;">⚡ Stable</span>`;

    const sparkBars = crop.sparkle.map((h, i) => {
      const isLast = i === crop.sparkle.length - 1;
      const isUp = i > 0 ? h >= crop.sparkle[i-1] : true;
      return `<div class="spark-bar ${isUp ? 'up' : 'down'}" style="height:${h * 0.24}px"></div>`;
    }).join('');

    const mspNote = crop.msp > 0
      ? `<span class="pc-msp">MSP: <span class="pc-msp-val">₹${crop.msp.toLocaleString('en-IN')}</span></span>`
      : `<span class="pc-msp">Market: <span class="pc-msp-val">${crop.market}</span></span>`;

    return `
      <div class="price-card" style="animation-delay:${idx * 0.04}s">
        <div class="pc-header">
          <div class="pc-left">
            <span class="pc-emoji">${crop.emoji}</span>
            <div>
              <div class="pc-name">${crop.name}</div>
              <div class="pc-market">${crop.market}</div>
            </div>
          </div>
          ${trendBadge}
        </div>
        <div class="pc-body">
          <div class="pc-price">
            <span class="pc-price-amount">${formatPrice(crop)}</span>
            <span class="pc-price-unit">${crop.unit}</span>
          </div>
          <div class="pc-meta">
            ${mspNote}
            <div class="mini-sparkline">${sparkBars}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ══════════════════════════════════════════
//  FILTER & SORT
// ══════════════════════════════════════════
function setFilter(f, el) {
  currentFilter = f;
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderPriceGrid();
}

function filterMarket() {
  searchTerm = document.getElementById('cropSearch').value.toLowerCase();
  renderPriceGrid();
}

function sortMarket() {
  currentSort = document.getElementById('sortBy').value;
  renderPriceGrid();
}

// ══════════════════════════════════════════
//  CHART
// ══════════════════════════════════════════
function populateChartSelect() {
  const sel = document.getElementById('chartCropSelect');
  if (!sel) return;
  sel.innerHTML = '<option value="">Select crop for chart</option>' +
    MARKET_DATA.map(c => `<option value="${c.name}">${c.emoji} ${c.name}</option>`).join('');
}

function updateChart() {
  const cropName = document.getElementById('chartCropSelect').value;
  const area = document.getElementById('chartArea');
  if (!area) return;

  if (!cropName) {
    area.innerHTML = `
      <div class="chart-placeholder">
        <span style="font-size:2.5rem">📊</span>
        <p>Select a crop above to view its 7-day price history</p>
      </div>`;
    return;
  }

  const crop = MARKET_DATA.find(c => c.name === cropName);
  if (!crop) return;

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'];
  const prices = crop.history;
  const minP = Math.min(...prices) * 0.95;
  const maxP = Math.max(...prices) * 1.05;
  const range = maxP - minP;

  const W = 700, H = 200, pad = { t: 20, r: 20, b: 40, l: 70 };
  const chartW = W - pad.l - pad.r;
  const chartH = H - pad.t - pad.b;

  const pts = prices.map((p, i) => {
    const x = pad.l + (i / (prices.length - 1)) * chartW;
    const y = pad.t + chartH - ((p - minP) / range) * chartH;
    return { x, y, price: p, day: days[i] };
  });

  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = `${pathD} L ${pts[pts.length-1].x} ${H - pad.b} L ${pts[0].x} ${H - pad.b} Z`;

  const lineColor = crop.trend === 'rising' ? '#22c55e' : crop.trend === 'falling' ? '#f87171' : '#eab308';

  // Y-axis labels
  const yLabels = [0, 0.25, 0.5, 0.75, 1].map(f => ({
    y: pad.t + chartH * (1 - f),
    val: Math.round(minP + range * f)
  }));

  const svg = `
    <svg class="price-chart-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" style="overflow:visible">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${lineColor}" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="${lineColor}" stop-opacity="0.02"/>
        </linearGradient>
      </defs>

      <!-- Grid lines -->
      ${yLabels.map(l => `
        <line x1="${pad.l}" y1="${l.y}" x2="${W - pad.r}" y2="${l.y}"
          stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        <text x="${pad.l - 8}" y="${l.y + 4}" text-anchor="end"
          font-size="10" fill="#6b7280">${l.val >= 1000 ? (l.val/1000).toFixed(1)+'K' : l.val}</text>
      `).join('')}

      <!-- Area fill -->
      <path d="${areaD}" fill="url(#areaGrad)"/>

      <!-- Line -->
      <path d="${pathD}" fill="none" stroke="${lineColor}" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Data points -->
      ${pts.map((p, i) => `
        <circle cx="${p.x}" cy="${p.y}" r="5" fill="${lineColor}" stroke="#0a0f0a" stroke-width="2"/>
      `).join('')}

      <!-- X-axis labels -->
      ${pts.map(p => `
        <text x="${p.x}" y="${H - 8}" text-anchor="middle"
          font-size="10" fill="#6b7280">${p.day}</text>
      `).join('')}

      <!-- Current price label -->
      <text x="${pts[pts.length-1].x}" y="${pts[pts.length-1].y - 10}"
        text-anchor="middle" font-size="11" font-weight="bold" fill="${lineColor}">
        ${formatPriceShort(crop)}
      </text>
    </svg>
  `;

  area.innerHTML = svg;

  // Update legend
  const legend = document.getElementById('chartLegend');
  if (legend) {
    legend.innerHTML = `
      <div class="legend-item">
        <div class="legend-color" style="background:${lineColor}"></div>
        ${crop.name} (7-day)
      </div>
      <div style="font-size:0.78rem;color:var(--text-muted);">
        Current: <strong style="color:${lineColor}">${formatPrice(crop)} ${crop.unit}</strong>
        &nbsp;|&nbsp; Change: <strong style="color:${lineColor}">${crop.change > 0 ? '+' : ''}${crop.change}%</strong>
      </div>
    `;
  }
}

// ══════════════════════════════════════════
//  INSIGHTS
// ══════════════════════════════════════════
function renderInsights() {
  const container = document.getElementById('insightsGrid');
  if (!container) return;

  const insights = [
    {
      icon: '🟡',
      type: 'buy',
      title: 'Turmeric — Strong Buying Opportunity',
      body: 'Turmeric prices are rising steadily (+8.2%) driven by export demand from USA and Europe. The Erode mandi has seen 15% volume increase this week.',
      action: 'BUY'
    },
    {
      icon: '🌸',
      type: 'hold',
      title: 'Saffron — Hold for Peak Season',
      body: 'Saffron prices are above MSP and trending up. Wait for October harvest peak when prices typically jump 15–20% more before selling.',
      action: 'HOLD'
    },
    {
      icon: '🥭',
      type: 'sell',
      title: 'Mango — Sell Now Before Price Drop',
      body: 'Mango prices have fallen 8.1% and the trend is downward. Post-peak-season glut is expected. Sell remaining stock immediately to avoid further losses.',
      action: 'SELL'
    },
    {
      icon: '🍃',
      type: 'buy',
      title: 'Stevia — Emerging High-Return Crop',
      body: 'Stevia prices surged 11.3% this week as demand from sugar-free food manufacturers spikes. Consider planting for next season.',
      action: 'BUY'
    },
    {
      icon: '💮',
      type: 'sell',
      title: 'Cotton — Below MSP Alert',
      body: 'Cotton is trading below MSP (₹7,200 vs MSP ₹6,620). Prices falling due to import surplus. Register at e-NAM for government procurement.',
      action: 'SELL'
    },
    {
      icon: '⚫',
      type: 'buy',
      title: 'Black Pepper — Kochi Market Rally',
      body: 'Black pepper prices are rallying (+7.2%) as drought in Vietnam reduces global supply. Indian pepper exporters benefit significantly.',
      action: 'BUY'
    },
  ];

  container.innerHTML = insights.map(ins => `
    <div class="insight-card">
      <div class="insight-icon ${ins.type}">${ins.icon}</div>
      <div class="insight-body">
        <h4>${ins.title}</h4>
        <p>${ins.body}</p>
        <span class="insight-action ${ins.type}">${ins.action}</span>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════
function formatPrice(crop) {
  if (crop.price >= 1000) {
    if (crop.price >= 100000) return '₹' + (crop.price/100000).toFixed(1) + 'L';
    return '₹' + crop.price.toLocaleString('en-IN');
  }
  return '₹' + crop.price;
}

function formatPriceShort(crop) {
  if (crop.price >= 100000) return '₹' + (crop.price/100000).toFixed(1) + 'L';
  if (crop.price >= 1000)   return '₹' + (crop.price/1000).toFixed(1) + 'K';
  return '₹' + crop.price;
}
