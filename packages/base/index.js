module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsonc/prettier',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:markdown/recommended',
    'plugin:n/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:yml/standard',
    'prettier',
  ],
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],
  plugins: [
    'import',
    'markdown',
    'n',
    'prettier',
    'promise',
    'unicorn',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
      },
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': [
          'error',
          'never',
        ],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2],
        'jsonc/key-spacing': [
          'error',
          { beforeColon: false, afterColon: true },
        ],
        'jsonc/no-octal-escape': 'error',
        'jsonc/object-curly-newline': [
          'error',
          { multiline: true, consistent: true },
        ],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-property-newline': [
          'error',
          { allowMultiplePropertiesPerLine: true },
        ],
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'spaced-comment': 'off',
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'import', 'require'],
          },
        ],
      },
    },
    {
      files: ['scripts/**/*.*', 'cli.*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      // Code blocks in markdown file
      files: ['**/*.md/*.*'],
      rules: {
        'import/no-unresolved': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
  rules: {
    // region IMPORT RULES
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/named': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': [
      'error',
      { esmodule: true, commonjs: true, amd: false },
    ],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error',
    // endregion
    // region ESLINT RULES
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-promise-reject-errors': 'off',
    quotes: ['error', 'single'],
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 150,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'options', // for decorators
        ],
      },
    ],
    'no-var': 'warn',
    'object-shorthand': ['warn', 'properties'],
    'spaced-comment': [
      'error',
      'always',
      {
        line: { markers: ['*package', '!', '/', ',', '='] },
        block: {
          balanced: true,
          markers: ['*package', '!', ',', ':', '::', 'flow-include'],
          exceptions: ['*'],
        },
      },
    ],
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'always'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    'yield-star-spacing': ['error', 'both'],
    yoda: ['error', 'never'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    // endregion
// region N RULES
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-callback-literal': 'error',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/process-exit-as-throw': 'error',
// endregion
    // region YML RULES
    'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
    'yml/no-empty-document': 'off',
    // endregion
    'promise/param-names': 'error',

    'unicorn/filename-case': [
      'error',
      {
        'cases': {
          'camelCase': true,
          'pascalCase': false,
          'kebabCase': false,
        },
        'ignore': [
          /\w*\.md$/i,
          /\w*\.yml$/i,
          /\w*\.yaml$/i,
          /\w*\.json$/i,
        ],
      },
    ],
  },
};
