import App from './App'
import store from 'store/index.js'
// import axios from 'axios'

// #ifndef VUE3
import Vue from 'vue'

// 挂载全局组件
// 等待大家...

// 挂载全局异步请求方法
// 法一： 缺点，每次添加新变量就必须手动添加
// import {$http, $get, $post} from 'utils/require.js'
// Vue.prototype.$http = $http
// Vue.prototype.$get = $get
// Vue.prototype.$post = $post
import common from "utils/onlyOneClick.js"
Vue.prototype.$onlyOneClick = common.onlyOneClick;
// 法二： 通过遍历的形式自动添加新增的变量
// import * as request form 'utils/require.js'
// for(let key in request){
// 	Vue.prototype[key] = request[key]
// }



Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
// console.log("mainjsapp:",app)
app.$mount()
// #endif

// #ifdef VUE3
// import { createSSRApp } from 'vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// #endif