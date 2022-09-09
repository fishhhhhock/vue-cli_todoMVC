//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入vueRouter
import vueRouter from 'vue-router'
// 引入路由器
import router from './router'
//关闭Vue的生产提示
Vue.config.productionTip = false

// 使用vueRouter
Vue.use(vueRouter)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})