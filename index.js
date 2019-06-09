module.exports = {
  extends: 'airbnb-base',
  env: {
    jest: true
  },
  rules: {
    semi: ['error', 'never'],
    'max-len': 'off',
    'func-names': 'off',
    'no-param-reassign': ['error', { props: false }]
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        'alias': {
          '@': './src'
        }
      }
    }
  }
}
