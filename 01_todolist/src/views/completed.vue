<template>
  <div class="completed">
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
  name: 'completed',
  components: {
    add,
    list,
    edit
  }
}
</script>
