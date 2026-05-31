const seasons = window.GUIDE_DATA || [];
const allEpisodes = seasons.flatMap((season) => season.episodes);

const seasonYears = {
  1: 2008,
  2: 2009,
  3: 2010,
  4: 2011,
  5: 2012,
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

const tripArcs = [
  {
    season: 2,
    location: "Hamptons",
    episodes: ["s2e1", "s2e2", "s2e3"],
    why: "Early Hamptons group orbit: Kelly enters, Jill/Bethenny’s alliance is still intact, and the late-2000s status map gets sharper.",
    mood: "Hamptons Summer. Kelly Arrives. Status Rules."
  },
  {
    season: 3,
    location: "Hamptons",
    episodes: ["s3e1", "s3e2", "s3e8"],
    why: "The season’s Hamptons beats track the Jill/Bethenny cold war, Labor Day social lines, and Bethenny’s engagement milestone.",
    mood: "Cold War. Labor Day. Milestone Envy."
  },
  {
    season: 3,
    location: "St. John, USVI",
    episodes: ["s3e11", "s3e12", "s3e13"],
    why: "The Scary Island arc: St. John becomes the setting for one of RHONY’s defining group fractures.",
    mood: "Scary Island. Jelly Beans. Hiiii."
  },
  {
    season: 4,
    location: "Quogue",
    episodes: ["s4e4"],
    why: "Cindy hosts the women at her horse farm, giving the season a Hamptons-adjacent pecking-order pressure test.",
    mood: "Horse Farm. Lunch Tantrum. Pecking Order."
  },
  {
    season: 4,
    location: "Marrakesh, Morocco",
    episodes: ["s4e8", "s4e9", "s4e10"],
    why: "The Morocco arc is major Season 4 canon: Fortune Teller prophecy, camel panic, and clique warfare. It also carries clear 2011-era cultural-tourism/orientalist framing, so the guide should flag the trip as iconic but not frictionless.",
    mood: "Fortune Teller. Camels. Riad Warfare."
  },
  {
    season: 5,
    location: "London",
    episodes: ["s5e6", "s5e7"],
    why: "Heather hosts part of the group in London, exposing gratitude, class, and trip-manners tension.",
    mood: "London. Penthouse Hospitality. Trip Manners."
  },
  {
    season: 5,
    location: "Miami",
    episodes: ["s5e9"],
    why: "Carole and Sonja meet Aviva and Ramona in Miami, where George’s boundary-crossing behavior shifts the group chemistry.",
    mood: "Miami. George Arrives. Boundary Problems."
  },
  {
    season: 5,
    location: "St. Barts",
    episodes: ["s5e13", "s5e14", "s5e15"],
    why: "The Pirate trip arc: St. Barts starts as vacation fun, then turns into alibis, reputation policing, Aviva’s arrival, and the “white trash” rupture.",
    mood: "Pirate. Alibi Building. White Trash."
  },
  {
    season: 6,
    location: "Hamptons",
    episodes: ["s6e4", "s6e5"],
    why: "The women head east for Sonja’s performance, Luann’s barbecue, and early-season sniping.",
    mood: "Hamptons. Cabaret. Barbecue."
  },
  {
    season: 6,
    location: "Berkshires",
    episodes: ["s6e9"],
    why: "A smaller group outing with Sonja business-plan material, Carole’s matchmaker beat, and canoe texture.",
    mood: "Business Plans. Matchmaking. Canoes."
  },
  {
    season: 6,
    location: "Saratoga Springs",
    episodes: ["s6e13"],
    why: "A race-track trip with George/Ramona reconciliation context and Saratoga social texture.",
    mood: "Saratoga. George. Reconciliation."
  },
  {
    season: 6,
    location: "Montana",
    episodes: ["s6e15", "s6e16", "s6e17"],
    why: "A full outdoor group trip with cattle, fishing, mountains, and the Kristen/Heather feud forcing sides.",
    mood: "Cattle. Mountains. Hatchets."
  },
  {
    season: 7,
    location: "Atlantic City",
    episodes: ["s7e6"],
    why: "The women celebrate Ramona’s first birthday without Mario, turning Atlantic City into a post-divorce pressure cooker.",
    mood: "Atlantic City. Birthday. Divorce."
  },
  {
    season: 7,
    location: "Berkshires",
    episodes: ["s7e9", "s7e10"],
    why: "Dorinda’s Berkshires birthday introduces Bluestone Manor as a country-house pressure cooker.",
    mood: "Berkshires. Birthday. Screaming."
  },
  {
    season: 7,
    location: "Turks and Caicos",
    episodes: ["s7e12", "s7e13", "s7e14", "s7e15"],
    why: "The Turks and Caicos arc: island room politics, yacht vulnerability, nightlife, and the “don’t be all, like, uncool” boundary breach.",
    mood: "Turks. Yacht. Uncool."
  },
  {
    season: 7,
    location: "London",
    episodes: ["s7e17"],
    why: "Carole and Dorinda travel to London for Anthony’s ashes, giving the season a quieter friendship-and-grief travel chapter.",
    mood: "London. Ashes. Friendship."
  },
  {
    season: 8,
    location: "Berkshires",
    episodes: ["s8e9", "s8e10"],
    why: "A colder, sharper Berkshires chapter built around Dorinda’s hosting, Luann/Bethenny conflict, and holiday blowback.",
    mood: "Berkshires. Meltdown. Holidays."
  },
  {
    season: 8,
    location: "Mohegan Sun",
    episodes: ["s8e15", "s8e16"],
    why: "A casino micro-trip where dinner-party grievances move into gambling, dancing, and Countess engagement energy.",
    mood: "Casino. Dinner. Gambling."
  },
  {
    season: 8,
    location: "Miami",
    episodes: ["s8e17"],
    why: "The women finally get to Miami, where Bethenny’s information about Tom changes the season’s emotional temperature.",
    mood: "Miami. Tom. Evidence."
  },
  {
    season: 9,
    location: "Hamptons",
    episodes: ["s9e3"],
    why: "The group heads east for Ramona-hosted birthday energy and early-season Hamptons social weather.",
    mood: "Hamptons. Birthdays. Status."
  },
  {
    season: 9,
    location: "Berkshires",
    episodes: ["s9e8"],
    why: "Dorinda reopens the Berkshires and the group stages an intervention-like confrontation.",
    mood: "Berkshires. Intervention. Vodka."
  },
  {
    season: 9,
    location: "Washington, D.C.",
    episodes: ["s9e12"],
    why: "Carole and Dorinda travel to D.C., giving the season political texture and friendship-canon movement.",
    mood: "Washington. Politics. Friendship."
  },
  {
    season: 9,
    location: "Vermont",
    episodes: ["s9e13", "s9e14"],
    why: "A snowy trip with Bronx fallout, emotional breakdowns, slopes, headlines, and truth-or-dare tension.",
    mood: "Vermont. Slopes. Headlines."
  },
  {
    season: 9,
    location: "Mexico",
    episodes: ["s9e16", "s9e17", "s9e18"],
    why: "The Mexico arc is high-rewatch vacation nonsense: room politics, tequila, Luann going horizontal, and villa chaos.",
    mood: "Mexico. Tequila. Villa."
  },
  {
    season: 10,
    location: "Hamptons",
    episodes: ["s10e3"],
    why: "A Hamptons brunch trip where the Carole/Bethenny fracture starts feeling harder to ignore.",
    mood: "Hamptons. Brunch. Distance."
  },
  {
    season: 10,
    location: "Puerto Rico",
    episodes: ["s10e7"],
    why: "Bethenny and Dorinda travel to Puerto Rico for hurricane-relief work, giving the season a rare serious field-trip chapter.",
    mood: "Puerto Rico. Relief. Fences."
  },
  {
    season: 10,
    location: "Berkshires",
    episodes: ["s10e8"],
    why: "A Berkshires chapter with costumes, fritters, and the familiar Bluestone pressure-cooker effect.",
    mood: "Berkshires. Costumes. Fritters."
  },
  {
    season: 10,
    location: "Connecticut",
    episodes: ["s10e12"],
    why: "A smaller Connecticut/spa trip built around Luann’s rehab transition and the group’s fragile handling of it.",
    mood: "Connecticut. Spa. Fragility."
  },
  {
    season: 10,
    location: "Cartagena, Colombia",
    episodes: ["s10e15", "s10e16", "s10e17"],
    why: "The Cartagena arc: international glam, body/health stress, dinner unraveling, and the infamous boat ride.",
    mood: "Cartagena. Dinner. Boat Panic."
  },
  {
    season: 10,
    location: "Hamptons",
    episodes: ["s10e18"],
    why: "A post-Cartagena Hamptons landing with renovation, pricing, and return-to-New-York social texture.",
    mood: "Hamptons. Renovation. Price."
  },
  {
    season: 11,
    location: "Southampton",
    episodes: ["s11e2"],
    why: "A Southampton clambake chapter where the women carry city chaos into a Hamptons-adjacent setting.",
    mood: "Southampton. Clambake. Spiral."
  },
  {
    season: 11,
    location: "Berkshires",
    episodes: ["s11e6"],
    why: "A Bluestone Manor episode with mansion lore, family history, and ghostly country-house texture.",
    mood: "Berkshires. Mansion. Ghosts."
  },
  {
    season: 11,
    location: "Upstate New York",
    episodes: ["s11e11", "s11e12"],
    why: "An upstate run built around baby talk, family expectations, Luann’s cabaret focus, and group exhaustion.",
    mood: "Upstate. Baby-Talk. Cabaret."
  },
  {
    season: 11,
    location: "Miami",
    episodes: ["s11e13", "s11e14", "s11e15"],
    why: "A Miami trip where ex dynamics, alcohol-heavy conflict, and Luann’s recovery/cabaret tunnel vision collide.",
    mood: "Miami. Exes. Cabaret."
  },
  {
    season: 12,
    location: "Hamptons",
    episodes: ["s12e3", "s12e4"],
    why: "A Hamptons run with winery seating, tennis, and early-season grudges.",
    mood: "Hamptons. Winery. Tennis."
  },
  {
    season: 12,
    location: "Newport, Rhode Island",
    episodes: ["s12e9", "s12e10"],
    why: "A Newport trip shaped by Leah’s family conflict, alcohol-heavy energy, and group pile-on dynamics.",
    mood: "Newport. Sister. Brewing."
  },
  {
    season: 12,
    location: "Berkshires",
    episodes: ["s12e13", "s12e14"],
    why: "Bluestone Manor becomes cozy pressure cooker: Jovani, manners, exits, and hangover energy.",
    mood: "Bluestone. Jovani. Exit."
  },
  {
    season: 12,
    location: "Cancun, Mexico",
    episodes: ["s12e16", "s12e17", "s12e18", "s12e19"],
    why: "A long Cancun arc with mariachi, camels, beaches, men, group texts, and alcohol-heavy anger.",
    mood: "Cancun. Camels. Group-Text."
  },
  {
    season: 13,
    location: "Hamptons",
    episodes: ["s13e2", "s13e3"],
    why: "A Hamptons-area run where oversharing, winery talk, and language accountability define the season’s early friction.",
    mood: "Hamptons. Winery. Accountability."
  },
  {
    season: 13,
    location: "Salem, Massachusetts",
    episodes: ["s13e9", "s13e10", "s13e11"],
    why: "The Salem arc uses witch-trial framing for matchmaker tension, history tourism, boredom, and group fallout.",
    mood: "Salem. Witch Trials. Fallout."
  },
  {
    season: 14,
    location: "Hamptons",
    episodes: ["s14e3"],
    why: "The reboot cast heads to the Hamptons, where Jenna’s absence and the shakshuka issue become early trust tests.",
    mood: "Hamptons. Jenna. Shakshuka."
  },
  {
    season: 14,
    location: "Anguilla",
    episodes: ["s14e9", "s14e10", "s14e11"],
    why: "The Anguilla trip gives the reboot cast its first major destination arc: villa dynamics, Sai/Jessel conflict, and the Ubah phone fallout.",
    mood: "Anguilla. Villas. Phone."
  },
  {
    season: 14,
    location: "Connecticut",
    episodes: ["s14e14"],
    why: "A smaller finale travel beat that helps close the reboot season’s early group fault lines.",
    mood: "Connecticut. Closure. Dots."
  },
  {
    season: 15,
    location: "Hamptons",
    episodes: ["s15e2", "s15e3", "s15e4"],
    why: "A Hamptons run with guarded dynamics, Dramamine drama, and scorekeeping.",
    mood: "Hamptons. Dramamine. Scorekeeping."
  },
  {
    season: 15,
    location: "Puerto Rico",
    episodes: ["s15e11", "s15e12", "s15e13", "s15e14", "s15e15"],
    why: "The Puerto Rico arc: room politics, family vulnerability, dinner disasters, beach routines, and the finale’s severe interpersonal fallout.",
    mood: "Puerto Rico. Dinner. Fallout."
  }
];


// ── PICK MY EPISODE (MVP) ──
// A small set of hand-written prescriptions. Each is tagged against the picker
// questions and matched by overlap. Keep this curated so results feel intentional.
const prescriptions = [
  {
    goal: "Quick Episode",
    mess: ["Iconic Canon"],
    time: "Single Episode",
    atmosphere: ["High-Energy Urban", "Surprise Me"],
    episodes: ["s6e20"],
    why: "One self-contained canon bomb: Aviva returns, the table combusts, and the leg enters franchise history. Minimal homework, maximum payoff.",
    alsoConsider: "S2E7 — “Kelly vs. Bethenny” for an earlier one-episode hierarchy classic."
  },
  {
    goal: "Quick Episode",
    mess: ["Low-Stakes Nonsense"],
    time: "Single Episode",
    atmosphere: ["High-Energy Urban", "Surprise Me"],
    episodes: ["s2e8"],
    why: "Tennis egos, partner politics, and the early Skinnygirl logo all in one compact early-RHONY capsule.",
    alsoConsider: "S8E12 — “Always the Bitch, Never the Bride” if you want stranger city-calendar nonsense."
  },
  {
    goal: "Quick Episode",
    mess: ["Emotional Fallout"],
    time: "Single Episode",
    atmosphere: ["Cozy & Insular", "Surprise Me"],
    episodes: ["s3e6"],
    why: "A Brooklyn Bridge walk becomes an emotional ambush. It is sharp, personal, and easy to drop into without watching the whole season first.",
    alsoConsider: "S9E10 — “Black Out and Get Out” if you want a later Bethenny/Ramona explosion."
  },
  {
    goal: "Quick Episode",
    mess: ["Dealer's Choice"],
    time: "Single Episode",
    atmosphere: ["Surprise Me", "High-Energy Urban"],
    episodes: ["s7e15"],
    why: "A clean, quotable boundary-breach episode: tropical setting, naked man fallout, and one of the best RHONY lines ever.",
    alsoConsider: "S6E20 — “The Last Leg” if you want a finale-level canon hit instead."
  },
  {
    goal: "Short Arc",
    mess: ["Iconic Canon"],
    time: "Story Arc",
    atmosphere: ["High-Energy Urban", "Surprise Me"],
    episodes: ["s3e9", "s3e10", "s3e14"],
    why: "A compact city arc for the Jill/Bethenny collapse: messenger warfare, charity-event confrontation, and the final failed lunch.",
    alsoConsider: "S2E6–S2E8 if you want the Kelly/Bethenny and early Skinnygirl foundation instead."
  },
  {
    goal: "Short Arc",
    mess: ["Low-Stakes Nonsense"],
    time: "Two-Episode Taste",
    atmosphere: ["High-Energy Urban", "Cozy & Insular", "Surprise Me"],
    episodes: ["s2e7", "s2e8"],
    why: "Two episodes of classic early-RHONY absurdity: Kelly’s “I’m up here” sit-down, then tennis warfare and Skinnygirl logo plotting.",
    alsoConsider: "S5E10 — “You Want to What Me in the Where?” for Toaster Oven business delusion in one hit."
  },
  {
    goal: "Short Arc",
    mess: ["Emotional Fallout"],
    time: "Story Arc",
    atmosphere: ["Cozy & Insular", "Surprise Me"],
    episodes: ["s8e8", "s8e19", "s8e20"],
    why: "The Tom problem in three movements: introduction, investigation, and devastation. It is not quiet sadness; it is relationship fallout with receipts.",
    alsoConsider: "S9E9–S9E11 if you want the wedding-denial continuation."
  },
  {
    goal: "Short Arc",
    mess: ["Dealer's Choice"],
    time: "Story Arc",
    atmosphere: ["High-Energy Urban", "Surprise Me"],
    episodes: ["s5e10", "s5e11", "s5e12"],
    why: "A very RHONY city run: Toaster Oven mythology, holiday-party weirdness, and loyalty exams before St. Barts takes over.",
    alsoConsider: "S4E5–S4E6 for Sonja finances, masquerade energy, and social-team formation."
  },
  {
    goal: "Catch Me Up Before I Jump Ahead",
    mess: ["Iconic Canon"],
    time: "Full Season / Binge Mode",
    atmosphere: ["Surprise Me", "High-Energy Urban"],
    episodes: ["s5e1", "s5e10", "s5e13", "s5e14", "s5e15", "s5e18"],
    why: "The tight Season 5 bridge into Season 6: cast reset, Toaster Oven canon, St. Barts/Pirate/Aviva fallout, and the finale posture.",
    alsoConsider: "Read the Season 5 reunion footer after watching if you want the cleanest handoff into Season 6."
  },
  {
    goal: "Catch Me Up Before I Jump Ahead",
    mess: ["Emotional Fallout"],
    time: "Full Season / Binge Mode",
    atmosphere: ["Cozy & Insular", "Surprise Me"],
    episodes: ["s3e1", "s3e6", "s3e9", "s3e11", "s3e12", "s3e13", "s3e14"],
    why: "The essential Season 3 spine: Jill/Bethenny cold war, Brooklyn Bridge, messenger chaos, Scary Island, Jill’s arrival, and the final lunch.",
    alsoConsider: "S2E7 and S2E8 first if you want more context for Kelly and Bethenny before Scary Island."
  },
  {
    goal: "Catch Me Up Before I Jump Ahead",
    mess: ["Low-Stakes Nonsense"],
    time: "Two-Episode Taste",
    atmosphere: ["High-Energy Urban", "Surprise Me"],
    episodes: ["s1e4", "s1e6"],
    why: "The shortest useful early-RHONY foundation: private-school/social-climbing dinner energy plus Luann’s Countess etiquette canon.",
    alsoConsider: "S2E4 — “If You Have Nothing Nice to Say...” if you want more Luann title politics."
  },
  {
    goal: "Catch Me Up Before I Jump Ahead",
    mess: ["Dealer's Choice"],
    time: "Story Arc",
    atmosphere: ["Surprise Me"],
    episodes: ["s4e5", "s4e6", "s4e8", "s4e9", "s4e10"],
    why: "The cleanest Season 4 context path: Sonja’s real-world financial strain, subgroup warfare, and the Morocco trip that closes the original era’s social logic.",
    alsoConsider: "S4E15 — “Video Killed the Countess” if Luann music canon is the priority."
  },
  {
    goal: "Give Me Vacation Chaos",
    mess: ["Iconic Canon"],
    time: "Story Arc",
    atmosphere: ["Tropical & Chaotic", "Surprise Me"],
    episodes: ["s3e11", "s3e12", "s3e13"],
    why: "Scary Island: St. John, jelly beans, group confusion, and Jill’s catastrophic surprise arrival. This is the trip arc that made the format feel dangerous.",
    alsoConsider: "S5E13–S5E15 for the St. Barts Pirate arc."
  },
  {
    goal: "Give Me Vacation Chaos",
    mess: ["Low-Stakes Nonsense"],
    time: "Story Arc",
    atmosphere: ["Tropical & Chaotic", "Surprise Me"],
    episodes: ["s9e16", "s9e17", "s9e18"],
    why: "Mexico is high-rewatch vacation nonsense: room politics, tequila, Luann falling, and the group getting loose without feeling grim.",
    alsoConsider: "S12E16–S12E19 for another long Mexico run."
  },
  {
    goal: "Give Me Vacation Chaos",
    mess: ["Emotional Fallout"],
    time: "Story Arc",
    atmosphere: ["Tropical & Chaotic", "Surprise Me"],
    episodes: ["s5e13", "s5e14", "s5e15"],
    why: "St. Barts starts playful, then turns into Pirate alibis, Aviva’s late arrival, and the “white trash” rupture.",
    alsoConsider: "S5E16 for the post-trip dinner litigation back in New York."
  },
  {
    goal: "Give Me Vacation Chaos",
    mess: ["Dealer's Choice"],
    time: "Two-Episode Taste",
    atmosphere: ["Cozy & Insular", "Surprise Me"],
    episodes: ["s12e13", "s12e14"],
    why: "Bluestone Manor is less tropical vacation and more cozy pressure cooker: Jovani, manners, exits, and hangover energy.",
    alsoConsider: "S8E9–S8E10 if you want a colder, meaner Berkshires chapter."
  },
  {
    goal: "Give Me Vacation Chaos",
    mess: ["Iconic Canon", "Emotional Fallout"],
    time: "Story Arc",
    atmosphere: ["Tropical & Chaotic", "Surprise Me"],
    episodes: ["s4e8", "s4e9", "s4e10"],
    why: "Morocco gives you Fortune Teller prophecy, camel panic, and clique warfare, with a needed note for 2011-era cultural-tourism/orientalist framing.",
    alsoConsider: "S10E15–S10E17 for Cartagena, if you want a later international trip with heavier travel stress."
  }
];

let lastPrescriptionKey = "";

let sortState = { key: "season", direction: "asc" };

const el = {
  seasonFilter: document.querySelector("#seasonFilter"),
  searchFilter: document.querySelector("#searchFilter"),
  essentialFilter: document.querySelector("#essentialFilter"),
  seasonContainer: document.querySelector("#seasonContainer"),
  resultCount: document.querySelector("#resultCount"),
  castGuide: document.querySelector("#castGuide"),
  tripsGuide: document.querySelector("#tripsGuide"),
  pickerForm: document.querySelector("#pickerForm"),
  pickerStart: document.querySelector("#pickerStart"),
  prescription: document.querySelector("#prescription")
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
  document.addEventListener("click", handlePickerAction);
  renderEpisodeGuide();
  renderCastGuide();
  renderTripsGuide();
  initPicker();
}

// ── PICK MY EPISODE LOGIC ──
function initPicker() {
  if (!el.pickerForm) return;

  if (el.pickerStart) {
    el.pickerStart.addEventListener("click", () => {
      el.pickerForm.hidden = false;
      el.pickerStart.hidden = true;
    });
  }

  setupPickerCardFlow();
  limitMessSelection();

  el.pickerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    lastPrescriptionKey = "";
    renderPrescription(readPickerAnswers());
  });
}

