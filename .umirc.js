const Routes = require('./src/route');
const PageRoute = Routes.Routes;

export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'blog',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  // routes :PageRoute,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: './home' },
        { path: '/github', component: './github' },
        { path: '/article/:id', component: './article/detail' },
        { path: '/article/edit', component: './article/edit' },
      ],
    },
  ],

  proxy: {
    '/blog': {
      target: 'http://172.16.1.22:8080/blog',
      changeOrigin: true,
      pathRewrite: { '^/blog': '' },
    },
  },

  // "proxy": {
  //   "/dock": {
  //     "target": "http://172.16.1.22:80/dock",
  //     "changeOrigin": true,
  //     "pathRewrite": {"^/dock": ""}
  //   }
  // },

  theme: {
    'primary-color': '#1DA57A',
  },
};
