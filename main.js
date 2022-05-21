import App from './App'
import store from 'store/index.js'
import axios from 'utils/axios.js'
// import axios1 from 'axios'

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
Vue.prototype.$axios = axios;

// 法二： 通过遍历的形式自动添加新增的变量
// import * as request form 'utils/require.js'
// for(let key in request){
// 	Vue.prototype[key] = request[key]
// }


// 在main.js中放入这段自定义适配器的代码，就可以实现uniapp的app和小程序开发中能使用axios进行跨域网络请求，并支持携带cookie
axios.defaults.adapter = function(config) { 
    return new Promise((resolve, reject) => {
        console.log(config)
        var settle = require('axios/lib/core/settle');
        var buildURL = require('axios/lib/helpers/buildURL');
        uni.request({
            method: config.method.toUpperCase(),
            url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
            header: config.headers,
            data: config.data,
            dataType: config.dataType,
            responseType: config.responseType,
            sslVerify: config.sslVerify,
            complete: function complete(response) {
                console.log("执行完成：",response)
                response = {
                    data: response.data,
                    status: response.statusCode,
                    errMsg: response.errMsg,
                    header: response.header,
                    config: config
                };

                settle(resolve, reject, response);
            }
        })
    })
}



Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store,
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