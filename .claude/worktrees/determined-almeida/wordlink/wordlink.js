// ──────────────────────────────────────
// PUZZLE DATA
// ──────────────────────────────────────
const allPuzzles = [
  ["Pummel", "Rhythm", "Beat"],
  ["Peachy", "Inflammation", "Swell"],
  ["Forthright", "Dull", "Blunt"],
  ["Present", "Charge", "Current"],
  ["Scant", "Glow", "Light"],
  ["Contest", "Pair", "Match"],
  ["Fraction", "Role", "Part"],
  ["Alcohol", "Cards", "Gin"],
  ["Sexy", "Canine", "Foxy"],
  ["Large", "Cetacea", "Whale"],
  ["Sightless", "Shade", "Blind"],
  ["Tiny", "Crustacea", "Shrimp"],
  ["Buttress", "Aid", "Support"],
  ["Fun", "Explosion", "Blast"],
  ["Stiff", "Corporation", "Firm"],
  ["Hide", "Bombard", "Pelt"],
  ["Shop", "Save", "Store"],
  ["Idiot", "Trick", "Fool"],
  ["Shelve", "Table", "Postpone"],
  ["Collide", "Bicker", "Jar"],
  ["Employees", "Crook", "Staff"],
  ["Money", "Prevalence", "Currency"],
  ["Attend", "Suffice", "Serve"],
  ["Regulation", "Cipher", "Code"],
  ["Fasten", "Breeze", "Cinch"],
  ["Loud", "Expertise", "Forte"],
  ["Book", "Extra", "Reserve"],
  ["Bottleneck", "Preserves", "Jam"],
  ["Fluster", "Prattle", "Rattle"],
  ["Fruit", "Appointment", "Date"],
  ["Departed", "Direction", "Left"],
  ["Vacillate", "Flapjack", "Waffle"],
  ["Easy", "Wind", "Breeze"],
  ["Stood", "Flower", "Rose"],
  ["Banner", "Mark", "Flag"],
  ["Observe", "Announcement", "Notice"],
  ["Make", "Shape", "Form"],
  ["Gratuity", "Point", "Tip"],
  ["Dance", "Fun", "Ball"],
  ["Trash", "Stretcher", "Litter"],
  ["Peek", "Associate", "Peer"],
  ["Rumor", "Rage", "Buzz"],
  ["Hit", "Vigor", "Punch"],
  ["Incantation", "Bout", "Spell"],
  ["Taste", "Trend", "Flavor"],
  ["Bombard", "Hitter", "Batter"],
  ["Formulate", "Boundary", "Frame"],
  ["Often", "Haunt", "Frequent"],
  ["Knock", "Success", "Hit"],
  ["Noise", "Secure", "Sound"],
  ["Inlet", "Proclaim", "Sound"],
  ["Hit", "Timepiece", "Clock"],
  ["Absolute", "Sum", "Total"],
  ["Slope", "Perspective", "Angle"],
  ["Apartment", "Smooth", "Flat"],
  ["Advice", "Tilt", "Tip"],
  ["Mold", "Ensemble", "Cast"],
  ["Converse", "Address", "Talk"],
  ["Bounce", "Fountain", "Spring"],
  ["Stone", "Sway", "Rock"],
  ["Liquid", "Changing", "Fluid"],
  ["Finish", "Goal", "End"],
  ["End", "Polish", "Finish"],
  ["Exceed", "Defeat", "Better"],
  ["Guide", "Forthright", "Direct"],
  ["Leak", "Bore", "Drip"],
  ["Obscene", "Depressed", "Blue"],
  ["Observe", "Tone", "Note"],
  ["Amulet", "Charisma", "Charm"],
  ["Compel", "Energy", "Force"],
  ["Hide", "Cape", "Cloak"],
  ["Nice", "Category", "Kind"],
  ["Stride", "Tempo", "Pace"],
  ["Spectre", "Frighten", "Spook"],
  ["Walker", "Boring", "Pedestrian"],
  ["Pasta", "Brain", "Noodle"],
  ["Pursue", "Obey", "Follow"],
  ["Decorate", "Confiscate", "Garnish"],
  ["Void", "Suck", "Vacuum"],
  ["Chaos", "Lots", "Mess"],
  ["Condense", "Focus", "Concentrate"],
  ["Sandy", "Resolute", "Gritty"],
  ["Concave", "Sad", "Depressed"],
  ["Solemn", "Straight", "Sober"],
  ["Highlight", "Attribute", "Feature"],
  ["Throw", "Hang", "Sling"],
  ["Reign", "Maxim", "Rule"],
  ["Molt", "Hut", "Shed"],
  ["Accumulated", "Composed", "Collected"],
  ["Healed", "Retrieved", "Recovered"],
  ["Covenant", "Connection", "Bond"],
  ["Bang", "Increase", "Boom"],
  ["Rapid", "Armada", "Fleet"],
  ["Child", "Tease", "Kid"],
  ["Goat", "Child", "Kid"],
  ["Unrefined", "Obscene", "Crude"],
  ["Uncooked", "Bare", "Raw"],
  ["Difficult", "Ragged", "Rough"],
  ["Lump", "Thump", "Bump"],
  ["Movie", "Fling", "Flick"],
  ["Insult", "Zip", "Dart"],
  ["Stair", "Phase", "Step"],
  ["Struggle", "Work", "Labor"],
  ["Childbirth", "Toil", "Labor"],
  ["Routine", "Labor", "Grind"],
  ["Ready", "Stinky", "Ripe"],
  ["Dwell", "Accept", "Abide"],
  ["Intricate", "Expand", "Elaborate"],
  ["Pleat", "Surrender", "Fold"],
  ["Flutter", "Frenzy", "Flap"],
  ["Away", "Tangent", "Aside"],
  ["Sad", "Malfunctioning", "Down"],
  ["Evil", "Super", "Wicked"],
  ["Foremost", "Ruler", "Premier"],
  ["Tire", "Deplete", "Exhaust"],
  ["Scale", "Equilibrium", "Balance"],
  ["Blend", "Ring", "Chime"],
  ["Conserve", "Spouse", "Husband"],
  ["Guide", "Pastor", "Shepherd"],
  ["Trainer", "Carriage", "Coach"],
  ["Journey", "Mistake", "Trip"],
  ["Scramble", "Shamble", "Shuffle"],
  ["Shambles", "Ditch", "Dump"],
  ["Tumult", "Hoot", "Riot"],
  ["Oar", "Beat", "Paddle"],
  ["Person", "Existing", "Being"],
  ["Exercise", "Bore", "Drill"],
  ["Setting", "Commotion", "Scene"],
  ["Noisy", "Flashy", "Loud"],
  ["Style", "Brag", "Swank"],
  ["Strut", "Chic", "Swagger"],
  ["Irritable", "Stylish", "Snappy"],
  ["Adventurous", "Stylish", "Dashing"],
  ["Fashion", "Manner", "Style"],
  ["Make", "Elegance", "Style"],
  ["Live", "Ponder", "Dwell"],
  ["Contest", "Problem", "Challenge"],
  ["Tie", "Pickle", "Bind"],
  ["Pickle", "Stuff", "Jam"],
  ["Position", "Depot", "Station"],
  ["Place", "Job", "Position"],
  ["Rubbing", "Disagreement", "Friction"],
  ["Slither", "Traitor", "Snake"],
  ["Turncoat", "Judas", "Traitor"],
  ["Supply", "Faith", "Stock"],
  ["Inventory", "Broth", "Stock"],
  ["Cloak", "Comprehensive", "Blanket"],
  ["Generic", "Prevalent", "General"],
  ["Public", "Widespread", "Common"],
  ["Pornographic", "Unaccompanied", "Stag"],
  ["Guide", "Leash", "Lead"],
  ["Clue", "Principal", "Lead"],
  ["Parched", "Avid", "Thirsty"],
  ["Interest", "Wager", "Stake"],
  ["Hue", "Influence", "Color"],
  ["Clean", "Equal", "Wash"],
  ["Avoid", "Lurk", "Shirk"],
  ["Fall", "Mistake", "Slip"],
  ["Slammer", "Clank", "Clink"],
  ["Prison", "Collective", "Joint"],
  ["Jail", "Coop", "Pen"],
  ["Write", "Corral", "Pen"],
  ["Baffle", "Mystery", "Puzzle"],
  ["Daze", "Amaze", "Stun"],
  ["Gear", "Rigging", "Tackle"],
  ["Undertake", "Equipment", "Tackle"],
  ["Dud", "Fall", "Flop"],
  ["Swing", "Influence", "Sway"],
  ["Clasp", "Control", "Hold"],
  ["Consider", "Fortress", "Hold"],
  ["Rear", "Strict", "Stern"],
  ["Display", "Pole", "Post"],
  ["Stringer", "Scold", "Rail"],
  ["Snare", "Mouth", "Trap"],
  ["Stabilize", "Mesa", "Plateau"],
  ["Breeze", "Impromptu", "Snap"],
  ["Relax", "Lay", "Rest"],
  ["Prance", "Brace", "Strut"],
  ["Tolerate", "Rank", "Stand"],
  ["Exile", "Forbid", "Ban"],
  ["Loop", "Group", "Band"],
  ["Team", "Streak", "Band"],
  ["Crew", "Cooperate", "Team"],
  ["Erode", "Clothes", "Wear"],
  ["Bag", "Prize", "Purse"],
  ["Alliance", "Hub", "Axis"],
  ["Mecca", "Focus", "Center"],
  ["Magnificent", "Total", "Grand"],
  ["Dusty", "Good", "Fine"],
  ["Thin", "Penalty", "Fine"],
  ["Weak", "Dilute", "Thin"],
  ["Damage", "Pamper", "Spoil"],
  ["Unfair", "Disgusting", "Foul"],
  ["Total", "Icky", "Gross"],
  ["Taste", "Enjoy", "Savor"],
  ["Horseman", "Arrogant", "Cavalier"],
  ["Exert", "Layer", "Ply"],
  ["Encourage", "Hoist", "Boost"],
  ["Boost", "Elevator", "Lift"],
  ["Steal", "Dash", "Pinch"],
  ["Condescend", "Porch", "Stoop"],
  ["Spoon", "Tip", "Scoop"],
  ["News", "Awesome", "Dope"],
  ["Idiot", "Scoop", "Dope"],
  ["Mistake", "Fool", "Goof"],
  ["Prank", "Choke", "Gag"],
  ["Fling", "Vomit", "Hurl"],
  ["Attic", "Throw", "Loft"],
  ["Throw", "Discard", "Chuck"],
  ["String", "Weave", "Lace"],
  ["Sausage", "Tie", "Link"],
  ["Walkout", "Hit", "Strike"],
  ["Disadvantage", "Attack", "Strike"],
  ["Understand", "Clutch", "Grasp"],
  ["Grip", "Crisis", "Clutch"],
  ["Batch", "Handbag", "Clutch"],
  ["Limit", "Hat", "Cap"]
];

