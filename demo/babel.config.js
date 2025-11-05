module.exports = (api) => {
  const isDev = api.env('development');
  return {
    presets: [
      ['@babel/preset-env', { targets: 'defaults' }],
      ['@babel/preset-react', { runtime: 'automatic', development: isDev }],
      '@babel/preset-typescript'
    ]
  };
};