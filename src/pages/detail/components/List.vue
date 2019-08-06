<template>
  <div>
    <div class="item">
      <div class="item-title border-bottom">
        <div class="item-title-icon">
        </div>
        行程说明
      </div>
    </div>
    <div class="item-info">
      <div class="item-desc border-bottom"
           v-for="(item,i) in travelInfoList"
           :key="i">

        <fieldset class="item-traffic fieldset-nav">
          <legend>交通</legend>
          <ol>
            <li>{{item.traffic}}</li>
          </ol>
        </fieldset>

        <fieldset class="item-people fieldset-nav">
          <legend>年龄政策</legend>
          <ol>
            <li>{{item.ageRule}}</li>
          </ol>
        </fieldset>

        <fieldset class="item-img fieldset-nav">
          <legend>特色路线</legend>
          <ul class="item-img">
            <li><img :src="item.imgUrl"
                   alt=""></li>
          </ul>
        </fieldset>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'DetailList',
  props: {
    List: Array

  },
  data () {
    return {
      id: this.$route.params.id,
      travelInfoList: []
    }
  },
  created () {
    this.getTravelInfo()
  },
  methods: {
    getTravelInfo () {
      this.$axios.get('/travelInfo/?id=' + this.id).then((response) => {
        if (response.data != null) {
          this.travelInfoList = response.data
        }
      })
    }
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
.item-info {
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
  font-size: 0.4rem;

  .item-desc {
    .fieldset-nav {
      border: 1px solid black;
      border-radius: 0.2rem;
      margin-bottom: 0.2rem;
      overflow: hidden;
      legend {
        background-color: #00bcd4;
        border-radius: 0.2rem;
        padding: 0.1rem;
        color: white;
      }
      ol {
        font-size: 0.35rem;
        line-height: 0.5rem;
        text-indent: 1em;
      }
      .item-img {
        width: 100%;
        text-align: center;
        img {
          width: 100%;
          border-radius: 0.2rem;
        }
      }
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
