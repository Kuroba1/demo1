<template>
  <div id="shopcar">
    <h2>购物车</h2>
    <table id="tb1"
           border="0"
           table
           frame=void
           rules=none>
      <thead class="th">
        <tr>
          <th>
            <button id="bt1"
                    @click="selectall">全选</button>
          </th>
          <th></th>
          <th>商品名称</th>
          <th>商品单价</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(commodity,index) in $store.state.commodity"
            :key="index">
          <td v-if="commodity.c_isincar === 1">
            <input type="checkbox"
                   name="checkbox"
                   @change="check(index)"
                   :checked="commodity.checked">
          </td>
          <td v-if="commodity.c_isincar === 1">
            <img :src="$store.state.commodity[index].c_img"
                 class="img"
                 @click="show_detail(index)">
          </td>
          <td v-if="commodity.c_isincar === 1">{{$store.state.commodity[index].c_name}}</td>
          <td v-if="commodity.c_isincar === 1">{{$store.state.commodity[index].c_price}}</td>
          <td v-if="commodity.c_isincar === 1">
            <button @click="$store.state.commodity[index].c_quantity === 1 ? 1 : $store.state.commodity[index].c_quantity --,getTotalPrice()">-</button>
            {{ $store.state.commodity[index].c_quantity }}
            <button @click="$store.state.commodity[index].c_quantity++,getTotalPrice()">+</button>
          </td>
          <td v-if="commodity.c_isincar === 1">
            <button v-on:click="deletecommodity(index),getTotalPrice()">删除</button>
          </td>
        </tr>
      </tbody>
      <table border='0'
             table
             frame=void
             rules=none>
        <tr>
          <td>总价: {{ totalPrice }}</td>
        </tr>
        <tr>
          <td>账户余额：{{ money }}</td>
        </tr>
        <tr>
          <td>
            <button @click="pay">付款</button>
          </td>
        </tr>
      </table>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clickedItem: null,
      totalPrice: 0,
      index: 0
    }
  },
  methods: {
    check (index) {
      if (this.$store.state.commodity[index].checked === true) {
        this.$store.state.commodity[index].checked = false
      } else {
        this.$store.state.commodity[index].checked = true
      }
      this.getTotalPrice()
    },
    selectall () {
      var l = this.$store.state.commodity.length
      for (var i = 0; i < l; i++) {
        if (this.$store.state.commodity[i].c_isincar === 1) {
          this.$store.state.commodity[i].checked = true
          // console.log(this.$store.state.commodity[i].checked)
        }
        this.getTotalPrice()
      }
    },
    getTotalPrice () {
      this.totalPrice = 0
      var l = this.$store.state.commodity.length
      for (let i = 0; i < l; i++) {
        if (this.$store.state.commodity[i].checked === true) {
          this.totalPrice += parseInt(this.$store.state.commodity[i].c_price) * parseInt(this.$store.state.commodity[i].c_quantity)
        }
      }
    },
    deletecommodity (index) {
      this.$store.state.commodity[index].c_isincar = 0
      console.log(this.$store.state.commodity[index].c_isincar)
    },
    pay () {
      if (this.totalPrice !== 0) {
        if (this.totalPrice <= this.money) {
          this.money = this.money - this.totalPrice
          var l = this.$store.state.commodity.length
          for (var i = 0; i < l; i++) {
            if (this.$store.state.commodity[i].c_isincar === 1 && this.$store.state.commodity[i].checked === true) {
              this.$store.state.commodity[i].c_isincar = 0
            }
          }
          this.totalPrice = 0
          alert('购买成功!')
        } else {
          alert('余额不足！')
        }
      }
    },
    show_detail (index) {
      // alert(this.commodity.c_num)
      this.$router.push({
        path: '/detail',
        query: {
          commodity: this.$store.state.commodity[index]
        }
      })
    }

  },
  computed: {
    money () {
      let user = []
      let username = this.$store.state.nowuser.username
      user = JSON.parse(localStorage.getItem('user'))
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username) {
          return user[i].money
        }
      }
      return 0
    }
  }
}
</script>

<style>
#shopcar {
  width: 1100px;
  margin: auto;
  padding-top: 50px;
}
#tb1 {
  width: 600px;
}
.th {
  color: black;
  text-align: center;
}
.img {
  width: 60px;
  height: 60px;
}
</style>
