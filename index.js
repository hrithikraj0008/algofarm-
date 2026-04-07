'use strict';

// ══════════════════════════════════════════
//  CROP DATABASE
// ══════════════════════════════════════════
const CROPS = [
  { name:'Turmeric', emoji:'🟡', variety:'Curcuma longa', soil:['loamy','alluvial','black'], rainfall:{min:800,max:2500,ideal:1500}, temp:{min:20,max:35,ideal:27}, profitRange:{low:120000,high:220000}, profitLevel:'high', multiplier:'3x (→Powder)', desc:'High-value spice with strong export demand and excellent processing potential.', tags:['Spice','Export','Processing'], inputCosts:{seed:8000,labour:12000,fertiliser:9000,misc:4000}, yieldPerAcre:2500, rawPrice:14, processedPrice:300 },
  { name:'Ginger', emoji:'🫚', variety:'Zingiber officinale', soil:['loamy','alluvial','red'], rainfall:{min:1200,max:2500,ideal:1800}, temp:{min:22,max:32,ideal:26}, profitRange:{low:100000,high:180000}, profitLevel:'high', multiplier:'2.5x (→Dry Ginger)', desc:'Premium spice crop with excellent domestic and export market demand.', tags:['Spice','Medicinal','Export'], inputCosts:{seed:15000,labour:14000,fertiliser:8000,misc:5000}, yieldPerAcre:6000, rawPrice:40, processedPrice:350 },
  { name:'Saffron', emoji:'🌸', variety:'Crocus sativus', soil:['sandy','loamy'], rainfall:{min:200,max:600,ideal:400}, temp:{min:10,max:20,ideal:15}, profitRange:{low:800000,high:2000000}, profitLevel:'high', multiplier:'5x (→Premium Grade)', desc:'World\'s most expensive spice — extraordinary returns per acre.', tags:['Luxury','Ultra-Premium','Export'], inputCosts:{seed:50000,labour:30000,fertiliser:10000,misc:8000}, yieldPerAcre:4, rawPrice:250000, processedPrice:800000 },
  { name:'Strawberry', emoji:'🍓', variety:'Fragaria ananassa', soil:['sandy','loamy'], rainfall:{min:600,max:1000,ideal:800}, temp:{min:15,max:25,ideal:20}, profitRange:{low:250000,high:450000}, profitLevel:'high', multiplier:'4x (→Jam/Pulp)', desc:'High-value fruit with strong urban market demand and year-round selling.', tags:['Fruit','Urban Market','Processing'], inputCosts:{seed:20000,labour:18000,fertiliser:10000,misc:6000}, yieldPerAcre:8000, rawPrice:60, processedPrice:240 },
  { name:'Lavender', emoji:'💜', variety:'Lavandula angustifolia', soil:['sandy','loamy'], rainfall:{min:300,max:700,ideal:500}, temp:{min:10,max:28,ideal:18}, profitRange:{low:300000,high:600000}, profitLevel:'high', multiplier:'6x (→Essential Oil)', desc:'Aromatic herb with exceptional essential oil value and eco-tourism potential.', tags:['Aromatic','Essential Oil','Eco-Tourism'], inputCosts:{seed:12000,labour:10000,fertiliser:6000,misc:5000}, yieldPerAcre:400, rawPrice:200, processedPrice:1200 },
  { name:'Moringa', emoji:'🌱', variety:'Moringa oleifera', soil:['sandy','loamy','red','alluvial'], rainfall:{min:250,max:1500,ideal:800}, temp:{min:18,max:40,ideal:30}, profitRange:{low:80000,high:150000}, profitLevel:'medium', multiplier:'5x (→Powder Export)', desc:'Superfood tree with global nutraceutical demand and drought resistance.', tags:['Superfood','Drought-Resistant','Export'], inputCosts:{seed:3000,labour:8000,fertiliser:4000,misc:3000}, yieldPerAcre:4000, rawPrice:15, processedPrice:600 },
  { name:'Bamboo', emoji:'🎋', variety:'Bambusa spp.', soil:['loamy','clay','alluvial','red'], rainfall:{min:800,max:2500,ideal:1500}, temp:{min:15,max:38,ideal:26}, profitRange:{low:50000,high:120000}, profitLevel:'low', multiplier:'8x (→Furniture/Textile)', desc:'Sustainable green gold with industrial applications and carbon credits.', tags:['Industrial','Sustainable','Long-term'], inputCosts:{seed:5000,labour:6000,fertiliser:3000,misc:2000}, yieldPerAcre:5000, rawPrice:8, processedPrice:500 },
  { name:'Mango', emoji:'🥭', variety:'Mangifera indica', soil:['alluvial','loamy','red','black'], rainfall:{min:750,max:2000,ideal:1200}, temp:{min:24,max:40,ideal:30}, profitRange:{low:70000,high:200000}, profitLevel:'medium', multiplier:'3x (→Pulp/Pickle)', desc:'King of fruits with strong branding opportunity and processing market.', tags:['Fruit','Processing','Branding'], inputCosts:{seed:10000,labour:12000,fertiliser:8000,misc:5000}, yieldPerAcre:5000, rawPrice:20, processedPrice:120 },
  { name:'Dragon Fruit', emoji:'🐉', variety:'Hylocereus spp.', soil:['sandy','loamy','red'], rainfall:{min:400,max:1200,ideal:700}, temp:{min:20,max:38,ideal:30}, profitRange:{low:200000,high:450000}, profitLevel:'high', multiplier:'3.5x (→Pulp/Smoothie)', desc:'Exotic high-value fruit with rapidly growing urban premium market.', tags:['Exotic','Urban Premium','Tropical'], inputCosts:{seed:25000,labour:15000,fertiliser:10000,misc:7000}, yieldPerAcre:6000, rawPrice:60, processedPrice:210 },
  { name:'Aloe Vera', emoji:'🌵', variety:'Aloe barbadensis', soil:['sandy','loamy','red'], rainfall:{min:200,max:800,ideal:500}, temp:{min:18,max:40,ideal:28}, profitRange:{low:60000,high:130000}, profitLevel:'medium', multiplier:'7x (→Gel/Cosmetics)', desc:'Medicinal succulent with high-margin cosmetic and nutraceutical applications.', tags:['Medicinal','Cosmetics','Low-Water'], inputCosts:{seed:8000,labour:7000,fertiliser:4000,misc:3000}, yieldPerAcre:10000, rawPrice:5, processedPrice:200 },
  { name:'Rice', emoji:'🌾', variety:'Oryza sativa', soil:['clay','alluvial','silt','loamy'], rainfall:{min:1200,max:3000,ideal:1800}, temp:{min:22,max:38,ideal:28}, profitRange:{low:30000,high:60000}, profitLevel:'low', multiplier:'1.5x (→Parboiled)', desc:'Staple crop with guaranteed market demand and government MSP support.', tags:['Staple','MSP Support','Reliable'], inputCosts:{seed:4000,labour:10000,fertiliser:7000,misc:3000}, yieldPerAcre:2000, rawPrice:18, processedPrice:35 },
  { name:'Wheat', emoji:'🌾', variety:'Triticum aestivum', soil:['loamy','alluvial','clay','black'], rainfall:{min:300,max:800,ideal:550}, temp:{min:10,max:25,ideal:18}, profitRange:{low:25000,high:55000}, profitLevel:'low', multiplier:'1.8x (→Flour/Atta)', desc:'Staple food grain with steady demand and robust government procurement.', tags:['Staple','Government Support','Winter'], inputCosts:{seed:4500,labour:8000,fertiliser:6000,misc:2500}, yieldPerAcre:1800, rawPrice:22, processedPrice:45 },
  { name:'Cotton', emoji:'💮', variety:'Gossypium hirsutum', soil:['black','alluvial','loamy'], rainfall:{min:600,max:1400,ideal:900}, temp:{min:20,max:40,ideal:30}, profitRange:{low:50000,high:120000}, profitLevel:'medium', multiplier:'3x (→Ginned)', desc:'White gold of Indian agriculture with industrial and textile market linkage.', tags:['Industrial','Textile','Kharif'], inputCosts:{seed:7000,labour:12000,fertiliser:9000,misc:4000}, yieldPerAcre:400, rawPrice:72, processedPrice:250 },
  { name:'Sunflower', emoji:'🌻', variety:'Helianthus annuus', soil:['loamy','alluvial','sandy','red'], rainfall:{min:350,max:900,ideal:600}, temp:{min:20,max:35,ideal:26}, profitRange:{low:40000,high:90000}, profitLevel:'medium', multiplier:'2x (→Oil)', desc:'Oilseed crop with steady edible oil market and low input requirements.', tags:['Oilseed','Low-Input','Versatile'], inputCosts:{seed:3500,labour:7000,fertiliser:5000,misc:2000}, yieldPerAcre:600, rawPrice:58, processedPrice:160 },
  { name:'Pomegranate', emoji:'🫐', variety:'Punica granatum', soil:['sandy','loamy','red','black'], rainfall:{min:400,max:900,ideal:650}, temp:{min:18,max:40,ideal:28}, profitRange:{low:150000,high:350000}, profitLevel:'high', multiplier:'4x (→Juice/Arils)', desc:'High-value fruit with strong health-trend demand and export potential.', tags:['Fruit','Health Trend','Export'], inputCosts:{seed:15000,labour:14000,fertiliser:9000,misc:5000}, yieldPerAcre:7000, rawPrice:40, processedPrice:180 },
  { name:'Lemongrass', emoji:'🌿', variety:'Cymbopogon citratus', soil:['sandy','loamy','red'], rainfall:{min:500,max:1500,ideal:900}, temp:{min:20,max:40,ideal:28}, profitRange:{low:80000,high:180000}, profitLevel:'medium', multiplier:'10x (→Essential Oil)', desc:'Aromatic grass with massive essential oil premium and low maintenance.', tags:['Aromatic','Oil','Low-Water'], inputCosts:{seed:4000,labour:6000,fertiliser:4000,misc:2000}, yieldPerAcre:8000, rawPrice:5, processedPrice:800 },
  { name:'Cardamom', emoji:'💚', variety:'Elettaria cardamomum', soil:['loamy','alluvial'], rainfall:{min:1500,max:4000,ideal:2500}, temp:{min:15,max:28,ideal:22}, profitRange:{low:250000,high:600000}, profitLevel:'high', multiplier:'4x (→Powder)', desc:'Queen of spices with premium international market and high per-kg value.', tags:['Premium Spice','Export','High-Value'], inputCosts:{seed:20000,labour:15000,fertiliser:8000,misc:6000}, yieldPerAcre:300, rawPrice:1200, processedPrice:4500 },
  { name:'Stevia', emoji:'🍃', variety:'Stevia rebaudiana', soil:['sandy','loamy'], rainfall:{min:600,max:1400,ideal:900}, temp:{min:15,max:30,ideal:22}, profitRange:{low:120000,high:250000}, profitLevel:'high', multiplier:'5x (→Extract)', desc:'Natural zero-calorie sweetener with exploding global health food demand.', tags:['Health Food','Zero Calorie','Export'], inputCosts:{seed:12000,labour:10000,fertiliser:6000,misc:4000}, yieldPerAcre:2000, rawPrice:80, processedPrice:400 },
  { name:'Black Pepper', emoji:'⚫', variety:'Piper nigrum', soil:['loamy','alluvial','red'], rainfall:{min:1500,max:3000,ideal:2200}, temp:{min:20,max:35,ideal:28}, profitRange:{low:180000,high:350000}, profitLevel:'high', multiplier:'3x (→White Pepper)', desc:'King of spices with consistently high global demand and premium pricing.', tags:['Spice','Global Demand','Export'], inputCosts:{seed:18000,labour:12000,fertiliser:8000,misc:5000}, yieldPerAcre:1500, rawPrice:400, processedPrice:1200 },
  { name:'Vanilla', emoji:'🟤', variety:'Vanilla planifolia', soil:['loamy','alluvial'], rainfall:{min:1500,max:2500,ideal:2000}, temp:{min:20,max:32,ideal:26}, profitRange:{low:500000,high:1200000}, profitLevel:'high', multiplier:'8x (→Extract)', desc:'World\'s second most expensive spice with extraordinary profit potential.', tags:['Ultra-Premium','Export','Rare'], inputCosts:{seed:40000,labour:20000,fertiliser:12000,misc:8000}, yieldPerAcre:500, rawPrice:4000, processedPrice:30000 },
  { name:'Maize', emoji:'🌽', variety:'Zea mays', soil:['loamy','alluvial','red','black'], rainfall:{min:500,max:1000,ideal:700}, temp:{min:15,max:35,ideal:28}, profitRange:{low:25000,high:45000}, profitLevel:'low', multiplier:'2x (→Corn Flour/Oil)', desc:'Versatile cereal crop with high demand in poultry feed and industrial processing.', tags:['Cereal','Industrial','Staple'], inputCosts:{seed:3000,labour:7000,fertiliser:5000,misc:2000}, yieldPerAcre:2500, rawPrice:20, processedPrice:40 },
  { name:'Soybean', emoji:'🫘', variety:'Glycine max', soil:['loamy','black'], rainfall:{min:600,max:1000,ideal:800}, temp:{min:20,max:35,ideal:28}, profitRange:{low:30000,high:60000}, profitLevel:'medium', multiplier:'3x (→Soy Milk/Tofu)', desc:'High-protein oilseed vital for vegetable oil production and livestock feed.', tags:['Oilseed','Protein','Kharif'], inputCosts:{seed:4000,labour:8000,fertiliser:6000,misc:3000}, yieldPerAcre:1000, rawPrice:45, processedPrice:135 },
  { name:'Groundnut', emoji:'🥜', variety:'Arachis hypogaea', soil:['sandy','loamy','red'], rainfall:{min:500,max:1200,ideal:750}, temp:{min:25,max:35,ideal:30}, profitRange:{low:35000,high:70000}, profitLevel:'medium', multiplier:'4x (→Peanut Butter/Oil)', desc:'Oil and snacking crop with great processing value and drought tolerance.', tags:['Oilseed','Snack','Drought-Resistant'], inputCosts:{seed:5000,labour:9000,fertiliser:4000,misc:3000}, yieldPerAcre:800, rawPrice:60, processedPrice:240 },
  { name:'Potato', emoji:'🥔', variety:'Solanum tuberosum', soil:['loamy','alluvial','sandy'], rainfall:{min:400,max:800,ideal:600}, temp:{min:15,max:25,ideal:20}, profitRange:{low:40000,high:100000}, profitLevel:'medium', multiplier:'4x (→Chips/Fries)', desc:'Major tuber crop with immense processing scope, requires cold storage.', tags:['Tuber','Vegetable','Processing'], inputCosts:{seed:15000,labour:10000,fertiliser:8000,misc:5000}, yieldPerAcre:8000, rawPrice:15, processedPrice:60 },
  { name:'Onion', emoji:'🧅', variety:'Allium cepa', soil:['loamy','alluvial','sandy'], rainfall:{min:300,max:800,ideal:500}, temp:{min:15,max:30,ideal:22}, profitRange:{low:50000,high:150000}, profitLevel:'high', multiplier:'5x (→Dehydrated Flakes)', desc:'Essential kitchen staple with volatile markets but high profit bursts.', tags:['Staple','Vegetable','Dehydration'], inputCosts:{seed:6000,labour:12000,fertiliser:8000,misc:6000}, yieldPerAcre:6000, rawPrice:25, processedPrice:125 },
  { name:'Tomato', emoji:'🍅', variety:'Solanum lycopersicum', soil:['loamy','alluvial','red'], rainfall:{min:400,max:1200,ideal:800}, temp:{min:18,max:32,ideal:25}, profitRange:{low:40000,high:120000}, profitLevel:'medium', multiplier:'6x (→Ketchup/Puree)', desc:'High-yield vegetable prone to price fluctuations, great for greenhouse.', tags:['Vegetable','Greenhouse','High-Yield'], inputCosts:{seed:10000,labour:15000,fertiliser:10000,misc:8000}, yieldPerAcre:10000, rawPrice:15, processedPrice:90 },
  { name:'Papaya', emoji:'🍈', variety:'Carica papaya', soil:['loamy','alluvial','sandy'], rainfall:{min:800,max:1800,ideal:1200}, temp:{min:22,max:38,ideal:30}, profitRange:{low:100000,high:250000}, profitLevel:'high', multiplier:'3x (→Tutti-Frutti/Pulp)', desc:'Fast-growing fruit with steady demand and excellent pharmaceutical value.', tags:['Fruit','Tropical','Fast-Yield'], inputCosts:{seed:10000,labour:14000,fertiliser:12000,misc:6000}, yieldPerAcre:12000, rawPrice:20, processedPrice:60 },
];

