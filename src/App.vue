<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/base/header.vue'
export default {
  name: 'app',
  components: {
    'v-header': header
  }
}
</script>
<style lang="stylus">
#app
  width: 100%
  height: 100%
  .tab
    display: flex
    text-align : center
    .tab-item
      flex: 1
      & > a
        display: block
</style>
