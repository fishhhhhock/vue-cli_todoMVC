// 该文件用于创建Vuex中最为核心的store
// 因为要在创建store之前使用vue.use(vuex)，所以vuex要在index文件中应用


// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入求和相关配置文件
import countOptions from './Count'
// 引入人员相关配置文件
import personOptions from './Person'

// 应用vuex插件
Vue.use(Vuex)



// 创建并暴露store
export default new Vuex.Store({
    // actions,
    // mutations,
    // state,
    // getters
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})
