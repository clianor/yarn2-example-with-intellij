module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    // 'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react-hooks', '@typescript-eslint'],
  rules: {
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    // indent: [
    // 'error',
    // 2,
    // {
    // SwitchCase: 1,
    // VariableDeclarator: 1,
    // outerIIFEBody: 1,
    // FunctionDeclaration: { parameters: 1, body: 1 },
    // FunctionExpression: { parameters: 1, body: 1 },
    // CallExpression: { arguments: 1 },
    // ArrayExpression: 1,
    // ObjectExpression: 1,
    // ImportDeclaration: 1,
    // flatTernaryExpressions: false,
    // ignoredNodes: ['JSXSpreadAttribute'],
    // },
    // ],
    'arrow-body-style': 'off', // ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
    'arrow-parens': 'off', // Incompatible with prettier
    // 'no-bitwise': 'off', // airbnb use error (확인해보고 off 가 낫으면 off 시키자)
    // "no-useless-constructor": "off",
    'react/jsx-indent': ['error', 2],
    'linebreak-style': 'off', // Don't play nicely with Windows.
    // 'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }], airbnb use
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '*': 'ignore',
          '/': 'ignore',
          '-': 'ignore',
          '+': 'ignore',
          '=': 'ignore',
          '>': 'ignore',
          '<': 'ignore',
          '>=': 'ignore',
          '<=': 'ignore',
          '+=': 'ignore',
          '-=': 'ignore',
          '*=': 'ignore',
          '&&': 'ignore',
          '||': 'ignore',
          '!==': 'ignore',
          '===': 'ignore',
        },
      },
    ],
    'object-curly-newline': 'off', // airbnb 3개 까지 허용
    'no-prototype-builtins': 'off', // airbnb use error
    // 'object-curly-newline': ['error', {
    // ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
    // ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
    // ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    // ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    // }],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }], // airbnb is using .jsx
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/jsx-indent-props': ['error', 2],
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off', // airbnb use error
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off', // airbnb use error always
    'react/no-access-state-in-setstate': 'off', // airbnb use error
    'react/static-property-placement': ['error', 'static public field'], // airbnb use property assignment
    'react/jsx-props-no-spreading': 'off', // airbnb use error
    'react/jsx-fragments': ['off', 'syntax'], // airbnb use error (default error syntax)
    'react/jsx-one-expression-per-line': 'off', // airbnb use ['error', { allow: 'single-child' }],
    'react/no-multi-comp': ['off', { ignoreStateless: true }], // for hoc (airbnb use error)
    'react/no-array-index-key': 'warn',
    'react/jsx-no-target-blank': 'off', // airbnb ['error', { enforceDynamicLinks: 'always' }],

    'jsx-a11y/label-has-associated-control': 'off', // airbnb use error
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off', // airbnb use error
    'no-underscore-dangle': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 0 }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    radix: 'off', // airbnb use error (require use of the second argument for parseInt())

    // react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 2,
        // '@typescript-eslint/no-namespace': 'off',
        // TODO: 아래 rule 은 추후 진짜 off 가 좋을지 확인필요
        '@typescript-eslint/no-empty-function': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
      },
    },
    {
      files: ['**/*.test.js'],
      env: {
        jest: true, // now **/*.test.js files' env has both es6 *and* jest
      },
      // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      // "extends": ["plugin:jest/recommended"]
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.d.ts', '.ts', '.tsx'],
      },
    },
  },
};
