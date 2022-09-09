<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
	<!-- 如果transition指定了name属性，那么样式内的动画名字需要修改为：(name)-leave-active -->
	<!-- 添加一个appear属性，可以使得进入页面时就具有动画效果  -->
    <transition>
      <h1 v-show="isShow">你好</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style  scoped>
h1 {
  background-color: orange;
}

.v-enter-active {
  animation: trans 1s;
}

.v-leave-active {
  animation: trans 1s reverse;
}

@keyframes trans {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
