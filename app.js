const $ = (id) => document.getElementById(id);
const FAKE_RIDE_DATA = [
  {
    name: "Alakazam",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND:  { accel: "65-85", jump: "15-25", skill: "65-95", speed: "40-65", stamina: "45-100" }
    }
  },
  {
    name: "Beedrill",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Bird",

    modes: {
      AIR:   { accel: "35-70", jump: "35-60",   skill: "55-80", speed: "30-65", stamina: "40-100" }
    }
  },
  {
    name: "Arbok",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND:  { accel: "65-80", jump: "15-35", skill: "15-40", speed: "20-55", stamina: "35-100" }
    }
  },
  {
    name: "Clefable",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND:  { accel: "35-55", jump: "25-35", skill: "35-55", speed: "30-55", stamina: "55-100" }
    }
  },
  {
    name: "Butterfree",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Bird",
    modes: {
      LAND:  { accel: "40-75", jump: "20-65", skill: "35-65", speed: "40-65", stamina: "30-100" }
    }
  },
  {
    name: "Chansey",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND:  { accel: "35-55", jump: "25-35", skill: "35-55", speed: "30-55", stamina: "50-100" }
    }
  },
  {
    name: "Cloyster",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse & Sumbarine",
    modes: {
      LAND:  { accel: "30-50", jump: "5-20", skill: "10-35", speed: "20-45", stamina: "15-50" },
      WATER: { accel: "45-65", jump: "30-50", skill: "50-85", speed: "35-65", stamina: "35-100" }
    }
  },
  {
    name: "Dodrio",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND:  { accel: "60-85", jump: "25-45", skill: "35-75", speed: "55-95", stamina: "50-100" }
    }
  },
    {
    name: "Exeggutor",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND: { accel: "20-40", jump: "5-20", skill: "15-35", speed: "20-35", stamina: "40-100" }
    }
  },
  {
    name: "Fearow",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse & Bird",
    modes: {
      AIR:  { accel: "50-80", jump: "30-70", skill: "60-90", speed: "40-80", stamina: "35-100" },
      LAND: { accel: "45-65", jump: "10-25", skill: "20-40", speed: "30-45", stamina: "25-70" }
    }
  },
  {
    name: "Flareon",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse",
    modes: {
      LAND: { accel: "25-55", jump: "25-40", skill: "30-55", speed: "25-55", stamina: "35-100" }
    }
  },
  {
    name: "Gengar",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse & UFO",
    modes: {
      LAND: { accel: "35-55", jump: "20-35", skill: "45-65", speed: "25-40", stamina: "30-55" },
      AIR:  { accel: "25-45", jump: "25-45", skill: "55-80", speed: "20-65", stamina: "30-100" }
    }
  },
  {
    name: "Golbat",
    target: "1 Seat",
    modelFrom: "Base Cobblemon",
    rideStyle: "Horse & Bird",
    modes: {
      LAND: { accel: "10-40", jump: "10-20", skill: "80-100", speed: "10-30", stamina: "10-20" },
      AIR:  { accel: "45-70", jump: "45-75", skill: "25-55", speed: "35-65", stamina: "25-100" }
    }
  },
  {
  name: "Golem",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-35", jump: "10-20", skill: "25-40", speed: "18-28", stamina: "65-95" }
  }
  },
  {
  name: "Jolteon",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "45-75", jump: "25-45", skill: "35-60", speed: "40-70", stamina: "20-40" }
  }
  },
  {
  name: "Kangaskhan",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "50-75", jump: "25-45", skill: "30-50", speed: "45-65", stamina: "55-80" }
  }
  },
  {
  name: "Kingler",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse & Submarine",
  modes: {
    LAND:  { accel: "25-50", jump: "10-25", skill: "20-40", speed: "20-40", stamina: "30-55" },
    WATER: { accel: "35-60", jump: "15-35", skill: "45-70", speed: "30-55", stamina: "40-75" }
  }
  },
  {
  name: "Lickitung",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "5-20", jump: "10-25", skill: "5-20", speed: "10-25", stamina: "25-45" }
  }
  },
  {
  name: "Machamp",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "50-70", jump: "55-75", skill: "70-90", speed: "45-65", stamina: "80-100" }
  }
  },
  {
  name: "Muk",
  target: "1 Seat",
  modelFrom: "Base Cobblemon",
  rideStyle: "Horse",
  modes: {
    LAND: { accel: "20-40", jump: "10-25", skill: "20-40", speed: "25-45", stamina: "70-95" }
  }
  },
];

