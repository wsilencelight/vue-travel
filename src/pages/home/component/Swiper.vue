<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="showSwiper">
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
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 让轮播图可以循环
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      // 解决因为一开始是空数组渲染的幻灯片导致最后出现的时候最后一张图片现显示
      return this.swiperList.length
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
