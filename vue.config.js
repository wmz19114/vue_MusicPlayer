// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//         transpileDependencies: true
//     })
module.exports = {
    //代理跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'https://c.y.qq.com/',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                },
            }
        }
    }
}