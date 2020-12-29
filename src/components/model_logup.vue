<template>
  <div>
    <div id="page_head_left">
      <div id="login_no">
        <a v-if="$store.state.nowuser === null"
           @click="login('/login')">
          <a :class="{on:'/logup' === $route.path}">游客，请登录</a>
        </a>
        <a v-if="$store.state.nowuser !== null"
           style="text-decoration:none">你好，{{ $store.state.nowuser.username }}</a>
        <a v-if="$store.state.nowuser !== null"
           style="text-decoration:none;"
           @click="logout">[退出登录]</a>
      </div>
      <div id="sign_up">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a @click="switchTo('/logup')">
          <a :class="{on:'/logup' === $route.path}">注册</a>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login_check_flag: 1
    }
  },
  methods: {
    login (path) {
      this.$router.replace(path)
    },
    switchTo (path) {
      this.$router.replace(path)
    },
    logout () {
      this.$store.state.nowuser = null
      alert('账号已退出')
    }
  }
}
</script>

<style scoped>
#page-head_left {
  width: 500px;
  position: relative;
}
#login_no {
  /* width: 120px; */
  float: left;
}
#sign_up {
  /* width: 200px; */
  float: left;
}
</style>
