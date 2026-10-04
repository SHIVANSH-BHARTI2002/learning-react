# learning-react

repo to store practice file of react

## Hello World React apps

This repo contains two Hello World React apps:

### 1. `hello-world/` — zero-build (CDN)

A single `index.html` that loads React, ReactDOM, and Babel from a CDN. No
`npm install` or build step needed. Just open it in a browser, or serve it:

```bash
cd hello-world
python3 -m http.server 8000
# then open http://localhost:8000
```

> Needs internet access the first time so the browser can fetch React from the CDN.

### 2. `vite-hello-world/` — standard Vite project

The recommended setup for real development.

```bash
cd vite-hello-world
npm install
npm run dev
# then open the URL Vite prints (usually http://localhost:5173)
```
