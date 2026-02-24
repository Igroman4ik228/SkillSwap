# 🔄 Skill Swap

> **Connect. Learn. Grow.** — Exchange skills with people around the world

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![VITE](https://img.shields.io/badge/Vite-6-yellow?style=flat&logo=vite&logoColor=white)](https://vite.dev/)
[![Redux Toolkit](https://img.shields.io/badge/ReduxToolkit-2-purple?style=flat&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![React Router](https://img.shields.io/badge/React_Router-7-red?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](./LICENSE)

**English | [Русский](./RU_README.md)**

---

## 📖 About the Project

**Skill Swap** is a modern web platform that connects people who want to exchange knowledge and skills. Whether you're a developer looking to learn design, or a designer wanting to pick up coding — Skill Swap makes it easy to find the perfect learning partner.

### ✨ Key Features

- 🎯 **Skill Matching** — Find users whose skills match your learning goals
- 🤝 **Exchange Format** — Choose between mentorship, peer learning, or collaboration
- 📚 **Knowledge Sharing** — Offer your expertise while learning something new
- 🌍 **Community Driven** — Grow together through mutual assistance

### 🎯 Mission

Empower self-development and professional growth by creating a community where knowledge flows freely between people.

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [Bun](https://bun.sh/)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd SkillSwap

# Install dependencies
npm install
```

### Development

```bash
# Start local development server
npm run dev
```

---

## 📜 Available Scripts

| Command                   | Description                                    |
| ------------------------- | ---------------------------------------------- |
| `npm run dev`             | Start local development server (Vite)          |
| `npm run build`           | Build production-ready bundle                  |
| `npm run preview`         | Preview the production build locally           |
| `npm run storybook`       | Launch Storybook for component development     |
| `npm run build-storybook` | Build Storybook as a static app                |
| `npm run lint`            | Run ESLint code quality checks                 |
| `npm run lint:fix`        | Auto-fix ESLint issues                         |
| `npm run stylelint`       | Validate SCSS styles                           |
| `npm run stylelint:fix`   | Auto-fix SCSS style issues                     |
| `npm run format`          | Format code with Prettier                      |
| `npm run check`           | Run all checks (TypeScript, ESLint, Stylelint) |

---

## 🏗️ Project Architecture

Skill Swap is built using [**Feature-Sliced Design (FSD)**](https://feature-sliced.design/) — a modern architectural methodology for scalable and maintainable frontend applications.

```
src/
├── app/           # Application initialization
├── pages/         # Page-level components
├── widgets/       # Complex UI blocks
├── features/      # User interactions & business logic
├── entities/      # Business entities (models, types)
└── shared/        # Reusable components & utilities
```

### Why FSD?

- ✅ **Scalability** — Easy to add new features without breaking existing code
- ✅ **Maintainability** — Clear boundaries between layers
- ✅ **Reusability** — Shared components across the application
- ✅ **Team-friendly** — Predictable structure for collaborative development

---

## 🛠️ Tech Stack

| Category          | Technologies                                    |
| ----------------- | ----------------------------------------------- |
| **Language**      | TypeScript                                      |
| **Framework**     | React 19                                        |
| **Build Tool**    | Vite                                            |
| **State Mgmt**    | Redux Toolkit                                   |
| **Routing**       | React Router v7                                 |
| **Styling**       | SCSS                                            |
| **Forms**         | React Hook Form + Yup                           |
| **UI Components** | Storybook                                       |
| **Code Quality**  | ESLint, Prettier, Stylelint, Husky, lint-staged |

---

## 📚 Documentation

- **[Coding Guidelines](./CODING_GUIDELINES.md)** — Code standards and best practices
- **[Storybook](http://localhost:6006)** — Component library (run `npm run storybook`)

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---

## 👥 Contact

Have questions or suggestions? Feel free to reach out!

**Built with ❤️ by the Skill Swap Team**
