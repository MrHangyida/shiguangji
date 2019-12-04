module.exports = {
    lintOnSave: false,
    publicPath: './',

    devServer: {
        // 修改配置需要重启服务
        // 配置完代理后  请求地址 /api 代替后端接口地址
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000', // 后端服务器地址
                changeOrigin: true, // 允许跨域
                secure: false, //  是否允许https
                pathRewrite: {
                    // '^/api': '/api'   //http://127.0.0.1:5000/api/login
                    '^/api': 'http://127.0.0.1:5000/login'
                }
            }
        }
    },

    // rules: {
    //   {
    //     test: /\.styl(us)?$/,
    //     use: [
    //     'vue-style-loader',
    //     'css-loader',
    //     'stylus-loader'
    //     ]
    //   }
    // }

}