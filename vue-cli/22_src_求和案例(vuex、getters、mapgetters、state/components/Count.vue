<template>
  <div >
    <h1>当前求和为：{{sum}}</h1>
    <h3>将sum数据放大10倍：{{bigSum}}</h3>
    <h3>我在{{school}},学习{{subject}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
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
          //靠程序员自己亲自去写计算属性
			    /* sum(){
			    	return this.$store.state.sum
			    },
			    school(){
			    	return this.$store.state.school
			    },
			    subject(){
			    	return this.$store.state.subject
			    }, */

          // 借助mapState生成计算属性，从state中读取数据
          // ...分别将mapState中的对象添加到computed属性(对象写法)
          // ...mapState({total:'sum',xuexiao:'school',xueke:'subject'})

          // ...分别将mapState中的对象添加到computed属性(数组写法)
          ...mapState(['sum','school','subject']),

          // ...分别将mapGetters中的对象添加到computed属性(对象写法)
          // ...mapGetters({bigSum:'bigSum'})

          // ...分别将mapGetters中的对象添加到computed属性(数组写法)
          ...mapGetters(['bigSum'])
        },
        methods: {
          increment(){
            // this.sum += this.n
            this.$store.dispatch('jia',this.n)
          },
          decrement(){
            // this.sum -= this.n
            this.$store.dispatch('jian',this.n)
          },
          incrementOdd(){
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
          },
        },
    }
</script>

<style>
  button{
    margin-left: 5px;
    }
</style>