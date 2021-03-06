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
        document.querySelector('.widget__gradesTemp').innerText =
            Math.trunc(temp)
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
