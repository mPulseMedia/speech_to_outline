// prompt_log_data.js
// Interactive prompt log — edit data here; index.html renders it.

const PROMPT_LOG = [
  {
    id: "thread_001",
    label: "folder_review 2026_03_25 Wed 12:30 PM",
    open: true,
    children: [
      {
        id: "p01",
        label: "01 folder_review",
        open: false,
        children: [
          {
            id: "p01_prompt",
            label: "Prompt",
            open: false,
            children: [
              { id: "p01_p1", label: '"review the folder"', open: false, children: [] }
            ]
          },
          {
            id: "p01_results",
            label: "Results",
            open: false,
            children: [
              { id: "p01_r1", label: "Reviewed both mounted folders: speech_to_outline/ and wordlink/", open: false, children: [] },
              { id: "p01_r2", label: "Identified project structure: React+Vite app, standalone HTML, paul/ rules/specs, wordlink/ subfolder", open: false, children: [] },
              { id: "p01_r3", label: "Created prompt_log/ folder and prompt_log_data.js; updated paul/chat_log.txt", open: false, children: [] }
            ]
          }
        ]
      },
      {
        id: "p02",
        label: "02 puzzle_set_xlsx",
        open: true,
        children: [
          {
            id: "p02_prompt",
            label: "Prompt",
            open: true,
            children: [
              { id: "p02_p1", label: '"make an xlsx file that lists the puzzle_set sets. Call columns: word1, word2, Answer. add a column called hardness. take a guess at how hard each set is."', open: true, children: [] }
            ]
          },
          {
            id: "p02_results",
            label: "Results",
            open: true,
            children: [
              { id: "p02_r1", label: "Read wordlink/wordlink.js — found 217 puzzle_set entries, each [word1, word2, answer]", open: true, children: [] },
              { id: "p02_r2", label: "Assigned hardness 1/2/3 (Easy/Medium/Hard) to each puzzle based on obscurity of dual meanings", open: true, children: [] },
              { id: "p02_r3", label: "Created puzzle_set.xlsx with columns: #, word1, word2, answer, hardness; color-coded by difficulty; auto-filter + freeze header", open: true, children: [] }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "thread_002",
    label: "mic_permission_fix 2026_04_12 Sun 10:12 PM",
    open: true,
    children: [
      {
        id: "t2_p01",
        label: "01 mic_permission_fix",
        open: true,
        children: [
          {
            id: "t2_p01_prompt",
            label: "Prompt",
            open: true,
            children: [
              { id: "t2_p01_p1", label: '"Every 8 seconds, I have to allow the mic again" [screenshot of Chrome mic permission dialog on speech_workflowy.html]', open: true, children: [] }
            ]
          },
          {
            id: "t2_p01_results",
            label: "Results",
            open: true,
            children: [
              { id: "t2_p01_r1", label: "Root cause: Chrome re-prompts on every SpeechRecognition restart for file:// URLs (~8s cycle)", open: true, children: [] },
              { id: "t2_p01_r2", label: "Fix: added acquireMic() — holds a persistent getUserMedia stream to pin the permission", open: true, children: [] },
              { id: "t2_p01_r3", label: "startListening() now calls acquireMic().then(...) before starting recognition", open: true, children: [] },
              { id: "t2_p01_r4", label: "File modified: speech_workflowy.html", open: true, children: [] }
            ]
          }
        ]
      }
    ]
  }
];