// Profit calculator crop defaults
const PC_CROPS = {
  turmeric:    { price:14,  yield:2500, seed:8000,  labour:12000, fert:9000,  other:4000,  vPrice:300 },
  ginger:      { price:40,  yield:6000, seed:15000, labour:14000, fert:8000,  other:5000,  vPrice:350 },
  rice:        { price:18,  yield:2000, seed:4000,  labour:10000, fert:7000,  other:3000,  vPrice:35 },
  wheat:       { price:22,  yield:1800, seed:4500,  labour:8000,  fert:6000,  other:2500,  vPrice:45 },
  mango:       { price:20,  yield:5000, seed:10000, labour:12000, fert:8000,  other:5000,  vPrice:120 },
  cotton:      { price:72,  yield:400,  seed:7000,  labour:12000, fert:9000,  other:4000,  vPrice:250 },
  sunflower:   { price:58,  yield:600,  seed:3500,  labour:7000,  fert:5000,  other:2000,  vPrice:160 },
  moringa:     { price:15,  yield:4000, seed:3000,  labour:8000,  fert:4000,  other:3000,  vPrice:600 },
  lemongrass:  { price:5,   yield:8000, seed:4000,  labour:6000,  fert:4000,  other:2000,  vPrice:800 },
  pomegranate: { price:40,  yield:7000, seed:15000, labour:14000, fert:9000,  other:5000,  vPrice:180 },
  strawberry:  { price:60,  yield:8000, seed:20000, labour:18000, fert:10000, other:6000,  vPrice:240 },
  vanilla:     { price:4000,yield:500,  seed:40000, labour:20000, fert:12000, other:8000,  vPrice:30000 },
  maize:       { price:20,  yield:2500, seed:3000,  labour:7000,  fert:5000,  other:2000,  vPrice:40 },
  soybean:     { price:45,  yield:1000, seed:4000,  labour:8000,  fert:6000,  other:3000,  vPrice:135 },
  groundnut:   { price:60,  yield:800,  seed:5000,  labour:9000,  fert:4000,  other:3000,  vPrice:240 },
  potato:      { price:15,  yield:8000, seed:15000, labour:10000, fert:8000,  other:5000,  vPrice:60 },
  onion:       { price:25,  yield:6000, seed:6000,  labour:12000, fert:8000,  other:6000,  vPrice:125 },
  tomato:      { price:15,  yield:10000,seed:10000, labour:15000, fert:10000, other:8000,  vPrice:90 },
  papaya:      { price:20,  yield:12000,seed:10000, labour:14000, fert:12000, other:6000,  vPrice:60 },
};

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
let selectedProfit = 'high';
let farmMap = null, drawnItems = null, totalAreaHectares = 0, drawControl = null, selectedLayer = null, plotCount = 0;
let lastScoredCrops = [];

