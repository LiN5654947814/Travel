<template>
  <div class="header-top">
    <div class="header-abs"
         v-show="!isFlag">
      <div class="header-abs-back"
           @click="BackHome"><span class="iconfont">&#xe676;

        </span></div>
    </div>
    <div class="header-fixed"
         v-show="show"
         :style="opacityStye">
      <router-link to="/">
        <div class="iconfont header-back">
          &#xe676;
        </div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      show: false,
      opacityStye: 0
    }
  },
  created () { // 生命周期钩子，页面展示时候加载
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () { // 跳转当前页面时候
    window.removeEventListener('scroll', this.handleScroll) // 解绑
  },
  props: {
    isFlag: Boolean
  },
  methods: {
    BackHome () {
      this.$router.push('/')
    },
    handleScroll () {
      console.log('scroll')
      const top = document.documentElement.scrollTop
      if (top > 52) {
        let opacity = top / 150
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStye = {
          opacity
        }
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-top {
  z-index: 9999;
  .header-abs {
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
    line-height: 0.8rem;
    z-index: 9999;
    .header-abs-back {
      color: white;
    }
  }
  .header-fixed {
    overflow: hidden;
    height: 0.86rem;
    line-height: 0.86rem;
    text-align: center;
    color: #fff;
    background: #00bcd4;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    .header-back {
      color: white;
      width: 0.64rem;
      font-size: 0.4rem;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9999;
    }
  }
}
</style>
