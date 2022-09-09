<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games" msg="hello"></slot>
  </div>
</template>

<script>
    export default {
        name :'Category',
        props:['title'],
        data(){
			    return{
			    	games:['穿越火线','王者荣耀','超级玛丽','QQ炫舞'],
			}
		}

    }
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>