// ══════════════════════════════════════════
//  NAVBAR
// ══════════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 20);
});

// ══════════════════════════════════════════
//  MAP
// ══════════════════════════════════════════
function initMap() {
  if (!document.getElementById('farmMap')) return;
  farmMap = L.map('farmMap', { center:[20.5937,78.9629], zoom:5 });
  const sat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{attribution:'Tiles &copy; Esri',maxZoom:19});
  const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap',maxZoom:19});
  const topo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',{attribution:'© Esri',maxZoom:19});
  const light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{attribution:'© CARTO',maxZoom:20});
  sat.addTo(farmMap);
  L.control.layers({'🛰️ Satellite':sat,'🗺️ Street':osm,'🏔️ Terrain':topo,'🔆 Light':light},{},{position:'topright',collapsed:false}).addTo(farmMap);
  drawnItems = new L.FeatureGroup(); farmMap.addLayer(drawnItems);
  drawControl = new L.Control.Draw({position:'topleft',draw:{polygon:{allowIntersection:false,showArea:true,shapeOptions:{color:'#16a34a',fillColor:'#22c55e',fillOpacity:0.25,weight:2.5}},rectangle:{shapeOptions:{color:'#16a34a',fillColor:'#22c55e',fillOpacity:0.25,weight:2.5}},circle:false,polyline:false,marker:false,circlemarker:false},edit:{featureGroup:drawnItems,remove:true}});
  farmMap.addControl(drawControl);
  farmMap.on(L.Draw.Event.CREATED, e => {
    const layer = e.layer; plotCount++;
    let areaM2 = 0;
    if (layer instanceof L.Polygon || layer instanceof L.Rectangle) areaM2 = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
    const areaHa = areaM2/10000, areaAcres = areaHa*2.471;
    layer._area = {ha:areaHa,acres:areaAcres}; layer._plotId = plotCount;
    layer.bindPopup(`<div style="font-family:sans-serif;font-size:0.82rem"><strong style="color:#16a34a">🌾 Plot ${plotCount}</strong><br/>Area: <b>${areaAcres.toFixed(3)} acres</b> (${areaHa.toFixed(4)} ha)</div>`);
    drawnItems.addLayer(layer);
    layer.on('click', () => selectShape(layer));
    updateMapStats(); showToast(`✅ Plot ${plotCount} — ${areaAcres.toFixed(2)} acres`);
    
    // Auto-detect soil and climate based on coordinates!
    const center = layer.getBounds().getCenter();
    fetchEnvironmentalData(center.lat, center.lng);
  });
  farmMap.on(L.Draw.Event.DELETED, updateMapStats);
  farmMap.on(L.Draw.Event.EDITED, () => { drawnItems.eachLayer(l => { if (l._area) { const m2 = L.GeometryUtil.geodesicArea(l.getLatLngs()[0]); l._area={ha:m2/10000,acres:(m2/10000)*2.471}; } }); updateMapStats(); });
  farmMap.on('click', () => { if(selectedLayer){selectedLayer.setStyle({color:'#16a34a',fillColor:'#22c55e',fillOpacity:0.25}); selectedLayer=null;} });
}

function selectShape(layer) {
  if(selectedLayer && selectedLayer!==layer) selectedLayer.setStyle({color:'#16a34a',fillColor:'#22c55e',fillOpacity:0.25});
  selectedLayer=layer; layer.setStyle({color:'#ca8a04',fillColor:'#fbbf24',fillOpacity:0.35,weight:3}); layer.openPopup();
}

function updateMapStats() {
  totalAreaHectares=0; let count=0;
  drawnItems.eachLayer(l => { if(l._area){totalAreaHectares+=l._area.ha; count++;} });
  const acres = totalAreaHectares*2.471;
  document.getElementById('totalAreaDisplay').textContent = `${acres.toFixed(2)} acres (${totalAreaHectares.toFixed(2)} ha)`;
  document.getElementById('plotCountDisplay').textContent = count;
}

function setMapTool(tool) {
  document.querySelectorAll('.map-tool-btn').forEach(b=>b.classList.remove('active'));
  if(tool==='draw'){document.getElementById('drawBtn')?.classList.add('active'); document.querySelector('.leaflet-draw-draw-polygon')?.click();}
}
function deleteSelectedShape() { if(selectedLayer){drawnItems.removeLayer(selectedLayer);selectedLayer=null;updateMapStats();showToast('🗑️ Plot deleted');}else{showToast('⚠️ Click a plot to select it','warn');} }
function clearAllShapes() { if(!drawnItems||drawnItems.getLayers().length===0){showToast('ℹ️ No plots to clear','warn');return;} drawnItems.clearLayers();selectedLayer=null;plotCount=0;updateMapStats();showToast('✖ All plots cleared'); }

