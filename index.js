module.exports = {
  parser: 'babel-eslint',
  root: true,
  env: {
    browser: true,
  },
  plugins: [
    'react-hooks',
  ],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'operator-linebreak': ['error', 'after'],
    'space-before-function-paren': ['error', 'never'],
    'react/prop-types': [1, {skipUndeclared: true}],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  extends: [
    'standard',
    'standard-react',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
};
