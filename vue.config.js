module.exports = {
    //代理跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'https://netease-cloud-music-api-lime-rho.vercel.app/',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                },
            }
        }
    }
}