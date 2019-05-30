<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_600x330_5597540f.jpg" />
      <div class="banner-info">
        <div class="banner-title">银杏湖乐园</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe643;</span>
          18
        </div>
      </div>
    </div>
     <common-gallary :imgs="imgs" v-show="showGallary" @gallaryClick="handleBannerClick"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1511/94/94fd49f633a5eb5590.img.jpg_r_800x800_beb76153.jpg',
        'http://img1.qunarzz.com/sight/p0/1511/4a/4a9bd9cf356cad7990.img.jpg_r_800x800_0d71d97a.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = !this.showGallary
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0),rgba(0, 0, 0, .8))
      .banner-number
        height .32rem
        line-height .32rem
        margin-top .2rem
        padding 0 .4rem
        font-size .24rem
        border-radius .2rem
        background-color rgba(0, 0, 0, .6)
        .banner-icon
          font-size .24rem
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem

</style>
