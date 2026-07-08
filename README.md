# Operations Cockpit Dashboard

A modern operations dashboard designed for senior operations users to review critical tasks, anomalies, and live metrics before beginning their workday.

---

# Live Demo

https://your-project.vercel.app

---

# Repository

https://github.com/yourusername/potens-intern-frontend-your-name

---

# Features

- Top 5 action items requiring attention
- Approve and Hold actions
- Automated anomaly panel
- Live ticking operational counter
- English and Hindi language toggle
- Desktop-first responsive layout
- Dark mode support
- Modern card-based interface
- Component-driven architecture

---

# Tech Stack

- React
- Vite
- Tailwind CSS v4
- React Router DOM
- React Icons
- Framer Motion

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Bhalerao-2004/potens-intern-frontend-your-name.git
cd potens-intern-frontend-your-name
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview Build

```bash
npm run preview
```

---

# Design Decisions

## Desktop First

The primary user is a senior operations manager working on a desktop screen.

## Action-Oriented Information

The dashboard prioritizes only information requiring immediate decisions.

## Progressive Information Hierarchy

1. Critical actions
2. Live metrics
3. System anomalies
4. Supporting widgets

## Reusable Components

The UI is built from reusable cards and widgets to improve maintainability.

## Centralized Translation System

All translations are managed from a single source to make future language additions simple.

---

# Accessibility

- Semantic HTML
- Keyboard accessible controls
- High color contrast
- Focus states
- Responsive typography

---

# Responsive Behaviour

### Desktop

- Full sidebar
- Multi-column dashboard

### Tablet

- Adaptive grid layout

---

# Known Issues

- Data is mocked and not connected to a backend.
- Keyboard shortcuts are not implemented.
- Dashboard state resets after refresh.
- No real-time APIs are integrated.

---

# What I Would Build Next

- Authentication
- Backend integration
- WebSocket live updates
- Export reports
- Advanced filtering
- Command palette
- Low bandwidth mode
- Persistent user preferences

---

# Trade-offs

To focus on UX and maintainability within the assignment timeline, mock data was used instead of implementing backend services.

---

# Project Structure

```text
src/
├── components/
├── pages/
├── context/
├── data/
├── hooks/
├── App.jsx
└── main.jsx
```

---

# Non-Obvious Code Comments

Only non-obvious logic is commented.

Example:

```jsx
// Counter intentionally updates every second to simulate a live operational metric.
```

```jsx
// Translation strings are centralized to simplify adding additional languages.
```

---

# Commit Philosophy

Development was intentionally split into incremental commits to demonstrate the evolution of the project rather than a single large commit.

---

# Future Architecture

Frontend
↓
REST API
↓
Database
↓
WebSocket Updates

---

# AI USE LOG

| Tool | Approximate Usage | Purpose |
|------|------------------|----------|
| ChatGPT | ~800 messages | Project planning |
| GitHub Copilot | ~20 suggestions | React and Tailwind auto-completion |
| VS Code IntelliSense | 

---

# Author
Shravani Bhalerao

Potens Frontend Internship Assignment – 2026
