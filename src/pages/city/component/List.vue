<template>
  <div class="list" ref="warpper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="childItem of item" :key="childItem.id" @click="handleCityClick(childItem.name)">
          <div class="item border-bottom">{{childItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    // 这里不加click: true手机上点击会有问题
    this.scroll = new Bscroll(this.$refs.warpper, {click: true})
  },
  watch: {
    letter () {
      if (this.letter) {
        // v-for循环出来导致得到的其实是一个数组，不是标准dom元素,可以用[0]
        const element = this.$refs[this.letter][0]
        // 滚到某个元素
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      // 用dispath向actions传递信息
      // this.$store.dispatch('changeCity', city)
      // 用mapMutations
      this.changeCity(city)
      // 编程式路由导航
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    }),
    ...mapGetters(['doubleCity'])
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