// ──────────────────────────────────────
// STATE
// ──────────────────────────────────────
let currentPuzzleIdx = 0;
let puzzleResults = [];
let timerInterval = null;
let secondsElapsed = 0;
let todayPuzzles = [];
let attemptsLeft = 2;

function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function getTodayPuzzles() {
  // Check if we already picked puzzles for today
  const saved = loadTodayState();
  if (saved && saved.puzzleIndices) {
    return saved.puzzleIndices.map(i => allPuzzles[i]);
  }
  // Pick 3 random non-repeating puzzles
  const indices = [];
  while (indices.length < 3) {
    const idx = Math.floor(Math.random() * allPuzzles.length);
    if (!indices.includes(idx)) indices.push(idx);
  }
  // Save the indices so refreshing keeps the same puzzles
  localStorage.setItem('wl_today', JSON.stringify({
    date: getTodayKey(),
    puzzleIdx: 0,
    results: [],
    done: false,
    puzzleIndices: indices
  }));
  return indices.map(i => allPuzzles[i]);
}

// ──────────────────────────────────────
// LOCAL STORAGE
// ──────────────────────────────────────
function loadStats() {
  try { return JSON.parse(localStorage.getItem('wl_stats')) || { played: 0, streak: 0, lastPlayed: '', scores: [] }; }
  catch { return { played: 0, streak: 0, lastPlayed: '', scores: [] }; }
}

