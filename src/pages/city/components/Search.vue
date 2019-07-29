<template>
  <div class="search">
    <input type="text"
           name=""
           id=""
           class="search-input"
           placeholder="请输入城市名或者拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'

}
</script>

<style lang="scss" scoped>
.search {
  height: 0.72rem;
  padding: 0.1rem;
  background: #00bcd4;
  .search-input {
    box-sizing: border-box;
    height: 0.62rem;
    width: 100%;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
</style>
