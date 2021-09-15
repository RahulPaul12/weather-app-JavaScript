




const api_key = '83cf65e2261046164835634fd57b6f31';
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    spinner('block', 'none');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => display(data))


}
const spinner = (style, style1) => {
    document.getElementById('spinner').style.display = style;
    document.getElementById('display').style.display = style1;
}
const d = new Date();
const date = document.getElementById('date').innerHTML = d.toDateString();



const setinnertext = (id, text) => {
    document.getElementById(id).innerText = text;
}

const display = temperature => {
    console.log((temperature.timezone) / 3600);

    setinnertext('city', temperature.name);
    setinnertext('temperature', temperature.main.temp);
    setinnertext('condition', temperature.weather[0].main);

    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imag = document.getElementById('weather-icon').setAttribute('src', url);
    const srdth = new Date((temperature.sys.sunrise + temperature.timezone) * 1000).getUTCHours();
    const srdtm = new Date((temperature.sys.sunrise + temperature.timezone) * 1000).getUTCMinutes();

    const ssdth = new Date((temperature.sys.sunset + temperature.timezone) * 1000).getUTCHours() - 12;
    const ssdtm = new Date((temperature.sys.sunset + temperature.timezone) * 1000).getMinutes();
    setinnertext('hourssr', srdth);
    setinnertext('minutesr', srdtm);
    setinnertext('hoursss', ssdth);
    setinnertext('minutess', ssdtm);

    spinner('none', 'block');
}
