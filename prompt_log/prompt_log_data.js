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
        open: true,
        children: [
          {
            id: "p01_prompt",
            label: "Prompt",
            open: true,
            children: [
              { id: "p01_p1", label: '"review the folder"', open: true, children: [] }
            ]
          },
          {
            id: "p01_results",
            label: "Results",
            open: true,
            children: [
              { id: "p01_r1", label: "Reviewed both mounted folders: speech_to_outline/ and wordlink/", open: true, children: [] },
              { id: "p01_r2", label: "Identified project structure: React+Vite app, standalone HTML, paul/ rules/specs, wordlink/ subfolder", open: true, children: [] },
              { id: "p01_r3", label: "Created prompt_log/ folder and prompt_log_data.js; updated paul/chat_log.txt", open: true, children: [] }
            ]
          }
        ]
      }
    ]
  }
];
