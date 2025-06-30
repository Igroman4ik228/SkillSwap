# Coding Guidelines

Правила и рекомендации по написанию кода в проекте **Skill Swap**

**[English version](./CODING_GUIDELINES.md)**

## Именование

| **Сущность**  | **Правило**           | **Пример**              |
| ------------- | --------------------- | ----------------------- |
| Папки/файлы   | camelCase             | `userCard/userCard.tsx` |
| SCSS-модули   | camelCase.module.scss | `userCard.module.scss`  |
| Компоненты    | PascalCase            | `UserCard`              |
| Классы SCSS   | camelCase             | `.userCard`             |
| Переменные    | camelCase             | `userName`              |
| Функции       | camelCase             | `getUserById`           |
| Константы     | SCREAMING_SNAKE_CASE  | `MAX_LENGTH`            |
| Хуки          | use + camelCase       | `useUserData`           |
| Redux Slice   | camelCase + Slice     | `userSlice`             |
| Redux Reducer | camelCase             | `userReducer`           |

## Стили

Структура классов должна быть максимально плоской, для меньшей специфичности. Вложенность допускается только в следующих случаях:

- модификаторы (\_error, \_active)
- псевдоклассы и псевдоэлементы (:hover, ::after)
- селекторы по тегам, если они вложены в основной класс (input, button)

## Коммиты и пулл реквесты

- Хорошее название (**Conventional Commits**) + краткое описание
- Размер Pull Request'а не должен превышать **300–350 строк кода** Если больше — **разбейте задачу** на несколько пулл реквестов

### Как сделать пулл реквест?

1. Обновите `dev` ветку

```bash
git checkout dev
git pull
```

2. Перейдите обратно в свою ветку

```bash
git checkout feature/featureName
```

3. Смержите изменения из `dev` ветки

```bash
git merge dev
```

4. Закоммитьте изменения и отправьте ветку на GitHub

```bash
git add . # или выберите нужные файлы вручную
git commit
git push origin feature/featureName
```

5. Откройте GitHub и создайте пулл реквест

**From**: feature/featureName

**Into**: dev

Укажите понятное описание и создайте
