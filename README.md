# Teencode-Vue
《基于STEAM教育理念的少儿编程教育平台》前端项目仓库

#### 一、项目目录结构
components 存放公共组件

pages 存放自定义的vue单页面，注意每个单页面都有自己的专属同名文件夹

static 静态资源，可存放图片，注意新建一个文件夹来统一存放某个单页面的所有图片（比如底部标签栏的tab文件夹）

store vuex的配置

unpackage 存放项目运行时自动打包的文件

utils 此处是Promise的封装

wxcomponents vant的小程序UI组件库(因为uniapp的组件标签靠近小程序规范，所以采用了它)

colorui 另一个UI组件库，和vant一起搭配使用（内部的flex布局、聊天等功能对我们很友好）

APP.vue 项目的根组件,所有的页面都是在App.vue下进形切换的,是页面入口件,可以调用应用的生命周期函数

main.js 项目入口,主要作用是初始化vue实例并使用需要的插件

uni.scss 文件的用途是为了方便整体控制应用的风格。比如按钮的颜色,边框风格,uni-scss文件预置了一批scss变量预置。

pages.json 对uni-app进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar等

manifest.json 是应用的配置文件，用于指定应用的名称、图标、权限等。HBuilderX创建的工程此文件在根目录CLI创建的工程此文件在src目录

### 二、项目颜色规范

<strong>字体颜色</strong> #353535

<strong>页面背景色</strong> #F4F3F0

<strong>主色调蓝色</strong>  #4678FA

<strong>主色调辅色淡蓝色</strong> #E1F0FF

<strong>辅色橘色</strong> #FBC61E

<strong>辅色红色</strong> #FF675A

<strong>辅色淡红色</strong> #FFE6E6

<strong>辅色绿色</strong> #40C78E
