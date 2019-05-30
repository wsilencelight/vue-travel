
export default {
  // 改变state
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {
      console.log('localStorage can not be used')
    }
  }
}
