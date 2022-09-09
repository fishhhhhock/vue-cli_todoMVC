<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		methods:{
			demo(msgName,data){
				console.log('hello消息收到了');
			}
		},
		mounted() {
			// console.log('School',this)
			// this.$bus.$on('hello',(data)=>{
				// console.log('我是School组件，收到了数据',data)
			// })
			// 函数可以接收两个参数，一个是函数名，一个是数据
			// 直接将回调函数写在调用中(要写成箭头函数，不然会有this指向问题)
			// this.pubId = pubsub.subscribe('hello',(msgName,data)=> {
				// console.log('有人发布了hello消息，hello消息的回调执行力',msgName,data);
			// })
			// 
			// 将回调函数放在methods方法中
			this.pubId = pubsub.subscribe('hello',this.demo)
		},
		beforeDestroy() {
			// this.$bus.$off('hello')
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>