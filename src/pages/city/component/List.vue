<template>
  <div class="list" ref="warpper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">南京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="childItem of item" :key="childItem.id">
          <div class="item border-bottom">{{childItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.warpper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  // 改变1像素边框默认颜色
  .border-topbottom
    &:before
      border-color #cccccc
    &:after
      border-color #cccccc
  .border-bottom
    &:before
      border-color #cccccc
  .list
    // 这里用绝对定位的方法让页面无法滚动，用bottom 0来限定高度，配合overflow hidden就能让页面无法滚动
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      line-height .54rem
      font-size .26rem
      background-color #eeeeee
      color #666
      padding-left .2rem
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        width 33.33%
        float left
        .button
          margin .1rem
          border .02rem solid #cccccc
          padding .1rem 0
          text-align center
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
