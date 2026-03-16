// ──────────────────────────────────────
// PUZZLE DATA
// ──────────────────────────────────────
const puzzle_set = [
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
let game_puzzles  = [];
let game_state    = [null, null, null]; // per-puzzle state
let timer_intervals = [null, null, null];
let timer_seconds   = [0, 0, 0];
let guess_counts    = [0, 0, 0];

// ───── date key ─────────────────────
function date_key_get() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// ───── persistence ──────────────────
function state_load() {
  try {
    const s = JSON.parse(localStorage.getItem('wl_today'));
    if (s && s.date === date_key_get()) return s;
  } catch {}
  return null;
}

function state_save() {
  localStorage.setItem('wl_today', JSON.stringify({
    date: date_key_get(),
    puzzleIndices: state_load()?.puzzleIndices || [],
    puzzles: game_state,
    timerSeconds: timer_seconds,
    guessCounts: guess_counts,
    done: game_state.every(s => s !== null)
  }));
}

function stats_load() {
  try { return JSON.parse(localStorage.getItem('wl_stats')) || { played: 0, streak: 0, lastPlayed: '', scores: [] }; }
  catch { return { played: 0, streak: 0, lastPlayed: '', scores: [] }; }
}

function stats_save(data) {
  localStorage.setItem('wl_stats', JSON.stringify(data));
}

function stats_bar_update() {
  const stats = stats_load();
  document.getElementById('stats_streak_value').textContent = stats.streak;
  document.getElementById('stats_played_value').textContent = stats.played;
  const avg = stats.scores.length ? Math.round(stats.scores.reduce((a,b) => a+b, 0) / stats.scores.length) : 0;
  document.getElementById('stats_avg_value').textContent = avg;
}

// ───── intro ────────────────────────
function intro_dismiss() {
  document.getElementById('intro_screen').style.display = 'none';
  document.getElementById('game_screen').style.display  = 'flex';
  localStorage.setItem('wl_intro_seen', '1');
  // start timers for unsolved puzzles
  for (let i = 0; i < 3; i++) {
    if (game_state[i] === null) timer_start(i);
  }
}

// ───── puzzle selection ─────────────
function game_puzzles_select() {
  const saved = state_load();
  if (saved && saved.puzzleIndices && saved.puzzleIndices.length === 3) {
    return saved.puzzleIndices.map(i => puzzle_set[i]);
  }
  const indices = [];
  while (indices.length < 3) {
    const idx = Math.floor(Math.random() * puzzle_set.length);
    if (!indices.includes(idx)) indices.push(idx);
  }
  localStorage.setItem('wl_today', JSON.stringify({
    date: date_key_get(),
    puzzleIndices: indices,
    puzzles: [null, null, null],
    timerSeconds: [0, 0, 0],
    guessCounts: [0, 0, 0],
    done: false
  }));
  return indices.map(i => puzzle_set[i]);
}

// ───── timer ────────────────────────
function timer_start(idx) {
  timer_display_update(idx);
  timer_intervals[idx] = setInterval(() => {
    timer_seconds[idx]++;
    timer_display_update(idx);
  }, 1000);
}

function timer_stop(idx) {
  clearInterval(timer_intervals[idx]);
  timer_intervals[idx] = null;
}

function timer_display_update(idx) {
  const m = Math.floor(timer_seconds[idx] / 60);
  const s = timer_seconds[idx] % 60;
  document.getElementById(`timer_display_${idx}`).textContent = `${m}:${String(s).padStart(2, '0')}`;
}

// ───── render puzzles ───────────────
function puzzles_render() {
  for (let i = 0; i < 3; i++) {
    const puzzle = game_puzzles[i];
    document.getElementById(`clue_first_${i}`).textContent  = puzzle[0];
    document.getElementById(`clue_second_${i}`).textContent = puzzle[1];

    if (game_state[i] !== null) {
      puzzle_lock(i);
    } else {
      guess_count_update(i);
    }
  }
}

function guess_count_update(idx) {
  const el = document.getElementById(`guess_count_${idx}`);
  if (guess_counts[idx] > 0) {
    el.textContent = `${guess_counts[idx]} guess${guess_counts[idx] !== 1 ? 'es' : ''}`;
  } else {
    el.textContent = '';
  }
}

function puzzle_lock(idx) {
  const result = game_state[idx];
  const card   = document.getElementById(`puzzle_card_${idx}`);
  const input  = document.getElementById(`guess_input_${idx}`);
  const btn    = document.getElementById(`guess_submit_${idx}`);
  const fb     = document.getElementById(`feedback_message_${idx}`);
  const reveal = document.getElementById(`reveal_button_${idx}`);

  input.disabled = true;
  btn.disabled   = true;
  reveal.style.display = 'none';

  if (result.correct) {
    fb.className   = 'feedback_message correct';
    fb.textContent = `Correct! "${result.answer}" in ${result.guesses} guess${result.guesses !== 1 ? 'es' : ''}`;
    card.classList.add('solved');
  } else {
    fb.className   = 'feedback_message incorrect';
    fb.textContent = `Revealed: "${result.answer}"`;
    card.classList.add('revealed');
  }

  guess_count_update(idx);
  timer_display_update(idx);
}

// ───── guessing ─────────────────────
function guess_submit(idx) {
  if (game_state[idx] !== null) return;

  const input = document.getElementById(`guess_input_${idx}`);
  const guess = input.value.trim().toLowerCase();
  if (!guess) return;

  const puzzle = game_puzzles[idx];
  const answer = puzzle[2].toLowerCase();
  const fb     = document.getElementById(`feedback_message_${idx}`);
  const card   = document.getElementById(`puzzle_card_${idx}`);

  guess_counts[idx]++;

  if (guess === answer) {
    timer_stop(idx);
    game_state[idx] = {
      correct: true,
      time: timer_seconds[idx],
      guesses: guess_counts[idx],
      answer: puzzle[2],
      word1: puzzle[0],
      word2: puzzle[1]
    };
    puzzle_lock(idx);
    card.classList.add('pop');
    setTimeout(() => card.classList.remove('pop'), 300);
    state_save();
    check_all_done();
  } else {
    fb.className   = 'feedback_message incorrect';
    fb.textContent = 'Not quite — try again!';
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 400);
    input.value = '';
    input.focus();
    guess_count_update(idx);
    state_save();
  }
}

