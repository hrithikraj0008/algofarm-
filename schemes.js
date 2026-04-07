'use strict';

const SCHEMES = [
  {
    id: 'pmkisan',
    name: 'PM Kisan Samman Nidhi',
    abbr: 'PM-KISAN',
    icon: '💰',
    category: 'income',
    benefit: '₹6,000/year (3 installments)',
    desc: 'Direct income support of ₹6,000 per year to land-holding farmer families across the country, credited directly to their bank accounts.',
    tags: ['All Farmers', 'Direct DBT', 'No Application Fee'],
    eligibility: 'All farmer families with cultivable land',
    portal: 'pmkisan.gov.in',
    highlight: true,
  },
  {
    id: 'pmfby',
    name: 'Pradhan Mantri Fasal Bima Yojana',
    abbr: 'PMFBY',
    icon: '🛡️',
    category: 'insurance',
    benefit: 'Up to 95% claim coverage',
    desc: 'Comprehensive crop insurance covering losses due to natural calamities, pests, and diseases. Premium as low as 1.5% for Rabi and 2% for Kharif crops.',
    tags: ['Crop Insurance', 'Low Premium', 'Natural Calamity'],
    eligibility: 'All farmers growing notified crops in notified areas',
    portal: 'pmfby.gov.in',
    highlight: false,
  },
  {
    id: 'kcc',
    name: 'Kisan Credit Card',
    abbr: 'KCC',
    icon: '💳',
    category: 'loan',
    benefit: 'Credit up to ₹3 lakh @ 4% interest',
    desc: 'Flexible credit for cultivation expenses, post-harvest needs, and farm maintenance. Interest subvention brings effective rate to just 4% for timely repayment.',
    tags: ['Short-term Credit', '4% Interest', 'Easy Renewal'],
    eligibility: 'All farmers, tenant farmers, sharecroppers, SHGs',
    portal: 'agricoop.gov.in',
    highlight: false,
  },
  {
    id: 'soilhealth',
    name: 'Soil Health Card Scheme',
    abbr: 'SHC',
    icon: '🌱',
    category: 'subsidy',
    benefit: 'Free soil testing & recommendations',
    desc: 'Free soil health card with crop-wise nutrient recommendations to help farmers use the right amount of fertilizers for improved productivity and reduced input costs.',
    tags: ['Free Service', 'Soil Testing', 'Fertilizer Advice'],
    eligibility: 'All farmers across India',
    portal: 'soilhealth.dac.gov.in',
    highlight: false,
  },
  {
    id: 'pmkmy',
    name: 'PM Kisan Mandhan Yojana',
    abbr: 'PM-KMY',
    icon: '👴',
    category: 'income',
    benefit: '₹3,000/month pension after 60',
    desc: 'Voluntary pension scheme for small and marginal farmers. Contribution of ₹55–₹200/month based on age, with equal government contribution.',
    tags: ['Pension Scheme', 'Retirement', 'Small Farmers'],
    eligibility: 'Small and marginal farmers aged 18–40',
    portal: 'pmkmy.gov.in',
    highlight: false,
  },
  {
    id: 'enam',
    name: 'Electronic National Agriculture Market',
    abbr: 'e-NAM',
    icon: '📊',
    category: 'market',
    benefit: 'Better price discovery & pan-India access',
    desc: 'Online trading platform for agricultural commodities at mandis across India. Farmers can access buyers from multiple states for better price realization.',
    tags: ['Online Trading', 'Pan-India', 'Better Prices'],
    eligibility: 'Farmers registered in state agriculture portal',
    portal: 'enam.gov.in',
    highlight: false,
  },
  {
    id: 'rkvy',
    name: 'Rashtriya Krishi Vikas Yojana',
    abbr: 'RKVY-RAFTAAR',
    icon: '🚀',
    category: 'subsidy',
    benefit: 'Up to ₹25 lakh grant/project',
    desc: 'Funding for innovative agricultural projects, agri-startups, and farm mechanization. Includes incubation support and skill development for agri-entrepreneurs.',
    tags: ['Innovation', 'Agri-startup', 'Grants'],
    eligibility: 'Farmer groups, FPOs, agri-entrepreneurs',
    portal: 'rkvy.nic.in',
    highlight: false,
  },
  {
    id: 'pmdaksh',
    name: 'PM Daksh Yojana',
    abbr: 'PM-DAKSH',
    icon: '🎓',
    category: 'subsidy',
    benefit: 'Free skill training + ₹1,500 stipend',
    desc: 'Free skill development program for SC/ST and OBC farmers. Covers topics like organic farming, food processing, agribusiness, and modern techniques.',
    tags: ['Free Training', 'Stipend', 'SC/ST/OBC'],
    eligibility: 'SC/ST farmers, OBC farmers aged 18–45',
    portal: 'pmdaksh.dosje.gov.in',
    highlight: false,
  },
  {
    id: 'pcdf',
    name: 'Per Drop More Crop',
    abbr: 'PDMC / Micro Irrigation',
    icon: '💧',
    category: 'subsidy',
    benefit: '50–55% subsidy on drip/sprinkler systems',
    desc: 'Promotes water-efficient micro-irrigation systems. Small farmers get 55% subsidy and large farmers 45% on installation of drip or sprinkler irrigation equipment.',
    tags: ['Water Saving', '50%+ Subsidy', 'Drip/Sprinkler'],
    eligibility: 'All farmers with valid land records',
    portal: 'pmksy.gov.in',
    highlight: false,
  },
  {
    id: 'organic',
    name: 'Paramparagat Krishi Vikas Yojana',
    abbr: 'PKVY',
    icon: '🌿',
    category: 'subsidy',
    benefit: '₹50,000/ha grant over 3 years',
    desc: 'Promotes organic farming through cluster-based approach. Farmers get ₹50,000 per hectare over 3 years for conversion to certified organic farming.',
    tags: ['Organic', 'Cluster-based', '3-year Support'],
    eligibility: 'Farmer clusters with minimum 20 farmers, 50 acres',
    portal: 'pgsindia.net',
    highlight: false,
  },
  {
    id: 'agriinfra',
    name: 'Agriculture Infrastructure Fund',
    abbr: 'AIF',
    icon: '🏗️',
    category: 'loan',
    benefit: 'Loan up to ₹2 crore @ 3% subsidy',
    desc: 'Long-term debt financing facility for investment in post-harvest management and community farm assets. 3% interest subvention for 7 years.',
    tags: ['Long-term Loan', 'Cold Storage', 'Processing Units'],
    eligibility: 'Farmers, FPOs, PACS, SHGs, Agri-entrepreneurs',
    portal: 'agriinfra.dac.gov.in',
    highlight: false,
  },
  {
    id: 'wdra',
    name: 'Negotiable Warehouse Receipt',
    abbr: 'NWR / WDRA',
    icon: '🏦',
    category: 'market',
    benefit: 'Up to 80% loan against stored produce',
    desc: 'Store produce in WDRA-registered warehouses and get loans against warehouse receipts. Avoid distress selling and wait for better prices.',
    tags: ['Anti-distress Selling', 'Storage Finance', 'Price Realization'],
    eligibility: 'All farmers with agricultural produce',
    portal: 'wdra.gov.in',
    highlight: false,
  },
];

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
let currentCat = 'all';
let schemeSearch = '';

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
  renderSchemes();
});