function saveStats(stats) {
  localStorage.setItem('wl_stats', JSON.stringify(stats));
}

function loadTodayState() {
  try {
    const s = JSON.parse(localStorage.getItem('wl_today'));
    if (s && s.date === getTodayKey()) return s;
  } catch {}
  return null;
}

function saveTodayState() {
  const existing = loadTodayState();
  localStorage.setItem('wl_today', JSON.stringify({
    date: getTodayKey(),
    puzzleIdx: currentPuzzleIdx,
    results: puzzleResults,
    done: currentPuzzleIdx >= 3,
    puzzleIndices: existing ? existing.puzzleIndices : []
  }));
}

// ──────────────────────────────────────
// UI
// ──────────────────────────────────────
function updateStatsBar() {
  const stats = loadStats();
  document.getElementById('streakVal').textContent = stats.streak;
  document.getElementById('playedVal').textContent = stats.played;
  const avg = stats.scores.length ? Math.round(stats.scores.reduce((a,b) => a+b, 0) / stats.scores.length) : 0;
  document.getElementById('avgScoreVal').textContent = avg;
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.className = 'dot';
    if (i < puzzleResults.length) {
      dot.classList.add(puzzleResults[i].correct ? 'correct' : 'incorrect');
    } else if (i === currentPuzzleIdx) {
      dot.classList.add('active');
    }
  });
}