function puzzle_reveal(idx) {
  if (game_state[idx] !== null) return;

  timer_stop(idx);
  const puzzle = game_puzzles[idx];
  game_state[idx] = {
    correct: false,
    time: timer_seconds[idx],
    guesses: guess_counts[idx],
    answer: puzzle[2],
    word1: puzzle[0],
    word2: puzzle[1]
  };
  puzzle_lock(idx);
  state_save();
  check_all_done();
}

function check_all_done() {
  if (!game_state.every(s => s !== null)) return;

  // small delay so player sees the last result before results screen
  setTimeout(() => results_show(), 800);
}

// ───── scoring ──────────────────────
function score_calculate() {
  let score = 0;
  game_state.forEach(r => {
    if (!r || !r.correct) return;
    let pts = 100;
    // bonus for speed
    if (r.time <= 10) pts += 50;
    else if (r.time < 60) pts += Math.round(50 * (1 - (r.time - 10) / 50));
    // bonus for fewer guesses
    if (r.guesses === 1) pts += 50;
    else if (r.guesses === 2) pts += 25;
    else if (r.guesses === 3) pts += 10;
    score += pts;
  });
  return score;
}

// ───── results ──────────────────────
function results_show() {
  document.getElementById('puzzles_grid').style.display = 'none';
  document.getElementById('results_view').classList.add('visible');

  const score     = score_calculate();
  const correct   = game_state.filter(r => r && r.correct).length;
  const totalTime = game_state.reduce((s, r) => s + (r ? r.time : 0), 0);
  const tm        = Math.floor(totalTime / 60);
  const ts        = totalTime % 60;

  document.getElementById('score_final_value').textContent     = score;
  document.getElementById('results_correct_value').textContent = `${correct}/3`;
  document.getElementById('results_time_value').textContent    = `${tm}:${String(ts).padStart(2, '0')}`;

  const labels = ['Easy', 'Medium', 'Hard'];
  const container = document.getElementById('results_puzzle_list');
  container.innerHTML = '';
  game_state.forEach((r, i) => {
    if (!r) return;
    const pm  = Math.floor(r.time / 60);
    const ps  = r.time % 60;
    const div = document.createElement('div');
    div.className = 'results_puzzle_item';
    div.innerHTML = `
      <div class="results_puzzle_icon ${r.correct ? 'correct' : 'incorrect'}">${r.correct ? '&#10003;' : '&#10007;'}</div>
      <div class="results_puzzle_text">
        <strong>${labels[i]}: ${r.word1} &amp; ${r.word2}</strong><br>
        Answer: ${r.answer}${r.correct ? ' (' + r.guesses + ' guess' + (r.guesses !== 1 ? 'es' : '') + ')' : ' (revealed)'}
      </div>
      <div class="results_puzzle_time">${pm}:${String(ps).padStart(2, '0')}</div>
    `;
    container.appendChild(div);
  });

  const stats = stats_load();
  const today = date_key_get();
  if (stats.lastPlayed !== today) {
    stats.played++;
    stats.scores.push(score);
    if (stats.scores.length > 30) stats.scores.shift();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth()+1).padStart(2,'0')}-${String(yesterday.getDate()).padStart(2,'0')}`;
    stats.streak = (stats.lastPlayed === yKey) ? stats.streak + 1 : 1;
    stats.lastPlayed = today;
    stats_save(stats);
  }
  stats_bar_update();
}

// ───── reset ────────────────────────
function game_reset() {
  localStorage.removeItem('wl_today');
  game_state    = [null, null, null];
  timer_seconds = [0, 0, 0];
  guess_counts  = [0, 0, 0];
  timer_intervals.forEach((_, i) => timer_stop(i));

  game_puzzles = game_puzzles_select();

  // reset UI
  document.getElementById('puzzles_grid').style.display = '';
  document.getElementById('results_view').classList.remove('visible');

  for (let i = 0; i < 3; i++) {
    const card   = document.getElementById(`puzzle_card_${i}`);
    const input  = document.getElementById(`guess_input_${i}`);
    const btn    = document.getElementById(`guess_submit_${i}`);
    const fb     = document.getElementById(`feedback_message_${i}`);
    const reveal = document.getElementById(`reveal_button_${i}`);
    const gc     = document.getElementById(`guess_count_${i}`);

    card.classList.remove('solved', 'revealed');
    input.disabled = false;
    input.value    = '';
    btn.disabled   = false;
    fb.className   = 'feedback_message';
    fb.textContent = '';
    reveal.style.display = '';
    gc.textContent = '';
  }

  puzzles_render();
  for (let i = 0; i < 3; i++) timer_start(i);
}

// ───── init ─────────────────────────
game_puzzles = game_puzzles_select();
stats_bar_update();

const saved = state_load();
if (saved) {
  if (saved.puzzles)      game_state    = saved.puzzles;
  if (saved.timerSeconds) timer_seconds = saved.timerSeconds;
  if (saved.guessCounts)  guess_counts  = saved.guessCounts;
}

puzzles_render();

// show intro or go straight to game
if (localStorage.getItem('wl_intro_seen') && !(saved && saved.done)) {
  document.getElementById('intro_screen').style.display = 'none';
  document.getElementById('game_screen').style.display  = 'flex';
  for (let i = 0; i < 3; i++) {
    if (game_state[i] === null) timer_start(i);
  }
} else if (saved && saved.done) {
  document.getElementById('intro_screen').style.display = 'none';
  document.getElementById('game_screen').style.display  = 'flex';
  results_show();
}

// enter key submits for whichever input is focused
document.querySelectorAll('[id^="guess_input_"]').forEach(input => {
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const idx = parseInt(input.id.split('_').pop());
      if (!input.disabled) guess_submit(idx);
    }
  });
});
