<template lang='pug'>
  div
    .cell-swipe
      .cell-swipe__wrapper(:style='{"transform": "translate3d(" + scrollX + "px, 0, 0)"}', @touchstart='touchStart', @touchmove='touchMove', @touchend='touchEnd')
        .cell-swipe__left(:style='{"transform": "translate3d(" + leftScroll + "px, 0, 0)"}')
          span 选择
        .cell-swipe__center
          span 中间内容
        .cell-swipe__right(:style='{"transform": "translate3d(" + rightScroll + "px, 0, 0)"}')
          span 删除
</template>

<script>
export default {
  data () {
    return {
      leftScroll: -40,
      rightScroll: 40,
      scrollX: 0,
      moveX: 0,
      clientX: 0
    }
  },
  methods: {
    touchStart () {
      this.clientX = event.touches[0].clientX
    },
    touchMove () {
      this.moveX = event.touches[0].clientX - this.clientX
      this.clientX = event.touches[0].clientX
      // if ((this.scrollX >= -40 && this.moveX > 0) || (this.scrollX <= 40 && this.moveX < 0)) {
      //   this.scrollX += this.moveX
      // }
      console.log('scrollX: ', this.scrollX)
      console.log('moveX: ', this.moveX)
      console.log('--------------------------------------------------------------')
      if (this.scrollX <= -40 && this.moveX < 0) {
        console.log('cant be more left')
      } else if (this.scrollX >= 40 && this.moveX > 0) {
        console.log('cant be more right')
      } else {
        this.scrollX += this.moveX
      }
    },
    touchEnd () {
      if (this.scrollX < -20) {
        this.scrollX = -40
      } else if (this.scrollX > 20) {
        this.scrollX = 40
      } else {
        this.scrollX = 0
      }
    }
  }
}
</script>

<style scoped>
  .cell-swipe {
    position: relative;
    overflow: hidden;
    height: 40px;
  }
  .cell-swipe__wrapper {
    transform: translate3d(0, 0, 0);
    transition-duration: 0.6s;
    transition-property: all;
    height: 100%;
  }
  .cell-swipe__left {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    width: 40px;
  }
  .cell-swipe__right {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    width: 40px;
  }
</style>
