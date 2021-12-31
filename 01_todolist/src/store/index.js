import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isEdit: false,
    tempObj: {
      id: 3,
      title: 'Type Something Here…',
      endtime: '2091-05-06',
      file: '',
      msg: '8888',
      star: false,
      complete: false
    },
    list: [
      {
        id: 1630685083704,
        title: 'Type Something Here…',
        endtime: '2021-05-06',
        file: '',
        msg: '123',
        star: false,
        complete: false
      },
      {
        id: 1660675083704,
        title: 'Type Something Here…',
        endtime: '2021-05-10',
        file: '',
        msg: '456',
        star: false,
        complete: true
      }
    ]
  },
  mutations: {
    change_temObj (state, payload) {
      state.tempObj = payload
    },
    add_list (state) {
      state.list.push(state.tempObj)
    },
    toggle_isEdit (state, payload) {
      state.isEdit = payload
    },
    complete_item (state, payload) {
      console.log(payload)
      let point = 0
      const max = state.list.length
      for (let i = 0; i++; i < max) {
        if (state.list[i].id === payload) {
          break
        } else {
          point++
        }
      }
      console.log(point)
      state.list[point].complete = !state.list[point].complete
    },
    star_item (state, payload) {
      console.log(payload)
      let point = 0
      const max = state.list.length
      for (let i = 0; i++; i < max) {
        if (state.list[i].id === payload) {
          break
        } else {
          point++
        }
      }
      state.list[point].star = true
    }
  },
  actions: {},
  modules: {}
})
