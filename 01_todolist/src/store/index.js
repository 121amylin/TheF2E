import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        id: 0,
        title: 'Type Something Here…',
        endtime: '2021-05-06',
        file: '',
        msg: '123',
        sart: false,
        complete: false
      },
      {
        id: 2,
        title: 'Type Something Here…',
        endtime: '2021-05-10',
        file: '',
        msg: '456',
        sart: false,
        complete: true
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
