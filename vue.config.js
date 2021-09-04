const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  assetsDir: 'static',
  devServer: {
    port: 8001, // 启动端口
    open: true, // 启动后是否自动打开网页
    proxy: {
      '/my': {
        target: 'http://106.15.44.158:8080', // 后台接口域名
        // ws: true, //如果要代理 websockets，配置这个参数
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/my': '',
        },
      },
      '/zsk': {
        target: 'https://itsm2016.hundsun.com',
        changeOrigin: true,
        pathRewrite: {
          '^/zsk': '',
        },
      },
    },
  },
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
  // css: {
  //   requireModuleExtension: true,
  //   loaderOptions: {
  //     scss: {
  //       additionalData: '@import "~@/styles/variables.scss";',
  //     },
  //   },
  // },
}
