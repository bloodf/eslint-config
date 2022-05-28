# @bloodf/eslint-config

Eslint configuration for:
- JavaScript
- Typescript
- Nuxt 3
- Nuxt 2
- Vue 3
- Vue 2


For this eslint config package, we enable the following community standards:
- AirBnb
- Prettier

This configuration provides eslint rules for the following:
- TypeScript
- Vue
- Nuxt
- JSON
- YAML / YML
- Markdown

## Usage

### Base Config
[![npm](https://img.shields.io/npm/v/@bloodf/eslint-config-base?color=a1b858&label=)](https://npmjs.com/package/@bloodf/eslint-config-base)
#### Install
```bash
pnpm add -D eslint @bloodf/eslint-config-base
```

#### Config `.eslintrc`
```json
{
  "extends": "@bloodf/eslint-config-base"
}
```

### TypeScript Config
[![npm](https://img.shields.io/npm/v/@bloodf/eslint-config-ts?color=a1b858&label=)](https://npmjs.com/package/@bloodf/eslint-config-ts)
#### Install
```bash
pnpm add -D eslint @bloodf/eslint-config-ts
```

#### Config `.eslintrc`
```json
{
  "extends": "@bloodf/eslint-config-ts"
}
```

### Nuxt 3 Config
[![npm](https://img.shields.io/npm/v/@bloodf/eslint-config-nuxt?color=a1b858&label=)](https://npmjs.com/package/@bloodf/eslint-config-nuxt)
#### Install
```bash
pnpm add -D eslint @bloodf/eslint-config-nuxt
```

#### Config `.eslintrc`
```json
{
  "extends": "@bloodf/eslint-config-nuxt"
}
```

### Nuxt 2 Config
[![npm](https://img.shields.io/npm/v/@bloodf/eslint-config-nuxt2?color=a1b858&label=)](https://npmjs.com/package/@bloodf/eslint-config-nuxt2)
#### Install
```bash
pnpm add -D eslint @bloodf/eslint-config-nuxt2
```

#### Config `.eslintrc`
```json
{
  "extends": "@bloodf/eslint-config-nuxt2"
}
```

### Vue 3 Config
[![npm](https://img.shields.io/npm/v/@bloodf/eslint-config-vue?color=a1b858&label=)](https://npmjs.com/package/@bloodf/eslint-config-vue)
#### Install
```bash
pnpm add -D eslint @bloodf/eslint-config-vue
```

#### Config `.eslintrc`
```json
{
  "extends": "@bloodf/eslint-config-vue"
}
```

### Vue 2 Config
[![npm](https://img.shields.io/npm/v/@bloodf/eslint-config-vue2?color=a1b858&label=)](https://npmjs.com/package/@bloodf/eslint-config-vue2)
#### Install

```bash
pnpm add -D eslint @bloodf/eslint-config-vue2
```

#### Config `.eslintrc`
```json
{
  "extends": "@bloodf/eslint-config-vue2"
}
```

### Config VS Code auto fix

Update your `.vscode/settings.json` and add the following

```json
{
  "prettier.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

MIT
