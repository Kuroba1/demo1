<template>
  <div id="login">
    <el-tabs v-model="activeName">
      <br>
      <el-tab-pane label="密码登录"
                   name="first">
        <el-input placeholder="会员名"
                  v-model="input1">
          <template slot="prepend"><i class="el-icon-user-solid"></i></template>
        </el-input>
        <br><br><br>
        <el-input placeholder="请输入密码"
                  v-model="input2"
                  show-password>
          <template slot="prepend"><i class="el-icon-lock"></i></template>
        </el-input>
        <br><br>
        <el-button class="lgbt"
                   type="primary"
                   @click="checkuser">登录</el-button>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      activeName: 'first',
      input1: '',
      input2: ''
    }
  },
  methods: {
    checkuser () {
      let i = 0
      let flag = 0

      var storage = window.localStorage
      var json = storage.getItem('user')
      var jsonObj = JSON.parse(json)
      var l = jsonObj.length

      for (i = 0; i < l; i++) {
        if (jsonObj[i].username === this.input1 && jsonObj[i].psd === this.input2) {
          flag = 1
          this.$store.state.nowuser = jsonObj[i]
          // console.log(nowuser);
          this.switchTo('/home')
          break
        } else if (this.$store.state.nowuser === null && jsonObj[i].username !== this.input1 && jsonObj[i].psd !== this.input2) {
          flag = 0
        }
      }
      if (flag === 1) {
        alert('登陆成功')
      } else if (flag === 0) {
        alert('登陆失败,请重新登陆')
      }
    },
    switchTo (path) {
      this.$router.replace(path)
    }
  }

}
</script>

<style>
#login {
  width: 1100px;
  margin: auto;
  padding-top: 50px;
}
</style>
