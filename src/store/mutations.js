export default {
  changeCity (state, city) {
    state.city = city
    // 更新城市后放到localStorage
    localStorage.setItem('city', JSON.stringify(state.city))
  }
}
