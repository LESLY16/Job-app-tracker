# Job Application Tracker

A simple home for your job search—built to help you keep application details organized as this project grows.

> **Project status:** This repository is currently an early-stage React and Vite starter. Job-tracking features have not been implemented yet.

## About

The goal of **Job Application Tracker** is to make it easier to follow a job search in one place. The current app is the default starter screen; this README describes the project setup and how to run it locally without suggesting features that are not in the code yet.

## Tech stack

- **React 19** for the user interface
- **Vite** for local development and production builds
- **Oxlint** for linting
- **JavaScript** and **HTML**

## Getting started

### Prerequisites

Install a current version of [Node.js](https://nodejs.org/) and npm. npm is included with Node.js.

### Install and run

```bash
git clone https://github.com/LESLY16/Job-app-tracker.git
cd Job-app-tracker
npm install
npm run dev
```

Vite will print a local URL in your terminal (typically `http://localhost:5173`). Open it in your browser to view the app.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot module replacement. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Preview the production build locally. Run `npm run build` first. |
| `npm run lint` | Check the project with Oxlint. |

## Project structure

```text
Job-app-tracker/
├── public/             # Static assets
├── src/                # React application source
│   ├── App.jsx         # Main app component
│   └── main.jsx        # React entry point
├── index.html          # HTML page template
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## Contributing

Contributions and ideas are welcome. For substantial changes, open an issue first to discuss the proposal. When submitting a change, please include a clear description and run the relevant checks, such as `npm run lint` and `npm run build`.

## License

No license has been specified for this repository yet. Until one is added, all rights are reserved by the copyright holder.
