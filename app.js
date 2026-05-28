const seasons = window.GUIDE_DATA || [];
const allEpisodes = seasons.flatMap((season) => season.episodes);

const seasonYears = {
  6: 2014,
  7: 2015,
  8: 2016,
  9: 2017,
  10: 2018,
  11: 2019,
  12: 2020,
  13: 2021,
  14: 2023,
  15: 2024
};

const guideCategories = [
  {
    id: "nyc",
    label: "🍎 NYC",
    description: "New York City texture: restaurants, apartments, geography, and the feeling of overhearing three tables at once.",
    episodes: () => topEpisodes((episode) => episode.nyc * 20 + episode.enjoyment / 10)
  },
  {
    id: "drama",
    label: "😮‍💨 Drama",
    description: "Emotionally heavy material and socially draining group dynamics bundled into one quick mood check.",
    episodes: () => topEpisodes((episode) => episode.bias * 18 + episode.darkness * 22 + episode.enjoyment / 20)
  },
  {
    id: "enjoyment",
    label: "✨ Enjoyment",
    description: "A personalized estimate for whether each episode is worth the drama 🫠",
    episodes: () => topEpisodes((episode) => episode.enjoyment)
  },
  {
    id: "girls-trips",
    label: "✈️ Girls' Trips",
    description: "Travel episodes outside the usual orbit: when the group leaves its usual geography and takes the chaos on the road.",
    episodes: () => topEpisodes((episode) => (isGirlsTrip(episode) ? 1000 : 0) + episode.enjoyment)
  }
];
const castArchetypes = {
  "Alex McCord": {
    astro: "October 1, 1973 • Libra",
    seasons: "1-4",
    type: "Main",
    knownFor: ["Brooklyn social-climbing era"],
    quotes: ["\"While you are in high school, I am in Brooklyn trying to survive in this economy!\" (S4E8)"]
  },
  "Aviva Drescher": {
    astro: "September 9, 1970 • Virgo",
    seasons: "5-6",
    type: "Main",
    knownFor: ["Throwing her prosthetic leg at Le Cirque"],
    quotes: ["\"The only thing artificial or fake about me is THIS.\" (S6E20)"]
  },
  "Bethenny Frankel": {
    astro: "November 4, 1970 • Scorpio",
    seasons: "1-3, 7-11",
    type: "Main",
    knownFor: ["Selling Skinnygirl to Beam Suntory", "The 'Mention It All' fight"],
    quotes: ["\"Go to sleep!\" (S3E12)", "\"Mention it all!\" (S9E9)"]
  },
  "Brynn Whitfield": {
    astro: "February 8, 1987 • Aquarius",
    seasons: "14-15",
    type: "Main",
    knownFor: ["Quick-witted one-liners • Aggressive flirting "],
    quotes: ["\"It's not 2005, and I'm not a D-list model. Olive Garden is chicer.\" (S14E1)"]
  },
  "Cindy Barshop": {
    astro: "October 11, 1964 • Libra",
    seasons: "4",
    type: "Main",
    knownFor: ["Quogue tension with Sonja and Ramona"],
    quotes: ["\"You have no control over your emotions. You’re a liability.\" (S4E10)"]
  },
  "Dorinda Medley": {
    astro: "December 13, 1964 • Sagittarius",
    seasons: "7-12",
    type: "Main",
    knownFor: ["Bluestone Manor", "Berkshires blowups"],
    quotes: ["\"Clip!\" (S9E14)", "\"I made it nice!\" (S8E9)", "\"Not well, bitch.\" (S10E13)", "\"Say it, forget it. Write it, regret it.\" (S10E3)"]
  },
  "Eboni K. Williams": {
    astro: "September 9, 1983 • Virgo",
    seasons: "13",
    type: "Main",
    knownFor: ["Becoming RHONY’s first Black Housewife"],
    quotes: ["\"I’m the most educated person at this table.\" (S13E6)"]
  },
  "Erin Lichy": {
    astro: "July 1, 1987 • Cancer",
    seasons: "14-15",
    type: "Main",
    knownFor: ["Cheese controversies and Tribeca hospitality hosting"],
    quotes: ["\"Cheese is a personality.\" (Season 14 Tagline)"]
  },
  "Heather Thomson": {
    astro: "January 20, 1971 • Aquarius",
    seasons: "5-7",
    type: "Main",
    knownFor: ["Standing up to Aviva and Ramona"],
    quotes: ["\"Don't manic-ure me.\" (S6E11)"]
  },
  "Jenna Lyons": {
    astro: "June 8, 1968 • Gemini",
    seasons: "14-15",
    type: "Main",
    knownFor: ["Anguilla flight drama"],
    quotes: ["\"I don’t fly coach.\" (S14E8)"]
  },
  "Jessel Taank": {
    astro: "October 23, 1979 • Scorpio",
    seasons: "14-15",
    type: "Main",
    knownFor: ["Calling Tribeca an \"up and coming\" neighborhood", "Keeping a detailed grievance list about one of the women on her phone"],
    quotes: ["\"Tribeca is up and coming.\" (S14E2)"]
  },
  "Jill Zarin": {
    astro: "November 30, 1963 • Sagittarius",
    seasons: "1-4",
    type: "Main",
    knownFor: ["her surprise Scary Island arrival"],
    quotes: ["\"Hiiiiiiiiiiiiiiiiii!\" (S3E6)"]
  },
  "Jules Wainstein": {
    astro: "February 13, 1981 • Aquarius",
    seasons: "8",
    type: "Main",
    knownFor: ["Opening up about identity and body image"],
    quotes: ["\"I’m Asian, but I’m Jewish!\" (S8E1)"]
  },
  "Kelly Bensimon": {
    astro: "May 1, 1968 • Taurus",
    seasons: "2-4",
    type: "Main",
    knownFor: ["Scary Island"],
    quotes: ["\"Al Sharpton. Al Sharpton came to my house. He sat on my couch.\" (S3E11)", "\"I'm up here, and you're down here.\" (S2E11)"]
  },
  "Kristen Taekman": {
    astro: "April 21, 1977 • Taurus",
    seasons: "6-7",
    type: "Main",
    knownFor: ["Ramona throwing a wine glass at her face"],
    quotes: ["\"Who are you to get me wet?!\" (S6E12)"]
  },
  "Leah McSweeney": {
    astro: "August 27, 1982 • Virgo",
    seasons: "12-13",
    type: "Main",
    knownFor: ["Newport chaos", "Generational clashes with Ramona"],
    quotes: ["\"Bitch, I elevate this shit!\" (S12E12)", "\"Okay, boomer.\" (S12E2)"]
  },
  "Luann de Lesseps": {
    astro: "May 17, 1965 • Taurus",
    seasons: "1-13",
    type: "Main",
    knownFor: ["The pirate hookup in St. Barts", "her Cabaret era"],
    quotes: ["\"Be cool. Don’t be all, like, uncool.\" (S7E14)", "\"Jovani!\" (S10E16)"]
  },
  "Racquel Chevremont": {
    astro: "October 31, 1971 • Scorpio",
    seasons: "14-15",
    type: "Main",
    knownFor: ["Art-world and queer representation in the reboot"],
    quotes: ["\"You're projecting your own insecurities on everybody else.\" (S15E5)"]
  },
  "Ramona Singer": {
    astro: "November 17, 1956 • Scorpio",
    seasons: "1-13",
    type: "Main",
    knownFor: ["Being called White Trash and then Googling \"What is white trash?\"", "Drunken chaos"],
    quotes: ["\"Take a Xanax! Calm down!\" (S3E12)", "\"Wow, Bethenny, wow.\" (S10E19)"]
  },
    "Rebecca Minkoff": {
    astro: "December 4, 1980 • Sagittarius",
    seasons: "15",
    type: "Friend",
    knownFor: ["Nordstrom Rack shady drama", "Scientology"],
    quotes: ["\"I built a $100 million company.\" (S15E7)"]
  },
  "Sai De Silva": {
    astro: "November 22, 1980 • Sagittarius",
    seasons: "14-15",
    type: "Main",
    knownFor: ["Food complaints and conflicts with Jessel"],
    quotes: ["\"I need food.\" (S14E6)"]
  },
  "Sonja Morgan": {
    astro: "November 25, 1963 • Sagittarius",
    seasons: "3-13",
    type: "Main",
    knownFor: ["Being Ramona's ride-or-die", "Party-girl lore"],
    quotes: ["\"I party with John-John and Madonna!\" (S7E6)", "\"There’s nothing Grey Gardens about this.\" (S6E2)"]
  },
  "Tinsley Mortimer": {
    astro: "August 11, 1975 • Leo",
    seasons: "9-12",
    type: "Main",
    knownFor: ["Scott relationship", "Crying over frozen eggs in clown makeup"],
    quotes: ["\"I’m miserable.\" (S11E9)", "\"Yeah, I’m drinking, Luann.\" (S11E15)"]
  },
  "Ubah Hassan": {
    astro: "August 27, 1983 • Virgo",
    seasons: "14-15",
    type: "Main",
    knownFor: ["Phone privacy fight with Erin"],
    quotes: ["\"I’m not fake nice.\" (S14E11)"]
  }
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
  { name: "Anguilla", patterns: ["Anguilla"] },
  { name: "Atlantic City", patterns: ["Atlantic City", "Casinos", "Gambling"] },
  { name: "Berkshires", patterns: ["Berkshires"] },
  { name: "Cartagena, Colombia", patterns: ["Cartagena", "Colombia"] },
  { name: "Cancun, Mexico", patterns: ["Cancun"] },
  { name: "Connecticut", patterns: ["Connecticut"] },
  { name: "Hamptons", patterns: ["Hamptons"] },
  { name: "Miami", patterns: ["Miami"] },
  { name: "Mexico", patterns: ["Mexico", "Puerto Vallarta", "Cancun", "Tulum", "Tequila", "Villas"] },
  { name: "Montana", patterns: ["Montana", "Cabins", "Mountains", "Fishing", "Cattle", "Hatchets"] },
  { name: "Newport", patterns: ["Newport"] },
  { name: "Puerto Rico", patterns: ["Puerto Rico"] },
  { name: "Salem", patterns: ["Salem"] },
  { name: "Saratoga Springs", patterns: ["Saratoga"] },
  { name: "Turks and Caicos", patterns: ["Turks", "Caicos"] },
  { name: "Upstate New York", patterns: ["Upstate New York"] },
  { name: "Vermont", patterns: ["Vermont", "Snow", "Blizzard"] }
];