async function searchLocation() {
  const input=document.getElementById('mapSearchInput'); if(!input?.value.trim())return;
  const btn=document.getElementById('mapSearchBtn'); if(btn){btn.textContent='⏳';btn.disabled=true;}
  try {
    const res=await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input.value)}&limit=1`,{headers:{'Accept-Language':'en','User-Agent':'AgroFarmPlus/1.0'}});
    const data=await res.json();
    if(data?.length){
      const {lat,lon,display_name}=data[0]; farmMap.setView([+lat,+lon],14);
      const short=display_name.split(',').slice(0,3).join(', ');
      document.getElementById('locationDisplay').textContent=short;
      const m=L.circleMarker([+lat,+lon],{radius:12,color:'#16a34a',fillColor:'#22c55e',fillOpacity:0.5,weight:3}).addTo(farmMap).bindPopup(`<b>📍 ${display_name.split(',')[0]}</b>`).openPopup();
      setTimeout(()=>farmMap.removeLayer(m),5000); showToast(`📍 Navigated to ${display_name.split(',')[0]}`);
      
      // Hook the new Advanced API
      fetchEnvironmentalData(+lat, +lon);
    }else showToast('⚠️ Location not found','warn');
  }catch{showToast('⚠️ Search failed','warn');}
  finally{if(btn){btn.textContent='Search';btn.disabled=false;}}
}

// ══════════════════════════════════════════
//  ADVANCED APIs (Open-Meteo & SoilGrids)
// ══════════════════════════════════════════
async function fetchEnvironmentalData(lat, lon) {
  showToast('🛰️ Scanning coordinates for Climate & Soil data...', 'success');
  const btn = document.getElementById('analyzeBtn');
  const btnText = document.getElementById('analyzeBtnText');
  if (btn) btn.disabled = true;
  if (btnText) btnText.textContent = 'Auto-Detecting...';

  try {
    // 1. Fetch Temperature from Open-Meteo
    const meteoRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`);
    const meteoData = await meteoRes.json();
    if (meteoData.current && meteoData.current.temperature_2m) {
      document.getElementById('temperature').value = Math.round(meteoData.current.temperature_2m);
    }
    
    // Simulate Annual Rainfall based on coords (or use historical data)
    let mockRainfall = Math.round(800 + (Math.abs(lon - 70) * 100) + (Math.sin(lat) * 500));
    // Provide a neat little variation
    const rf = Math.max(300, Math.min(3500, mockRainfall));
    document.getElementById('rainfall').value = rf;
    updateRainfallBar(rf);

    // 2. Fetch Topsoil Texture from ISRIC SoilGrids REST API
    const soilRes = await fetch(`https://rest.isric.org/soilgrids/v2.0/properties/query?lon=${lon}&lat=${lat}&property=sand&property=silt&property=clay&depth=0-5cm`);
    if(soilRes.ok) {
      const soilData = await soilRes.json();
      const getMean = (propName) => {
        const lyr = soilData.properties?.layers?.find(l => l.name === propName);
        return lyr ? lyr.depths[0].values.mean : 0;
      };
      
      const sand = getMean('sand');
      const silt = getMean('silt');
      const clay = getMean('clay');
      
      let soilType = 'loamy';
      if (clay > 400) soilType = 'clay';
      else if (sand > 600) soilType = 'sandy';
      else if (silt > 500) soilType = 'silt';
      else if (sand>0 || silt>0 || clay>0) {
         // Mix calculation for alluvial / red based on lat logic (just smart assumption)
         if (lat > 22 && silt > 300) soilType = 'alluvial';
         else soilType = 'loamy';
      } else {
         soilType = lat > 20 ? 'alluvial' : 'red';
      }
      
      if(sand!==0) {
        document.getElementById('soilType').value = soilType;
        setTimeout(() => showToast(`🌍 Detected ${soilType.toUpperCase()} soil with ${Math.round(meteoData.current.temperature_2m)}°C temp.`), 1500);
      }
    }
  } catch(e) {
    console.error("API error:", e);
    showToast('⚠️ Auto-detect partially failed, using defaults.', 'warn');
  } finally {
    if (btn) btn.disabled = false;
    if (btnText) btnText.textContent = '🚀 Analyze & Recommend';
  }
}


document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('mapSearchInput')?.addEventListener('keydown',e=>{if(e.key==='Enter')searchLocation();});
  document.getElementById('rainfall')?.addEventListener('input',e=>updateRainfallBar(+e.target.value));
});

// ══════════════════════════════════════════
//  PROFIT PREF
// ══════════════════════════════════════════
function setProfit(level) {
  selectedProfit=level;
  ['low','medium','high'].forEach(l=>document.getElementById(`profit-${l}`)?.classList.toggle('active',l===level));
}
function updateRainfallBar(val){const fill=document.getElementById('rainfallFill');if(fill)fill.style.width=Math.min(100,Math.max(0,(val/5000)*100))+'%';}

// ══════════════════════════════════════════
//  QUICK FILL
// ══════════════════════════════════════════
const PRESETS={rice:{soil:'clay',rainfall:1800,temp:29,profit:'low',location:'West Bengal'},turmeric:{soil:'loamy',rainfall:1500,temp:27,profit:'high',location:'Erode, Tamil Nadu'},mango:{soil:'alluvial',rainfall:1200,temp:32,profit:'medium',location:'Ratnagiri, Maharashtra'}};
function quickFill(preset){
  const p=PRESETS[preset]; if(!p)return;
  document.getElementById('soilType').value=p.soil;
  document.getElementById('rainfall').value=p.rainfall;
  document.getElementById('temperature').value=p.temp;
  setProfit(p.profit); updateRainfallBar(p.rainfall);
  if(p.location){document.getElementById('mapSearchInput').value=p.location; searchLocation();}
  showToast(`✅ Loaded "${preset}" profile!`);
}

// ══════════════════════════════════════════
//  SCORING
// ══════════════════════════════════════════
function scoreCrop(crop,soil,rainfall,temp,profitPref){
  let s=0;
  s+=crop.soil.includes(soil)?40:5;
  const rfMid=(crop.rainfall.min+crop.rainfall.max)/2,rfRange=crop.rainfall.max-crop.rainfall.min;
  if(rainfall>=crop.rainfall.min&&rainfall<=crop.rainfall.max){s+=25-Math.round((Math.abs(rainfall-rfMid)/(rfRange/2))*12);}else{s+=Math.max(0,15-Math.round(Math.min(Math.abs(rainfall-crop.rainfall.min),Math.abs(rainfall-crop.rainfall.max))/100));}
  if(temp>=crop.temp.min&&temp<=crop.temp.max){s+=Math.round(25-(Math.abs(temp-crop.temp.ideal)/((crop.temp.max-crop.temp.min)/2))*12);}else{s+=Math.max(0,12-Math.min(Math.abs(temp-crop.temp.min),Math.abs(temp-crop.temp.max)));}
  if(crop.profitLevel===profitPref)s+=10;else if((profitPref==='high'&&crop.profitLevel==='medium')||(profitPref==='medium'&&crop.profitLevel==='high'))s+=4;
  return Math.min(100,Math.round(s));
}
function getExpectedProfit(crop,score){return Math.round(crop.profitRange.low+(crop.profitRange.high-crop.profitRange.low)*(score/100));}

// ══════════════════════════════════════════
//  ANALYZE
// ══════════════════════════════════════════
async function analyzeAndRecommend(){
  const soil=document.getElementById('soilType').value,rf=+document.getElementById('rainfall').value,temp=+document.getElementById('temperature').value;
  if(!soil){showToast('⚠️ Select a soil type','warn');return;}
  if(!rf||rf<0){showToast('⚠️ Enter rainfall','warn');return;}
  if(!temp&&temp!==0){showToast('⚠️ Enter temperature','warn');return;}
  const btn=document.getElementById('analyzeBtn'),btnText=document.getElementById('analyzeBtnText');
  btn.disabled=true; btn.classList.add('btn-loading'); btnText.textContent='Analyzing...';

  // Determine active database
  let dbToUse = [...CROPS];
  if (isPerenualMode) {
     const pCrops = await loadPerenualCrops();
     if (pCrops && pCrops.length > 0) {
        dbToUse = [...CROPS, ...pCrops];
     }
  }

  setTimeout(()=>{
    lastScoredCrops=dbToUse.map(c=>({...c,score:scoreCrop(c,soil,rf,temp,selectedProfit)})).sort((a,b)=>b.score-a.score);
    displayResults(lastScoredCrops,soil,rf,temp);
    btn.disabled=false; btn.classList.remove('btn-loading'); btnText.textContent='🚀 Analyze & Recommend';
    showToast('✅ Analysis complete!');
  }, isPerenualMode ? 200 : 1200); // UI delay since API fetch already took time
}

