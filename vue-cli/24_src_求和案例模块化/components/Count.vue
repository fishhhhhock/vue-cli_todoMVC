<template>
  <div >
    <h1>当前求和为：{{sum}}</h1>
    <h3>Person组件的人员总数为：{{personList.length}}</h3>
    <h3>将sum数据放大10倍：{{bigSum}}</h3>
    <h3>我在{{school}},学习{{subject}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
    export default {
        name :'Count',
        data() {
          return {
            n:1,//选择器中的数字
          }
        },
        // mounted(){
          // console.log(this.$store);
        // },
        computed:{
          ...mapState('countAbout',['sum','school','subject']),
          ...mapState('personAbout',['personList']),





          ...mapGetters('countAbout',['bigSum'])
        },
        methods: {
        /*  increment(){
            // this.sum += this.n
            this.$store.dispatch('jia',this.n)
          },
          decrement(){
            // this.sum -= this.n
            this.$store.dispatch('jian',this.n)
          },
        */
          /********************************************** */
          // 借助mapMutations生成对应的方法，方法中会调用commit联系mapMutations(对象写法)
          ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),


          // 借助mapMutations生成对应的方法，方法中会调用commit联系mapMutations(数组写法)
          // 需要函数名和调用的函数名一直才可以调用

          /********************************************** */
         /* incrementOdd(){
            // if(this.sum % 2){
              // this.sum += this.n
            // if(this.$store.state.sum % 2){
              // this.$store.dispatch('jia',this.n)
            // }
            this.$store.dispatch('jiaOdd',this.n)
          },
          incrementWait(){
            // setTimeout(() => {
              // this.sum += this.n
                // this.$store.dispatch('jia',this.n)
            // }, 500);
            this.$store.dispatch('jiaWait',this.n)
          },*/

          // 借助mapActions生成对应的方法，方法中会调用dispatch联系actions(对象写法)
          ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
        },
    }
</script>

<style>
  button{
    margin-left: 5px;
    }
</style>