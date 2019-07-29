<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/">
        <div class="iconfont back-icon">
          &#xe676;
        </div>
      </router-link>
    </div>
    <div class="header-input">
      <span class="iconfont">
        &#xe67b;
      </span>
      输入城市景点/游玩主题</div>
    <router-link to='/city'>
      <div class="hedaer-right">城市
        <span class="iconfont city-icon">
          &#xe67a;
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: #00bcd4;
  color: #fff;
  line-height: 0.86rem;
  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;
    .back-icon {
      font-size: 25px;
      text-align: center;
      color: white;
    }
  }
  .header-input {
    flex: 1;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    height: 0.64rem;
    color: #ccc;
    line-height: 30px;
    font-size: 15px;
    padding-left: 5px;
  }
  .hedaer-right {
    width: 62px;
    float: right;
    text-align: center;
    line-height: 42px;
    color: white;
    .city-icon {
      font-size: 15px;
    }
  }
}
</style>
