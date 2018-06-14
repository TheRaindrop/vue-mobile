<template lang='pug'>
  div
    CellSwipe(:right-width='65', :left-width='65')
      span(slot='left') 选择
      CellGroup
        Cell(title='单元格', value='内容')
      span(slot='right') 删除
    myCellSwipe
</template>

<script>
import { CellSwipe, Cell, CellGroup } from 'vant'
import myCellSwipe from '@/components/CellSwipe.vue'
export default {
  components: { CellSwipe, Cell, CellGroup, myCellSwipe }
}
</script>

<style scoped>

</style>