// ══════════════════════════════════════════
//  DISPLAY RESULTS
// ══════════════════════════════════════════
function displayResults(scored,soil,rainfall,temp){
  document.getElementById('emptyState').style.display='none';
  document.getElementById('resultsContent').style.display='block';
  const top=scored[0], topProfit=getExpectedProfit(top,top.score);
  const topIconHtml = top._img ? `<img src="${top._img}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;">` : top.emoji;
  document.getElementById('topIcon').innerHTML=topIconHtml;
  document.getElementById('topCropName').textContent=top.name;
  document.getElementById('topCropDesc').textContent=top.desc;
  document.getElementById('topProfit').textContent=`₹${topProfit.toLocaleString('en-IN')}/acre`;
  document.getElementById('topScore').textContent=`${top.score}/100`;
  document.getElementById('topMult').textContent=top.multiplier;
  setTimeout(()=>{const bar=document.getElementById('topProfitBar');if(bar)bar.style.width=top.score+'%';},100);
  document.getElementById('topTags').innerHTML=top.tags.map(t=>`<span class="tag tag-green">${t}</span>`).join('');
  const matches=scored.filter(c=>c.score>=60).length;
  document.getElementById('resultsSummary').textContent=`Found ${matches} highly suitable crops for your ${formatSoil(soil)} land with ${rainfall}mm rainfall at ${temp}°C`;
  const grid=document.getElementById('cropGrid');
  if(grid){
    grid.innerHTML='';
    scored.slice(0,8).forEach((crop,idx)=>{
      const profit=getExpectedProfit(crop,crop.score);
      const card=document.createElement('div');
      const allCards = [];
      card.className=`crop-card${idx===0?' rank-1':''}`;
      card.style.animationDelay=`${idx*0.07}s`;
      const cardIconHtml = crop._img ? `<img src="${crop._img}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;">` : `<span class="crop-emoji">${crop.emoji}</span>`;
      card.innerHTML=`
        <div class="crop-card-header"><div class="crop-icon-wrap">${cardIconHtml}<div><div class="crop-name">${crop.name}</div><div class="crop-variety">${crop.variety}</div></div></div><span class="crop-rank">#${idx+1}</span></div>
        <div class="crop-profit"><span class="crop-profit-amount">₹${profit.toLocaleString('en-IN')}</span><span class="crop-profit-unit">/acre/yr</span></div>
        <div class="crop-score-row"><span class="crop-score-label">Suitability</span><span class="crop-score-val">${crop.score}/100</span></div>
        <div class="profit-bar-wrap"><div class="profit-bar" data-width="${crop.score}" style="width:0%"></div></div>
        <div style="margin-top:0.6rem;display:flex;gap:4px;flex-wrap:wrap;">${crop.tags.map(t=>`<span class="tag tag-green" style="font-size:0.63rem">${t}</span>`).join('')}</div>`;
      card.addEventListener('click', () => openCropModal(crop, idx+1));
      grid.appendChild(card);
      allCards.push(card);
    });
    setTimeout(()=>{grid.querySelectorAll('.profit-bar[data-width]').forEach(b=>{b.style.width=b.getAttribute('data-width')+'%';});},200);
  }
  const aGrid=document.getElementById('analysisGrid');
  if(aGrid){aGrid.innerHTML=`
    <div class="analysis-item"><div class="ai-icon">🏔️</div><div class="ai-label">Soil Type</div><div class="ai-value">${formatSoil(soil)}</div></div>
    <div class="analysis-item"><div class="ai-icon">🌧️</div><div class="ai-label">Rainfall</div><div class="ai-value">${rainfall} mm/yr</div></div>
    <div class="analysis-item"><div class="ai-icon">🌡️</div><div class="ai-label">Temperature</div><div class="ai-value">${temp}°C</div></div>
    <div class="analysis-item"><div class="ai-icon">🎯</div><div class="ai-label">Profit Goal</div><div class="ai-value">${selectedProfit.charAt(0).toUpperCase()+selectedProfit.slice(1)} Yield</div></div>
    <div class="analysis-item"><div class="ai-icon">📐</div><div class="ai-label">Farm Area</div><div class="ai-value">${totalAreaHectares>0?(totalAreaHectares*2.471).toFixed(2)+' acres':'Not drawn'}</div></div>
    <div class="analysis-item"><div class="ai-icon">🏆</div><div class="ai-label">Top Score</div><div class="ai-value">${scored[0].score}/100</div></div>`;}
  setTimeout(()=>document.getElementById('resultsContent')?.scrollIntoView({behavior:'smooth',block:'start'}),400);
}

// ══════════════════════════════════════════
//  SMART INLINE COMPARISON
// ══════════════════════════════════════════

// Baseline: Rice as normal farming reference
const BASELINE = {
  name: 'Rice', emoji: '🌾',
  rawPrice: 18, yieldPerAcre: 2000,
  inputCosts: { seed:4000, labour:10000, fertiliser:7000, misc:3000 }
};

function showSmartComparison(crop, rank, allCards, clickedCard) {
  // Highlight selected card
  allCards.forEach(c => c.classList.remove('card-selected'));
  clickedCard.classList.add('card-selected');

  // Determine acres: from map if available, else fallback to 1
  const acres = totalAreaHectares > 0 ? parseFloat((totalAreaHectares * 2.471).toFixed(2)) : 1;
  const areaLabel = totalAreaHectares > 0
    ? `${acres} acres (from your map)`
    : '1 acre (draw on map for your exact area)';

  // ── Baseline (Normal Farming = Rice) ──
  const bYield   = BASELINE.yieldPerAcre * acres;
  const bRevenue = Math.round(bYield * BASELINE.rawPrice);
  const bCost    = Object.values(BASELINE.inputCosts).reduce((a,b)=>a+b,0) * acres;
  const bNet     = bRevenue - bCost;

  // ── Suggested Crop ──
  const sYield   = crop.yieldPerAcre * acres;
  const sRevenue = Math.round(sYield * crop.rawPrice);
  const sCost    = Object.values(crop.inputCosts).reduce((a,b)=>a+b,0) * acres;
  const sNet     = sRevenue - sCost;

  const extraProfit = sNet - bNet;
  const gainPct     = bNet > 0 ? Math.round((extraProfit / bNet) * 100) : 0;

  // Fill UI
  document.getElementById('scpSubtitle').textContent =
    `Auto-calculated for ${areaLabel} · Click another card to switch`;
  document.getElementById('baselineCropName').textContent = 'Rice (Standard Baseline)';
  document.getElementById('suggestedIcon').textContent    = crop.emoji;
  document.getElementById('suggestedCropName').textContent = `${crop.name} (#${rank} Ranked)`;

  // Normal rows
  document.getElementById('normalRows').innerHTML = scpRows([
    { label: `Harvest (${fmt(Math.round(bYield))} kg × ₹${BASELINE.rawPrice})`, val: `₹${fmt(bRevenue)}`, type:'income' },
    { label: `Seed & Planting`,   val: `−₹${fmt(BASELINE.inputCosts.seed*acres)}`,         type:'cost' },
    { label: `Labour`,            val: `−₹${fmt(BASELINE.inputCosts.labour*acres)}`,       type:'cost' },
    { label: `Fertiliser & Pest`, val: `−₹${fmt(BASELINE.inputCosts.fertiliser*acres)}`,  type:'cost' },
    { label: `Misc / Irrigation`, val: `−₹${fmt(BASELINE.inputCosts.misc*acres)}`,        type:'cost' },
  ]);
  document.getElementById('normalNetDiv').innerHTML = scpNetBox(bNet, `per ${acres} acres`);

  // Suggested rows
  document.getElementById('suggestedRows').innerHTML = scpRows([
    { label: `Harvest (${fmt(Math.round(sYield))} kg × ₹${crop.rawPrice})`, val: `₹${fmt(sRevenue)}`, type:'income' },
    { label: `Seed & Planting`,   val: `−₹${fmt(crop.inputCosts.seed*acres)}`,         type:'cost' },
    { label: `Labour`,            val: `−₹${fmt(crop.inputCosts.labour*acres)}`,       type:'cost' },
    { label: `Fertiliser & Pest`, val: `−₹${fmt(crop.inputCosts.fertiliser*acres)}`,  type:'cost' },
    { label: `Misc / Irrigation`, val: `−₹${fmt(crop.inputCosts.misc*acres)}`,        type:'cost' },
  ]);
  document.getElementById('suggestedNetDiv').innerHTML = scpNetBox(sNet, `per ${acres} acres`);

  // VS gain
  const gainEl = document.getElementById('extraGainDiv');
  if (extraProfit > 0) {
    gainEl.innerHTML = `<span class="scp-gain-num">+₹${fmt(extraProfit)}</span><span class="scp-gain-lbl">more profit<br/>(${gainPct}% better)</span>`;
    gainEl.className = 'scp-extra-gain positive';
  } else {
    gainEl.innerHTML = `<span class="scp-gain-num" style="color:#dc2626">₹${fmt(Math.abs(extraProfit))}</span><span class="scp-gain-lbl">different</span>`;
    gainEl.className = 'scp-extra-gain';
  }

  // Insight
  document.getElementById('scpInsight').innerHTML = `
    <span class="scp-insight-icon">💡</span>
    <div>
      Switching from <strong>Normal Rice Farming</strong> to <strong>${crop.name}</strong> on your 
      <strong>${acres} acres</strong> could earn you an extra
      <strong style="color:var(--green-700)">₹${fmt(Math.abs(extraProfit))}</strong> per year.
      ${crop.multiplier ? `With value-addition (${crop.multiplier}), the potential is even higher — visit the Value Add page.` : ''}
    </div>`;

  // Show panel with animation
  const panel = document.getElementById('smartComparison');
  panel.style.display = 'block';
  panel.style.animation = 'none';
  requestAnimationFrame(() => {
    panel.style.animation = 'fadeInUp 0.5s ease';
    panel.scrollIntoView({ behavior:'smooth', block:'start' });
  });
}

