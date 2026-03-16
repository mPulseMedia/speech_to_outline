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
let attempt_remaining = 2;
let game_puzzle_index = 0;
let game_puzzles      = [];
let game_results      = [];
let timer_interval    = null;
let timer_seconds     = 0;

// ───── state ─────────────────────────
function state_load() {
  try {
    const s = JSON.parse(localStorage.getItem('wl_today'));
    if (s && s.date === date_key_get()) return s;
  } catch {}
  return null;
}

function state_save() {
  const existing = state_load();
  localStorage.setItem('wl_today', JSON.stringify({
    date: date_key_get(),
    puzzleIdx: game_puzzle_index,
    results: game_results,
    done: game_puzzle_index >= 3,
    puzzleIndices: existing ? existing.puzzleIndices : []
  }));
}

// ───── stats ─────────────────────────
function stats_load() {
  try { return JSON.parse(localStorage.getItem('wl_stats')) || { played: 0, streak: 0, lastPlayed: '', scores: [] }; }
  catch { return { played: 0, streak: 0, lastPlayed: '', scores: [] }; }
}

function stats_save(stats_data) {
  localStorage.setItem('wl_stats', JSON.stringify(stats_data));
}

function stats_bar_update() {
  const stats = stats_load();
  document.getElementById('stats_streak_value').textContent = stats.streak;
  document.getElementById('stats_played_value').textContent = stats.played;
  const avg = stats.scores.length ? Math.round(stats.scores.reduce((a,b) => a+b, 0) / stats.scores.length) : 0;
  document.getElementById('stats_avg_value').textContent = avg;
}

// ───── game ──────────────────────────
function game_puzzles_select() {
  const saved = state_load();
  if (saved && saved.puzzleIndices) {
    return saved.puzzleIndices.map(i => puzzle_set[i]);
  }
  const indices = [];
  while (indices.length < 3) {
    const idx = Math.floor(Math.random() * puzzle_set.length);
    if (!indices.includes(idx)) indices.push(idx);
  }
  localStorage.setItem('wl_today', JSON.stringify({
    date: date_key_get(),
    puzzleIdx: 0,
    results: [],
    done: false,
    puzzleIndices: indices
  }));
  return indices.map(i => puzzle_set[i]);
}

function game_reset() {
  localStorage.removeItem('wl_today');
  game_puzzle_index = 0;
  game_results      = [];
  game_puzzles      = game_puzzles_select();
  progress_dots_update();
  puzzle_show();
}

// ───── timer ─────────────────────────
function timer_start() {
  timer_seconds = 0;
  timer_display_update();
  timer_interval = setInterval(() => {
    timer_seconds++;
    timer_display_update();
  }, 1000);
}

function timer_stop() {
  clearInterval(timer_interval);
}

function timer_display_update() {
  const m = Math.floor(timer_seconds / 60);
  const s = timer_seconds % 60;
  document.getElementById('timer_display').textContent = `${m}:${String(s).padStart(2, '0')}`;
}

// ───── puzzle ────────────────────────
function puzzle_show() {
  if (game_puzzle_index >= 3) {
    results_show();
    return;
  }

  const puzzle = game_puzzles[game_puzzle_index];
  document.getElementById('puzzle_label').textContent         = `Puzzle ${game_puzzle_index + 1} of 3`;
  document.getElementById('clue_first').textContent           = puzzle[0];
  document.getElementById('clue_second').textContent          = puzzle[1];
  document.getElementById('guess_input').value                = '';
  document.getElementById('guess_input').disabled             = false;
  document.getElementById('guess_submit_button').disabled     = false;
  document.getElementById('feedback_message').className       = 'feedback_message';
  document.getElementById('feedback_message').textContent     = '';
  document.getElementById('puzzle_next_button').style.display = 'none';
  document.getElementById('puzzle_card').style.display        = 'block';
  document.getElementById('results_view').classList.remove('visible');

  attempt_remaining = 2;
  progress_dots_update();
  timer_start();

  setTimeout(() => document.getElementById('guess_input').focus(), 100);
}

function puzzle_advance() {
  game_puzzle_index++;
  state_save();
  puzzle_show();
}

// ───── play ──────────────────────────
function date_key_get() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function progress_dots_update() {
  const dots = document.querySelectorAll('.progress_dot');
  dots.forEach((dot, i) => {
    dot.className = 'progress_dot';
    if (i < game_results.length) {
      dot.classList.add(game_results[i].correct ? 'correct' : 'incorrect');
    } else if (i === game_puzzle_index) {
      dot.classList.add('active');
    }
  });
}

