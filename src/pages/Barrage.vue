<template lang='pug'>
  div
    CellGroup
      Field(v-model='message', placeholder='编辑弹幕')
        Button(slot='button', size='small', type='primary', @click='sendBarrage') 发送弹幕
</template>

<script>
import { CellGroup, Field, Button } from 'vant'
export default {
  components: { CellGroup, Field, Button },
  data () {
    return {
      message: ''
    }
  },
  sockets: {
    connect () {
      console.log('Barrage Mobile')
    }
  },
  methods: {
    sendBarrage () {
      this.$socket.emit('sendBarrage', {'openId': '123', 'roomId': 1234, 'message': this.message})
      this.message = ''
    }
  },
  created () {
    this.$socket.on('sendBarrage', (data) => {
      console.log(data)
    })
  }
}
</script>

<style scoped>

</style>
