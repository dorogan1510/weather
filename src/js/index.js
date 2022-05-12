let weather = {
  apiKey: '0a459844d6c6a4198eced6bca14c1ca9',
  fetchWeather: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=metric&appid=' +
        this.apiKey
    )
      .then(response => response.json())
      .then(data => this.displayWeather(data))
      .catch(error => alert('Incorrect city'))
  },
  displayWeather: function (data) {
    const { name } = data
    const { icon, description } = data.weather[0]
    const { temp, humidity } = data.main
    const { speed } = data.wind

    document.querySelector('.widget__selectedCity').innerText = name
    document.querySelector('.widget__gradesTemp').innerText = Math.trunc(temp)
    document.querySelector('.widget__descriptionWeather').innerText =
      description
    document.querySelector('.widget__speedWeather').innerText =
      'Wind ' + Math.trunc(speed) + ' km/h'
    document.querySelector('.widget__humidity').innerText =
      'Humidity ' + humidity + ' %'
    document.querySelector('.widget__icon').src =
      'http://openweathermap.org/img/wn/' + icon + '@2x.png'
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')"
    // document.querySelector('.widget__img').style.backgroundImage =
    //   "url('https://source.unsplash.com/1280x720/?" + name + "')"

    // if (description == 'clear sky') {
    //   document.querySelector('.widget__img').style.backgroundImage =
    //     "url('./src/img/clear_sky.webp')"
    // }
    // if ((description == 'few clouds') | 'scattered clouds') {
    //   document.querySelector('.widget__img').style.backgroundImage =
    //     "url('./src/img/clouds.gif')"
    // }
    // if (description == 'broken clouds') {
    //   document.querySelector('.widget__img').style.backgroundImage =
    //     "url('./src/img/broken_clouds.gif')"
    // }
    // if ((description == 'shower rain') | 'rain' | 'heavy intensity rain') {
    //   document.querySelector('.widget__img').style.backgroundImage =
    //     "url('./src/img/rain.gif')"
    // }
    // if (description == 'thunderstorm') {
    //   document.querySelector('.widget__img').style.backgroundImage =
    //     "url('./src/img/thunderstorm.gif')"
    // }
    // if (description == 'snow') {
    //   document.querySelector('.widget__img').style.backgroundImage =
    //     "url('./src/img/snow.gif')"
    // }
    // if (description == 'mist') {
    //   document.querySelector('.widget__img').style.backgroundImage =
    //     "url('./src/img/mist.gif')"
    // }
  },

  search: function () {
    this.fetchWeather(
      document.querySelector('.widget__cityChanger__input').value
    )
  },
}

document
  .querySelector('.widget__cityChanger__btn')
  .addEventListener('click', function () {
    weather.search()
  })

document
  .querySelector('.widget__cityChanger__input')
  .addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
      weather.search()
    }
  })

weather.fetchWeather('Moscow')
