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
    label: "✈️ Girls Trips",
    description: "Travel episodes outside the usual orbit: when the group leaves its usual geography and takes the chaos on the road.",
    episodes: () => topEpisodes((episode) => (isGirlsTrip(episode) ? 1000 : 0) + episode.enjoyment)
  }
];

const castArchetypes = {
  "Aviva Drescher": {
    astro: "September 9, 1970 • Virgo",
    seasons: "5-6",
    knownFor: [
      "Throwing her prosthetic leg at Le Cirque"
    ],
    quotes: [
      "\"The only thing artificial or fake about me is THIS.\" (S6E20)"
    ]
  },

  "Barbara Kavovit (Friend Of)": {
    astro: "May 2, 1966 • Taurus",
    seasons: "11",
    knownFor: [
      "Being exposed in the 'texting both sides' feud during Luann’s cabaret season"
    ],
    quotes: [
      "\"I’m not your puppet.\" (S11)"
    ]
  },

  "Bershan Shaw (Friend Of)": {
    astro: "December 30, 1973 • Capricorn",
    seasons: "13",
    knownFor: [
      "Calling the Season 13 cast 'grandmas' during the Salem trip"
    ],
    quotes: [
      "\"Y’all are grandmas.\" (S13)"
    ]
  },

  "Bethenny Frankel": {
    astro: "November 4, 1970 • Scorpio",
    seasons: "1-3, 7-11",
    knownFor: [
      "Selling Skinnygirl to Beam Suntory",
      "The 'Mention It All' Berkshires fight with Ramona"
    ],
    quotes: [
      "\"Mention it all!\" (S9E13)",
      "\"Go to sleep!\" (S3E12)"
    ]
  },

  "Brynn Whitfield": {
    astro: "February 8, 1986 • Aquarius",
    seasons: "14-present",
    knownFor: [
      "Flirting with Erin’s husband Abe throughout Season 14"
    ],
    quotes: [
      "\"I flirt for sport.\" (S14)"
    ]
  },

  "Carole Radziwill": {
    astro: "August 20, 1963 • Leo",
    seasons: "5-10",
    knownFor: [
      "Her fallout friendship with Bethenny",
      "Running the NYC Marathon on the show"
    ],
    quotes: [
      "\"I was awoken in the middle of the night by two male voices. One was Luann’s.\" (S8)"
    ]
  },

  "Dorinda Medley": {
    astro: "December 13, 1964 • Sagittarius",
    seasons: "7-12",
    knownFor: [
      "Hosting the Berkshires trips at Bluestone Manor",
      "The 'Clip!' dinner fight with Sonja"
    ],
    quotes: [
      "\"I made it nice!\" (S8E9)",
      "\"Clip!\" (S10E13)"
    ]
  },

  "Eboni K. Williams": {
    astro: "September 9, 1983 • Virgo",
    seasons: "13",
    knownFor: [
      "Becoming RHONY’s first Black Housewife",
      "The Season 13 race and politics conversations"
    ],
    quotes: [
      "\"I’m not educating y’all for free.\" (S13)"
    ]
  },

  "Erin Lichy": {
    astro: "July 19, 1987 • Cancer",
    seasons: "14-present",
    knownFor: [
      "The missing-phone feud with Ubah",
      "Hosting the controversial Hamptons anniversary trip"
    ],
    quotes: [
      "\"I’m very chill.\" (S14)"
    ]
  },

  "Heather Thomson": {
    astro: "January 20, 1971 • Aquarius",
    seasons: "5-7",
    knownFor: [
      "The 'Don’t tell me nothin’, motherfucker!' Berkshires fight with Aviva",
      "Her ongoing conflict with Bethenny after Season 7"
    ],
    quotes: [
      "\"HOLLA!\" (Recurring)"
    ]
  },

  "Jenna Lyons": {
    astro: "June 8, 1968 • Gemini",
    seasons: "14-present",
    knownFor: [
      "Leaving a group flight to travel separately",
      "Bringing major fashion-industry status to reboot RHONY"
    ],
    quotes: [
      "\"I don’t fly coach.\" (S14)"
    ]
  },

  "Jessel Taank": {
    astro: "November 23, 1979 • Sagittarius",
    seasons: "14-present",
    knownFor: [
      "The lingerie/Jenna Lyons gift fallout",
      "Saying Tribeca was 'up and coming'"
    ],
    quotes: [
      "\"Tribeca is up and coming.\" (S14)"
    ]
  },

  "Jules Wainstein": {
    astro: "February 13, 1981 • Aquarius",
    seasons: "8",
    knownFor: [
      "The calzone-with-utensils scene",
      "Discussions around eating disorders and body image"
    ],
    quotes: [
      "\"I’m half Jewish, half Asian — basically a unicorn.\" (S8)"
    ]
  },

  "Kristen Taekman": {
    astro: "April 21, 1977 • Taurus",
    seasons: "6-7",
    knownFor: [
      "Ramona throwing a wine glass at her face during the Berkshires trip"
    ],
    quotes: [
      "\"I’m not dumb, I’m pretty!\" (S6)"
    ]
  },

  "Leah McSweeney": {
    astro: "August 27, 1982 • Virgo",
    seasons: "12-13",
    knownFor: [
      "Throwing tiki torches in the Hamptons",
      "The nude ravioli party incident in Newport"
    ],
    quotes: [
      "\"Okay boomer.\" (S12)"
    ]
  },

  "Luann de Lesseps": {
    astro: "May 17, 1965 • Taurus",
    seasons: "1-13",
    knownFor: [
      "The pirate hookup in St. Barts",
      "Her cabaret career after rehab and arrest"
    ],
    quotes: [
      "\"Be cool. Don’t be all, like, uncool.\" (S3E11)",
      "\"Jovani!\" (S10E16)"
    ]
  },

  "Racquel Chevremont": {
    astro: "October 31, 1971 • Scorpio",
    seasons: "15-present",
    knownFor: [
      "Bringing art-world and queer representation into the reboot ensemble"
    ],
    quotes: [
      "\"I’m very intentional.\" (S15)"
    ]
  },

  "Ramona Singer": {
    astro: "November 17, 1956 • Scorpio",
    seasons: "1-13",
    knownFor: [
      "The runway walk",
      "Frequently leaving cast trips early or causing room-assignment chaos"
    ],
    quotes: [
      "\"Wow, Bethenny, wow.\" (S9)",
      "\"Take a Xanax! Calm down!\" (S3E12)"
    ]
  },

  "Rebecca Minkoff (Friend Of)": {
    astro: "December 11, 1980 • Sagittarius",
    seasons: "15",
    knownFor: [
      "Expanding the reboot’s fashion-world connections"
    ],
    quotes: [
      "\"I’m very grounded.\" (S15)"
    ]
  },

  "Sai De Silva": {
    astro: "November 22, 1980 • Sagittarius",
    seasons: "14-present",
    knownFor: [
      "The prolonged feud with Jessel over storytelling and authenticity"
    ],
    quotes: [
      "\"I’m very direct.\" (S14)"
    ]
  },

  "Sonja Morgan": {
    astro: "November 25, 1963 • Sagittarius",
    seasons: "3-13",
    knownFor: [
      "The crumbling Upper East Side townhouse",
      "Sonja by Sonja Morgan fashion presentations"
    ],
    quotes: [
      "\"I party with John-John and Madonna!\" (S7)",
      "\"There’s nothing grey gardens about this.\" (S8)"
    ]
  },

  "Tinsley Mortimer": {
    astro: "August 11, 1975 • Leo",
    seasons: "9-12",
    knownFor: [
      "Crying over frozen eggs in clown makeup",
      "Her on-and-off relationship with Scott Kluth"
    ],
    quotes: [
      "\"Coupon cabin.\" (S11)"
    ]
  },

  "Ubah Hassan": {
    astro: "August 27, 1983 • Virgo",
    seasons: "14-present",
    knownFor: [
      "The escalating prank-war feud with Erin over the missing phone storyline"
    ],
    quotes: [
      "\"Don’t prank me.\" (S14)"
    ]
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
  renderHowToCards();
  renderEpisodeGuide();
  renderCastGuide();
  renderTripsGuide();
}

function renderHowToCards() {
  el.howToCards.innerHTML = guideCategories.map((category, index) => `
    <details class="guide-card">
      <summary>
        <span class="guide-card-intro">
          <span class="stamp">${category.label}</span>
          <span>${escapeHtml(category.description)}</span>
        </span>
        <span class="guide-card-toggle" aria-hidden="true"></span>
      </summary>
      <div class="guide-picks">
        ${category.episodes().map(renderGuidePick).join("")}
      </div>
    </details>
  `).join("");
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

  el.seasonContainer.innerHTML = seasons
    .filter((season) => bySeason.has(season.season))
    .map((season) => renderSeasonPanel(season, bySeason.get(season.season)))
    .join("");
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
      <details class="episodes-disclosure">
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
    </article>
  `;
}

function header(key, label) {
  const marker = sortState.key === key ? (sortState.direction === "asc" ? " ↑" : " ↓") : "";
  return `<th><button class="th-button" data-sort="${key}" type="button">${label}${marker}</button></th>`;
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
  const raw = castArchetypes[name];

  if (!raw) {
    return `<div class="cast-meta"><p>RHONY cast member. Details pending.</p></div>`;
  }

  const knownFor = Array.isArray(raw.knownFor) && raw.knownFor.length
    ? raw.knownFor.map((item) => `<span>${escapeHtml(item)}</span>`).join("")
    : "<span>Known-for moment pending.</span>";

  const quotes = Array.isArray(raw.quotes) && raw.quotes.length
    ? raw.quotes.map((quote) => `<span>${escapeHtml(quote)}</span>`).join("")
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
