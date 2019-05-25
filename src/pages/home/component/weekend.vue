<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="border-bottom" v-for="(item, index) of weekendList" :key="index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title" />
        </div>
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
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
        title: '南京必打卡',
        desc: '看尽王侯将相荣辱成败,六朝金粉潮起潮落'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/e1/cdbf56d837da59.jpg_r_640x214_105fc3f2.jpg',
        title: '民国情怀 国共风华',
        desc: '南京,一座历史文化名城,这片土地曾经经历的太多太多'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f3/d51669250308cc.jpg_r_640x214_7a127cd0.jpg',
        title: '秦淮金粉里的南京',
        desc: '欣赏秦淮风光上独具特色的人文景观，夫子庙里深刻体会古代科举制度'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    background-color #eeeeee
    line-height .8rem
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.5%
    .item-img
      width 100%
  .item-info
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
