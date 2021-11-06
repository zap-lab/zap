module.exports = {
  presets: [
    'babel-preset-gatsby',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'transform-class-properties',
  ],
};
