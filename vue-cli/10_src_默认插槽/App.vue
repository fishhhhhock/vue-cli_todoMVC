<template>
    <div class="container">
		<Category title="美食"  >
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
		</Category>
		<Category title="游戏"  >
			<ul>
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
		</Category>
		<Category title="电影"  >
			<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
		</Category>
	</div>

</template>

<script>
import Category from './components/Category.vue'
	export default {
  		components: { Category },
		name:'App',
		data(){
			return{
				foods:['火锅','烧烤','炸鸡'],
				games:['穿越火线','王者荣耀','超级玛丽','QQ炫舞'],
				films:['《哈利波特》','《反恐精英》','《拆弹专家》','《教父》','《你好，李焕英》']
			}
		}
	}
</script>

<style >
	.container{
		display: flex;
		justify-content: space-around;
	}
</style>