function scpRows(rows) {
  return rows.map(r => `
    <div class="scp-row scp-${r.type}">
      <span class="scp-row-lbl">${r.label}</span>
      <span class="scp-row-val">${r.val}</span>
    </div>`).join('');
}

function scpNetBox(net, sub) {
  const isGain = net >= 0;
  return `
    <div class="scp-net-label">🏆 Net ${isGain ? 'Profit' : 'Loss'}</div>
    <div class="scp-net-amount ${isGain ? 'positive' : 'negative'}">${isGain ? '' : '−'}₹${fmt(Math.abs(net))}</div>
    <div class="scp-net-sub">${sub}</div>`;
}

function closeSmartComparison() {
  const panel = document.getElementById('smartComparison');
  panel.style.animation = 'fadeInUp 0.3s ease reverse';
  setTimeout(() => { panel.style.display = 'none'; }, 280);
  document.querySelectorAll('.card-selected').forEach(c => c.classList.remove('card-selected'));
}

// ══════════════════════════════════════════
//  CROP DETAIL MODAL (double-click)
// ══════════════════════════════════════════
function openCropModal(crop, rank) {
  const profit = getExpectedProfit(crop, crop.score || 70);
  const totalInput = Object.values(crop.inputCosts).reduce((a,b)=>a+b,0);
  const netProfit = profit - totalInput;
  const pct = Math.round((crop.score||70)/100*360);

  document.getElementById('cropModalContent').innerHTML = `
    <div class="cm-hero">
      <div class="cm-emoji">${crop.emoji}</div>
      <div class="cm-hero-info">
        <div class="cm-name">${crop.name}</div>
        <div class="cm-variety">${crop.variety}</div>
        <div class="cm-badges">
          ${crop.tags.map(t=>`<span class="tag tag-green">${t}</span>`).join('')}
          <span class="tag tag-yellow">#${rank} Ranked</span>
        </div>
        <div style="margin-top:0.75rem;font-size:0.82rem;color:var(--text-muted)">${crop.desc}</div>
      </div>
      <div class="cm-score-ring" style="--pct:${pct}deg">
        <div class="cm-score-inner">
          <span class="cm-score-num">${crop.score||70}</span>
          <span class="cm-score-lbl">/100</span>
        </div>
      </div>
    </div>
    <div class="cm-body">

      <div class="cm-section">
        <div class="cm-section-title">🌱 Growing Requirements</div>
        <div class="cm-grid-3">
          <div class="cm-stat-item"><div class="cm-stat-val">${crop.temp.min}–${crop.temp.max}°C</div><div class="cm-stat-lbl">Temperature</div></div>
          <div class="cm-stat-item"><div class="cm-stat-val">${crop.rainfall.min}–${crop.rainfall.max}mm</div><div class="cm-stat-lbl">Rainfall</div></div>
          <div class="cm-stat-item"><div class="cm-stat-val">${crop.soil.join(', ')}</div><div class="cm-stat-lbl">Soil Types</div></div>
        </div>
      </div>

      <div class="cm-section">
        <div class="cm-section-title">💸 Input Cost Breakdown (per acre)</div>
        <div class="cm-cost-row c-seed"><span class="cm-cost-lbl">🌱 Seed / Planting Material</span><span class="cm-cost-val">₹${crop.inputCosts.seed.toLocaleString('en-IN')}</span></div>
        <div class="cm-cost-row c-labour"><span class="cm-cost-lbl">👷 Labour & Operations</span><span class="cm-cost-val">₹${crop.inputCosts.labour.toLocaleString('en-IN')}</span></div>
        <div class="cm-cost-row c-fert"><span class="cm-cost-lbl">🧪 Fertiliser & Pesticide</span><span class="cm-cost-val">₹${crop.inputCosts.fertiliser.toLocaleString('en-IN')}</span></div>
        <div class="cm-cost-row c-misc"><span class="cm-cost-lbl">⚙️ Misc / Irrigation</span><span class="cm-cost-val">₹${crop.inputCosts.misc.toLocaleString('en-IN')}</span></div>
        <div class="cm-cost-row c-total"><span class="cm-cost-lbl">📊 Total Input Cost</span><span class="cm-cost-val">₹${totalInput.toLocaleString('en-IN')}</span></div>
      </div>

      <div class="cm-section">
        <div class="cm-section-title">💰 Profitability (per acre)</div>
        <div class="cm-grid-2">
          <div class="cm-stat-item"><div class="cm-stat-val">₹${crop.rawPrice}/kg</div><div class="cm-stat-lbl">Raw Market Price</div></div>
          <div class="cm-stat-item"><div class="cm-stat-val">${crop.yieldPerAcre.toLocaleString('en-IN')} kg</div><div class="cm-stat-lbl">Avg Yield/Acre</div></div>
        </div>
        <div class="cm-profit-highlight" style="margin-top:0.75rem">
          <div><div class="cm-profit-lbl">💵 Gross Revenue</div><div style="font-size:1.1rem;font-weight:700">₹${profit.toLocaleString('en-IN')}</div></div>
          <div><div class="cm-profit-lbl">💸 Input Costs</div><div style="font-size:1.1rem;font-weight:700;color:#dc2626">−₹${totalInput.toLocaleString('en-IN')}</div></div>
          <div><div class="cm-profit-lbl">🏆 Net Profit</div><div class="cm-profit-val">₹${netProfit.toLocaleString('en-IN')}</div></div>
        </div>
      </div>

      <div class="cm-section">
        <div class="cm-section-title">🏭 Value-Addition Potential</div>
        <div class="cm-grid-2">
          <div class="cm-stat-item"><div class="cm-stat-val">₹${crop.processedPrice}/kg</div><div class="cm-stat-lbl">Processed Price</div></div>
          <div class="cm-stat-item"><div class="cm-stat-val" style="color:#7c3aed">${crop.multiplier}</div><div class="cm-stat-lbl">Profit Multiplier</div></div>
        </div>
        <div style="margin-top:0.75rem;padding:0.75rem;background:rgba(124,58,237,0.06);border:1px solid rgba(124,58,237,0.2);border-radius:var(--radius-md);font-size:0.82rem;color:var(--text-muted)">
          By processing <strong>${crop.name}</strong> → you can earn up to 
          <strong style="color:var(--green-600)">₹${Math.round(crop.yieldPerAcre*crop.processedPrice).toLocaleString('en-IN')}</strong>/acre 
          instead of <strong>₹${Math.round(crop.yieldPerAcre*crop.rawPrice).toLocaleString('en-IN')}</strong> raw.
        </div>
      </div>

      <div class="cm-cta" style="margin-top:1.5rem; display:block;">
        <button id="btnProfitCalc" class="btn btn-calc" style="width:100%; font-size:1.3rem; padding:1.2rem; display:flex; justify-content:center; align-items:center; gap:10px; border-radius:16px;">
          📊 <span>Profit Calculator</span>
        </button>
      </div>

      <div id="modalProfitDropdown" class="slide-down-content" style="margin-top:1rem; border-radius:12px; background:var(--bg-surface); border:1px solid var(--border);"></div>

      <div class="cm-cta" style="margin-top: 1rem;">
        <a href="value.html" class="btn btn-outline" style="flex:1;text-align:center">🏭 Value Addition</a>
        <a href="market.html" class="btn btn-outline" style="flex:1;text-align:center">📊 Market Prices</a>
      </div>
    </div>`;

  const overlay = document.getElementById('cropModal');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const calcBtn = document.getElementById('btnProfitCalc');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      slideDownProfitCalc(crop, rank, calcBtn);
    });
  }
}