// ══════════════════════════════════════════
//  RENDER
// ══════════════════════════════════════════
function renderSchemes() {
  const grid = document.getElementById('schemesGrid');
  if (!grid) return;

  let data = [...SCHEMES];
  if (currentCat !== 'all') data = data.filter(s => s.category === currentCat);
  if (schemeSearch) data = data.filter(s =>
    s.name.toLowerCase().includes(schemeSearch) ||
    s.abbr.toLowerCase().includes(schemeSearch) ||
    s.desc.toLowerCase().includes(schemeSearch)
  );

  const countEl = document.getElementById('schemeCount');
  if (countEl) countEl.textContent = `Showing ${data.length} of ${SCHEMES.length} schemes`;

  grid.innerHTML = data.map((s, idx) => {
    const catColors = {
      income: 'income', insurance: 'insurance', loan: 'loan',
      subsidy: 'subsidy', market: 'market'
    };
    const catLabels = {
      income: 'Income Support', insurance: 'Insurance', loan: 'Loan',
      subsidy: 'Subsidy', market: 'Market Access'
    };
    const tagColors = {
      income: 'tag-green', insurance: 'tag-blue', loan: 'tag-yellow',
      subsidy: 'tag-green', market: 'tag-blue'
    };

    return `
      <div class="scheme-card" style="animation-delay:${idx * 0.06}s">
        <div class="sc-header">
          <div class="sc-icon ${catColors[s.category]}">${s.icon}</div>
          <div>
            <div class="sc-title">${s.name}</div>
            <div class="sc-abbr">${s.abbr} &nbsp;•&nbsp; ${catLabels[s.category]}</div>
          </div>
        </div>
        <div class="sc-body">
          <p>${s.desc}</p>
          <div class="sc-benefit">
            <div>
              <div class="benefit-label">Key Benefit</div>
              <div class="benefit-val">${s.benefit}</div>
            </div>
          </div>
          <div class="sc-meta">
            ${s.tags.map(t => `<span class="tag ${tagColors[s.category]}">${t}</span>`).join('')}
          </div>
        </div>
        <div class="sc-footer">
          <span class="sc-eligibility">👤 ${s.eligibility}</span>
          <a href="https://${s.portal}" target="_blank" rel="noopener" class="sc-link">
            Apply Now →
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function setCatFilter(cat, el) {
  currentCat = cat;
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderSchemes();
}

function filterSchemes() {
  schemeSearch = document.getElementById('schemeSearch').value.toLowerCase();
  renderSchemes();
}

function scrollToSchemes() {
  document.getElementById('schemes-section')?.scrollIntoView({ behavior: 'smooth' });
}
