<template>
  <div>
    <el-carousel :interval="2000"
                 type="card"
                 height="400px"
                 class="carousel">
      <el-carousel-item>
        <h3>
          <img :src="$store.state.commodity[0].c_img"
               @click="show_detail(0)">
        </h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3>
          <img :src="$store.state.commodity[11].c_img"
               @click="show_detail(11)">
        </h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3>
          <img :src="$store.state.commodity[25].c_img"
               @click="show_detail(25)">
        </h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3>
          <img :src="$store.state.commodity[37].c_img"
               @click="show_detail(37)">
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  methods: {
    show_detail (index) {
      this.$router.push({
        path: '/detail',
        query: {
          commodity: this.$store.state.commodity[index]
        }
      })
    }
  }
}
</script>

<style>
.carousel {
  width: 600px;
  margin: auto;
}
</style>
