# vue-travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## reset.css
> 多种手机环境下的样式重置


## border.css
> 解决1像素问题

## fastclick
> 解决300毫秒响应问题

``` 
会在package.json中加上新的dependencies
npm install fastclick --save
```
## stylus/stylus-loader
```
npm install stylus/stylus-loader --save
```

## iconfont
```
www.iconfont.cn
建立自己的图标库
```

## webpack.base.configg.js
- 可以在这里面的resolve中给一个文件夹定义一个别名就像@代表src一样

## 创建一个新的分支
- git pull 将线上分支同步下来
- git checkout branchname 切换分支
- git status 查看当前分支

## 合并分支
- git checkout master 切换到主分支
- git merge origin/branchname 合并分支
- git push
## vue-awesome-swiper制作轮播图
- npm install vue-awesome-swiper@2.6.7 --save
- [网址](https://github.com/surmon-china/vue-awesome-swiper)

## vue中使用ajax(axios)
- npm install axios --save

## 使用proxy代理功能(webpack-dev-server提供的功能)
- 在config/index.js的开发环境中的proxyTable

## 同时使用localhost和ip访问
- 在package.json中在dev后加上"--host 0.0.0.0"

## better-scroll来做页面上下滚动
- npm install better-scroll --save