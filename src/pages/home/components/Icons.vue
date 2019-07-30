<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,i) in pages"
                    :key="i">
        <div class="icon"
             v-for="item in page"
             :key="item.id">
          <div class="icon-img">
            <img class="icon-imgContent"
                 :src="item.imgUrl">
          </div>
          <div class="icon-desc">
            <p>{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconList: []
    }
  },
  created () {
    this.getIconsList()
  },
  methods: {
    getIconsList () {
      this.$axios.get('/iconList').then(response => {
        if (response.data.status === 0) {
          this.iconList = response.data.message
        }
      })
    }

  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        // 当前图标轮播的页面
        const page = Math.floor(index / 8)
        // 如果只有一页，pages数组为一组
        if (!pages[page]) {
          pages[page] = []
        }
        // 将iconList遍历的对象加入到pages这一数组中
        pages[page].push(item)
      })
      return pages
    }
  }

}
</script>

<style lang="scss" scoped>
.icons /deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icons {
  .icon {
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    position: relative;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      .icon-imgContent {
        height: 100%;
        display: block;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 1px;
      }
    }
    .icon-desc {
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      position: absolute;
      width: 90px;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      font-size: 13px;
      color: #333;
    }
  }
}
</style>
