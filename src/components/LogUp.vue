<template>
  <div id="logup">
    <el-form :model="Form"
             status-icon
             ref="Form"
             label-width="100px">
      <el-form-item label="用户名"
                    prop="username">
        <el-input v-model="Form.username"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="pass">
        <el-input type="password"
                  v-model="Form.pass"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码"
                    prop="checkPass">
        <el-input type="password"
                  v-model="Form.checkPass"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="联系电话"
                    prop="phone_number">
        <el-input v-model="Form.phone_number"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="check">提交</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
var storage = window.localStorage
var x = [{
  name: '',
  psd: '',
  money: 0
}]
var data = JSON.stringify(x)
storage.setItem('user', data)
export default {
  data () {
    return {
      Form: {
        username: '',
        pass: '',
        checkPass: '',
        phone_number: ''
      }
    }
  },
  methods: {
    check () {
      if (this.Form.pass !== this.Form.checkPass) {
        alert('两次密码不一致，请重新输入')
        this.reset()
      } else if (this.Form.username === '' || this.Form.pass === '' || this.Form.checkPass === '' || this.Form.phone_number === '') {
        alert('输入框不能为空')
        this.reset()
      } else if (this.checkname() === 0) {
        alert('该用户已存在，请重新输入')
        this.reset()
      } else {
        alert('注册成功')
        this.submit()
      }
    },
    checkname () {
      // var storage = window.localStorage
      // var a = [{
      //   name: '',
      //   psd: '',
      //   money: 10000
      // }]
      // var d = JSON.stringify(a)
      // storage.setItem('user', d)
      // var a = []
      // var d = JSON.stringify(a)
      // storage.setItem('user', d)

      var aaa = storage.getItem('user')
      var user = JSON.parse(aaa)
      var l = user.length
      var i = 0
      var flag = 1
      for (i = 0; i < l; i++) {
        if (user[i].username === this.Form.username) {
          flag = 0
          break
        }
      }
      if (flag === 0) {
        return 0
      }
    },
    submit () {
      var storage = window.localStorage
      var aaa = storage.getItem('user')
      var user = JSON.parse(aaa)
      var a = {
        username: this.Form.username,
        psd: this.Form.pass,
        money: 10000
      }
      user.push(a)
      console.log(user)

      var d = JSON.stringify(user)
      storage.setItem('user', d)
      this.switchTo('/home')
    },
    switchTo (path) {
      this.$router.replace(path)
    },
    reset () {
      this.Form.username = ''
      this.Form.pass = ''
      this.Form.checkPass = ''
      this.Form.phone_number = ''
    }
  }
}
</script>

<style>
#logup {
  width: 1100px;
  margin: auto;
  padding-top: 50px;
}
</style>
