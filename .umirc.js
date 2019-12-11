const Routes = require('./src/route');
const PageRoute = Routes.Routes;

export default {
  treeShaking: true,
  history: 'hash', //路由带#号
  // base: '/blog/', //服务器二级页面
  // publicPath: '/blog/', //服务器二级页面静态资源
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
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: './home' },
  //       { path: '/github', component: './github' },
  //       { path: '/article/:id', component: './article/detail' },
  //       { path: '/edit', component: './admin/article/edit' },
  //     ],
  //   },
  //   {
  //     path: '/admin',
  //     component: '../layouts/index',
  //     routes: [{ path: '/article/edit', component: './admin/article/edit' }],
  //   },
  // ],

  routes: [
    {
      path: '/admin',
      component: '../layouts/admin/index.js',
      routes: [
        { path: '/admin/login', component: './admin/login' },
        { path: '/admin/list', component: './admin/article/list' },
        { path: '/admin/article/edit', component: './admin/article/edit' },
        { path: '/admin/article/modify/:id', component: './admin/article/modify' },
      ],
    },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: './home' },
        { path: '/github', component: './github' },
        { path: '/article/:id', component: './article/detail' },
        { path: '/game/list', component: './game/list' },
      ],
    },
  ],

  proxy: {
    '/blogApi': {
      target: 'http://blog.elpsycongroo.xyz',
      changeOrigin: true,
      pathRewrite: { '^/blogApi': '/blogApi' },
    },
  },

  theme: {
    'primary-color': '#1DA57A',
  },
};
