module.exports = {
  extends: 'airbnb-base',
  env: {
    jest: true
  },
  rules: {
    semi: ['error', 'never'],
    'max-len': 'off',
    'func-names': 'off'
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
}
