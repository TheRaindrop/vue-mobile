<template lang='pug'>
  div
    CellGroup
      Cell(title='Test', is-link, to='/test')
      Cell(title='Scroll', is-link)
</template>

<script>
// import Scroll from '@/components/Scroll.vue'
import { Cell, CellGroup } from 'vant'
export default {
  // components: {Scroll}
  components: { Cell, CellGroup }
}
</script>

<style scoped>

</style>
