<template>
  <div>
    <detail-banner :sightName="sightName"
    :bannerImg="bannerImg"
    :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      // 景点名
      sightName: '',
      // 景点展示图片
      bannerImg: '',
      // 画廊图片
      gallaryImgs: [],
      // 票价
      categoryList: []
    }
  },
  methods: {
    getDetail () {
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDetailSucc)
    },
    getDetailSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetail()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
