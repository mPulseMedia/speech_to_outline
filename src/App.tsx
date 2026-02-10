import { useEffect, useMemo, useRef, useState } from "react";
import type { EngineConfig, EngineState, Thought, Utterance } from "./lib/outlineEngine";
import { DEFAULT_CONFIG, ingestUtterance, newEngineState, suggestLabel } from "./lib/outlineEngine";

type LabelJob = { thoughtId: string; dueAt: number };

const SCRIPT: string[] = [
  "Today I want to share a simple idea: as we speak, structure can appear at the same time as the transcript.",
  "Instead of waiting until the end, the interface can reserve a slot for a thought label before we know what it is.",
  "Then as sentences arrive, they get scooped into a thought as the thought emerges.",
  "Now, when a new topic starts, the last couple sentences often belong to the next idea.",
  "So we retroactively pull the trailing sentences into the next thought to make the outline feel natural.",
  "That creates a visual effect where the outline stabilizes and becomes easier to scan.",
  "Next, we can fill the label after a short delay using a quick summary of the content.",
  "The important part is the timing: space is allocated first, meaning arrives later.",
  "Okay, let's imagine this being driven by real speech recognition.",
  "We keep a raw transcript, but we also keep these grouped thought blocks with headings.",
  "Moving on, we can add controls for sensitivity and how many sentences to shift forward.",
  "Finally, this becomes a speech-to-outline organizer that works in real time."
];

function nowMs() {
  return Date.now();
}

function makeUtterance(text: string): Utterance {
  return { id: `${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`, tMs: nowMs(), text };
}

function clampInt(v: number, min: number, max: number) {
  if (!Number.isFinite(v)) return min;
  return Math.max(min, Math.min(max, Math.trunc(v)));
}

function thoughtCounts(th: Thought) {
  return th.utterances.length;
}