function setupPickerCardFlow() {
  const allSteps = [...el.pickerForm.querySelectorAll(".picker-q")];
  const actions = el.pickerForm.querySelector(".picker-actions");
  const submitButton = actions?.querySelector('button[type="submit"]');

  if (!allSteps.length || !actions || !submitButton) return;

  let currentStep = 0;

  const progress = document.createElement("div");
  progress.className = "picker-progress";
  el.pickerForm.prepend(progress);

  const flowControls = document.createElement("div");
  flowControls.className = "picker-flow-controls";

  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.className = "button ghost picker-back";
  backButton.textContent = "Back";

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "button primary picker-next";
  nextButton.textContent = "Next";

  flowControls.append(backButton, nextButton);
  actions.prepend(flowControls);

  submitButton.textContent = "Write my prescription";

  function getActiveSteps() {
    const goal = el.pickerForm.querySelector('input[name="goal"]:checked')?.value;
    return allSteps.filter((step) => !(goal === "Quick Episode" && step.dataset.stepName === "time"));
  }

  function updateStep() {
    const activeSteps = getActiveSteps();
    if (currentStep >= activeSteps.length) currentStep = activeSteps.length - 1;

    allSteps.forEach((step) => {
      const isActive = step === activeSteps[currentStep];
      const isInFlow = activeSteps.includes(step);
      step.hidden = !isActive || !isInFlow;
      step.classList.toggle("is-active", isActive);
    });

    progress.textContent = `Question ${currentStep + 1} of ${activeSteps.length}`;

    backButton.hidden = currentStep === 0;
    nextButton.hidden = currentStep === activeSteps.length - 1;
    submitButton.hidden = currentStep !== activeSteps.length - 1;
  }

  nextButton.addEventListener("click", () => {
    const activeSteps = getActiveSteps();
    currentStep = Math.min(currentStep + 1, activeSteps.length - 1);
    updateStep();
  });

  backButton.addEventListener("click", () => {
    currentStep = Math.max(currentStep - 1, 0);
    updateStep();
  });

  el.pickerForm.querySelectorAll('input[name="goal"]').forEach((input) => {
    input.addEventListener("change", () => {
      currentStep = Math.min(currentStep, getActiveSteps().length - 1);
      updateStep();
    });
  });

  updateStep();
}

