/* --------- Trail details (from your plan) --------- */
const trailInfo = {
  panche: {
    title: "Panche Trail",
    text: "A 12 km path through mid-Andean forest (1150–1430 m). Discover the Cave of the Indian and San Luis waterfalls — photography-friendly stops with local stories and indigenous legacy."
  },
  acuapal: {
    title: "Acuapal – Guayacundo",
    text: "A long 22 km trek across San Bernardo, La Victoria and Sinaí with colonial stone paths, farms and the chance to meet traditional communities."
  },
  jardin: {
    title: "Jardín del Agua (Santa Teresa)",
    text: "A small eco-hub offering guided hikes, birdwatching, river bathing, coffee tours and yoga — a gentle introduction to mindful ecotourism."
  }
};

document.querySelectorAll('.more-btn').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const key = e.currentTarget.getAttribute('data-target');
    const panel = document.getElementById('trail-details');
    panel.hidden = false;
    panel.innerHTML = `<h4>${trailInfo[key].title}</h4><p>${trailInfo[key].text}</p>`;
    panel.scrollIntoView({behavior:'smooth', block: 'center'});
  });
});

/* --------- Water gallery --------- */
document.querySelectorAll('.thumb').forEach(th=>{
  th.addEventListener('click', ()=>{
    const title = th.dataset.title;
    const desc = th.dataset.desc;
    const panel = document.getElementById('water-detail');
    panel.hidden = false;
    panel.innerHTML = `<h4>${title}</h4><p>${desc}</p>`;
    panel.scrollIntoView({behavior:'smooth', block:'center'});
  });
});

/* --------- Birds data (tourist-friendly blurbs) --------- */
const birds = {
  canario: {
    name: "Canario Coronado",
    short: "A flash of yellow that greets dawn among coffee bushes.",
    tip: "Listen for short, cheerful notes near openings and farm edges — best at sunrise."
  },
  toche: {
    name: "Toche Pico de Plata",
    short: "A sleek bird that shows a silver tone in bright light.",
    tip: "Try quiet observation near flowering trees at mid-morning."
  },
  tangara: {
    name: "Tángara Real",
    short: "A colorful presence that adds jewel-like hues to the understorey.",
    tip: "Look for quick movements in mixed-species flocks after rain."
  },
  tortolita: {
    name: "Tortolita Rojiza",
    short: "A gentle, rosy-toned dove often seen perched calmly on low branches.",
    tip: "Scan open grassy edges and watch for slow, steady movements."
  },
  batara: {
    name: "Batará Carcajada",
    short: "A boisterous caller whose laugh-like notes punctuate the forest.",
    tip: "Follow clear, repeated calls early in the morning to locate them."
  },
  espatulita: {
    name: "Espatulita",
    short: "An elegant silhouette with a distinctive tail shape.",
    tip: "Best spotted in shaded forest paths — keep your camera ready for subtle motion."
  },
  semillero: {
    name: "Semillero Capuchino",
    short: "A tiny, active seed-eater that darts between shrubs.",
    tip: "Look low in thickets and along trail edges where seeds are abundant."
  },
  titiribi: {
    name: "Titiribí Pechirrojo",
    short: "A small bird with a warm, reddish chest that stands out against green leaves.",
    tip: "Quiet patience near streams increases your chances at dawn or dusk."
  },
  bichofue: {
    name: "Bichofué",
    short: "A curious forest bird often seen hopping on trunks and branches.",
    tip: "Check trunks and mid-height branches — they like vertical surfaces."
  },
  perico: {
    name: "Perico Alibronceado",
    short: "A playful parrotlet with a subtle bronze sheen when it moves.",
    tip: "Watch small flocks around fruiting trees during late morning."
  }
};

const birdGrid = document.getElementById('bird-grid');
const birdPanel = document.getElementById('bird-panel');

birdGrid.addEventListener('click', (e)=>{
  const btn = e.target.closest('.bird-card');
  if (!btn) return;
  const key = btn.dataset.bird;
  const info = birds[key];
  birdPanel.hidden = false;
  birdPanel.innerHTML = `
    <div style="display:flex;gap:12px;align-items:flex-start">
      <div style="flex:0 0 120px">
        <img src="birds/${key}.jpg" alt="${info.name}" style="width:120px;height:90px;object-fit:cover;border-radius:6px">
      </div>
      <div>
        <h4>${info.name}</h4>
        <p style="margin:6px 0">${info.short}</p>
        <p style="font-size:0.95rem;color:#555"><strong>Tip:</strong> ${info.tip}</p>
      </div>
    </div>
  `;
  birdPanel.scrollIntoView({behavior:'smooth', block:'center'});
});

/* --------- Contact form basic handler (client side) --------- */
document.getElementById('contact-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Thanks! Your message was recorded (this is a demo form).');
  e.target.reset();
});

/* --------- Leaflet map (centered on Sasaima coordinates) --------- */
/* Coordinates used: 4.96705, -74.43512 (Sasaima, Cundinamarca) */
const map = L.map('mapid').setView([4.96705, -74.43512], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example markers for demo — change or extend with real trailhead coordinates
const markers = [
  {lat:4.9600, lng:-74.4400, title:'Panche Trailhead'},
  {lat:4.9750, lng:-74.4300, title:'Jardín del Agua (Santa Teresa)'},
  {lat:4.9550, lng:-74.4450, title:'La Poma Natural Park'}
];

markers.forEach(m=>{
  L.marker([m.lat,m.lng]).addTo(map).bindPopup(m.title);
});
