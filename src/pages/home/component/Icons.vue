<template>
  <div class="icon-main">
    <swiper>
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
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        imgText: '景点门票'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        imgText: '一日游'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        imgText: '文化古迹'
      },
      {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
        imgText: '牛首山'
      },
      {
        id: '0005',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/94f7f5bf7b0f4d238dd68d718f102f40.png',
        imgText: '中山陵'
      },
      {
        id: '0006',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png',
        imgText: '红山森林动物园'
      },
      {
        id: '0007',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f6dda1876c5950d83cc159c8fd522943.png',
        imgText: '总统府'
      },
      {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        imgText: '银杏湖乐园'
      },
      {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        imgText: '大报恩寺'
      },
      {
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        imgText: '南京海底世界'
      }]
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
