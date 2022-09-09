// 该文件用于创建Vuex中最为核心的store
// 因为要在创建store之前使用vue.use(vuex)，所以vuex要在index文件中应用


// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用vuex插件
Vue.use(Vuex)

// 准备actions —— 用于响应组件中的动作
const actions = {
    jia:function(context,value){
        context.commit('JIA',value)
    },
    jian:function(context,value){
        context.commit('JIAN',value)
    },
    jiaOdd:function(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait:function(context,value){
        // context.commit('JIAN',value)
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);

    }

}
// 准备mutations —— 用于操作数据(state)
const mutations = {
    JIA:function (state,value) {
        state.sum += value
    },
    JIAN:function (state,value) {
        state.sum -= value
    }

}
// 准备state —— 用于储存数据
const state = {
    sum:0,//当前的和
    school:'GDOU',
    subject:'math'
}

// 准备getter —— 用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
