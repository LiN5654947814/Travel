<template>
  <div>
    <div class="season-title">
      当季景点门票
    </div>

    <div class="season-container">
      <div class="season-top">
        <img src="../../../../static/img/imgSeason/01.jpg"
             alt="">
      </div>

      <div class="season-bottom">
        <div class="season-img-bottom">
          <img src="../../../../static/img/imgSeason/02.jpg"
               alt="">
          <div class="season-bottom-title">长隆野生动物世界</div>
          <div class="season-desc">熊猫三胞胎，与您共享欢乐时光</div>
          <div class="season-price">￥266</div>
        </div>

        <div class="season-img-bottom">
          <img src="../../../../static/img/imgSeason/03.jpg"
               alt="">
          <div class="season-bottom-title">世界之窗</div>
          <div class="season-desc">全球微缩景点，精彩演绎、娱乐项目应有尽有</div>
          <div class="season-price">￥85</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.season-title {
  line-height: 0.6rem;
  text-indent: 0.3rem;
  background-color: rgb(247, 244, 244);
  font-size: 0.3rem;
  font-weight: 700;
  border-radius: 0.1rem;
}

.season-container {
  padding: 0.15rem;

  .season-top {
    display: flex;
    width: 100%;
    height: 4.12rem;
    margin-bottom: 0.2rem;
    img {
      width: 100%;
      border-radius: 0.1rem;
    }
  }
  .season-bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .season-img-bottom {
      display: flex;
      flex-direction: column;
      width: 49%;
      img {
        width: 100%;
        border-radius: 0.1rem;
      }
      .season-bottom-title {
        width: 3.42rem;
        height: 0.37rem;
        padding: 0.1rem;
        line-height: 0.5rem;
        font-size: 0.29rem;
        font-weight: 400;
      }
      .season-desc {
        width: 3.42rem;
        padding-left: 0.1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #aaa;
        font-size: 0.25rem;
      }
      .season-price {
        width: 0.88rem;
        height: 0.4rem;
        padding: 0.1rem;
        color: #ff7400;
        font-size: 0.4rem;
        font-weight: 700;
        line-height: 0.4rem;
      }
    }
  }
}
</style>
