import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   city: defaultCity
  // },
  state,
  actions: {
    changeCity (ctx, city) {
      // 用commit向mutations传递信息
      ctx.commit('changeCity', city)
    }
  },
  mutations: mutations,
  getters: {
    doubleCity (state) {
      return state.city + 'hhh'
    }
  }
})