function slideDownProfitCalc(crop, rank, btn) {
  const dropdown = document.getElementById('modalProfitDropdown');
  if (dropdown.classList.contains('active')) {
    dropdown.classList.remove('active');
    btn.innerHTML = '📊 <span>Profit Calculator</span>';
    return;
  }
  
  const acres = totalAreaHectares > 0 ? parseFloat((totalAreaHectares * 2.471).toFixed(2)) : 1;
  const sYield = crop.yieldPerAcre * acres;
  const sRevenue = Math.round(sYield * crop.rawPrice);
  const sCost = Object.values(crop.inputCosts).reduce((a,b)=>a+b,0) * acres;
  const sNet = sRevenue - sCost;

  dropdown.innerHTML = `
    <div style="padding:1.5rem;">
      <h3 style="margin-bottom:1rem; display:flex; align-items:center; gap:8px;">
        <span style="font-size:1.5rem">💸</span> Profit Automatically Calculated
      </h3>
      <p style="color:var(--text-muted); margin-bottom:1rem; font-size:0.9rem;">
        Based on map area: <strong>${totalAreaHectares > 0 ? acres + ' acres' : '1 acre (default)'}</strong>
      </p>
      
      <div style="display:flex; flex-direction:column; gap:10px;">
        <div style="display:flex; justify-content:space-between; padding-bottom:8px; border-bottom:1px solid var(--border-light);">
          <span style="color:var(--text-muted)">Harvest (${fmt(Math.round(sYield))} kg × ₹${crop.rawPrice})</span>
          <span style="font-weight:600; color:var(--green-600)">₹${fmt(sRevenue)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding-bottom:8px; border-bottom:1px solid var(--border-light);">
          <span style="color:var(--text-muted)">Seed & Planting</span>
          <span style="font-weight:600; color:#dc2626">−₹${fmt(crop.inputCosts.seed*acres)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding-bottom:8px; border-bottom:1px solid var(--border-light);">
          <span style="color:var(--text-muted)">Labour</span>
          <span style="font-weight:600; color:#dc2626">−₹${fmt(crop.inputCosts.labour*acres)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding-bottom:8px; border-bottom:1px solid var(--border-light);">
          <span style="color:var(--text-muted)">Fertiliser & Pest</span>
          <span style="font-weight:600; color:#dc2626">−₹${fmt(crop.inputCosts.fertiliser*acres)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding-bottom:8px; border-bottom:1px solid var(--border-light);">
          <span style="color:var(--text-muted)">Misc / Irrigation</span>
          <span style="font-weight:600; color:#dc2626">−₹${fmt(crop.inputCosts.misc*acres)}</span>
        </div>
        
        <div style="margin-top:10px; padding:15px; border-radius:var(--radius-md); background:${sNet >= 0 ? 'var(--green-50)' : 'rgba(220,38,38,0.05)'}; border:1px solid ${sNet >= 0 ? 'var(--border)' : 'rgba(220,38,38,0.2)'};">
          <div style="font-size:0.9rem; color:var(--text-muted); margin-bottom:5px;">🏆 Net ${sNet >= 0 ? 'Profit' : 'Loss'} per ${acres} acres</div>
          <div style="font-size:1.8rem; font-weight:800; color:${sNet >= 0 ? 'var(--green-600)' : '#dc2626'};">
            ${sNet >= 0 ? '' : '−'}₹${fmt(Math.abs(sNet))}
          </div>
        </div>
      </div>
    </div>
  `;
  
  dropdown.classList.add('active');
  btn.innerHTML = '🔽 <span>Close Calculator</span>';
  
  const contentToAnimate = dropdown.querySelector('div');
  contentToAnimate.style.animation = 'fadeInUp 0.6s ease';
}

