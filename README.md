# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

File Structure

Suggested folder structure chart

pomodoro-app/
│
├── public/
│ ├── notification.mp3
│ └── favicon.ico
│
├── src/
│
│ ├── assets/
│ │ ├── images/
│ │ └── sounds/
│ │
│ ├── components/
│ │ ├── Timer/
│ │ │ ├── Timer.jsx
│ │ │ ├── TimerDisplay.jsx
│ │ │ ├── TimerControls.jsx
│ │ │ └── Timer.module.css
│ │ │
│ │ ├── Task/
│ │ │ ├── TaskList.jsx
│ │ │ ├── TaskItem.jsx
│ │ │ └── Task.module.css
│ │ │
│ │ ├── Settings/
│ │ │ ├── SettingsModal.jsx
│ │ │ └── Settings.module.css
│ │ │
│ │ └── Layout/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ └── Layout.module.css
│ │
│ ├── context/
│ │ └── PomodoroContext.jsx
│ │
│ ├── hooks/
│ │ ├── usePomodoro.js
│ │ └── useLocalStorage.js
│ │
│ ├── utils/
│ │ ├── formatTime.js
│ │ └── notification.js
│ │
│ ├── pages/
│ │ └── Home.jsx
│ │
│ ├── App.css
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── package.json
└── vite.config.js
