<template>
  <div class="icon-main">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icons">
          <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
              <img :src="item.imgUrl" :alt="item.imgText">
            </div>
            <span class="icon-desc">{{item.imgText}}</span>
          </div>
        </div>
      </swiper-slide>
      <!-- <swiper-slide>
        <div class="icon">
          <div class="icon-img">
            <img class="" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="景点门票">
          </div>
          <span class="icon-desc">景点门票</span>
        </div>
      </swiper-slide> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        // 禁止自动播放
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
//   .icons
//     overflow hidden
//     width 100%
//     height 0
//     padding-bottom 45.89%
//     background-color green
//     .icon
//       position relative
//       overflow hidden
//       float left
//       width 25%
//       padding-bottom 22.95%
//       background-color red
//       .icon-img
//         position absolute
//         top 0
//         right 0
//         left 0
//         bottom .04rem
//         background-color blue
//         img
//           height 100%
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icon-main
    overflow hidden
    width 100%
    height 0
    padding-bottom 45.89%
  .icons
    display flex
    flex-wrap wrap
    margin-top .1rem
    .icon
      position relative
      overflow hidden
      flex 0 0 25%
      padding-bottom 22.95%
      .icon-img
        overflow hidden
        text-align center
        position absolute
        top 0
        right 0
        left 0
        bottom .44rem
        img
          height 100%
      .icon-desc
        position absolute
        bottom 0
        right 0
        left 0
        height .44rem
        line-height .44rem
        color $darkTextColor
        text-align center
        //字太多的时候显示...
        ellipsis()
</style>
