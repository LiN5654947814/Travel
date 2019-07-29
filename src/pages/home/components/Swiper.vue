<template>
  <!-- swiper -->
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList"
                    :key=item.id>
        <img class="swiper-img"
             :src="item.imgUrl"
             alt="" /></swiper-slide>
                     <div class="swiper-pagination" slot="pagination"></div>
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
      swiperList: [{
        id: '0001',
        imgUrl: '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0677c297245b8a489ee12ab9b165c928.jpg_945x288_600cb364.jpg'
      }, {
        id: '0002',
        imgUrl: '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg'
      },
      {
        id: '0003',
        imgUrl: '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg'
      },
      {
        id: '0004',
        imgUrl: '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/b72df47942fb28fcd7bf481f01e785f5.jpg'
      }]
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
