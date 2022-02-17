module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changOrigin: true,
        pathRewrite: {
          '^/api': '' // 思路是如果是开发环境，就给所有要代理的接口统一加上前缀，然后代理请求时再统一通过rewrite去掉
        }
      }
    }
  }
}
