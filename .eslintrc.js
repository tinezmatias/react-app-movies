const rules = {
  OFF: 0,
  WARN: 1,
  ERROR: 2
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'jsx-a11y/label-has-associated-control': rules.OFF,
    'react/jsx-props-no-spreading': rules.OFF,
    'prettier/prettier': rules.ERROR,
    'space-before-function-paren': rules.OFF,
    'no-use-before-define': rules.OFF,
    '@typescript-eslint/camelcase': rules.OFF,
    '@typescript-eslint/explicit-function-return-type': rules.OFF,
    '@typescript-eslint/explicit-member-accessibility': rules.OFF,
    '@typescript-eslint/no-non-null-assertion': rules.OFF,
    '@typescript-eslint/array-type': rules.OFF,
    '@typescript-eslint/no-explicit-any': rules.OFF,
    '@typescript-eslint/no-empty-interface': rules.OFF,
    '@typescript-eslint/no-empty-function': rules.OFF,
    '@typescript-eslint/no-use-before-define': rules.OFF,
    '@typescript-eslint/no-object-literal-type-assertion': rules.OFF,
    'react/no-deprecated': rules.OFF,
    'react/prop-types': rules.OFF,
    'react-hooks/rules-of-hooks': rules.ERROR,
    'react-hooks/exhaustive-deps': rules.WARN,
    'prefer-spread': rules.WARN,
    'no-undef': rules.OFF,
    'no-unused-vars': rules.OFF,
    'import/no-unresolved': rules.OFF,
    'import/extensions': rules.OFF,
    '@typescript-eslint/no-unused-vars': rules.ERROR,
    'react/react-in-jsx-scope': rules.OFF,
    '@typescript-eslint/explicit-module-boundary-types': rules.OFF,
    'import/prefer-default-export': rules.OFF,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ]
  }
}
