<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <div class="search-show" ref="search-show" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id">{{item.name}}</li>
        <li v-show="hasNodata" class="search-item border-bottom">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      list: [],
      keyword: '',
      timer: null
    }
  },
  computed: {
    hasNodata () {
      return !this.list.length
    }
  },
  watch: {
    // 监听搜索框输入的变化
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 处理清空keyword页面仍然有值的情况
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        // 存出匹配到的名字
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs['search-show'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .search
    background-color $bgColor
    height .72rem
    padding 0 .1rem
    .search-input
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      border-radius .06rem
      color #666
  .search-show
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 1
    background-color #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      background-color #ffffff
      color #666
</style>
