# demo-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 工程生成文件
- 一个.vue为一个局部的组件
- 每个组件都可以成为一个功能
- 重点：这种开发方式就是组件化开发，也叫做模块化开发


###  技能

    培养自己模块化开发思想
        学会合理划分组件
        实现组件的通信

### public 下的资源是静态资源 可以在浏览器中访问 http://localhost:8000/favicon.icon
    静态资源 ：服务认可的文件 可以通过服务直接进行访问 它下面的文件
### src/assets  只是一个普通的资源文件   文件目录  用户不可以通过用户直接访问 
    注意：
    localhost:8080服务会自动默认找到静态资源文件public 下的资源
    所有的组件.vue文件 都会通过new Vue()实例将 组件渲染到index.html中
    组件中引入的资源 是assets 文件下的 所以页面可以看到资源

vue-cli 前端启动了服务；可以模拟服务器；学会造假数据。我们由自己的服务===> 在 public 下面造假

### 
    父组件

    子组件

    怎么通信的
        如何将父组件中的数据传递到子组件中
        


        如何将子组件数据传递到父组件中 

        