const PAGES = [
  {
    section: "Start Here",
    pages: [
      {
        id: "home",
        title: "Home",
        badge: "",
        render: () => `
          <h1>CJM Wiki</h1>
          <p class="muted">Simple wiki site for your mod (HTML/CSS/JS only).</p>

          <h2>Quick Links</h2>
          <ul>
            <li><a href="#install">Install</a></li>
            <li><a href="#ride-stats">Ride Stats</a></li>
            <li><a href="#mount-list">Mount List</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        `
      },
      {
        id: "install",
        title: "Install",
        badge: "",
        render: () => `
          <h1>Install</h1>
          <p>Put your real install steps here.</p>

          <h2>Requirements (example)</h2>
          <ul>
            <li>Minecraft: <code>1.21.1</code></li>
            <li>Loader: <code>Fabric</code> (and/or NeoForge)</li>
            <li>Cobblemon: <code>(your version)</code></li>
          </ul>

          <h2>Steps</h2>
          <ol>
            <li>Install Fabric Loader</li>
            <li>Install Cobblemon</li>
            <li>Drop CJM in <code>mods/</code></li>
            <li>(Optional) Enable CJM resource pack</li>
          </ol>
        `
      }
    ]
  },
  {
    section: "Content",
    pages: [
      {
        id: "ride-stats",
        title: "Ride Stats",
        badge: "STATS",
        render: () => renderRideStatsPage()
      },
      {
        id: "mount-list",
        title: "Mount List",
        badge: "WIP",
        render: () => `
          <h1>Mount List</h1>
          <p>Example list (replace with your real supported Pokémon list):</p>
          <ul>
            ${FAKE_RIDE_DATA.map(p => {
              const modes = Object.keys(p.modes).join(", ");
              return `<li>
                <strong>${escapeHtml(p.name)}</strong>
                <span class="muted small">(${escapeHtml(modes)})</span>
                <div class="muted tiny">Model: ${escapeHtml(p.modelFrom)}</div>
              </li>`;
            }).join("")}
          </ul>
        `
      }
    ]
  },
  {
    section: "Support",
    pages: [
      {
        id: "faq",
        title: "FAQ",
        badge: "",
        render: () => `
          <h1>FAQ</h1>

          <h2>Pokémon are invisible on multiplayer</h2>
          <p>Common causes: resource pack mismatch, wrong load order, or client/server version mismatch.</p>

          <h2>Mounting works but syncing is weird</h2>
          <p>Can happen if the mount controller / model transforms are out of sync. Document your fix steps here.</p>
        `
      }
    ]
  }
];

// ---------- Helpers ----------
function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function getAllPagesFlat(){
  const out = [];
  for (const sec of PAGES){
    for (const p of sec.pages){
      out.push({ ...p, section: sec.section });
    }
  }
  return out;
}

function getRoute(){
  const raw = (location.hash || "#home").slice(1).trim();
  return raw || "home";
}

function setActiveNav(route){
  document.querySelectorAll(".nav a").forEach(a => {
    a.classList.toggle("active", a.dataset.id === route);
  });
}

function setCrumb(title){
  $("crumbTitle").textContent = title;
}

function setStatus(text){
  $("pillStatus").textContent = text;
}

// ---------- Sidebar ----------
function buildNav(filterText=""){
  const navEl = $("nav");
  navEl.innerHTML = "";

  const q = filterText.trim().toLowerCase();
  const pages = getAllPagesFlat();

  const sections = new Map();
  for (const p of pages){
    if (!sections.has(p.section)) sections.set(p.section, []);
    sections.get(p.section).push(p);
  }

  for (const [sectionName, sectionPages] of sections.entries()){
    const filtered = !q ? sectionPages : sectionPages.filter(p => {
      const hay = (p.title + " " + (p.badge||"")).toLowerCase();
      return hay.includes(q);
    });
    if (!filtered.length) continue;

    const sec = document.createElement("div");
    sec.className = "section";
    sec.textContent = sectionName;
    navEl.appendChild(sec);

    for (const p of filtered){
      const a = document.createElement("a");
      a.href = `#${p.id}`;
      a.dataset.id = p.id;
      a.innerHTML = `<span>${escapeHtml(p.title)}</span>` + (p.badge ? `<span class="badge">${escapeHtml(p.badge)}</span>` : "");
      navEl.appendChild(a);
    }
  }

  setStatus(q ? "Filtering sidebar…" : "Ready");
  setActiveNav(getRoute());
}

