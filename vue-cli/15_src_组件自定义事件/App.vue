<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法：使用@或v-on绑定) -->
    <Student v-on:atguigu="getStudentName"  @demo="m1"/>
    <!-- <Student @atguigu="getStudentName"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法：使用ref) -->
    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
	import Student from "./components/Student";
	import School from "./components/School";

	export default {
	  name: "App",
	  components: { School, Student },
	  data() {
	    return {
	      msg: "你好啊！",
	    };
	  },
	  methods: {
	    getSchoolName(name) {
	      console.log("App收到了学校名：", name);
	    },
	    // 传递一个参数
	    // getStudentName(name){
	    // console.log('App收到了学生名：',name);
	    // },
	    // 传递多个参数
	    getStudentName(name,...params){
	    	console.log('App收到了学生名：',name,params);
	    },

	    // mounted() {
	    //   this.$refs.Student.$on("atguigu", this.getStudentName);//绑定自定义事件
	    //   this.$refs.Student.$once("atguigu", this.getStudentName);//绑定自定义事件，只执行一次
	    // },
		m1(){
			console.log('demo事件被触发');
		}
	  },
	};
</script>

<style scoped>
	.app {
	  background-color: gray;
	  padding: 5px;
	}
</style>
