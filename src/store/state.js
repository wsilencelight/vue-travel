let defaultCity = '南京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {
  console.log('localStorage can not be used')
}

export default {
  city: defaultCity
}
