<template>
	<div class="student">
		<h2 >学生姓名：{{name}}</h2>
		<h2 >学生性别：{{sex}}</h2>
		<button @click="sendStudentName">传输学生名称</button>
		<button @click="unbind">解绑atguigu事件</button>
		<button @click="death">销毁当前Student组件的实例(vc)</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		},
		methods: {
			sendStudentName(){
				// this.$emit('atguigu',this.name)
				// 如果传递多个参数
				console.log(this);
				this.$emit('atguigu',this.name,2,8,6,9)//子组件可以使用 $emit 触发父组件的自定义事件
				this.$emit('demo')
			},
			unbind(){
				this.$off('atguigu')//解绑一个自定义事件
				// this.$off(['atguigu','demo'])//解绑两个自定义事件
				// this.$off()//解绑两所有自定义事件
			},
			death(){
				this.$destroy()//销毁了当前Student组件的实例，销毁后所有student实例的自定义事件全都不奏效
			}
		},
	}
</script>

<style lang="less" scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>
