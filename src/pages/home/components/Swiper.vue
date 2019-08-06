<template>
  <!-- swiper -->
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList"
                    :key=item.id>
        <img class="swiper-img"
             :src="item.imgUrl"
             alt="" /></swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperList: []
    }
  },
  created () {
    this.getSwiperList()
  },
  methods: {
    getSwiperList () {
      this.$axios.get('/swiperList').then((response) => {
        if (response.data.status === 0) {
          this.swiperList = response.data.message
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active {
  //sass的样式穿透用/deep/
  background: #fff !important;
}
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 30%; //图片的宽高比，始终撑开盒子的位置
  .swiper-img {
    width: 100%;
  }
}
</style>
