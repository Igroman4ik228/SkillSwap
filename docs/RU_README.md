# 🔄 Skill Swap

> **Connect. Learn. Grow.** — Обменивайтесь навыками с людьми по всему миру

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![VITE](https://img.shields.io/badge/Vite-6-yellow?style=flat&logo=vite&logoColor=white)](https://vite.dev/)
[![Redux Toolkit](https://img.shields.io/badge/ReduxToolkit-2-purple?style=flat&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![React Router](https://img.shields.io/badge/React_Router-7-red?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](./LICENSE)

**[English](./README.md) | Русский**

---

## 📖 О проекте

**Skill Swap** — это современная веб-платформа для обмена знаниями и навыками между пользователями. Хотите изучить новый навык? Предложите свои умения взамен! Skill Swap помогает найти идеального партнёра для обучения в формате менторства или совместной работы.

### ✨ Ключевые возможности

- 🎯 **Подбор навыков** — Найдите пользователей, чьи навыки соответствуют вашим целям обучения
- 🤝 **Формат обмена** — Выберите менторство, взаимное обучение или совместную работу
- 📚 **Обмен знаниями** — Делитесь своей экспертизой, изучая что-то новое
- 🌍 **Сообщество** — Развивайтесь вместе через взаимопомощь

### 🎯 Миссия

Способствовать саморазвитию и профессиональному росту, создавая сообщество, где знания свободно циркулируют между людьми.

---

## 🚀 Быстрый старт

### Требования

- [Node.js](https://nodejs.org/) (v18 или выше)
- [npm](https://www.npmjs.com/) или [Bun](https://bun.sh/)

### Установка

```bash
# Клонируйте репозиторий
git clone <repository-url>
cd SkillSwap

# Установите зависимости
npm install
```

### Разработка

```bash
# Запустить локальный сервер разработки
npm run dev
```

---

## 📜 Доступные скрипты

| Команда                   | Описание                                             |
| ------------------------- | ---------------------------------------------------- |
| `npm run dev`             | Запустить локальный сервер разработки (Vite)         |
| `npm run build`           | Собрать продакшн-версию проекта                      |
| `npm run preview`         | Предпросмотр собранного проекта локально             |
| `npm run storybook`       | Запустить Storybook для разработки компонентов       |
| `npm run build-storybook` | Собрать Storybook как статическое приложение         |
| `npm run lint`            | Проверка кода через ESLint                           |
| `npm run lint:fix`        | Автоматическое исправление ошибок ESLint             |
| `npm run stylelint`       | Проверка SCSS-стилей                                 |
| `npm run stylelint:fix`   | Автоматическое исправление ошибок SCSS               |
| `npm run format`          | Форматирование кода через Prettier                   |
| `npm run check`           | Запуск всех проверок (TypeScript, ESLint, Stylelint) |

---

## 🏗️ Архитектура проекта

Skill Swap построен на основе [**Feature-Sliced Design (FSD)**](https://feature-sliced.design/ru) — современной методологии архитектуры для масштабируемых и поддерживаемых фронтенд-приложений.

```
src/
├── app/           # Иницииализация приложения
├── pages/         # Страницы приложения
├── widgets/       # Сложные UI-блоки
├── features/      # Пользовательские сценарии и бизнес-логика
├── entities/      # Бизнес-сущности (модели, типы)
└── shared/        # Переиспользуемые компоненты и утилиты
```

### Преимущества FSD

- ✅ **Масштабируемость** — Легко добавлять новые функции без поломки существующего кода
- ✅ **Поддерживаемость** — Чёткие границы между слоями
- ✅ **Переиспользование** — Общие компоненты по всему приложению
- ✅ **Удобство для команды** — Предсказуемая структура для совместной разработки

---

## 🛠️ Технологический стек

| Категория                 | Технологии                                      |
| ------------------------- | ----------------------------------------------- |
| **Язык**                  | TypeScript                                      |
| **Фреймворк**             | React 19                                        |
| **Сборка**                | Vite                                            |
| **Управление состоянием** | Redux Toolkit                                   |
| **Роутинг**               | React Router v7                                 |
| **Стилизация**            | SCSS                                            |
| **Формы**                 | React Hook Form + Yup                           |
| **UI-компоненты**         | Storybook                                       |
| **Качество кода**         | ESLint, Prettier, Stylelint, Husky, lint-staged |

---

## 📚 Документация

- **[Правила кода](./RU_CODING_GUIDELINES.md)** — Стандарты и лучшие практики написания кода
- **[Storybook](http://localhost:6006)** — Библиотека компонентов (запустите `npm run storybook`)

---

## 🤝 Вклад в проект

Мы приветствуем ваши contributions! Следуйте этим шагам:

1. Форкните репозиторий
2. Создайте ветку для фичи (`git checkout -b feature/amazing-feature`)
3. Закоммитьте изменения, используя [Conventional Commits](https://www.conventionalcommits.org/)
4. Запушьте ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

---

## 📄 Лицензия

Этот проект лицензирован по лицензии MIT — подробности в файле [LICENSE](./LICENSE).

---

## 👥 Контакты

Есть вопросы или предложения? Свяжитесь с нами!

**Сделано с ❤️ командой Skill Swap**