// ---------- Page Render ----------
function renderPage(){
  const route = getRoute();
  const pages = getAllPagesFlat();
  const found = pages.find(p => p.id === route) || pages.find(p => p.id === "home");

  $("page").innerHTML = found ? found.render() : `<h1>404</h1><p>Page not found.</p>`;
  setCrumb(found ? found.title : "Home");
  setActiveNav(route);
  if (route === 'ride-stats') {
    wireRideStatsControls();
    updateRideStatsDisplay();
  }
}

// ---------- Ride Stats ----------
function renderModeCell(mode, modeStats){
  if (!modeStats) {
    return `
      <div class="modeCell none" aria-disabled="true">
        <div class="modeTitle muted">${mode}</div>
        <div class="modeEmpty muted small">—</div>
      </div>
    `;
  }
  return `
    <div class="modeCell">
      <div class="modeTitle">${mode}</div>
      <div class="modeGrid">
        <div class="k">ACCEL</div><div class="v">${escapeHtml(modeStats.accel)}</div>
        <div class="k">JUMP</div><div class="v">${escapeHtml(modeStats.jump)}</div>
        <div class="k">SKILL</div><div class="v">${escapeHtml(modeStats.skill)}</div>
        <div class="k">SPEED</div><div class="v">${escapeHtml(modeStats.speed)}</div>
        <div class="k">STA</div><div class="v">${escapeHtml(modeStats.stamina)}</div>
      </div>
    </div>
  `;
}

