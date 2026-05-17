const seasons = window.GUIDE_DATA || [];
const allEpisodes = seasons.flatMap((season) => season.episodes);

const castArchetypes = {
  "Aviva Drescher": "Known for: The Real Housewives of New York City. Medical anxiety, social provocation, extremely loaded family sidebars.",
  "Bethenny Frankel": "Known for: The Real Housewives of New York City. Speed, grief, business boundaries, emotional x-ray vision.",
  "Brynn Whitfield": "Known for: The Real Housewives of New York City reboot. Flirtation as strategy, vulnerability under lacquer.",
  "Carole Radziwill": "Known for: The Real Housewives of New York City. Downtown cool, writerly detachment, late-night social reads.",
  "Dorinda Medley": "Known for: The Real Housewives of New York City. Berkshires hostess energy, grief, martinis, combustible loyalty.",
  "Eboni K. Williams": "Known for: The Real Housewives of New York City. Race, accountability, social translation labor.",
  "Erin Lichy": "Known for: The Real Housewives of New York City reboot. Tribeca hosting, social order, status-coded friction.",
  "Heather Thomson": "Known for: The Real Housewives of New York City. Brand-builder competence, maternal directness, holla-adjacent stamina.",
  "Jenna Lyons": "Known for: The Real Housewives of New York City reboot. Fashion gravity, guarded vulnerability, reboot mystique.",
  "Jessel Taank": "Known for: The Real Housewives of New York City reboot. Marriage, status anxiety, accidental comic precision.",
  "Jules Wainstein": "Known for: The Real Housewives of New York City. Body-image vulnerability, social isolation, fragile group fit.",
  "Kristen Taekman": "Known for: The Real Housewives of New York City. Model-wife underestimation, marriage strain, low-key comic timing.",
  "Leah McSweeney": "Known for: The Real Housewives of New York City. Downtown generational rupture, sobriety, class friction.",
  "Luann de Lesseps": "Known for: The Real Housewives of New York City. Countess codes, cabaret, recovery, romantic self-mythology.",
  "Racquel Chevremont": "Known for: The Real Housewives of New York City reboot. Identity, art-world elegance, reboot emotional grounding.",
  "Ramona Singer": "Known for: The Real Housewives of New York City. Upper East Side entropy, interruption, social survival instinct.",
  "Rebecca Minkoff (Friend Of)": "Known for: The Real Housewives of New York City reboot. Fashion-world cameo, brand-adjacent reboot orbit.",
  "Sai De Silva": "Known for: The Real Housewives of New York City reboot. Grief, image management, sharp social judgment.",
  "Sonja Morgan": "Known for: The Real Housewives of New York City. Townhouse mythology, comic collapse, old-New-York yearning.",
  "Tinsley Mortimer": "Known for: The Real Housewives of New York City. Society reentry, romance, arrested debutante melancholy.",
  "Ubah Hassan": "Known for: The Real Housewives of New York City reboot. Warmth, bluntness, loyalty tests, model-off-duty voltage."
};

const biasThemes = {
  "social-fatigue": ["exhaust", "draining", "drain", "fatigue", "defensiveness", "interrupt", "group dynamic", "socially"],
  "class-elitism": ["class", "elitist", "status", "privilege", "judgment", "etiquette", "upper", "hosting"],
  "race-identity": ["race", "racial", "tokenization", "invalid", "culture", "political", "education", "resistance", "privilege", "harlem", "eboni"],
  "gender-body": ["gender", "misogyny", "body", "food", "eating disorder", "sexuality"],
  "bullying": ["bullying", "mean-girl", "cruel", "isolation", "dismissive", "hostility"]
};

const biasThemeLabels = {
  "social-fatigue": "Social fatigue",
  "class-elitism": "Class / elitism",
  "race-identity": "Race / identity",
  "gender-body": "Gender / body",
  bullying: "Bullying / mean-girl"
};

const darkThemes = {
  "grief-death": ["grief", "death", "loss", "widow", "memorial", "pet death", "late husband"],
  "addiction-recovery": ["addiction", "sobriety", "sober", "recovery", "rehab", "relapse", "drinking"],
  legal: ["legal", "arrest", "custody", "lawsuit"],
  relationship: ["divorce", "separation", "marriage", "relationship", "fertility", "intimacy", "wedding"],
  "illness-panic": ["illness", "panic", "anxiety", "medical", "health"],
  "trauma-family": ["trauma", "family", "childhood", "assault", "isolation"],
  "body-food": ["body", "food", "eating disorder", "body-image", "image"]
};

