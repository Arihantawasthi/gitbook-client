# Gitbook Client

**The frontend interface for the Gitbook platform** - a minimal and efficient web UI to visualize repositories, view Git stats, navigate commit histories, and inspect file changes.
This project consumes [`gitbook`](https://github.com/your-org/gitbook) backend and presents them in an intuitive, performant web experience.

---

## 📸 Overview
Gitbook Client acts as the visual layer of the Gitbook platform. It connects to a Git-aware backend and displays:
- All available Git repositories
- Global stats (total repos, commits, lines, etc.)
- Per-repo commit history and diffs
- File-level commit tracking
- and more featured planned in the roadmap

> Think of it as your own version of Github, tailored to **your own local or private Gitbook instance.**

---

## 🖥️ Tech Stack
- **React.js**
- **Tailwind CSS** for utility-first styling
- **REST API** integration with `gitbook` backend
- **Router** for navigating repos, branches, commits, etc.

---

## 🚀 Getting Started
Before running the client, make sure you have the [GitBook Backend](https://github.com/your-org/gitbook) running locally.

### 1. Clone the repo
```git clone https://github.com/Arihantawasthi/gitbook-client.git && cd gitbook-client```

### 2. Install dependencies
```npm install```

### 3. Set up environemnt variables
Create a .env file at the root of the project with the following

```VITE_API_BASE_URL=http://localhost:8000```

---

## 🧪 Development Notes
- API calls are abstracted into a single interface (/api/)
- Most components are written to be stateless and reusable
- Error states, empty states, and loading states are all handled gracefully (or at least that's the goal)

---

🤝 Contributing
This repo is currently under active development and is open for contributions.
