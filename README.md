# Job Application Tracker

A React application created with Vite. The repository currently contains the Vite/React starter screen; job application tracking features are not implemented yet.

## Project structure

```text
Job-app-tracker/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

> **Note:** `src/App.jsx` and `src/main.jsx` currently import stylesheets and image assets that are not present in the repository's `src/` directory (`App.css`, `index.css`, and files under `src/assets/`). Restore those files or update the imports before expecting the app to build successfully.

## Tech stack

- React 19
- Vite
- JavaScript and JSX
- Oxlint

## Getting started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Install dependencies

```bash
git clone https://github.com/LESLY16/Job-app-tracker.git
cd Job-app-tracker
npm install
```

### Run the development server

```bash
npm run dev
```

Vite prints a local URL in the terminal (usually `http://localhost:5173`). Open it in your browser to view the app. If the missing imported styles/assets have not been restored, Vite may report module resolution errors.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Build the app for production into `dist/`. |
| `npm run preview` | Preview a production build locally. Run `npm run build` first. |
| `npm run lint` | Run Oxlint. |

## Contributing

Contributions and ideas are welcome. For substantial changes, open an issue to discuss the proposal. Please include a clear description of your changes and run the relevant checks before submitting a pull request.

## License

No license has been specified for this repository. Until a license is added, all rights are reserved by the copyright holder.