const darkThemeLabels = {
  "grief-death": "Grief / death",
  "addiction-recovery": "Addiction / recovery",
  legal: "Legal issues",
  relationship: "Divorce / relationship",
  "illness-panic": "Illness / panic",
  "trauma-family": "Trauma / family",
  "body-food": "Body / food"
};

const destinationPatterns = [
  { name: "Atlantic City", patterns: ["Atlantic City", "Casinos", "Gambling"] },
  { name: "Berkshires", patterns: ["Berkshires"] },
  { name: "Cartagena, Colombia", patterns: ["Cartagena", "Colombia"] },
  { name: "Hamptons", patterns: ["Hamptons"] },
  { name: "Miami", patterns: ["Miami"] },
  { name: "Mexico", patterns: ["Mexico", "Puerto Vallarta", "Cancun", "Tulum", "Tequila", "Villas"] },
  { name: "Montana", patterns: ["Montana", "Cabins", "Mountains", "Fishing", "Cattle", "Hatchets"] },
  { name: "Newport", patterns: ["Newport"] },
  { name: "Salem", patterns: ["Salem"] },
  { name: "Saratoga Springs", patterns: ["Saratoga"] },
  { name: "Turks and Caicos", patterns: ["Turks", "Caicos"] },
  { name: "Vermont", patterns: ["Vermont", "Snow", "Blizzard"] }
];

let sortState = { key: "season", direction: "asc" };

const el = {
  seasonFilter: document.querySelector("#seasonFilter"),
  minEnjoyment: document.querySelector("#minEnjoyment"),
  minEnjoymentLabel: document.querySelector("#minEnjoymentLabel"),
  travelFilter: document.querySelector("#travelFilter"),
  nycFilter: document.querySelector("#nycFilter"),
  biasMode: document.querySelector("#biasMode"),
  biasTheme: document.querySelector("#biasTheme"),
  darkMode: document.querySelector("#darkMode"),
  darkTheme: document.querySelector("#darkTheme"),
  seasonContainer: document.querySelector("#seasonContainer"),
  resultCount: document.querySelector("#resultCount"),
  castGuide: document.querySelector("#castGuide"),
  tripsGuide: document.querySelector("#tripsGuide"),
};

init();

function init() {
  seasons.forEach((season) => {
    const option = document.createElement("option");
    option.value = season.season;
    option.textContent = `Season ${season.season}`;
    el.seasonFilter.append(option);
  });

  document.querySelector("#filters").addEventListener("input", renderEpisodeGuide);
  document.querySelector("#filters").addEventListener("change", renderEpisodeGuide);
  el.seasonContainer.addEventListener("click", handleGuideClick);
  document.addEventListener("click", handleEpisodeJump);
  initAnchorNavigation();
  renderEpisodeGuide();
  renderCastGuide();
  renderTripsGuide();
}

function getFilteredEpisodes() {
  const selectedSeason = el.seasonFilter.value;
  const minEnjoyment = Number(el.minEnjoyment.value);
  const biasMode = el.biasMode.value;
  const darkMode = el.darkMode.value;
  el.minEnjoymentLabel.textContent = `${minEnjoyment}%`;

  let result = allEpisodes.filter((episode) => {
    if (selectedSeason !== "all" && episode.season !== Number(selectedSeason)) return false;
    if (episode.enjoyment < minEnjoyment) return false;
    if (el.travelFilter.checked && !episode.travel) return false;
    if (el.nycFilter.checked && episode.nyc < 5) return false;
    if (biasMode === "avoid" && episode.bias > 0) return false;
    if (biasMode === "include" && !matchesTheme(episode, biasThemes[el.biasTheme.value])) return false;
    if (biasMode === "avoid-theme" && matchesTheme(episode, biasThemes[el.biasTheme.value])) return false;
    if (darkMode === "avoid" && episode.darkness > 0) return false;
    if (darkMode === "include" && !matchesTheme(episode, darkThemes[el.darkTheme.value])) return false;
    if (darkMode === "avoid-theme" && matchesTheme(episode, darkThemes[el.darkTheme.value])) return false;
    return true;
  });

  result = [...result].sort((a, b) => compareEpisodes(a, b));
  return result;
}

function compareEpisodes(a, b) {
  const direction = sortState.direction === "asc" ? 1 : -1;
  const key = sortState.key;
  const aValue = key === "episode" ? a.ep : a[key];
  const bValue = key === "episode" ? b.ep : b[key];
  if (aValue === bValue) return a.season === b.season ? a.ep - b.ep : a.season - b.season;
  return aValue > bValue ? direction : -direction;
}

