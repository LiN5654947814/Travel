<template>
  <div>
    <div class="banner"
         @click="showGrallary">
      <img class="banner-img"
           src="../../../../static/img/imgRecommed/01/01.jpg"
           alt="">
      <div class="banner-info">
        <div class="banner-title">遇见时光•飞丽江（AAA景区)</div>
        <div class="banner-numer"><span class="iconfont ">&#xe87c;
          </span>39</div>
      </div>
    </div>
    <common-gallray v-show="flag"
                    @close="handleGrallaryClose"></common-gallray>
  </div>
</template>

<script>
import CommonGallray from '@/common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  data () {
    return {
      flag: false
    }
  },
  components: {
    CommonGallray
  },
  methods: {
    showGrallary () {
      this.flag = !this.flag
    },
    handleGrallaryClose () {
      this.flag = !this.flag
    }
  }

}
</script>

<style lang="scss" scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 70%;
  position: relative;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    color: white;
    width: 100%;
    height: 0.6rem;
    bottom: 0;
    right: 0;
    line-height: 0.6rem;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      flex: 1;
      padding-left: 0.1rem;
    }
    .banner-numer {
      padding: 0.1rem;
      line-height: 0.4rem;
      height: 0.4rem;
    }
  }
}
</style>
