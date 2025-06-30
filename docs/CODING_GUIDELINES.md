# Coding Guidelines

Rules and recommendations for writing code in the **Skill Swap** project

**[Русская версия](./RU_CODING_GUIDELINES.md)**

## Naming

| **Entity**    | **Rule**              | **Example**             |
| ------------- | --------------------- | ----------------------- |
| Folders/Files | camelCase             | `userCard/userCard.tsx` |
| SCSS Modules  | camelCase.module.scss | `userCard.module.scss`  |
| Components    | PascalCase            | `UserCard`              |
| SCSS Classes  | camelCase             | `.userCard`             |
| Variables     | camelCase             | `userName`              |
| Functions     | camelCase             | `getUserById`           |
| Constants     | SCREAMING_SNAKE_CASE  | `MAX_LENGTH`            |
| Hooks         | use + camelCase       | `useUserData`           |
| Redux Slice   | camelCase + Slice     | `userSlice`             |
| Redux Reducer | camelCase             | `userReducer`           |

## Styles

Class structure should be as flat as possible to reduce specificity. Nesting is allowed only in the following cases:

- Modifiers (\_error, \_active)
- Pseudo-classes and pseudo-elements (\:hover, ::after)
- Tag selectors, if they are nested inside a main class (input, button)

## Commits and Pull Requests

- Use a good name (**Conventional Commits**) + short description
- The size of a Pull Request should not exceed **300–350 lines of code**
  If it’s more — **split the task** into several pull requests

### How to make a pull request?

1. Update the `dev` branch

```bash
git checkout dev
git pull
```

2. Switch back to your branch

```bash
git checkout feature/featureName
```

3. Merge changes from `dev`

```bash
git merge dev
```

4. Commit your changes and push the branch to GitHub

```bash
git add . # or manually select the required files
git commit
git push origin feature/featureName
```

5. Open GitHub and create a pull request

**From**: feature/featureName

**Into**: dev

Provide a clear description and create the pull request.
