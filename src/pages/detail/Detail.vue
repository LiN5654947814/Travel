<template>
  <div>
    <detail-banner @closeBack="closeBack"></detail-banner>
    <detail-header :isFlag="isFlag"></detail-header>
    <div class="content">
      <detail-list></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  data () {
    return {
      isFlag: false
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    closeBack (data) {
      this.isFlag = data
      console.log(this.isFlag)
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
