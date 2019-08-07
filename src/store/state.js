if (localStorage.getItem('city')) {
  var city = JSON.parse(localStorage.getItem('city'))
} else {
  city = '广州'
}
export default {
  city: city
}