// Enforce the "pick up to 2" rule without permanently greying out options.
function limitMessSelection() {
  const boxes = [...el.pickerForm.querySelectorAll('input[name="mess"]')];

  boxes.forEach((box) => {
    box.addEventListener("change", () => {
      const checked = boxes.filter((b) => b.checked);

      if (checked.length > 2) {
        box.checked = false;
      }
    });
  });
}

function readPickerAnswers() {
  const form = el.pickerForm;
  const goal = form.querySelector('input[name="goal"]:checked')?.value || "Quick Episode";

  return {
    goal,
    mess: [...form.querySelectorAll('input[name="mess"]:checked')].map((input) => input.value),
    time: goal === "Quick Episode"
      ? "Single Episode"
      : form.querySelector('input[name="time"]:checked')?.value || "Story Arc",
    atmosphere: form.querySelector('input[name="atmosphere"]:checked')?.value || "Surprise Me"
  };
}

// Score each prescription by how well it matches the answers, then choose one.
function scorePrescription(prescription, answers) {
  let score = 0;

  if (prescription.goal === answers.goal) score += 10;
  if (prescription.time === answers.time) score += 3;

  if (!answers.mess.length || answers.mess.includes("Dealer's Choice")) {
    score += 2;
  } else {
    score += prescription.mess.filter((tag) => answers.mess.includes(tag)).length * 3;
  }

  if (answers.atmosphere === "Surprise Me") score += 1;
  else if (prescription.atmosphere.includes(answers.atmosphere)) score += 3;

  return score;
}