let sortState = { key: "season", direction: "asc" };

const el = {
  seasonFilter: document.querySelector("#seasonFilter"),
  searchFilter: document.querySelector("#searchFilter"),
  minEnjoyment: document.querySelector("#minEnjoyment"),
  minEnjoymentLabel: document.querySelector("#minEnjoymentLabel"),
  travelFilter: document.querySelector("#travelFilter"),
  nycFilter: document.querySelector("#nycFilter"),
  seasonContainer: document.querySelector("#seasonContainer"),
  resultCount: document.querySelector("#resultCount"),
  howToCards: document.querySelector("#howToCards"),
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
  renderEpisodeGuide();
  renderCastGuide();
  renderTripsGuide();
}

function topEpisodes(score) {
  return [...allEpisodes]
    .filter((episode) => score(episode) > 0)
    .sort((a, b) => {
      const difference = score(b) - score(a);
      if (difference !== 0) return difference;
      return b.enjoyment - a.enjoyment || a.season - b.season || a.ep - b.ep;
    })
    .slice(0, 3);
}

function isGirlsTrip(episode) {
  if (!episode.travel) return false;
  const localPattern = /Hamptons|Berkshires|Saratoga|Connecticut|Bronx|Upstate New York/i;
  return !localPattern.test(`${episode.notes} ${episode.chaos} ${episode.officialSynopsis || ""} ${episode.editorialSynopsis || ""}`);
}

