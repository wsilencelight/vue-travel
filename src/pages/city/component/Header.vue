<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <span>城市选择</span>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    position relative
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    background-color $bgColor
    color #ffffff
    font-size .32rem
    .back-icon
      position absolute
      color #ffffff
      top 0
      left 0
      text-align center
      font-size .4rem
      width .64rem
</style>
