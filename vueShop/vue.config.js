// module.exports = {
//     devServer: {//表示配置服务 配置服务本地服务 npm run serve 启动服务
//         proxy: {//配置代理服务器 让本地接口代理
//             '/api/': {
//                 target: 'http://192.168.1.155:9527/api/',//被代理服务器的地址,跨域拦截的服务器
//                 changeOrigin: true,//设置同源 驶入修改主机的头  默认为false
//                 pathRewrite: {
//                     "^/api/": '',//traget中的地址用/api代替
//                 }
//             }
//         },
//         port: 3000,
//         host: 'localhost',
//         open: true,//启动服务后是否自动打开浏览器
//         https: false,//服务是否是https的
//         headers:{
//             "Access-Contral-Allow-Origin":'*'
//         }
//     },

// }