function pickPrescription(answers, excludeKey = "") {
  const ranked = prescriptions
    .map((prescription) => ({
      prescription,
      score: scorePrescription(prescription, answers),
      key: prescription.episodes.join("|")
    }))
    .sort((a, b) => b.score - a.score);

  return (ranked.find((item) => item.key !== excludeKey) || ranked[0]).prescription;
}

function findEpisodeById(id) {
  return allEpisodes.find((episode) => episode.id === id);
}

function episodeCode(episode) {
  return `S${episode.season}E${String(episode.ep).padStart(2, "0")}`;
}

function renderPrescription(answers, options = {}) {
  const match = pickPrescription(answers, options.excludeKey ? lastPrescriptionKey : "");
  const episodes = match.episodes.map(findEpisodeById).filter(Boolean);

  if (!episodes.length) {
    el.prescription.innerHTML = `<div class="empty-state">No prescription available yet for that combination.</div>`;
    return;
  }

  lastPrescriptionKey = match.episodes.join("|");

  const first = episodes[0];
  const startLine = `${episodeCode(first)} — “${escapeHtml(first.episodeTitle || `Episode ${first.ep}`)}”`;
  const watchOrder = episodes.length > 1
    ? episodes.map((episode) => `<a href="#${episode.id}" data-episode-jump="${episode.id}">${episodeCode(episode)}</a>`).join(" → ")
    : "";

  el.prescription.innerHTML = `
    <article class="prescription-card">
      <div class="prescription-label">Prescription</div>
      <p class="prescription-start">
        <a href="#${first.id}" data-episode-jump="${first.id}">${startLine}</a>
      </p>
      ${watchOrder ? `<p class="prescription-watch"><strong>Then watch:</strong> ${watchOrder}</p>` : ""}
      <p class="prescription-why"><strong>Why:</strong> ${escapeHtml(match.why)}</p>
      ${match.alsoConsider ? `<p class="prescription-also"><strong>Also consider:</strong> ${escapeHtml(match.alsoConsider)}</p>` : ""}
      <div class="prescription-actions">
        <button type="button" class="button ghost prescription-try" data-picker-action="try-again">Try another prescription</button>
        <button type="button" class="button ghost prescription-reset" data-picker-action="reset">Reset quiz</button>
      </div>
    </article>
  `;
}

