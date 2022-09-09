// 人员管理相关配置
const personOptions = {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
            // console.log(value.name.indexOf("王"));
        }
    },
    mutations:{
        ADD_PERSON:function (state,value) {
            // console.log(value);
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[{
            id:'001',name:'张三'
        }]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
            // console.log(state);
        }
    }
}

export default personOptions