<template>
  <ul class="list">
    <li class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @click="handleLetterClick"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      // 节流，限制滚动时的刷新频率
      timer: null
    }
  },
  // 一开始cities是空，所以updated执行是ajax执行的时候才刷新的
  updated () {
    // A元素和上一个组件的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      // e.target就是这个dom对象
      // console.log(e.target.innerText)
      this.$emit('alphabet', e.target.innerText)
    },
    // 处理滚动的列表响应
    handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 16ms才刷新一次
      this.timer = setTimeout(() => {
        // 目的是找到当前组件的位置
        if (this.touchStatus) {
          // 当前touch距离窗口顶部的距离，需要减去search组件的高度
          const touchY = e.touches[0].clientY - 79
          // 字母下标
          const index = Math.floor((touchY - this.startY) / 20)
          // 这里事件名称和上面是一样的，其实没有关系
          if (index >= 0 && index < this.letters.length) {
            this.$emit('alphabet', this.letters[index])
          }
        }
      }, 16)
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center
    .item
      text-align center
      line-height .4rem
      color $bgColor
</style>