function renderRideStatsPage(){
  return `
    <h1>Ride Stats</h1>
    <p class="muted">All Ride Stats for Version 1.8</p>
    <!-- Controls -->
    <div class="rideControls" style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
      <input id="rideSearchInput" placeholder="Search Pokémon" style="padding:6px;min-width:160px;" />
      <select id="rideFilterSelect" style="padding:6px;">
        <option value="ALL">All / Unsorted</option>
        <option value="FASTEST">Fastest</option>
        <option value="SLOWEST">Slowest</option>
        <option value="AIR">Has AIR</option>
        <option value="WATER">Has WATER</option>
        <option value="LAND">Has LAND</option>
      </select>
      <div class="muted small">Tip: type to search, then choose a filter.</div>
    </div>

    <!-- Desktop table -->
    <div class="tableWrap rideWrap">
      <table class="rideTable">
        <thead>
          <tr>
            <th>Pokémon</th>
            <th>LAND</th>
            <th>AIR</th>
            <th>WATER</th>
          </tr>
        </thead>
        <tbody id="rideTableBody">
          ${FAKE_RIDE_DATA.map((p) => `
            <tr>
              <td class="pokeCell">
                <strong>${escapeHtml(p.name)}</strong>
                <div class="muted small">${escapeHtml(p.target)}</div>
                <div class="modelLine">
                  <span class="modelTag">Model</span>
                  <span class="muted small">${escapeHtml(p.modelFrom)}</span>
                </div>

                <div class="modelLine">
                  <span class="modelTag">Ride Style</span>
                  <span class="muted small">${escapeHtml(p.rideStyle || "—")}</span>
                </div>
              </td>
              <td>${renderModeCell("LAND", p.modes.LAND)}</td>
              <td>${renderModeCell("AIR", p.modes.AIR)}</td>
              <td>${renderModeCell("WATER", p.modes.WATER)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <!-- Mobile cards -->
    <div class="rideCards" id="rideCards">
      ${FAKE_RIDE_DATA.map((p) => `
        <div class="rideCard">
          <div class="rideCardTop">
            <div>
              <div class="rideCardName">${escapeHtml(p.name)}</div>
              <div class="muted small">${escapeHtml(p.target)}</div>
              <div class="modelLine">
                <span class="modelTag">Model</span>
                <span class="muted small">${escapeHtml(p.modelFrom)}</span>
              </div>
            </div>
          </div>

          <div class="rideModes">
            ${renderModeCell("LAND", p.modes.LAND)}
            ${renderModeCell("AIR", p.modes.AIR)}
            ${renderModeCell("WATER", p.modes.WATER)}
          </div>
        </div>
      `).join("")}
    </div>

    <h2>Credits</h2>
    <p class="muted small">
        Faction_Void was here
    </p>
  `;
}

// ---------- Ride stats helpers (search / filter / sort) ----------
function parseStatRange(val){
  if (!val) return 0;
  try {
    const parts = String(val).split("-").map(s => s.trim());
    const last = parts[parts.length-1];
    const n = Number(last.replace(/[^0-9.]/g, ''));
    return Number.isFinite(n) ? n : 0;
  } catch (e){ return 0; }
}

function getRideScoreForSort(p){
  let best = 0;
  for (const m of Object.values(p.modes||{})){
    best = Math.max(best, parseStatRange(m.speed));
  }
  return best;
}

function getFilteredRides(){
  const qEl = document.getElementById('rideSearchInput');
  const sel = document.getElementById('rideFilterSelect');
  const q = qEl ? qEl.value.trim().toLowerCase() : '';
  const filter = sel ? sel.value : 'ALL';

  let list = FAKE_RIDE_DATA.slice();

  if (q) list = list.filter(p => p.name.toLowerCase().includes(q));

  if (filter === 'AIR' || filter === 'WATER' || filter === 'LAND'){
    list = list.filter(p => Object.keys(p.modes||{}).includes(filter));
  }

  if (filter === 'FASTEST'){
    list.sort((a,b) => getRideScoreForSort(b) - getRideScoreForSort(a));
  } else if (filter === 'SLOWEST'){
    list.sort((a,b) => getRideScoreForSort(a) - getRideScoreForSort(b));
  }

  return list;
}

function updateRideStatsDisplay(){
  const tableBody = document.getElementById('rideTableBody');
  const cardsWrap = document.getElementById('rideCards');
  if (!tableBody || !cardsWrap) return;

  const list = getFilteredRides();

  tableBody.innerHTML = list.map((p) => `
    <tr>
      <td class="pokeCell">
        <strong>${escapeHtml(p.name)}</strong>
        <div class="muted small">${escapeHtml(p.target)}</div>
        <div class="modelLine">
          <span class="modelTag">Model</span>
          <span class="muted small">${escapeHtml(p.modelFrom)}</span>
        </div>

        <div class="modelLine">
          <span class="modelTag">Ride Style</span>
          <span class="muted small">${escapeHtml(p.rideStyle || "—")}</span>
        </div>
      </td>
      <td>${renderModeCell("LAND", p.modes.LAND)}</td>
      <td>${renderModeCell("AIR", p.modes.AIR)}</td>
      <td>${renderModeCell("WATER", p.modes.WATER)}</td>
    </tr>
  `).join("");

  cardsWrap.innerHTML = list.map((p) => `
    <div class="rideCard">
      <div class="rideCardTop">
        <div>
          <div class="rideCardName">${escapeHtml(p.name)}</div>
          <div class="muted small">${escapeHtml(p.target)}</div>
          <div class="modelLine">
            <span class="modelTag">Model</span>
            <span class="muted small">${escapeHtml(p.modelFrom)}</span>
          </div>
        </div>
      </div>

      <div class="rideModes">
        ${renderModeCell("LAND", p.modes.LAND)}
        ${renderModeCell("AIR", p.modes.AIR)}
        ${renderModeCell("WATER", p.modes.WATER)}
      </div>
    </div>
  `).join("");
}

function wireRideStatsControls(){
  const qEl = document.getElementById('rideSearchInput');
  const sel = document.getElementById('rideFilterSelect');
  if (qEl){
    qEl.removeEventListener('input', updateRideStatsDisplay);
    qEl.addEventListener('input', updateRideStatsDisplay);
  }
  if (sel){
    sel.removeEventListener('change', updateRideStatsDisplay);
    sel.addEventListener('change', updateRideStatsDisplay);
  }
}

// ---------- Mobile menu ----------
function wireMobileMenu(){
  const btn = $("mobileBtn");
  const sidebar = $("sidebar");
  btn.addEventListener("click", () => sidebar.classList.toggle("open"));
  window.addEventListener("hashchange", () => sidebar.classList.remove("open"));
}

// ---------- Init ----------
function init(){
  $("year").textContent = String(new Date().getFullYear());

  buildNav("");

  $("searchInput").addEventListener("input", (e) => {
    buildNav(e.target.value || "");
  });

  window.addEventListener("hashchange", renderPage);

  wireMobileMenu();
  renderPage();
}

init();
