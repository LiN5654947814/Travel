<template>
  <div class="list"
       ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-bottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              中山
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="(item,i) in hot"
               :key="i">
            <div class="button">
              {{item.name}}
            </div>
          </div>

        </div>
      </div>

      <div class="title border-bottom">
        A
      </div>
      <div class="item-list">
      </div>

    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped>
.list {
  position: absolute;
  overflow: hidden;
  top: 1.7rem;
  right: 0;
  left: 0;
  bottom: 0;
  .title {
    line-height: 0.4rem;
    background: #eee;
    padding-left: 0.2rem;
  }
  .button-list {
    padding: 0.1rem;
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      width: 33.33%;
      float: left;
      .button {
        margin: 0.1rem 0.1rem;
        text-align: center;
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        border-radius: 0.1rem;
      }
    }
  }
  .border-bottom::before {
    border-color: #ccc;
  }
  .border-bottom::after {
    border-color: #ccc;
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }
}
</style>
