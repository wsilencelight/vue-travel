<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
       <span class="iconfont back">&#xe624;</span>
    </router-link>
    <router-link tag="div" to="/"
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle">
      <div class="iconfont back">&#xe624;</div>
      <span>景点详情</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log('scroll')
      const top = document.documentElement.scrollTop
      // scrollTop就是向上滚动的像素数
      if (top > 60 && top < 140) {
        // 小于60不显示，大于60小于140有一个渐变效果，大于140完全显示
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else if (top < 60) {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    background-color rgba(0, 0, 0, .6)
    text-align center
    .back
      color #ffffff
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    background-color $bgColor
    color #ffffff
    font-size .32rem
    .back
      position absolute
      color #ffffff
      top 0
      left 0
      text-align center
      font-size .4rem
      width .64rem
</style>