export function App() {
  const [running, setRunning] = useState(false);
  const [scriptIdx, setScriptIdx] = useState(0);
  const [engine, setEngine] = useState<EngineState>(() => newEngineState(nowMs()));
  const [config, setConfig] = useState<EngineConfig>(DEFAULT_CONFIG);
  const [transcript, setTranscript] = useState<Utterance[]>([]);
  const [labelDelayMs, setLabelDelayMs] = useState(1400);

  const labelJobsRef = useRef<LabelJob[]>([]);
  const tickRef = useRef<number | null>(null);

  const thoughts = engine.thoughts;

  const transcriptText = useMemo(() => transcript.map((u) => u.text), [transcript]);

  function scheduleLabel(thoughtId: string, delay: number) {
    const dueAt = nowMs() + delay;
    const jobs = labelJobsRef.current;
    if (jobs.some((j) => j.thoughtId === thoughtId)) return;
    jobs.push({ thoughtId, dueAt });
  }

  function runLabelJobs() {
    const t = nowMs();
    const jobs = labelJobsRef.current;
    const ready = jobs.filter((j) => j.dueAt <= t);
    if (ready.length === 0) return;
    labelJobsRef.current = jobs.filter((j) => j.dueAt > t);

    setEngine((prev) => {
      const next = structuredClone(prev) as EngineState;
      for (const job of ready) {
        const th = next.thoughts.find((x) => x.id === job.thoughtId);
        if (!th) continue;
        if (th.labelStatus === "ready") continue;
        if (th.utterances.length === 0) continue;
        th.label = suggestLabel(th);
        th.labelStatus = "ready";
      }
      return next;
    });
  }

  function ingest(text: string, opts?: { forceBoundary?: boolean; artificialPauseMs?: number }) {
    const u = makeUtterance(text);
    if (opts?.artificialPauseMs) u.tMs += opts.artificialPauseMs;

    setTranscript((t) => [...t, u]);
    setEngine((prev) => {
      const next = structuredClone(prev) as EngineState;
      ingestUtterance({ utterance: u, state: next, config, forceBoundary: opts?.forceBoundary });
      return next;
    });
  }

  function reset() {
    labelJobsRef.current = [];
    setRunning(false);
    setScriptIdx(0);
    setTranscript([]);
    setEngine(newEngineState(nowMs()));
  }

  // Whenever we close out a thought (i.e. a new thought was created), schedule the previous one’s label fill.
  useEffect(() => {
    // Find any pending-labeled thoughts except the most recent, and schedule them.
    for (let i = 0; i < thoughts.length - 1; i++) {
      const th = thoughts[i];
      if (th.labelStatus === "pending" && th.utterances.length > 0) scheduleLabel(th.id, labelDelayMs);
    }
    // Also schedule the most recent thought if it has content and we’ve paused long enough (simulated by timer below).
  }, [thoughts, labelDelayMs]);

  // Main simulation loop: emit one utterance every ~900ms while running.
  useEffect(() => {
    if (!running) return;
    if (tickRef.current != null) window.clearInterval(tickRef.current);

    tickRef.current = window.setInterval(() => {
      // Run label jobs each tick to fill in placeholders.
      runLabelJobs();

      setScriptIdx((idx) => {
        if (idx >= SCRIPT.length) return idx;
        const line = SCRIPT[idx];
        ingest(line);
        return idx + 1;
      });
    }, 900);

    return () => {
      if (tickRef.current != null) window.clearInterval(tickRef.current);
      tickRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, config, labelDelayMs]);

  // When not running, still process label jobs (so labels can pop in after stopping).
  useEffect(() => {
    if (running) return;
    const id = window.setInterval(() => runLabelJobs(), 250);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const lastThought = thoughts[thoughts.length - 1];

  return (
    <div className="app">
      <div className="topbar">
        <div className="title">
          <h1>Speech → Outline (real-time)</h1>
          <p>
            Reserved label slots + retroactive sentence shifting. Press <span className="kbd">Start</span> to simulate.
          </p>
        </div>

        <div className="controls">
          <button className="btn primary" onClick={() => setRunning((r) => !r)}>
            {running ? "Pause" : "Start"}
          </button>
          <button className="btn" onClick={() => ingest("Next, here's a new point.", { forceBoundary: true })}>
            Force new thought
          </button>
          <button
            className="btn"
            onClick={() => {
              // Artificial pause triggers boundary by time gap.
              ingest("Now, after a pause, a new thought emerges.", { artificialPauseMs: config.pauseBoundaryMs + 250 });
            }}
          >
            Inject pause boundary
          </button>
          <button className="btn danger" onClick={reset}>
            Reset
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="panel">
          <div className="panelHeader">
            <div className="row" style={{ gap: 12 }}>
              <strong>Outline</strong>
              <span className="hint">Thought blocks form as transcript streams.</span>
            </div>

            <div className="row" style={{ gap: 12 }}>
              <div className="field">
                retro shift
                <input
                  value={config.retroShiftCount}
                  inputMode="numeric"
                  onChange={(e) =>
                    setConfig((c) => ({ ...c, retroShiftCount: clampInt(Number(e.target.value), 0, 8) }))
                  }
                />
              </div>
              <div className="field">
                pause ms
                <input
                  value={config.pauseBoundaryMs}
                  inputMode="numeric"
                  onChange={(e) =>
                    setConfig((c) => ({ ...c, pauseBoundaryMs: clampInt(Number(e.target.value), 300, 8000) }))
                  }
                />
              </div>
              <div className="field">
                label delay
                <input
                  value={labelDelayMs}
                  inputMode="numeric"
                  onChange={(e) => setLabelDelayMs(clampInt(Number(e.target.value), 0, 8000))}
                />
              </div>
            </div>
          </div>

          <div className="panelBody">
            <div className="outline">
              {thoughts.map((th, i) => (
                <div key={th.id} className="thought">
                  <div className="thoughtHeader">
                    <div className="labelSlot">
                      {th.labelStatus === "ready" ? (
                        <span className="labelPill" title={th.label ?? undefined}>
                          {th.label}
                        </span>
                      ) : (
                        <div className="labelSkeleton" title="Label reserved (pending)" />
                      )}
                    </div>
                    <div className="thoughtMeta">
                      <span>
                        Thought {i + 1} · {thoughtCounts(th)} utterance{thoughtCounts(th) === 1 ? "" : "s"}
                      </span>
                      {th.id === lastThought?.id ? <span style={{ color: "var(--accent2)" }}>live</span> : <span />}
                    </div>
                  </div>

                  <div className="thoughtBody">
                    <div className="gutter">
                      <div style={{ marginBottom: 6, color: "rgba(255,255,255,0.55)" }}>reserved label</div>
                      <div style={{ fontSize: 11, lineHeight: 1.4 }}>
                        trailing sentences can move forward when a new thought emerges
                      </div>
                    </div>
                    <div className="utterances">
                      {th.utterances.length === 0 ? (
                        <div className="u" style={{ opacity: 0.6, borderStyle: "dashed" }}>
                          Waiting for speech…
                        </div>
                      ) : (
                        th.utterances.map((u) => (
                          <div key={u.id} className="u">
                            {u.text}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panelHeader">
            <div className="row" style={{ gap: 12 }}>
              <strong>Transcript</strong>
              <span className="hint">Raw stream (no grouping).</span>
            </div>
            <span className="hint">{transcript.length} lines</span>
          </div>
          <div className="panelBody">
            <div className="transcript">
              {transcriptText.length === 0 ? (
                <div className="tLine" style={{ opacity: 0.6 }}>
                  Press <span className="kbd">Start</span> to stream a demo transcript.
                </div>
              ) : (
                transcript.map((u) => (
                  <div key={u.id} className="tLine">
                    {u.text}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

