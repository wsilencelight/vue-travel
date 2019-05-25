<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) of recommendList" :key="index">
        <img class="item-img" :src="item.imgUrl" :alt="item.title" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      // recommendList: [{
      //   id: '0001',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/ea/eaf1bdc38aed9e6690.img.jpg_200x200_3032bf56.jpg',
      //   title: '银杏湖乐园',
      //   desc: '江宁区'
      // },
      // {
      //   id: '0002',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1601/d4/d4f1a62140b9d93590.img.jpg_200x200_a1ff6094.jpg',
      //   title: '牛首山文化旅游区',
      //   desc: '江宁区'
      // },
      // {
      //   id: '0003',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/13/0cd5a9a57ae0d1b9b935ec604ce0f9bf.water.jpg_200x200_9b808f51.jpg',
      //   title: '南京海底世界',
      //   desc: '江宁区'
      // }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    margin-top .2rem
    background-color #eeeeee
    line-height .8rem
    text-indent .2rem
  .item
    display flex
    overflow hidden
    height 1.9rem
    img
      height 1.7rem
      width 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      //min-width设置为0可以保证内容不溢出容器
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #cccccc
        ellipsis()
      .item-button
        background #ff9300
        line-height .15rem
        margin-top .1rem
        padding .2rem
        border-radius .06rem
        color #ffffff
</style>
