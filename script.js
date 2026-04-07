function scrollToAnalysis(){
document.getElementById("analysis").scrollIntoView({behavior:"smooth"});
}

// LAND GRID
const grid=document.getElementById("landGrid");

for(let i=0;i<20;i++){
let div=document.createElement("div");
div.classList.add("plot");

div.onclick=()=>{
document.querySelectorAll(".plot").forEach(p=>p.classList.remove("active"));
div.classList.add("active");
};

grid.appendChild(div);
}

// RAIN DISPLAY
const rain=document.getElementById("rainfall");
const rainValue=document.getElementById("rainValue");

rain.oninput=()=>rainValue.innerText=rain.value;

// PROFIT
let profit="medium";

function selectProfit(type){
profit=type;
document.querySelectorAll(".profit-buttons button").forEach(b=>b.classList.remove("active"));
document.getElementById(type).classList.add("active");
}

// ANALYZE
function analyze(){

let soil=document.getElementById("soil").value;
let rainfall=parseInt(rain.value);
let temp=parseInt(document.getElementById("temp").value);

let results=crops.filter(crop=>{
return crop.soil.includes(soil)
&& rainfall>=crop.rainfall[0]
&& rainfall<=crop.rainfall[1]
&& temp>=crop.temp[0]
&& temp<=crop.temp[1];
});

// PROFIT FILTER
if(profit==="high") results=results.filter(c=>c.profit>80000);
if(profit==="medium") results=results.filter(c=>c.profit>=50000 && c.profit<=90000);
if(profit==="low") results=results.filter(c=>c.profit<50000);

if(results.length===0){
document.getElementById("output").innerHTML="❌ No suitable crops found";
return;
}

results.sort((a,b)=>b.profit-a.profit);

let best=results[0];

let html=`
<div class="best-crop">
🌟 BEST: <b>${best.name}</b><br>
💰 ₹${best.profit}<br>
📈 ${Math.round(best.profit/40000)}x profit boost
</div>

<div class="crop-container">
`;

results.slice(0,6).forEach(c=>{
html+=`
<div class="crop-card">
<h4>${c.name}</h4>
<p>₹${c.profit}</p>
<div class="bar">
<div class="fill" style="width:${c.profit/1500}%"></div>
</div>
</div>
`;
});

html+=`</div>`;

document.getElementById("output").innerHTML=html;
}