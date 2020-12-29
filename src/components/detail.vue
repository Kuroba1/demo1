<template>
  <div>
    <div id="page_head">
      <model-logup></model-logup>
    </div>
    <div id="detail">

      <div id="main">
        <h1>商品详情</h1>
        <div id="middle-left">
          <img :src="this.$route.query.commodity.c_img" />
        </div>
        <div id="middle-right">
          <div id="introduction">
            <p>商品名称：{{this.$route.query.commodity.c_name}}</p>
          </div>
          <div id="introduction">
            <p>品牌：{{this.$route.query.commodity.c_pride}}</p>
          </div>
          <div id="introduction">
            <p>尺寸：{{this.$route.query.commodity.c_size}}寸</p>
          </div>
          <div id="price">
            <p>价格: &nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p id="price-style">￥{{this.$route.query.commodity.c_price}}</p>
          </div>
          <div id="middle-right-bottom">
            <!-- <el-button type="danger">立即购买</el-button> -->
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-button type="danger"
                       @click="intocar"><i></i>&nbsp;&nbsp;&nbsp;&nbsp;加入购物车</el-button>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import ModelLogup from './model_logup'
export default {
  components: {
    'model-logup': ModelLogup
  },
  methods: {
    intocar () {
      if (this.$store.state.nowuser === null) {
        alert('您还未登陆，请先登陆')
      } else {
        var l = this.$route.query.commodity.c_num - 1
        this.$store.state.commodity[l].c_isincar = 1
        alert('已加入购物车')
      }
    }
  }
}
</script>

<style>
#page_head {
  width: 1100px;
  height: 28px;
  margin: auto;
}
#detail {
  width: 1100px;
  margin: auto;
  padding-top: 50px;
}
p {
  display: inline;
}
img {
  width: 350px;
  height: 400px;
}

#middle-left {
  display: inline-block;
}
#middle-right {
  height: 400px;
  width: 500px;
  display: inline-block;
  margin-left: 100px;
  position: absolute;
}
#introduction {
  width: 500px;
  height: 50px;
  font-size: 20px;
}
#price {
  height: 50px;
  background-color: lightgray;
  font-size: 30px;
  text-align: left;
}
#price-style {
  color: red;
}
#middle-right-bottom {
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 50px;
}
#main {
  width: 980px;

  margin: auto;
  margin-top: 100px;
}
</style>