function renderGuidePick(episode) {
  return `<a href="#${episode.id}" data-episode-jump="${episode.id}">S${episode.season}E${String(episode.ep).padStart(2, "0")} — “${escapeHtml(episode.episodeTitle || `Episode ${episode.ep}`)}”</a>`;
}

function getFilteredEpisodes() {
  const selectedSeason = el.seasonFilter.value;
  const minEnjoyment = Number(el.minEnjoyment.value);
  const searchTerm = el.searchFilter?.value.trim().toLowerCase() || "";
  el.minEnjoymentLabel.textContent = `${minEnjoyment}%`;

  let result = allEpisodes.filter((episode) => {
    if (selectedSeason !== "all" && episode.season !== Number(selectedSeason)) return false;
    if (episode.enjoyment < minEnjoyment) return false;
   const searchable = [
  episode.episodeTitle,
  episode.synopsis,
  episode.officialSynopsis,
  episode.editorialSynopsis,
  episode.chaos,
  episode.notes,
  `season ${episode.season}`,
  `s${episode.season}e${episode.ep}`
].join(" ").toLowerCase();

const regex = new RegExp(`\\b${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");

if (searchTerm && !regex.test(searchable)) return false;
    if (el.travelFilter.checked && !episode.travel) return false;
    if (el.nycFilter.checked && episode.nyc < 5) return false;
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
  const bySeason = new Map();
  episodes.forEach((episode) => {
    if (!bySeason.has(episode.season)) bySeason.set(episode.season, []);
    bySeason.get(episode.season).push(episode);
  });

  if (!episodes.length) {
    el.seasonContainer.innerHTML = `<div class="empty-state">No episode rows match this mood. Loosen one filter and try again.</div>`;
    return;
  }

  const openSeasons = new Set();
  el.seasonContainer.querySelectorAll('.episodes-disclosure[data-season]').forEach((d) => {
    if (d.open) openSeasons.add(d.dataset.season);
  });

  el.seasonContainer.innerHTML = seasons
    .filter((season) => bySeason.has(season.season))
    .map((season) => renderSeasonPanel(season, bySeason.get(season.season)))
    .join("");

  if (openSeasons.size) {
    el.seasonContainer.querySelectorAll('.episodes-disclosure[data-season]').forEach((d) => {
      if (openSeasons.has(d.dataset.season)) d.open = true;
    });
  }
}

function hasActiveFilters() {
  return el.seasonFilter.value !== "all"
    || Number(el.minEnjoyment.value) > Number(el.minEnjoyment.min)
    || el.travelFilter.checked
    || el.nycFilter.checked;
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

function renderSeasonPanel(season, episodes) {
  const cast = season.cast;
  const verified = season.sourceStatus === "Peacock verified";
  const seasonTitle = `Season ${season.season}${seasonYears[season.season] ? `: ${seasonYears[season.season]}` : ""}`;
  return `
    <article class="season-panel">
      <div class="season-header">
        <span class="season-title-wrap">
          <span class="season-title">${seasonTitle}</span>
          <span class="source-status ${verified ? "verified" : "provisional"}">${escapeHtml(season.sourceStatus || "Source status pending")}</span>
        </span>
        <span class="season-meta">${episodes.length} visible rows · ${season.episodes.length} total · avg ${average(episodes.map((e) => e.enjoyment))}% enjoyment</span>
      </div>
      <div class="cast-block">
        ${renderCastColumn("Returning Cast", cast.returning)}
        ${renderCastColumn("Departed Cast", cast.departed)}
        ${renderCastColumn("New Cast", cast.new)}
      </div>
      <details class="episodes-disclosure" data-season="${season.season}">
        <summary>
          <span>Episode table</span>
          <span>${episodes.length} visible rows</span>
        </summary>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                ${header("episode", "Ep#")}
                ${header("synopsis", "Synopsis")}
                ${header("nyc", "🍎 NYC")}
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
    </article>
  `;
}
function header(key, label) {
  const marker = sortState.key === key ? (sortState.direction === "asc" ? " ↑" : " ↓") : "";
  const content = key === "nyc"
    ? `<span class="sort-emoji" aria-hidden="true">🍎</span><span>NYC</span>${marker ? `<span class="sort-marker">${marker.trim()}</span>` : ""}`
    : `${label}${marker}`;
  return `<th><button class="th-button ${key === "nyc" ? "apple-sort-button" : ""}" data-sort="${key}" type="button" aria-label="Sort by ${escapeHtml(label.replace(/[🍎😮‍💨😔]/g, "").trim() || label)}">${content}</button></th>`;
}
function renderCastColumn(title, names) {
  return `
    <div>
      <h4>${title}</h4>
      <p>${names.length ? names.map(escapeHtml).join(", ") : "None listed in source guide."}</p>
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
    const numericKeys = ["nyc", "enjoyment", "bias", "darkness"];
    const defaultDir = numericKeys.includes(key) ? "desc" : "asc";
    const flipDir = defaultDir === "desc" ? "asc" : "desc";
    sortState = {
      key,
      direction: sortState.key === key && sortState.direction === defaultDir ? flipDir : defaultDir
    };
    renderEpisodeGuide();
  }
}

function renderCastGuide() {
  const names = Object.keys(castArchetypes).sort((a, b) => a.localeCompare(b));

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

function linkifyQuote(quote) {
  return escapeHtml(quote).replace(/\(S(\d+)E(\d+)\)/g, (match, s, e) => {
    const id = `s${s}e${e}`;
    return `(<a href="#${id}" data-episode-jump="${id}" style="color:var(--oxblood);font-weight:500;text-decoration:underline;text-underline-offset:2px;">S${s}E${e}</a>)`;
  });
}

function renderCastMeta(name) {
  const raw = castArchetypes[name];

  if (!raw) {
    return `<div class="cast-meta"><p>RHONY cast member. Details pending.</p></div>`;
  }

  const knownFor = Array.isArray(raw.knownFor) && raw.knownFor.length
    ? raw.knownFor.map((item) => `<span>${escapeHtml(item)}</span>`).join("")
    : "<span>Known-for moment pending.</span>";

  const quotes = Array.isArray(raw.quotes) && raw.quotes.length
    ? raw.quotes.map((quote) => `<span>${linkifyQuote(quote)}</span>`).join("")
    : "<span>No major quote logged yet.</span>";

  return `
    <div class="cast-meta">
      <p><strong>Astro:</strong> ${escapeHtml(raw.astro || "Pending")}</p>
      <p><strong>Seasons:</strong> ${escapeHtml(raw.seasons || "Pending")}</p>
      <p><strong>Known for:</strong> <span class="inline-list">${knownFor}</span></p>
      <p><strong>Quotes:</strong> <span class="inline-list">${quotes}</span></p>
    </div>
  `;
}

function renderTripsGuide() {
  const seasonTrips = {};

  allEpisodes.forEach((episode) => {
    if (!episode.travel) return;

    const destination = getDestination(episode);
    if (!seasonTrips[episode.season]) seasonTrips[episode.season] = {};
    if (!seasonTrips[episode.season][destination]) seasonTrips[episode.season][destination] = [];

    seasonTrips[episode.season][destination].push(episode);
  });

  el.tripsGuide.innerHTML = Object.entries(seasonTrips)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([season, trips]) => `
      <details class="trip-season" open>
        <summary>
          <span>Season ${season}</span>
          <span>${Object.keys(trips).length} trip${Object.keys(trips).length === 1 ? "" : "s"}</span>
        </summary>

        <div class="trip-table">
          <div class="trip-row trip-row-head">
            <span>Location</span>
            <span>Episodes</span>
            <span>Why it matters</span>
            <span>Mood</span>
            <span>Jump</span>
          </div>

          ${Object.entries(trips).map(([destination, episodes]) => {
            const first = episodes[0];
            const last = episodes[episodes.length - 1];
            const episodeRange = episodes.length === 1
              ? `S${first.season}E${first.ep}`
              : `S${first.season}E${first.ep}–E${last.ep}`;

            const why = first.notes?.replace(/^Travel:\s*[^.]+.\s*/i, "") || first.editorialSynopsis || "Major RHONY trip arc.";
            const mood = first.chaos || "RHONY chaos";

            return `
              <div class="trip-row">
                <strong>${escapeHtml(destination)}</strong>
                <span>${escapeHtml(episodeRange)}</span>
                <span>${escapeHtml(why)}</span>
                <span>${escapeHtml(mood)}</span>
                <span class="trip-jumps">
                  ${episodes.map((ep) => `
                    <a href="#${ep.id}" data-episode-jump="${ep.id}">S${ep.season}E${ep.ep}</a>
                  `).join("")}
                </span>
              </div>
            `;
          }).join("")}
        </div>
      </details>
    `).join("");
}
function jumpToEpisode(id) {
  location.hash = id;

  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
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

function handleEpisodeJump(event) {
  const link = event.target.closest("[data-episode-jump]");
  if (!link) return;
  event.preventDefault();
  resetFilters();
  renderEpisodeGuide();
 setTimeout(() => {
    const target = document.getElementById(link.dataset.episodeJump);
    if (!target) return;
    const panel = target.closest("details");
    if (panel) panel.open = true;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.style.outline = "2px solid #c9a84c";
    setTimeout(() => { target.style.outline = ""; }, 2000);
    history.replaceState(null, "", `#${link.dataset.episodeJump}`);
  }, 50);
}

function resetFilters() {
  el.seasonFilter.value = "all";
  el.minEnjoyment.value = el.minEnjoyment.min;
  el.travelFilter.checked = false;
  el.nycFilter.checked = false;
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