function handlePickerAction(event) {
  const actionButton = event.target.closest("[data-picker-action]");
  if (!actionButton) return;

  if (actionButton.dataset.pickerAction === "try-again") {
    renderPrescription(readPickerAnswers(), { excludeKey: true });
    return;
  }

  if (actionButton.dataset.pickerAction === "reset") {
    resetPicker();
  }
}

function resetPicker() {
  el.pickerForm.reset();
  lastPrescriptionKey = "";
  el.prescription.innerHTML = "";
  el.pickerForm.hidden = true;
  if (el.pickerStart) el.pickerStart.hidden = false;

  const progress = el.pickerForm.querySelector(".picker-progress");
  const firstStep = el.pickerForm.querySelector(".picker-q");

  el.pickerForm.querySelectorAll(".picker-q").forEach((step) => {
    step.hidden = step !== firstStep;
    step.classList.toggle("is-active", step === firstStep);
  });

  if (progress) progress.textContent = "Question 1 of 3";
}


function getFilteredEpisodes() {
  const selectedSeason = el.seasonFilter.value;
  const searchTerm = el.searchFilter?.value.trim().toLowerCase() || "";

  let result = allEpisodes.filter((episode) => {
    if (selectedSeason !== "all" && episode.season !== Number(selectedSeason)) return false;
    if (el.essentialFilter?.checked && getWatchStatus(episode) !== "essential") return false;

    const searchable = [
      episode.episodeTitle,
      episode.synopsis,
      episode.officialSynopsis,
      episode.editorialSynopsis,
      episode.chaos,
      episode.notes,
      episode.watchStatus,
      episode.enjoymentTier,
      `season ${episode.season}`,
      `s${episode.season}e${episode.ep}`
    ].join(" ").toLowerCase();

    const regex = new RegExp(`\\b${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");

    if (searchTerm && !regex.test(searchable)) return false;
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
    || Boolean(el.searchFilter?.value.trim())
    || Boolean(el.essentialFilter?.checked);
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
        <span class="season-meta">${episodes.length} visible rows · ${season.episodes.length} total</span>
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
          <table class="episode-table compact-episode-table">
            <thead>
              <tr>
                ${header("episode", "Episode")}
                ${header("synopsis", "Synopsis")}
                ${header("chaos", "Chaos Agents")}
                ${header("nyc", "NYC")}
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
  const official = episode.officialSynopsis || episode.synopsis;
  const displaySynopsis = episode.editorialSynopsis || official;
  const note = episode.notes || "";
  const showNote = note && note !== displaySynopsis;

  return `
    <tr id="${episode.id}">
      <td class="ep-cell episode-identity-cell" data-label="Episode">
        <span class="ep-code">S${episode.season} · E${episode.ep}</span>
        ${episode.episodeTitle ? `<span class="ep-title">${escapeHtml(episode.episodeTitle)}</span>` : ""}
        <div class="ep-badges">
          ${renderWatchBadge(episode)}
          ${renderEnjoymentBadge(episode)}
        </div>
      </td>
      <td class="synopsis-cell" data-label="Synopsis">
        <p class="editorial-synopsis">${escapeHtml(displaySynopsis)}</p>
        ${showNote ? `<p class="episode-note">${episode.travel ? `<span class="mini-tag">Travel</span>` : ""}${escapeHtml(note)}</p>` : ""}
      </td>
      <td class="chaos-cell chaos-agents-cell" data-label="Chaos Agents">
        ${renderChaosAgents(episode.chaos)}
      </td>
      <td class="score-cell nyc-cell" data-label="NYC">${repeat("🍎", episode.nyc)}</td>
    </tr>
  `;
}

function getWatchStatus(episode) {
  if (episode.watchStatus) return episode.watchStatus;
  return episode.essential ? "essential" : "optional";
}

function getEnjoymentTier(episode) {
  if (episode.enjoymentTier) return episode.enjoymentTier;

  const score = Number(episode.enjoyment || 0);
  if (score >= 95) return "elite";
  if (score >= 90) return "great";
  return "good";
}

function renderWatchBadge(episode) {
  const status = getWatchStatus(episode);
  const label = status === "essential" ? "Essential" : "Optional";
  return `<span class="watch-badge badge-${escapeHtml(status)}">${label}</span>`;
}

function renderEnjoymentBadge(episode) {
  const tier = getEnjoymentTier(episode);
  const label = tier.charAt(0).toUpperCase() + tier.slice(1);
  return `<span class="enjoyment-badge badge-${escapeHtml(tier)}">${label}</span>`;
}

function renderChaosAgents(value) {
  if (!value) return `<span class="chaos-empty">—</span>`;

  const agents = String(value)
    .split(/[/.·,]+/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (!agents.length) return `<span class="chaos-empty">—</span>`;

  return `
    <div class="chaos-agent-list">
      ${agents.map((agent) => `<span>${escapeHtml(agent)}</span>`).join("")}
    </div>
  `;
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
  if (!el.tripsGuide) return;

  const arcsBySeason = tripArcs
    .map((arc) => ({
      ...arc,
      episodes: arc.episodes.map(findEpisodeById).filter(Boolean)
    }))
    .filter((arc) => arc.episodes.length)
    .reduce((grouped, arc) => {
      if (!grouped[arc.season]) grouped[arc.season] = [];
      grouped[arc.season].push(arc);
      return grouped;
    }, {});

  el.tripsGuide.innerHTML = Object.entries(arcsBySeason)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([season, arcs]) => `
      <details class="trip-season" open>
        <summary>
          <span>Season ${season}</span>
          <span>${arcs.length} trip${arcs.length === 1 ? "" : "s"}</span>
        </summary>

        <div class="trip-table">
          <div class="trip-row trip-row-head">
            <span>Location</span>
            <span>Episodes</span>
            <span>Why it matters</span>
            <span>Mood</span>
            <span>Jump</span>
          </div>

          ${arcs.map((arc) => {
            const first = arc.episodes[0];
            const last = arc.episodes[arc.episodes.length - 1];
            const episodeRange = arc.episodes.length === 1
              ? `S${first.season}E${first.ep}`
              : `S${first.season}E${first.ep}–E${last.ep}`;

            return `
              <div class="trip-row">
                <strong>${escapeHtml(arc.location)}</strong>
                <span>${escapeHtml(episodeRange)}</span>
                <span>${escapeHtml(arc.why)}</span>
                <span>${escapeHtml(arc.mood)}</span>
                <span class="trip-jumps">
                  ${arc.episodes.map((ep) => `
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
  if (el.searchFilter) el.searchFilter.value = "";
  if (el.essentialFilter) el.essentialFilter.checked = false;
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
