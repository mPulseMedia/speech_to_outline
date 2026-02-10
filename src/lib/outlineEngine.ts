export type Utterance = {
  id: string;
  tMs: number;
  text: string;
};

export type Thought = {
  id: string;
  createdAtMs: number;
  // Reserved label space: label may arrive later.
  label: string | null;
  labelStatus: "pending" | "ready";
  utterances: Utterance[];
};

export type EngineConfig = {
  // How many trailing utterances get "pulled forward" into the next thought.
  retroShiftCount: number;
  // Heuristic: treat an utterance as a boundary if it starts like "next, now, okay, so..."
  boundaryStarters: string[];
  // Also treat long pauses as boundaries.
  pauseBoundaryMs: number;
};

export type EngineState = {
  thoughts: Thought[];
  lastUtteranceAtMs: number | null;
};

export const DEFAULT_CONFIG: EngineConfig = {
  retroShiftCount: 2,
  boundaryStarters: ["next", "now", "okay", "so", "alright", "moving on"],
  pauseBoundaryMs: 1800
};

function makeId(prefix: string) {
  return `${prefix}_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
}

export function newEngineState(nowMs: number): EngineState {
  return {
    thoughts: [
      {
        id: makeId("thought"),
        createdAtMs: nowMs,
        label: null,
        labelStatus: "pending",
        utterances: []
      }
    ],
    lastUtteranceAtMs: null
  };
}

function normalize(text: string) {
  return text.trim().toLowerCase();
}

function isBoundaryByStarter(text: string, starters: string[]) {
  const n = normalize(text);
  return starters.some((s) => n === s || n.startsWith(`${s} `) || n.startsWith(`${s},`));
}

export function shouldStartNewThought(args: {
  utterance: Utterance;
  state: EngineState;
  config: EngineConfig;
}): boolean {
  const { utterance, state, config } = args;

  if (isBoundaryByStarter(utterance.text, config.boundaryStarters)) return true;

  const last = state.lastUtteranceAtMs;
  if (last != null && utterance.tMs - last >= config.pauseBoundaryMs) return true;

  return false;
}

function ensureCurrentThought(state: EngineState, nowMs: number): Thought {
  const current = state.thoughts[state.thoughts.length - 1];
  if (current) return current;
  const t: Thought = {
    id: makeId("thought"),
    createdAtMs: nowMs,
    label: null,
    labelStatus: "pending",
    utterances: []
  };
  state.thoughts.push(t);
  return t;
}

export function ingestUtterance(args: {
  utterance: Utterance;
  state: EngineState;
  config: EngineConfig;
  forceBoundary?: boolean;
}): EngineState {
  const { utterance, state, config, forceBoundary } = args;

  const boundary = forceBoundary || shouldStartNewThought({ utterance, state, config });
  if (boundary && state.thoughts.length > 0) {
    const prev = state.thoughts[state.thoughts.length - 1];
    // Create a new thought with reserved label space.
    const next: Thought = {
      id: makeId("thought"),
      createdAtMs: utterance.tMs,
      label: null,
      labelStatus: "pending",
      utterances: []
    };

    // Retroactively move the last N utterances from prev → next.
    const shiftN = Math.max(0, Math.min(config.retroShiftCount, prev.utterances.length));
    if (shiftN > 0) {
      const moved = prev.utterances.slice(prev.utterances.length - shiftN);
      prev.utterances = prev.utterances.slice(0, prev.utterances.length - shiftN);
      next.utterances.push(...moved);
    }

    state.thoughts.push(next);
  }

  const cur = ensureCurrentThought(state, utterance.tMs);
  cur.utterances.push(utterance);
  state.lastUtteranceAtMs = utterance.tMs;
  return state;
}

const STOP = new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "so",
  "to",
  "of",
  "in",
  "on",
  "for",
  "with",
  "that",
  "this",
  "it",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "as",
  "at",
  "by",
  "from",
  "we",
  "i",
  "you",
  "they",
  "he",
  "she",
  "them",
  "our",
  "your"
]);

export function suggestLabel(thought: Thought): string {
  const text = thought.utterances.map((u) => u.text).join(" ");
  const words = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]+/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((w) => w.length >= 4 && !STOP.has(w));

  if (words.length === 0) return "Thought";

  const freq = new Map<string, number>();
  for (const w of words) freq.set(w, (freq.get(w) ?? 0) + 1);
  const top = [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([w]) => w);

  const title = top
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1))
    .join(" · ");

  return title || "Thought";
}

