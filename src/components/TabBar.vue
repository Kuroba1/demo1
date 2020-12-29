<template>
  <div id="page-head_right">
    <a class="head-right"
       @click="switchToHome('/home')"
       href="#">
      <a :class="{on:'/home' === $route.path}">商城首页</a>
    </a>
    <a class="head-right">丨</a>
    <a class="head-right"
       @click="switchTo('/shopcar')"
       href="#"
       style="text-decoration:none;">购物车</a>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  methods: {
    switchToHome (path) {
      this.$router.replace(path)
    },
    switchTo (path) {
      if (this.$store.state.nowuser === null) {
        alert('您还未登陆，请先登录')
      } else {
        this.$router.replace(path)
      }
    }
  }
}
</script>

<style>
.head-right {
  float: right;
}
</style>
