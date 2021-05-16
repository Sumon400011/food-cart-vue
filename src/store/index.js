import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: false,
    items: [],
    cart:[]
  },
  mutations: {
    cartActive(state, payload) {
      state.isActive = !payload
    },
    setItems(state, payload) {
      state.items = payload
    },
    addCartItems(state, payload) {
      state.cart.push(payload)
    },
    removeCartItem(state, payload) {
      state.cart.splice(payload, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getItems(state) {
      return state.items
    },
    getCart(state) {
      return state.cart
    }
  },
})
