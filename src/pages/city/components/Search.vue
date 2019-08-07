<template>
  <div>
    <div class="search">
      <input type="text"
             name=""
             id=""
             class="search-input"
             placeholder="请输入城市名或者拼音"
             v-model="keyWord" />
    </div>

    <div class="search-content"
         ref="search"
         v-show="keyWord">
      <ul>
        <li class="search-item border-bottom"
            v-for="(item,i) in list"
            :key="i"
            @click="selectCity(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom"
            v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, { click: true })
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          // 循环循环city里的键值
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    selectCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
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
.search-content {
  position: absolute;
  top: 1.7rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
  border-radius: 0.1rem;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background-color: white;
  }
}
.border-bottom::before {
  border-color: #ccc;
}
.border-bottom::after {
  border-color: #ccc;
}
</style>
