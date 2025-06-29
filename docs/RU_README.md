# Skill Swap

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![VITE](https://img.shields.io/badge/Vite-7-yellow?style=flat&logo=vite&logoColor=white)](https://vite.dev/)
[![RTK](https://img.shields.io/badge/ReduxToolkit-2-purple?style=flat&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)

**[English version](./README.md)**

## О проекте

**Skill Swap** — это веб-приложение для обмена навыками между пользователями. Пользователи могут предлагать свои умения и находить людей, готовых обменяться знаниями в формате менторства или совместной работы. Проект ориентирован на саморазвитие и профессиональный рост через взаимопомощь.

**[Правила кода на проекте](./RU_CODING_GUIDELINES.md)**

## Скрипты

Перед запуском проекта необходимо установить все зависимости `npm install`

Используйте команды в формате `npm run <название_скрипта>`

| Скрипт            | Описание                               |
| ----------------- | -------------------------------------- |
| `dev`             | Запустить локальный сервер разработки  |
| `build`           | Сборка проекта                         |
| `preview`         | Предпросмотр собранного проекта        |
| `storybook`       | Запустить Storybook                    |
| `build-storybook` | Сборка Storybook                       |
| `lint`            | Проверка кода с помощью ESLint         |
| `lint:fix`        | Автоисправление ошибок ESLint          |
| `stylelint`       | Проверка стилей SCSS                   |
| `stylelint:fix`   | Автоисправление ошибок SCSS            |
| `format`          | Форматирование кода с помощью Prettier |
| `check`           | Запуск всех проверок и автоисправлений |

## Структура проекта

Проект построен по [Feature-Sliced Design (FSD)](https://feature-sliced.design/ru). Это архитектурный подход, направленный на масштабируемость и удобство поддержки фронтенд-приложений.
