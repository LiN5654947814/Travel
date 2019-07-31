import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '中山'
  },
  actions: {
    changeCity (ctx, city) {
      // 第一个参数固定是context上下文state实例
      ctx.commit('changeCity', city) // 借助context提供commit方法提交到mutations
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
