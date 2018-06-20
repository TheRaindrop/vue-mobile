<template lang='pug'>
  div
    CellGroup
      Cell(title='Test', is-link, to='/test')
      Cell(title='Scroll', is-link)
      Cell(title='Barrage', is-link, to='/barrage')
      form
        input(type='file', id='file-input', name='fileContent', @change='handleFile')
      .img-container(@dragover='dragOver', @drop='drop')
        | drop your image here
      .img-paste(contenteditable='true', @paste='paste')
        | hello, paste your image here
      img(:src='src')
</template>

<script>
// import Scroll from '@/components/Scroll.vue'
import { Cell, CellGroup } from 'vant'
export default {
  // components: {Scroll}
  components: { Cell, CellGroup },
  data () {
    return {
      src: ''
    }
  },
  methods: {
    handleFile () {
      let fileReader = new FileReader()
      let fileType = event.target.files[0].type
      fileReader.onload = () => {
        if (/^image/.test(fileType)) {
          console.log(event)
          this.src = event.target.result
        }
      }
      console.log(event.target.files[0])
      fileReader.readAsDataURL(event.target.files[0])
    },
    dragOver () {
      event.preventDefault()
    },
    drop () {
      event.preventDefault()
      console.log('drop: ', event.dataTransfer.files)
    },
    paste () {
      console.log('paste: ', event)
      let pasteE = event
      setTimeout(() => {
        console.log(pasteE.clipboardData.files)
      }, 1000)
    }
  }
}
</script>

<style scoped>
.img-container {
  width: 50vw;
  height: 50vw;
  border: 1px solid black;
}
.img-paste {
  width: 50vw;
  height: 50vw;
  border: 1px solid black;
}
</style>
