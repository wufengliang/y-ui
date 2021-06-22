const path = require('path');
const resolve = filePath => path.join(__dirname, './', filePath);

module.exports = {
    pages: {
        index: {
            entry: resolve('src/main.ts'),
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Vue3 - 组件示例'
        }
    },
    configureWebpack: {
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json", '.vue']
        },
    },
    chainWebpack: config => {
        config.plugins
            .delete('prefetch-index')
            .delete('preload-index');
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@packages', resolve('packages'))
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@packages/styles/global.scss";`
            }
        }
    }
}