function startTimer() {
  secondsElapsed = 0;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    secondsElapsed++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimerDisplay() {
  const m = Math.floor(secondsElapsed / 60);
  const s = secondsElapsed % 60;
  document.getElementById('timer').textContent = `${m}:${String(s).padStart(2, '0')}`;
}

function showPuzzle() {
  if (currentPuzzleIdx >= 3) {
    showResults();
    return;
  }

  const puzzle = todayPuzzles[currentPuzzleIdx];
  document.getElementById('puzzleLabel').textContent = `Puzzle ${currentPuzzleIdx + 1} of 3`;
  document.getElementById('word1').textContent = puzzle[0];
  document.getElementById('word2').textContent = puzzle[1];
  document.getElementById('guessInput').value = '';
  document.getElementById('guessInput').disabled = false;
  document.getElementById('submitBtn').disabled = false;
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('feedback').textContent = '';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('puzzleCard').style.display = 'block';
  document.getElementById('resultsView').classList.remove('visible');

  attemptsLeft = 2;
  updateDots();
  startTimer();

  setTimeout(() => document.getElementById('guessInput').focus(), 100);
}

function submitGuess() {
  const input = document.getElementById('guessInput');
  const guess = input.value.trim().toLowerCase();
  if (!guess) return;

  const puzzle = todayPuzzles[currentPuzzleIdx];
  const answer = puzzle[2].toLowerCase();
  const fb = document.getElementById('feedback');
  const card = document.getElementById('puzzleCard');

  if (guess === answer) {
    stopTimer();
    fb.className = 'feedback correct';
    fb.textContent = `Correct! The answer is "${puzzle[2]}"`;
    card.classList.add('pop');
    setTimeout(() => card.classList.remove('pop'), 300);

    puzzleResults.push({
      correct: true,
      time: secondsElapsed,
      answer: puzzle[2],
      guess,
      word1: puzzle[0],
      word2: puzzle[1]
    });

    input.disabled = true;
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('nextBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').textContent = currentPuzzleIdx < 2 ? 'Next Puzzle' : 'See Results';
    updateDots();
    saveTodayState();
  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      fb.className = 'feedback incorrect';
      fb.textContent = `Not quite! ${attemptsLeft} attempt${attemptsLeft > 1 ? 's' : ''} remaining`;
      card.classList.add('shake');
      setTimeout(() => card.classList.remove('shake'), 400);
      input.value = '';
      input.focus();
    } else {
      stopTimer();
      fb.className = 'feedback incorrect';
      fb.textContent = `The answer was "${puzzle[2]}"`;

      puzzleResults.push({
        correct: false,
        time: secondsElapsed,
        answer: puzzle[2],
        guess,
        word1: puzzle[0],
        word2: puzzle[1]
      });

      input.disabled = true;
      document.getElementById('submitBtn').disabled = true;
      document.getElementById('nextBtn').style.display = 'inline-block';
      document.getElementById('nextBtn').textContent = currentPuzzleIdx < 2 ? 'Next Puzzle' : 'See Results';
      updateDots();
      saveTodayState();
    }
  }
}

