<template>
  <div>
    <div id="page_head">
      <model-logup></model-logup>
    </div>
    <div id="search">
      <div class="col-lg-6">
        <div class="input-group">
          <input type="text"
                 class="form-control">
          <span class="input-group-btn">
            <button class="btn btn-default"
                    type="button">搜索</button>
          </span>
        </div>
      </div>
    </div>
    <recommend></recommend>
    <div id="daohanglan">
      <navigation></navigation>
    </div>

  </div>
</template>

<script>
import ModelLogup from './model_logup'
import navigation from './Navigation'
import recommend from './recommend'

export default {
  components: {

    'model-logup': ModelLogup,
    'navigation': navigation,
    'recommend': recommend
  }
  // mounted: {
  //   create () {
  //     var storage = window.localStorage
  //     var user = {
  //       name: 'aaa',
  //       psd: 'aaa',
  //       money: 10000
  //     }
  //     var d = JSON.stringify(user)
  //     storage.setItem('user', d)
  //   }

  // }
}

</script>

<style>
#page_head {
  width: 1100px;
  height: 28px;
  margin: auto;
}

#daohanglan {
  width: 800px;
  margin: auto;
}
#search {
  width: 1100px;
  height: 60px;
  margin: auto;
  text-align: center;
}
#search_input {
  width: 500px;
  height: 50px;
}
.col-lg-6 {
  width: 1100px;
}
.input-group {
  margin: auto;
  width: 800px;
}
</style>
