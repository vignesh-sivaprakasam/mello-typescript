module.exports = {
  extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      // 'plugin:jest/recommended',
      'prettier',
      'plugin:prettier/recommended'
  ],

  plugins: ['react', '@typescript-eslint', 'jest'],
  parserOptions: {
        // ecmaFeatures: {
        //     jsx: true
        // },
        ecmaVersion: 2020,
        project: './tsconfig.eslint.json'
    },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': ['error', 'never']
  }
};