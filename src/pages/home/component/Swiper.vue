<template>
  <div class="swiper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(item, index) in swiperList" :key="index">
      <img class="swiper-img" :src="item.imgUrl" :alt="item.alt" />
    </swiper-slide>
    <!-- Optional controls -->
    <!-- 用以分页，传入swiperOption -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 让轮播图可以循环
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b1847cf91a34cf95402240a3f62aad77.jpg_750x200_26ea3527.jpg',
        alt: '夫子庙'
      },
      {
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/3f47010a2312c32fff92fec3bcc99563.jpg_750x200_7ae774e5.jpg',
        alt: '海洋馆'
      },
      {
        id: '0003',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/0bb0f7431bc7c499fd724bcd9000a98d.jpg_750x200_a828e320.jpg',
        alt: '中华恐龙园'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
// 用>>>可以穿透到别的子组件
  .swiper >>> .swiper-pagination-bullet-active
    background-color #ffffff !important
  .swiper
    width 100%
    // 这样能让高度始终和宽度成比例
    overflow hidden
    height 0
    padding-bottom 26.67%
    .swiper-img
      width 100%
</style>