function nextPuzzle() {
  currentPuzzleIdx++;
  saveTodayState();
  showPuzzle();
}

// ──────────────────────────────────────
// SCORING
// ──────────────────────────────────────
function calculateScore() {
  let score = 0;
  puzzleResults.forEach(r => {
    if (r.correct) {
      let pts = 100;
      if (r.time <= 10) pts += 50;
      else if (r.time < 60) pts += Math.round(50 * (1 - (r.time - 10) / 50));
      score += pts;
    }
  });
  return score;
}

// ──────────────────────────────────────
// RESULTS
// ──────────────────────────────────────
function showResults() {
  document.getElementById('puzzleCard').style.display = 'none';
  document.getElementById('resultsView').classList.add('visible');
  stopTimer();

  const score = calculateScore();
  const correct = puzzleResults.filter(r => r.correct).length;
  const totalTime = puzzleResults.reduce((s, r) => s + r.time, 0);
  const tm = Math.floor(totalTime / 60);
  const ts = totalTime % 60;

  document.getElementById('finalScore').textContent = score;
  document.getElementById('resCorrect').textContent = `${correct}/3`;
  document.getElementById('resTotalTime').textContent = `${tm}:${String(ts).padStart(2, '0')}`;

  const container = document.getElementById('puzzleResults');
  container.innerHTML = '';
  puzzleResults.forEach((r) => {
    const pm = Math.floor(r.time / 60);
    const ps = r.time % 60;
    const div = document.createElement('div');
    div.className = 'puzzle-result';
    div.innerHTML = `
      <div class="pr-icon ${r.correct ? 'correct' : 'incorrect'}">${r.correct ? '&#10003;' : '&#10007;'}</div>
      <div class="pr-text"><strong>${r.word1} &amp; ${r.word2}</strong><br>Answer: ${r.answer}</div>
      <div class="pr-time">${pm}:${String(ps).padStart(2, '0')}</div>
    `;
    container.appendChild(div);
  });

  const stats = loadStats();
  const today = getTodayKey();
  if (stats.lastPlayed !== today) {
    stats.played++;
    stats.scores.push(score);
    if (stats.scores.length > 30) stats.scores.shift();

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth()+1).padStart(2,'0')}-${String(yesterday.getDate()).padStart(2,'0')}`;
    stats.streak = (stats.lastPlayed === yKey) ? stats.streak + 1 : 1;
    stats.lastPlayed = today;
    saveStats(stats);
  }

  updateStatsBar();
}

function newGame() {
  // Clear today's state and pick fresh random puzzles
  localStorage.removeItem('wl_today');
  currentPuzzleIdx = 0;
  puzzleResults = [];
  todayPuzzles = getTodayPuzzles();
  updateDots();
  showPuzzle();
}

// ──────────────────────────────────────
// INIT
// ──────────────────────────────────────
todayPuzzles = getTodayPuzzles();
updateStatsBar();

const saved = loadTodayState();
if (saved && saved.done) {
  puzzleResults = saved.results;
  currentPuzzleIdx = 3;
  updateDots();
  showResults();
} else {
  if (saved && saved.puzzleIdx > 0) {
    puzzleResults = saved.results;
    currentPuzzleIdx = saved.puzzleIdx;
    updateDots();
  }
  showPuzzle();
}

document.getElementById('guessInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (!document.getElementById('guessInput').disabled) {
      submitGuess();
    }
  }
});