function guess_submit() {
  const input = document.getElementById('guess_input');
  const guess = input.value.trim().toLowerCase();
  if (!guess) return;

  const puzzle = game_puzzles[game_puzzle_index];
  const answer = puzzle[2].toLowerCase();
  const fb     = document.getElementById('feedback_message');
  const card   = document.getElementById('puzzle_card');

  if (guess === answer) {
    timer_stop();
    fb.className   = 'feedback_message correct';
    fb.textContent = `Correct! The answer is "${puzzle[2]}"`;
    card.classList.add('pop');
    setTimeout(() => card.classList.remove('pop'), 300);

    game_results.push({
      correct: true,
      time: timer_seconds,
      answer: puzzle[2],
      guess,
      word1: puzzle[0],
      word2: puzzle[1]
    });

    input.disabled = true;
    document.getElementById('guess_submit_button').disabled     = true;
    document.getElementById('puzzle_next_button').style.display = 'inline-block';
    document.getElementById('puzzle_next_button').textContent   = game_puzzle_index < 2 ? 'Next Puzzle' : 'See Results';
    progress_dots_update();
    state_save();
  } else {
    attempt_remaining--;
    if (attempt_remaining > 0) {
      fb.className   = 'feedback_message incorrect';
      fb.textContent = `Not quite! ${attempt_remaining} attempt${attempt_remaining > 1 ? 's' : ''} remaining`;
      card.classList.add('shake');
      setTimeout(() => card.classList.remove('shake'), 400);
      input.value = '';
      input.focus();
    } else {
      timer_stop();
      fb.className   = 'feedback_message incorrect';
      fb.textContent = `The answer was "${puzzle[2]}"`;

      game_results.push({
        correct: false,
        time: timer_seconds,
        answer: puzzle[2],
        guess,
        word1: puzzle[0],
        word2: puzzle[1]
      });

      input.disabled = true;
      document.getElementById('guess_submit_button').disabled     = true;
      document.getElementById('puzzle_next_button').style.display = 'inline-block';
      document.getElementById('puzzle_next_button').textContent   = game_puzzle_index < 2 ? 'Next Puzzle' : 'See Results';
      progress_dots_update();
      state_save();
    }
  }
}

function score_calculate() {
  let score = 0;
  game_results.forEach(r => {
    if (r.correct) {
      let pts = 100;
      if (r.time <= 10) pts += 50;
      else if (r.time < 60) pts += Math.round(50 * (1 - (r.time - 10) / 50));
      score += pts;
    }
  });
  return score;
}

function results_show() {
  document.getElementById('puzzle_card').style.display = 'none';
  document.getElementById('results_view').classList.add('visible');
  timer_stop();

  const score     = score_calculate();
  const correct   = game_results.filter(r => r.correct).length;
  const totalTime = game_results.reduce((s, r) => s + r.time, 0);
  const tm        = Math.floor(totalTime / 60);
  const ts        = totalTime % 60;

  document.getElementById('score_final_value').textContent     = score;
  document.getElementById('results_correct_value').textContent = `${correct}/3`;
  document.getElementById('results_time_value').textContent    = `${tm}:${String(ts).padStart(2, '0')}`;

  const container = document.getElementById('results_puzzle_list');
  container.innerHTML = '';
  game_results.forEach((r) => {
    const pm  = Math.floor(r.time / 60);
    const ps  = r.time % 60;
    const div = document.createElement('div');
    div.className = 'results_puzzle_item';
    div.innerHTML = `
      <div class="results_puzzle_icon ${r.correct ? 'correct' : 'incorrect'}">${r.correct ? '&#10003;' : '&#10007;'}</div>
      <div class="results_puzzle_text"><strong>${r.word1} &amp; ${r.word2}</strong><br>Answer: ${r.answer}</div>
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

// ───── init ──────────────────────────
game_puzzles = game_puzzles_select();
stats_bar_update();

const saved = state_load();
if (saved && saved.done) {
  game_results      = saved.results;
  game_puzzle_index = 3;
  progress_dots_update();
  results_show();
} else {
  if (saved && saved.puzzleIdx > 0) {
    game_results      = saved.results;
    game_puzzle_index = saved.puzzleIdx;
    progress_dots_update();
  }
  puzzle_show();
}

document.getElementById('guess_input').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (!document.getElementById('guess_input').disabled) {
      guess_submit();
    }
  }
});
