const api_key = '83cf65e2261046164835634fd57b6f31';
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => display(data))


}
const setinnertext = (id, text) => {
    document.getElementById(id).innerText = text;
}

const display = temperature => {
    console.log(temperature);
    setinnertext('city', temperature.name);
    setinnertext('temperature', temperature.main.temp);
    setinnertext('condition', temperature.weather[0].main);

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imag = document.getElementById('weather-icon').setAttribute('src', url);
}