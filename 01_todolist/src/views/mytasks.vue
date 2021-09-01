<template>
  <div class="mytasks
">
    <add></add>
    <list></list>
    <edit></edit>
  </div>
</template>

<script>
import add from '@/components/add.vue'
import list from '@/components/list.vue'
import edit from '@/components/edit.vue'

export default {
  name: 'mytasks',
  components: {
    add,
    list,
    edit
  }
}
</script>

<style lang="scss" scoped>

</style>
