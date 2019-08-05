<template>
  <div>
    <div class="item"
         v-for="(item,i) in List"
         :key="i">
      <div class="item-title border-bottom">
        <div class="item-title-icon">
        </div>
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    List: Array
  }

}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  .item-title {
    display: flex;
    width: 100%;
    line-height: 0.55rem;
    font-size: 0.29rem;
    padding: 0.1rem;
    flex-direction: row;
    .item-title-icon {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      padding-right: 0.1rem;
      background: url("../../../../static/img/detail.png") 0em -0.68rem no-repeat;
      zoom: 0.5;
    }
  }
}
.border-bottom::before {
  border-color: #ccc;
}
.border-bottom::after {
  border-color: #ccc;
}
</style>
