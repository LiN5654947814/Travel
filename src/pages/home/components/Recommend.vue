<template>
  <div>
    <div class="recommend-title">
      <p>热销推荐</p>
    </div>
    <div class="recommend-item">
      <div class="item"
           v-for="item in travelItem"
           :key="item.id">
        <div class="item-wrapper">
          <div class="item-img">
            <img :src="item.imgUrl"
                 alt="">
            <div class="item-img-info">
              <span>{{item.itemImageInfo}}</span>
              <div class="item-desc">
                <span>{{item.itemDesc}}</span>
              </div>
            </div>
          </div>
          <div class="item-info">
            {{item.itemInfo}}
          </div>
          <div class="item-price">
            ￥{{item.itemPrice}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      travelItem: []
    }
  },
  created () {
    this.getRecommendList()
  },
  methods: {
    getRecommendList () {
      this.$axios.get('http://localhost:3000/recommendList').then((response) => {
        if (response.data.status === 0) {
          this.travelItem = response.data.message
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.recommend-title {
  line-height: 0.6rem;
  text-indent: 0.3rem;
  background-color: rgb(247, 244, 244);
  font-size: 0.3rem;
  font-weight: 700;
  border-radius: 0.1rem;
}

//热销推荐部分

.recommend-item {
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  // 每个热销推荐
  .item {
    width: 49%;
    display: flex;
    flex-direction: column;
    .item-wrapper {
      margin-top: 0.1rem;
      .item-img {
        position: relative;
        img {
          width: 100%;
          border-radius: 5px;
          height: 100%;
        }

        .item-img-info {
          display: flex;
          justify-content: center;
          flex-wrap: nowrap;
          height: 45%;
          width: 60%;
          color: white;
          text-align: center;
          line-height: 0.6rem;
          font-size: 0.3rem;
          font-weight: 400;
          background: rgba(0, 0, 0, 0.6);
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
        }
      }
      bottom: 0;
      .item-desc {
        position: absolute;
        height: 0.32rem;
        width: 100%;
        left: 50%;
        top: 50%;
        margin-top: 0.1rem;
        font-size: 0.25rem;
        color: yellow;
        transform: translate(-50%, -50%);
      }

      .item-info {
        line-height: 0.5rem;
        overflow: hidden;
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 3rem;
      }
      .item-price {
        color: #ff7400;
        font-size: 0.4rem;
        font-weight: 700;
        line-height: 0.4rem;
      }
    }
  }
}

//

@media screen and (min-width: 401px) {
  .recommend-title {
    line-height: 0.6rem;
    text-indent: 0.3rem;
    background-color: rgb(247, 244, 244);
    font-size: 0.3rem;
    font-weight: 700;
    border-radius: 0.1rem;
  }

  //热销推荐部分

  .recommend-item {
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // 每个热销推荐
    .item {
      width: 49%;
      display: flex;
      flex-direction: column;
      .item-wrapper {
        margin-top: 0.1rem;
        .item-img {
          position: relative;
          img {
            width: 100%;
            border-radius: 5px;
            height: 100%;
          }

          .item-img-info {
            display: flex;
            justify-content: center;
            flex-wrap: nowrap;
            height: 45%;
            width: 60%;
            color: white;
            text-align: center;
            line-height: 0.6rem;
            font-size: 0.4rem;
            font-weight: 400;
            background: rgba(0, 0, 0, 0.6);
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
          }
        }
        bottom: 0;
        .item-desc {
          position: absolute;
          height: 0.32rem;
          width: 100%;
          left: 50%;
          top: 50%;
          margin-top: 0.1rem;
          font-size: 0.3rem;
          color: yellow;
          transform: translate(-50%, -50%);
        }

        .item-info {
          line-height: 0.5rem;
          overflow: hidden;
          display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 3rem;
        }
        .item-price {
          color: #ff7400;
          font-size: 0.4rem;
          font-weight: 700;
          line-height: 0.4rem;
        }
      }
    }
  }
}
</style>
