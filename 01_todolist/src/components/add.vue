<template>
  <div class="container">
    <div class="add_item">
      <div v-if="notaddItem" class="main" @click="editing">
        <label for="add">
          <span>+</span>
          <input id="add" type="text" placeholder="Add Task" />
        </label>
      </div>
      <edit v-else></edit>
    </div>
  </div>
</template>
<script>
import edit from '@/components/edit.vue'

export default {
  components: { edit },
  data () {
    return {
      addInput: ''
    }
  },
  computed: {
    notaddItem () {
      return !this.$store.state.isEdit
    }
  },
  methods: {
    editing () {
      this.$store.commit('toggle_isEdit', true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/base';
.add_item .main {
  position: relative;
  width: 100%;
  font-size: 24px;
  color: $grey;
  span {
    position: absolute;
    left: 28px;
    transform: translateY(-50%);
    top: 46%;
    font-size: 36px;
    font-weight: 300;
  }
  input {
    width: 100%;
    padding: 8px 20px 10px 56px;
    border: 2px solid $grey;
    border-radius: 5px;
    box-shadow: none;
    &::placeholder {
      color: $grey;
    }
  }
}
</style>
