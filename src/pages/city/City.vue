<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities"
               :hot="hotCities"
               :letter="letter"></city-list>
    <city-alphabet :cities="cities"
                   @change="handLetterClick"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet

  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  created () {
    this.getCityList()
  },
  methods: {
    getCityList () {
      this.$axios.get('/cityList').then((response) => {
        if (response.data.ret === true) {
          this.cities = response.data.data.cities
          this.hotCities = response.data.data.hotCities
        }
      })
    },
    handLetterClick (letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
