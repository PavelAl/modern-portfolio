import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import stylistic from '@stylistic/eslint-plugin'
import stylisticJsx from '@stylistic/eslint-plugin'
import stylisticJs from '@stylistic/eslint-plugin'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended, 
      ...tseslint.configs.recommended,
      prettierConfig
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': prettierPlugin,
      'import': importPlugin,
      '@stylistic': stylistic,
      '@stylistic/jsx': stylisticJsx,
      '@stylistic/js': stylisticJs
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // 'react-refresh/only-export-components': [
      //   'warn',
      //   { allowConstantExport: true },
      // ],
      'prettier/prettier': 'error',
      '@typescript-eslint/comma-dangle': 'off',
      '@stylistic/indent': ['error', 2],

      '@stylistic/jsx/jsx-newline': ['error', { prevent: false, }],
      '@stylistic/jsx/react-in-jsx-scope': 'off',

      'dot-notation': ['error', { 
        allowKeywords: true,
        allowPattern: '^[a-z]+(-[a-z]+)+$' // Allow kebab-case properties to use bracket notation
      }],

      'import/no-duplicates': 'error',
      'import/extensions': 'off',
      'import/order': ['error', {
          'newlines-between': 'always',
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
          pathGroups: [
            {
              pattern: '~/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: './*.styles.module.scss',
              group: 'sibling',
              position: 'after',
            }
          ]
      }],
        '@stylistic/js/padding-line-between-statements': [
          'error', 
          { blankLine: "always", prev: "*", next: "return" },
          { blankLine: "always", prev: "import", next: "expression" },
          { blankLine: "always", prev: "import", next: "const" },
          { blankLine: "always", prev: "import", next: "let" },
          { blankLine: "always", prev: "import", next: "var" },
          { blankLine: "always", prev: "import", next: "function" },
          { blankLine: "always", prev: "import", next: "class" },
          { blankLine: "always", prev: "import", next: "export" }
        ],
        'no-useless-rename': ['error'],
        'object-shorthand': ['error', 'always'],
    },
  },
)
