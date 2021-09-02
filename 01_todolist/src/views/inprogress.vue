<template>
  <div class="inprogress">
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
  name: 'inprogress',
  components: {
    add,
    list,
    edit
  }
}
</script>
