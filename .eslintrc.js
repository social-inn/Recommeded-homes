module.exports = {
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 6
  },
  rules: {
    'no-console': 'warn',
    'comma-dangle': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'no-unused-vars': [
      'warn',
      {
        'vars': 'local',
        'args': 'none'
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": 0,
    "object-curly-newline": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/jsx-one-expression-per-line": 0,
    "max-len": 0
  },
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "jest": true
  }
}
