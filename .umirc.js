const Routes = require('./src/route')
const PageRoute = Routes.Routes


export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
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
    }],
  ],
  // routes :PageRoute,
  routes: [
    {
      path: '/', component: '../layouts/index',
      routes: [
        { path: '/', component: './home' },
        { path: '/github', component: './github' },
      ],
    }
  ]
}