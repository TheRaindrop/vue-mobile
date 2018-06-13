<template lang='pug'>
  div
    .scroll-wrapper(@touchstart='touchStart', @touchend='touchEnd', @touchmove='touchMove')
      .post-bg(:style='{"background": "url(" + movieList[index].img + ")"}')
      .post-bg-filter
      .card-list(:style='{"transform": "translateX(" + scrollX + "px)", "transition-duration": duration + "ms"}')
        template(v-for='item in movieList')
          .card-list__item(@click='active(index)', :class='{"center": item.center}')
            img(:src='item.img')
    .movie-text
      h3.movie-text__header
        | 哆啦A梦：大雄的金银岛
      .movie-text__other
        span.movie-text__other_time 109分钟
        span.movie-text__other_actor 水田山葵，大原惠美
</template>

<script>
export default {
  data () {
    return {
      scrollX: 0,
      scrollMin: 0,
      scrollMax: 0,
      deviceWidth: 750,
      index: 0,
      duration: 0,
      movieList: [
        {
          center: true,
          img: 'http://p1.meituan.net/movie/899b0a8c57fc44e93e83b9f0dae649f1767221.jpg@464w_644h_1e_1c'
        },
        {
          center: false,
          img: 'http://p0.meituan.net/movie/200526fd0facc141caeef984314f7ef8328722.jpg@464w_644h_1e_1c'
        },
        {
          center: false,
          img: 'http://p1.meituan.net/movie/3d17aa5ee07f5d66239d8393bcb8fe5196556.jpg@464w_644h_1e_1c'
        },
        {
          center: false,
          img: 'http://p0.meituan.net/movie/f193e43ca706aa6bc6a26d6f53f0115a5315542.jpg@464w_644h_1e_1c'
        },
        {
          center: false,
          img: 'http://p0.meituan.net/movie/37534bc363906ab61233c089d1db47ac1093181.jpg@464w_644h_1e_1c'
        },
        {
          center: false,
          img: 'http://p0.meituan.net/movie/d414df29b364e010976c4be97d5ee907290840.jpg@464w_644h_1e_1c'
        },
        {
          center: false,
          img: 'http://p0.meituan.net/movie/5fd19e095c4ac795cc291179356152c52921178.jpg@464w_644h_1e_1c'
        },
        {
          center: false,
          img: 'http://p0.meituan.net/movie/5d27900fde517485c5d28783b17eab2331758.jpg@464w_644h_1e_1c'
        },
        {
          center: false,
          img: 'http://p1.meituan.net/movie/266d24fe8567632e078b3717a096d104359095.jpg@464w_644h_1e_1c'
        },
        {
          center: false,
          img: 'http://p1.meituan.net/movie/01f9953ad81492378746e8a762be3196233628.jpg@464w_644h_1e_1c'
        },
        {
          center: false,
          img: 'http://p1.meituan.net/movie/cb72d008657821226e4d44ff08f900bb299751.jpg@464w_644h_1e_1c'
        }
      ],
      moveX: 0,
      tId: 0
    }
  },
  computed: {
    itemWidth () {
      return this.deviceWidth * 0.2667
    }
  },
  methods: {
    scroll () {
      console.log('scrolling')
    },
    active (i) {
      // this.duration = 300
      this.movieList[this.index].center = false
      this.movieList[i].center = true
      this.index = i
      this.scrollX = this.scrollMin + -(this.itemWidth * i)
      // setTimeout(() => {
      //   this.duration = 0
      // }, 100)
    },
    touchStart (event) {
      this.moveX = event.targetTouches[0].clientX
      console.log('touch start:', event.targetTouches[0].clientX)
    },
    touchMove (event) {
      if (this.tId) {
        return
      }
      this.tId = setTimeout(() => {
        this.move(event.targetTouches[0].clientX)
        this.tId = 0
      }, 0)
      console.log('touch moving:', event)
    },
    move (clientX) {
      this.scrollX += (clientX - this.moveX)
      this.moveX = clientX
    },
    touchEnd (event) {
      // this.duration = 300
      if (this.scrollX > this.scrollMin) {
        this.scrollX = this.scrollMin
        this.movieList[this.index].center = false
        this.movieList[0].center = true
        this.index = 0
      } else if (this.scrollX < -this.scrollMax) {
        this.scrollX = -this.scrollMax
        this.movieList[this.index].center = false
        this.movieList[this.movieList.length - 1].center = true
        this.index = this.movieList.length - 1
      } else {
        let index = Math.round(Math.abs((this.scrollX - this.scrollMin) / this.itemWidth))
        this.scrollX = this.scrollMin + -(this.itemWidth * index)
        if (this.index !== index) {
          this.movieList[this.index].center = false
          this.movieList[index].center = true
          this.index = index
        }
      }
    }
  },
  created () {
    this.deviceWidth = window.innerWidth
    this.scrollX = this.deviceWidth / 2 - this.itemWidth / 2
    this.scrollMin = this.deviceWidth / 2 - this.itemWidth / 2
    this.scrollMax = this.deviceWidth * 0.2667 * this.movieList.length - (this.deviceWidth / 2 + this.itemWidth / 2)
  }
}
</script>

<style scoped>
.scroll-wrapper {
  overflow: hidden;
  white-space: nowrap;
  height: 200px;
  position: relative;
}
.post-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  filter: blur(30px);
  background-position-y: 40%;
}
.post-bg-filter {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #40454d;
  opacity: .55;
}
.card-list {
  display: flex;
  margin-top: 30px;
  /* transition-duration: 300ms; */
}
.card-list__item {
  flex-shrink: 0;
  height: 30vw;
  width: 26.67vw;
  display: inline-block;
  padding: 0 10px;
  box-sizing: border-box;
  z-index: 10;
  transition-duration: 300ms;
  background-origin: content-box;
}
.card-list__item.center {
  transform: scale(1.15);
}
.card-list__item > img {
  width: 100%;
  height: 100%;
}
.movie-text {
  background-color: white;
  text-align: center;
  padding: 40px 0 20px;
}
.movie-text__header {
  font-size: 32px;
  font-weight: bold;
}
.movie-text__other {
  font-size: 16px;
  color: #969696;
}
</style>
