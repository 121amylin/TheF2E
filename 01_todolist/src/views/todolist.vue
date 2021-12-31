<template>
  <div class="todolist">
    <navarea @pdeliverClassHanhle="changeClassHanhle($event)"></navarea>
    <div class="wrap">
      <add></add>
      <list
        :pdate="choose_data"
        :presivedID="resivedID"
        :presivedTit="resivedTit"
        @peditHandle="revisedID($event)"
      ></list>
    </div>
  </div>
</template>
<script>
import navarea from '@/components/navarea.vue'
import add from '@/components/add.vue'
import list from '@/components/list.vue'

export default {
  name: 'todolist',
  components: {
    navarea,
    add,
    list
  },
  data () {
    return {
      nowComonent: 'mytasks',
      resivedID: null,
      resivedTit: ''
    }
  },
  computed: {
    get_date () {
      return this.$store.state.list
    },
    choose_data () {
      let temp = null
      if (this.nowComonent === 'mytasks') {
        temp = this.get_date
      } else if (this.nowComonent === 'inprogress') {
        temp = this.get_date.filter(element => {
          return element.complete === false
        })
      } else if (this.nowComonent === 'completed') {
        temp = this.get_date.filter(element => {
          return element.complete === true
        })
      }
      return temp
    }
  },
  methods: {
    changeClassHanhle ($event) {
      this.nowComonent = $event
    },
    revisedID ($event) {
      this.resivedID = $event.ID
      this.resivedTit = $event.tit
    }
  }
}
</script>
