<template>
  <div>
    <div class="banner"
         @click="showGrallary">
      <img class="banner-img"
           :src="imgUrl"
           alt="">
      <div class="banner-info">
        <div class="banner-title">{{title}}</div>
        <div class="banner-numer"><span class="iconfont ">&#xe87c;
          </span>{{grallaryPhotos.length}}</div>
      </div>
    </div>
    <common-gallray v-show="flag"
                    @close="handleGrallaryClose"
                    :grallaryPhotos="grallaryPhotos"></common-gallray>
  </div>
</template>

<script>
import CommonGallray from '@/common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      flag: false,
      id: this.$route.params.id,
      grallaryPhotos: [],
      imgUrl: '',
      title: ''
    }
  },
  created () {
    this.getGrallaryList()
  },
  components: {
    CommonGallray
  },
  watch: {
    // 查看图片时，禁止上下滑动
    flag () {
      if (this.flag === true) {
        window.addEventListener('touchmove', this.StopScroll, { passive: false })
      } else if (this.flag === false) {
        window.removeEventListener('touchmove', this.StopScroll, { passive: false })
      }
    }
  },
  methods: {
    showGrallary () {
      this.flag = !this.flag
      this.$emit('closeBack', this.flag)
    },
    handleGrallaryClose () {
      this.flag = !this.flag
      this.$emit('closeBack', this.flag)
    },
    getGrallaryList () {
      this.$axios.get('/gallaryPhotos/?id=' + this.id).then((response) => {
        if (response.data != null) {
          this.grallaryPhotos = response.data
          this.imgUrl = response.data[0].imgUrl
          this.title = response.data[0].title
        }
      })
    },
    grallaryListLength (data) {
      console.log(data)
    },
    StopScroll (e) {
      e.preventDefault()
      e.stopPropagation()
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
