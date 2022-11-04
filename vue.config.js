const {defineConfig} = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: path.resolve(__dirname, "./dist"),
    devServer: {
        proxy: 'http://localhost:80'
    },
    lintOnSave: process.env.NODE_ENV !== 'production'
})
