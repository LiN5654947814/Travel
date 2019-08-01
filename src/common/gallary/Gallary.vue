<template>
  <div class="container"
       @click="handleGrallaryClose">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img class="swiper-img"
               src="../../../static/img/imgRecommed/01/01.jpg"
               alt="" /></swiper-slide>
        <swiper-slide>
          <img class="swiper-img"
               src="../../../static/img/imgRecommed/01/02.jpg"
               alt="" /></swiper-slide>
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            return current + ' of ' + total
          }
        },
        observeParents: true,
        observer: true // 检测到父元素DOM变化时自我刷新
      },
      grallaryId: ''
    }
  },
  methods: {
    handleGrallaryClose () {
      this.$emit('close')
    }
  }

}
</script>
<style lang="scss" scoped>
.container /deep/ .swiper-container {
  overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  position: fixed;
  .wrapper {
    background-color: #000;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .swiper-img {
      width: 100%;
    }
    .swiper-pagination-custom {
      color: white;
      bottom: -1rem;
    }
  }
}
</style>
