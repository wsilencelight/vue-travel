<template>
  <header class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-center">
        <span class="iconfont">&#xe632;</span>
      输入城市景点游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">{{city}}
          <span class="iconfont row-font">&#xe6aa;</span>
        </div>
      </router-link>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
// 在reset.css中已经设置过html的font-size为50px了
// @指src目录，但在css中import别的css@前要加~
// @import '../../../assets/styles/varibles.styl'
// @import '~@/assets/styles/varibles.styl'
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height $headerHeight
    background-color $bgColor
    color #ffffff
  .header-left
    width .64rem
    float left
    text-align center
    .back-icon
      text-align center
      font-size .4rem
  .header-center
    flex 1
    color #cccccc
    line-height .64rem
    height .64rem
    margin-top .12rem
    margin-left .2rem
    padding-left .2rem
    // margin-bottom .12rem
    background-color #ffffff
    border-radius .1rem
  .header-right
    float right
    width 1.24rem
    color #ffffff
    text-align center
    .row-font
      font-size .24rem
      margin-left -.06rem
</style>
