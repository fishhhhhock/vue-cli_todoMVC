// 求和相关配置
export default {
    namespaced:true,
    actions:{
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
    
    },
    mutations:{
        JIA:function (state,value) {
            state.sum += value
        },
        JIAN:function (state,value) {
            state.sum -= value
        },
    
    },
    state:{
        sum:0,//当前的和
        school:'GDOU',
        subject:'math',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    
    }
}
