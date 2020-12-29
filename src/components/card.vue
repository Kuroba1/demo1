<template>
  <div id="card">
    <el-row>
      <el-col>
        <el-card :body-style="{ padding: '0px' }"
                 class="elcard">
          <img :src="get_url()"
               class="image"
               @click="show_detail">
          <div style="padding: 14px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span @click="show_detail">{{ commodity.c_name }}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="price">￥{{ commodity.c_price }}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <el-button type="text"
                       class="button"
                       @click="intoCar">加入购物车</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['commodity'],
  data () {
    return {
      currentDate: new Date()
    }
  },
  methods: {
    get_url () {
      // let id = parseInt(this.commodity.c_num - 1);
      // console.log(this.$store.state.commodity[id]);
      return this.commodity.c_img
    },
    intoCar () {
      if (this.$store.state.nowuser === null) {
        alert('您还未登陆，请先登陆')
      } else {
        this.commodity.c_isincar = 1
        alert('已加入购物车')
      }
    },
    show_detail () {
      // alert(this.commodity.c_num)
      this.$router.push({
        path: '/detail',
        query: {
          commodity: this.commodity
        }
      })
    }
  }

}
</script>

<style>
.button {
  padding: 0;
  float: right;
}

.image {
  width: 300px;
  height: 300px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

#card {
  float: left;
  padding-right: 10px;
  /* padding-left: 35px; */
}
.elcard {
  /* border: solid 1px green; */
  width: 300px;
  height: 350px;
  /* padding-right: 30px; */
}
.price {
  color: red;
}
</style>