function renderEpisodeGuide() {
  const episodes = getFilteredEpisodes();
  el.resultCount.textContent = `${episodes.length} of ${allEpisodes.length} rows`;
  syncThemeControls();
  const bySeason = new Map();
  episodes.forEach((episode) => {
    if (!bySeason.has(episode.season)) bySeason.set(episode.season, []);
    bySeason.get(episode.season).push(episode);
  });

  if (!episodes.length) {
    el.seasonContainer.innerHTML = `<div class="empty-state">No episode rows match this mood. Loosen one filter and try again.</div>`;
    return;
  }

  const openAll = hasActiveFilters();
  el.seasonContainer.innerHTML = seasons
    .filter((season) => bySeason.has(season.season))
    .map((season) => renderSeasonPanel(season, bySeason.get(season.season), openAll))
    .join("");
}

function hasActiveFilters() {
  return el.seasonFilter.value !== "all"
    || Number(el.minEnjoyment.value) > Number(el.minEnjoyment.min)
    || el.travelFilter.checked
    || el.nycFilter.checked
    || el.biasMode.value !== "any"
    || el.darkMode.value !== "any";
}

function syncThemeControls() {
  el.biasTheme.disabled = !["include", "avoid-theme"].includes(el.biasMode.value);
  el.darkTheme.disabled = !["include", "avoid-theme"].includes(el.darkMode.value);
}

function matchesTheme(episode, keywords = []) {
  if (!keywords.length) return false;
  const haystack = `${episode.synopsis} ${episode.officialSynopsis || ""} ${episode.editorialSynopsis || ""} ${episode.chaos} ${episode.notes}`.toLowerCase();
  return keywords.some((keyword) => haystack.includes(keyword.toLowerCase()));
}

function getMatchedThemeLabels(episode, themes, labels) {
  return Object.entries(themes)
    .filter(([, keywords]) => matchesTheme(episode, keywords))
    .map(([key]) => labels[key]);
}

function getBiasLabels(episode) {
  const labels = getMatchedThemeLabels(episode, biasThemes, biasThemeLabels);
  return episode.bias > 0 && !labels.length ? ["General social fatigue"] : labels;
}

