import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		// 这里放你自定义的同个store目录下的js文件
	}
})
export default store