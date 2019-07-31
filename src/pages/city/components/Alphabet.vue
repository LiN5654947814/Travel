<template>
  <ul class="list">
    <li class="item"
        v-for="(item,i) in letters"
        :key="i"
        @click="handClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 74
        const index = Math.floor((touchY - startY) / 17)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
        // console.log(index)
        // console.log('---------------------')
        // console.log('A的位置------------' + startY)
        // console.log('触摸的位置------------------' + touchY)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }

}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.44rem;
    text-align: center;
    color: #00bcd4;
  }
}
</style>