function getDarkLabels(episode) {
  const labels = getMatchedThemeLabels(episode, darkThemes, darkThemeLabels);
  return episode.darkness > 0 && !labels.length ? ["General heavy material"] : labels;
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function renderSeasonPanel(season, episodes, open) {
  const cast = season.cast;
  const verified = season.sourceStatus === "Peacock verified";
  return `
    <details class="season-panel" ${open ? "open" : ""}>
      <summary>
        <span class="season-title-wrap">
          <span class="season-title">Season ${season.season}</span>
          <span class="source-status ${verified ? "verified" : "provisional"}">${escapeHtml(season.sourceStatus || "Source status pending")}</span>
        </span>
        <span class="season-meta">${episodes.length} visible rows · ${season.episodes.length} total · avg ${average(episodes.map((e) => e.enjoyment))}% enjoyment</span>
      </summary>
      <div class="cast-block">
        ${renderCastColumn("Returning Cast", cast.returning)}
        ${renderCastColumn("Departed Cast", cast.departed)}
        ${renderCastColumn("New Cast", cast.new)}
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              ${header("episode", "Ep#")}
              ${header("synopsis", "Synopsis")}
              ${header("nyc", "🍎 NYC")}
              ${header("bias", "😮‍💨 Bias")}
              ${header("darkness", "😔 Darkness")}
              ${header("chaos", "Chaos Agents")}
              ${header("enjoyment", "Enjoyment")}
              ${header("notes", "Notes")}
            </tr>
          </thead>
          <tbody>
            ${episodes.map(renderEpisodeRow).join("")}
          </tbody>
        </table>
      </div>
      ${season.footer ? `<div class="footer-note"><strong>Reunion footer:</strong> ${escapeHtml(season.footer)}</div>` : ""}
    </details>
  `;
}

function header(key, label) {
  const marker = sortState.key === key ? (sortState.direction === "asc" ? " ↑" : " ↓") : "";
  return `<th><button class="th-button" data-sort="${key}" type="button">${label}${marker}</button></th>`;
}

function renderCastColumn(title, names) {
  const renderedNames = names.length
    ? names.map((name) => `<strong>${escapeHtml(name)}</strong>`).join(", ")
    : "None listed in source guide.";

  return `
    <div>
      <h4>${title}</h4>
      <p>${renderedNames}</p>
    </div>
  `;
}

function renderEpisodeRow(episode) {
  const flagChips = renderFlagChips(episode);
  const official = episode.officialSynopsis || episode.synopsis;
  const displaySynopsis = episode.editorialSynopsis || official;
  return `
    <tr id="${episode.id}">
      <td class="ep-cell" data-label="Ep#">
        <strong>S${episode.season} · E${episode.ep}</strong>
        ${episode.episodeTitle ? `<span>${escapeHtml(episode.episodeTitle)}</span>` : ""}
      </td>
      <td class="synopsis-cell" data-label="Synopsis">
        <p class="editorial-synopsis">${escapeHtml(displaySynopsis)}</p>
      </td>
      <td class="score-cell" data-label="🍎 NYC">${repeat("🍎", episode.nyc)}</td>
      <td class="score-cell" data-label="😮‍💨 Bias">${episode.bias ? repeat("😮‍💨", episode.bias) : "—"}</td>
      <td class="score-cell" data-label="😔 Darkness">${episode.darkness ? repeat("😔", episode.darkness) : "—"}</td>
      <td class="chaos-cell" data-label="Chaos Agents">${escapeHtml(episode.chaos)}</td>
      <td class="score-cell" data-label="Enjoyment">${episode.enjoyment}%</td>
      <td class="notes-cell" data-label="Notes">${episode.travel ? `<span class="mini-tag">Travel</span>` : ""}${escapeHtml(episode.notes || "—")}${flagChips}</td>
    </tr>
  `;
}

function renderFlagChips(episode) {
  const bias = getBiasLabels(episode);
  const dark = getDarkLabels(episode);
  const chips = [
    ...bias.map((label) => `<span class="theme-chip bias-chip">Bias: ${escapeHtml(label)}</span>`),
    ...dark.map((label) => `<span class="theme-chip dark-chip">Darkness: ${escapeHtml(label)}</span>`)
  ];
  return chips.length ? `<div class="theme-chip-row">${chips.join("")}</div>` : "";
}

function handleGuideClick(event) {
  const sortButton = event.target.closest("[data-sort]");

  if (sortButton) {
    const key = sortButton.dataset.sort;
    sortState = {
      key,
      direction: sortState.key === key && sortState.direction === "asc" ? "desc" : "asc"
    };
    renderEpisodeGuide();
  }
}

function renderCastGuide() {
  const names = [...new Set(seasons.flatMap((season) => [
    ...season.cast.returning,
    ...season.cast.departed,
    ...season.cast.new
  ]))].sort((a, b) => a.localeCompare(b));

  const groups = {
    "A-D": names.filter((name) => /^[A-D]/.test(name)),
    "E-L": names.filter((name) => /^[E-L]/.test(name)),
    "M-R": names.filter((name) => /^[M-R]/.test(name)),
    "S-Z": names.filter((name) => /^[S-Z]/.test(name))
  };

  el.castGuide.innerHTML = Object.entries(groups).map(([group, groupNames], index) => `
    <details ${index === 0 ? "open" : ""}>
      <summary>${group}</summary>
      <div class="cast-list">
        ${groupNames.map((name) => `
          <article class="cast-card">
            <strong class="cast-name">${escapeHtml(name)}</strong>
            ${renderCastMeta(name)}
          </article>
        `).join("")}
      </div>
    </details>
  `).join("");
}

function renderCastMeta(name) {
  const fallback = { franchise: "The Real Housewives of New York City", description: "RHONY social ecosystem participant." };
  const raw = castArchetypes[name];
  if (!raw) {
    return `<span><strong class="franchise-name">${fallback.franchise}</strong>. ${fallback.description}</span>`;
  }

  const match = raw.match(/^Known for: ([^.]+)\. (.+)$/);
  if (!match) return `<span>${escapeHtml(raw)}</span>`;
  return `<span><strong class="franchise-name">${escapeHtml(match[1])}</strong>. ${escapeHtml(match[2])}</span>`;
}

function renderTripsGuide() {
  const travelEpisodes = allEpisodes.filter((episode) => episode.travel);
  const destinations = collectTrips(travelEpisodes);
  el.tripsGuide.innerHTML = destinations.map((destination, index) => `
    <details ${index < 4 ? "open" : ""}>
      <summary>
        <span>${escapeHtml(destination.name)}</span>
        <span>${destination.arcs.length} arc${destination.arcs.length === 1 ? "" : "s"} · avg ${average(destination.arcs.flatMap((arc) => arc.episodes.map((episode) => episode.enjoyment)))}%</span>
      </summary>
      <div class="trip-list">
        ${destination.arcs.map(renderTrip).join("")}
      </div>
    </details>
  `).join("");
}

function collectTrips(episodes) {
  const grouped = new Map();

  episodes.forEach((episode) => {
    const normalized = getDestination(episode);
    const key = `${normalized}--${episode.season}`;
    if (!grouped.has(key)) {
      grouped.set(key, { name: normalized, season: episode.season, episodes: [], notes: new Set(), chaos: new Set() });
    }
    const trip = grouped.get(key);
    trip.episodes.push(episode);
    if (episode.notes) trip.notes.add(episode.notes);
    if (episode.chaos) trip.chaos.add(episode.chaos);
  });

  const destinations = new Map();
  [...grouped.values()].forEach((arc) => {
    if (!destinations.has(arc.name)) destinations.set(arc.name, { name: arc.name, arcs: [] });
    arc.episodes.sort((a, b) => a.ep - b.ep);
    destinations.get(arc.name).arcs.push(arc);
  });

  return [...destinations.values()]
    .map((destination) => ({
      ...destination,
      arcs: destination.arcs.sort((a, b) => a.season - b.season)
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function getDestination(episode) {
  const haystack = `${episode.notes} ${episode.chaos} ${episode.synopsis}`;
  const found = destinationPatterns.find((destination) =>
    destination.patterns.some((pattern) => haystack.toLowerCase().includes(pattern.toLowerCase()))
  );
  return found ? found.name : "Other travel";
}

function renderTrip(trip) {
  const eps = trip.episodes.map((episode) => episode.ep);
  const minEp = Math.min(...eps);
  const maxEp = Math.max(...eps);
  const epRange = minEp === maxEp ? `Episode ${minEp}` : `Episodes ${minEp}-${maxEp}`;
  const sampleChaos = [...trip.chaos].slice(0, 3).join(" / ");
  const avgEnjoyment = average(trip.episodes.map((episode) => episode.enjoyment));
  const biasFlags = unique(trip.episodes.flatMap(getBiasLabels));
  const darkFlags = unique(trip.episodes.flatMap(getDarkLabels));
  const flags = [
    biasFlags.length ? `Bias: ${biasFlags.join(", ")}` : "Bias: none flagged in source guide",
    darkFlags.length ? `Darkness: ${darkFlags.join(", ")}` : "Darkness: none flagged in source guide"
  ];
  const why = [...trip.notes].find((note) => !note.startsWith("Travel:")) || [...trip.notes][0] || "A useful pressure-test of the group dynamic.";
  return `
    <article class="trip-card">
      <details>
        <summary><strong>Season ${trip.season}</strong><span>${epRange} · avg ${avgEnjoyment}%</span></summary>
        <div class="trip-flags">${flags.map((flag) => `<span>${escapeHtml(flag)}</span>`).join("")}</div>
        <div class="episode-links">
          ${trip.episodes.map((episode) => `<a href="#${episode.id}" data-episode-jump="${episode.id}">S${episode.season} E${episode.ep}</a>`).join("")}
        </div>
        <p><strong>Chaos notes:</strong> ${escapeHtml(sampleChaos)}</p>
        <p><strong>Why it matters:</strong> ${escapeHtml(why)}</p>
      </details>
    </article>
  `;
}


function initAnchorNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    if (anchor.dataset.episodeJump) return;
    anchor.addEventListener("click", (event) => {
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      scrollToSection(target);
      history.replaceState(null, "", hash);
    });
  });
}

function scrollToSection(target) {
  const nav = document.querySelector(".topbar");
  const navHeight = nav ? nav.getBoundingClientRect().height : 0;
  const offset = navHeight + 18;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
}

function handleEpisodeJump(event) {
  const link = event.target.closest("[data-episode-jump]");
  if (!link) return;
  event.preventDefault();
  resetFilters();
  renderEpisodeGuide();
  requestAnimationFrame(() => {
    const target = document.getElementById(link.dataset.episodeJump);
    if (!target) return;
    const panel = target.closest("details");
    if (panel) panel.open = true;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    history.replaceState(null, "", `#${link.dataset.episodeJump}`);
  });
}

function resetFilters() {
  el.seasonFilter.value = "all";
  el.minEnjoyment.value = el.minEnjoyment.min;
  el.travelFilter.checked = false;
  el.nycFilter.checked = false;
  el.biasMode.value = "any";
  el.darkMode.value = "any";
  syncThemeControls();
}

function average(numbers) {
  if (!numbers.length) return 0;
  return Math.round(numbers.reduce((sum, value) => sum + value, 0) / numbers.length);
}

function repeat(value, count) {
  return Array.from({ length: count }, () => value).join("");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
