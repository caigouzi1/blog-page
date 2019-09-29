
export default [
  {
    cjs: 'babel',
  },
  {
    entry: 'ui/index.js',
    umd: {
      name: 'Umi UI',
      minFile: false,
    },
  },
];
