<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @alphabet="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './component/Header'
import CitySearch from './component/Search'
import CityList from './component/List'
import CityAlphabet from './component/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      // A,B,C等对应的所有城市
      cities: {},
      // 热门城市
      hotCities: [],
      // alphabet向list传的值
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    // 发送ajax请求
    getCityInfo () {
      axios.get('api/city.json')
        .then(this.handleCityInfoSucc)
    },
    // 处理ajax返回数据
    handleCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      // console.log(letter)
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
