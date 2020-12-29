<template>
  <el-tabs v-model="activeName"
           @tab-click="handleClick"
           id="tabs">
    <el-tab-pane label="全部"
                 name="first">
      <div id="card">
        <card v-for="(item, index) in goodsList"
              :commodity=item
              :key="index"></card>
      </div>
    </el-tab-pane>
    <el-tab-pane label="iPhone"
                 name="second">
      <div>
        <card v-for="(item, index) in goodsList"
              :commodity=item
              :key="index"></card>
      </div>
    </el-tab-pane>
    <el-tab-pane label="华为"
                 name="third">
      <div>
        <card v-for="(item, index) in goodsList"
              :commodity=item
              :key="index"></card>
      </div>
    </el-tab-pane>
    <el-tab-pane label="小米"
                 name="fourth">
      <div>
        <card v-for="(item, index) in goodsList"
              :commodity=item
              :key="index"></card>
      </div>
    </el-tab-pane>
    <el-tab-pane label="OPPO"
                 name="fifth">
      <div>
        <card v-for="(item, index) in goodsList"
              :commodity=item
              :key="index"></card>
      </div>
    </el-tab-pane>
    <el-tab-pane label="vivo"
                 name="sixth">
      <div>
        <card v-for="(item, index) in goodsList"
              :commodity=item
              :key="index"></card>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import card from './card'
export default {
  components: {
    'card': card
  },
  data () {
    return {
      activeName: 'first',
      goodsList: [],
      all: 0
    }
  },
  mounted () {
    // this.getGoods(4)
    this.getAll()
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event);
      if (parseInt(tab.index) > 0) {
        this.getCommodity(parseInt(tab.index))
        // console.log(parseInt(tab.index))
        this.all = parseInt(tab.index)
        // console.log(this.all)
      } else if (parseInt(tab.index) === 0) {
        // console.log(parseInt(tab.index))
        this.all = 0
        // console.log(this.all)
        this.getAll()
      }
    },
    getCommodity (index) {
      let goodsList = []
      // goodsList = this.$store.state.commodity.filter(item => {
      //   return item.c_pride_id === index
      // })
      var l = this.$store.state.commodity.length
      for (let i = 0; i < l; i++) {
        if (this.$store.state.commodity[i].c_pride_id === index) {
          goodsList.push(this.$store.state.commodity[i])
        }
      }
      this.goodsList = goodsList
    },
    getAll () {
      if (this.all === 0) {
        let goodsList = []
        goodsList = this.$store.state.commodity
        this.goodsList = goodsList
        // console.log(this.goodsList)
        for (let i = 0; i < goodsList.length; i++) {
          var item = goodsList[i]
          return item.c_pride_id
        }
      }
    }
  }
}
</script>

<style>
#tabs {
  width: 940px;
  margin: auto;
}
</style>
