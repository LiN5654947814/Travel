<template>
  <div>
    <div class="header">
      <router-link to="/">
        <div class="iconfont back-icon">
          &#xe676;
        </div>
      </router-link>
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'

}
</script>

<style lang="scss" scoped>
.header {
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: #00bcd4;
  position: relative;
  .back-icon {
    color: white;
    width: 0.64rem;
    font-size: 0.4rem;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
