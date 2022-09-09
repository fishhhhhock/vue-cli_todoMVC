<template>
  <div>
    <h1 v-text="msg" ref="titile"></h1>
    <button ref="btn" @click="showDOM">点我输出上方DOM元素</button>
    <school ref="sch"/>
  </div>
</template>

<script>
// 引入School组件
import School from './components/School.vue'
export default {
  name:'App',
  components:{
    School
  },
  data() {
    return {
      msg:'欢迎学习Vue'
    }
  },
  methods: {
    showDOM(){
      console.log(this.$ref.title);//真实DOM元素
      console.log(this.$ref.btn);//真实DOM元素
      console.log(this.$ref.sch);//School组件的实例对象
    }
  },
}
</script>

<style>

</style>