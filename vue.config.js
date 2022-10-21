
module.exports = {
  configureWebpack:{
     resolve:{
      alias:{
        'assets':'@/assets',
        'commom':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
     }
  },
 chainWebpack: config => {config.resolve.symlinks(true); }
}

