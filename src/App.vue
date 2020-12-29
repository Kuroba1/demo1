<template>
  <div id="app">
    <div id="tabbar">
      <TabBar></TabBar>
    </div>
    <router-view></router-view>
    <div id="page_bottom">
      <PageBottom></PageBottom>
    </div>
  </div>
</template>

<script>
import Home from './components/home.vue'
import TabBar from './components/TabBar.vue'
import PageBottom from './components/page_bottom.vue'
export default {
  components: {
    Home,
    TabBar,
    PageBottom
  }
}
</script>

<style>
#tabbar {
  position: absolute;
  right: 400px;
}
#page-bottom {
  width: 1100px;
  height: 50px;
  margin: auto;
}
</style>
