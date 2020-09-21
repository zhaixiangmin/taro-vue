import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  numbers: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    // 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    // 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ]
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  }
}

const getters = {
  getNumbers(state) {
    return state.numbers
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