function closeCropModal(e) {
  if (e && e.target !== document.getElementById('cropModal')) return;
  document.getElementById('cropModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if(e.key==='Escape') { document.getElementById('cropModal').classList.remove('open'); document.body.style.overflow=''; } });

// ══════════════════════════════════════════
//  PROFIT CALCULATOR
// ══════════════════════════════════════════
function onPcCropChange() {
  const key = document.getElementById('pcCrop')?.value;
  const d = PC_CROPS[key]; if(!d) return;
  document.getElementById('pcPrice').value = d.price;
  document.getElementById('pcYield').value = d.yield;
  document.getElementById('pcSeedCost').value = d.seed;
  document.getElementById('pcLabour').value = d.labour;
  document.getElementById('pcFertiliser').value = d.fert;
  document.getElementById('pcOther').value = d.other;
  document.getElementById('pcValuePrice').value = d.vPrice;
  liveCalc();
}

function liveCalc() {
  const acres=+document.getElementById('pcAcres')?.value||0;
  if(acres>0) runProfitCalc(true);
}

function runProfitCalc(silent=false) {
  const cropKey = document.getElementById('pcCrop').value;
  const acres   = parseFloat(document.getElementById('pcAcres').value)||0;
  const yld     = parseFloat(document.getElementById('pcYield').value)||0;
  const price   = parseFloat(document.getElementById('pcPrice').value)||0;
  const seed    = parseFloat(document.getElementById('pcSeedCost').value)||0;
  const labour  = parseFloat(document.getElementById('pcLabour').value)||0;
  const fert    = parseFloat(document.getElementById('pcFertiliser').value)||0;
  const other   = parseFloat(document.getElementById('pcOther').value)||0;
  const vPrice  = parseFloat(document.getElementById('pcValuePrice').value)||0;

  if(!acres||!yld||!price){if(!silent)showToast('⚠️ Enter at least area, yield and price','warn');return;}

  const totalKg     = acres * yld;
  const grossIncome = Math.round(totalKg * price);
  const costPerAcre = seed + labour + fert + other;
  const totalCost   = Math.round(costPerAcre * acres);
  const netProfit   = grossIncome - totalCost;
  const roi         = totalCost > 0 ? Math.round((netProfit/totalCost)*100) : 0;
  const margin      = grossIncome > 0 ? Math.round((netProfit/grossIncome)*100) : 0;

  const advIncome   = vPrice > 0 ? Math.round(totalKg * vPrice) : 0;
  const advNet      = advIncome > 0 ? advIncome - totalCost : 0;
  const extraProfit = advNet - netProfit;

  // Show results
  document.getElementById('pcEmpty').style.display = 'none';
  document.getElementById('pcResults').style.display = 'block';

  document.getElementById('pc-grossIncome').textContent = `₹${fmt(grossIncome)}`;
  document.getElementById('pc-incomeBreak').textContent = `${fmt(totalKg)} kg × ₹${price}/kg`;
  document.getElementById('pc-totalCost').textContent   = `₹${fmt(totalCost)}`;
  document.getElementById('pc-costBreak').textContent   = `₹${fmt(costPerAcre)}/acre × ${acres} acres`;
  document.getElementById('pc-netProfit').textContent   = `₹${fmt(Math.abs(netProfit))}`;
  document.getElementById('pc-profitBreak').textContent = netProfit>=0 ? `ROI: ${roi}%` : 'Net Loss';

  const profitCard = document.getElementById('pc-profitCard');
  profitCard.classList.toggle('loss', netProfit < 0);

  // ROI Bar
  const roiPct = Math.min(100, Math.max(0, margin));
  document.getElementById('pc-roiPct').textContent = `${margin}% margin`;
  setTimeout(() => { document.getElementById('pc-roiFill').style.width = roiPct + '%'; }, 100);

  // Breakdown list
  const perAcreNet = Math.round(netProfit / acres);
  document.getElementById('pc-breakdownList').innerHTML = `
    <div class="pc-bk-row income-row"><span class="pc-bk-lbl">💰 Gross Revenue</span><span class="pc-bk-val">₹${fmt(grossIncome)}</span></div>
    <div class="pc-bk-row cost-row"><span class="pc-bk-lbl">🌱 Seed & Planting</span><span class="pc-bk-val">−₹${fmt(seed*acres)}</span></div>
    <div class="pc-bk-row cost-row"><span class="pc-bk-lbl">👷 Labour</span><span class="pc-bk-val">−₹${fmt(labour*acres)}</span></div>
    <div class="pc-bk-row cost-row"><span class="pc-bk-lbl">🧪 Fertiliser & Pest.</span><span class="pc-bk-val">−₹${fmt(fert*acres)}</span></div>
    <div class="pc-bk-row cost-row"><span class="pc-bk-lbl">⚙️ Other Costs</span><span class="pc-bk-val">−₹${fmt(other*acres)}</span></div>
    <div class="pc-bk-row ${netProfit<0?'net-row loss-row':'net-row'}"><span class="pc-bk-lbl">🏆 Net ${netProfit>=0?'Profit':'Loss'}</span><span class="pc-bk-val">${netProfit<0?'−':''}₹${fmt(Math.abs(netProfit))}</span></div>`;

  // Value-added banner
  const vBanner = document.getElementById('pc-valueBanner');
  if(advIncome > 0 && extraProfit > 0) {
    vBanner.style.display = 'flex';
    document.getElementById('pc-rawProfit').textContent   = `₹${fmt(netProfit)}`;
    document.getElementById('pc-advProfit').textContent   = `₹${fmt(advNet)}`;
    document.getElementById('pc-valueGain').textContent   = `+₹${fmt(extraProfit)} extra by processing! (${Math.round(extraProfit/Math.max(netProfit,1)*100)}% more)`;
  } else vBanner.style.display = 'none';

  // Per acre
  document.getElementById('pc-perAcre').innerHTML = `
    <div class="pc-pa-item"><div class="pc-pa-val">₹${fmt(Math.round(grossIncome/acres))}</div><div class="pc-pa-lbl">Income/Acre</div></div>
    <div class="pc-pa-item"><div class="pc-pa-val">₹${fmt(costPerAcre)}</div><div class="pc-pa-lbl">Cost/Acre</div></div>
    <div class="pc-pa-item"><div class="pc-pa-val ${netProfit<0?'':''}">₹${fmt(Math.abs(perAcreNet))}</div><div class="pc-pa-lbl">${netProfit>=0?'Profit':'Loss'}/Acre</div></div>`;

  if(!silent) showToast('✅ Profit calculated!');
}

// ══════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════
function formatSoil(soil){const m={loamy:'Loamy',sandy:'Sandy',clay:'Clay',silt:'Silt',black:'Black (Regur)',red:'Red Laterite',alluvial:'Alluvial',peaty:'Peaty'};return m[soil]||soil;}
function fmt(n){return Math.abs(n).toLocaleString('en-IN');}

function showToast(msg,type='success'){
  document.querySelector('.toast')?.remove();
  const t=document.createElement('div'); t.className='toast'; t.innerHTML=`<span>${msg}</span>`;
  if(type==='warn')t.style.borderColor='var(--amber-500)';
  document.body.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transform='translateY(10px)';t.style.transition='all 0.3s ease';setTimeout(()=>t.remove(),300);},3500);
}

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => { initMap(); });

// ══════════════════════════════════════════
//  PERENUAL API LOGIC
// ══════════════════════════════════════════
let isPerenualMode = false;
let perenualCache = []; 

function togglePerenualAPI() {
  const checkbox = document.getElementById('usePerenualAPI');
  if(checkbox.checked) {
    const key = localStorage.getItem('perenual_key');
    if(!key) {
      document.getElementById('perenualModal').style.display = 'flex';
      checkbox.checked = false; 
    } else {
      isPerenualMode = true;
      showToast('🌍 Switched to Perenual Global Database', 'success');
    }
  } else {
    isPerenualMode = false;
    showToast('🔒 Switched to Local Secure Database', 'success');
  }
}

function savePerenualKey() {
  const input = document.getElementById('perenualKeyInput').value.trim();
  if(!input) return showToast('Please enter an API Key', 'warn');
  localStorage.setItem('perenual_key', input);
  document.getElementById('perenualModal').style.display = 'none';
  document.getElementById('usePerenualAPI').checked = true;
  isPerenualMode = true;
  showToast('🔑 API Key Saved. Global mode active.', 'success');
}

async function loadPerenualCrops() {
  const key = localStorage.getItem('perenual_key');
  if(!key) return [];
  
  // Try Cache
  const cached = localStorage.getItem('perenual_crops_cache');
  if (cached) {
    perenualCache = JSON.parse(cached);
    return perenualCache;
  }
  
  // Fetch
  showToast('⌛ Querying Perenual Global Database (Consuming 1 request)...', 'success');
  try {
    const res = await fetch(`https://perenual.com/api/species-list?key=${key}&indoor=0&edible=1`);
    if(!res.ok) {
      showToast('⚠️ Perenual API Error or Invalid Key', 'warn');
      if (res.status === 403 || res.status === 401) {
         localStorage.removeItem('perenual_key');
         document.getElementById('usePerenualAPI').checked = false;
         isPerenualMode = false;
      }
      return [];
    }
    const data = await res.json();
    if(data.data && data.data.length > 0) {
      // Map to our local schema format
      const mappedCrops = data.data.map((c, i) => {
        const cname = c.common_name ? (c.common_name.charAt(0).toUpperCase() + c.common_name.slice(1)) : 'Unknown Crop';
        const sname = c.scientific_name && c.scientific_name.length > 0 ? c.scientific_name[0] : 'Various spp.';
        return {
           name: cname,
           emoji: '🌿',
           variety: sname,
           soil: ['loamy','sandy','alluvial','red','black'], // Adaptable fallback
           rainfall: {min:300, max:3000, ideal:1000},
           temp: {min:10, max:40, ideal:25},
           profitRange: {low: 35000, high: 80000},
           profitLevel: 'medium',
           multiplier: '2.5x (→Processed)',
           desc: 'Data automatically sourced from Perenual Global Botanical Database. Financials are estimated.',
           tags: ['Perenual', 'Global'],
           inputCosts: {seed: 5000, labour: 8000, fertiliser: 6000, misc: 3000},
           yieldPerAcre: 3000,
           rawPrice: 20,
           processedPrice: 50,
           _img: c.default_image?.thumbnail || null
        };
      });
      
      perenualCache = mappedCrops;
      localStorage.setItem('perenual_crops_cache', JSON.stringify(mappedCrops));
      showToast(`✅ Loaded ${mappedCrops.length} crops from Perenual API`);
      return mappedCrops;
    }
  } catch(e) {
    console.warn(e);
    showToast('⚠️ Network Error reaching Perenual DB', 'warn');
  }
  return [];
}
