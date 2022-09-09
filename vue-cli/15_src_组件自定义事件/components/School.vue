<template>
	<div class="school">
		<h2 >学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="sendSchoolName">传输学校名称</button>
	</div>
</template>

<script>
	export default {
		name:'School',
		props:['getSchoolName'],
		data() {
			return {
				name:'尚硅谷atguigu',
				address:'北京',
			}
		},
		methods:{
			sendSchoolName(){
				// console.log(this.name);
				this.getSchoolName(this.name)
			}
		}
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>