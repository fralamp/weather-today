export const createContent = async(dataCurrent, dataPerioud, dataThreeDays) => {
    generateCentralImgWeather(dataCurrent);
    showCurrentTemperature(dataCurrent);
    minMaxTemperature(dataCurrent);
    cloudyWeather(dataCurrent);
    humidityWeather(dataCurrent);
    windyWeather(dataCurrent);
    intervalWeather(dataPerioud);
    intervalTime(dataPerioud);
    imageWeather(dataPerioud);
    imageNextThreeDays(dataThreeDays);
    temperatureNextThreeDays(dataThreeDays);
};


const generateCentralImgWeather = (data) => {
    const centralImg = document.querySelector('.weather__image-today');
    const weather = data.weather[0].main;

    if(weather == 'Drizzle'){
        centralImg.src = '../img/weather/drizzle.png';
    }

    if(weather == 'Clouds'){
        centralImg.src = '../img/weather/cloudy.png';
    }

    if(weather == 'Rain'){
        centralImg.src = '../img/weather/rain.png';
    }

    if(weather == 'Snow'){
        centralImg.src = '../img/weather/snow.png';
    }

    if(weather == 'Thunderstorm'){
        centralImg.src = '../img/weather/storm.png';
    }

    if(weather == 'Mist' || 
       weather == 'Smoke' || 
       weather == 'Haze' || 
       weather == 'Squall' || 
       weather == 'Tornado' ||
       weather == 'Ash' || 
       weather == 'Sand'){
        centralImg.src = '../img/weather/mist.png';
    }

    if(weather == 'Clear'){
        centralImg.src = '../img/weather/sun.png';
    }

};

const minMaxTemperature = (data) => {
    const maxTemperature = Math.round(data.main.temp_max);

    const minTemperature =  Math.round(data.main.temp_min);

    const minTemperatureBlock = document.querySelector('.weather__range-min');

    const maxTemperatureBlock = document.querySelector('.weather__range-max');

    minTemperatureBlock.textContent = `Max.: ${minTemperature}°C`;

    maxTemperatureBlock.textContent = `Min.: ${maxTemperature}°C`;
};

const showCurrentTemperature = (data) => {
    const currentTemperature = Math.round(data.main.temp);

    const temperatureBlock = document.querySelector('.weather__temperatuer');

    temperatureBlock.textContent = `${currentTemperature}°`;
};


const windyWeather = (data) => {
    const windyData = Math.round(data.wind.speed);

    const windyBlock = document.querySelector('.weather__windy');

    windyBlock.textContent = `${windyData} m/s`;
};


const cloudyWeather = (data) => {
    const cloudyData = data.clouds.all;

    const cloudyBlock = document.querySelector('.weather__cloudy');

    cloudyBlock.textContent = `${cloudyData} %`;
};

const humidityWeather = (data) => {
    const humidityData = data.main.humidity;

    const humidityBlock = document.querySelector('.weather__humidity');

    humidityBlock.textContent = `${humidityData} %`;
};



const intervalWeather = (data) => {
    const listTemperature = data.list;
    const elementsHtml = document.querySelectorAll('.weather__temperature');

    for (let i = 0; i < elementsHtml.length; i++) {
        elementsHtml[i].innerHTML  = Math.round(listTemperature[i].main.temp)  + ' °C';
    };
};


const intervalTime = (data) => {
    const elementsHtml = document.querySelectorAll('.weather__time');

    const listTime = data.list;

    const editTime = listTime.map(function (element) {
        return element.dt_txt.substring(11, 16);
    });

    for (let i = 0; i < elementsHtml.length; i++) {
        elementsHtml[i].innerHTML = editTime[i];
    };
};


const imageWeather = (data) => {
    const elementsHtml = document.querySelectorAll('.weather__item > img');

    const listImage = data.list;

    for (let i = 0; i < elementsHtml.length; i++) {
        elementsHtml[i].src = `http://openweathermap.org/img/wn/${listImage[i].weather[0].icon}.png`;
    };
};


const imageNextThreeDays = (data) => {
    const imageBlock = document.querySelectorAll('.weather__icon-next-day');

    const dateIcon = data.forecast.forecastday;

    for(let i = 0; i < imageBlock.length; i++) {
        imageBlock[i].src = `${dateIcon[i].day.condition.icon}`;
    };
};


const temperatureNextThreeDays = (data) => {
    const temperatureFirstBlock = document.querySelectorAll('.weather__forecast-temperature > span[value="max-temp"]');

    const temperatureSecondBlock = document.querySelectorAll('.weather__forecast-temperature > span[value="min-temp"]');

    const dateMaxMinTemperature = data.forecast.forecastday;

    for(let i = 0; i < temperatureFirstBlock.length; i++) {
        temperatureFirstBlock[i].innerHTML = `${Math.round(dateMaxMinTemperature[i].day.maxtemp_c)} °C`;
    };

    for(let i = 0; i < temperatureSecondBlock.length; i++) {
        temperatureSecondBlock[i].innerHTML = `${Math.round(dateMaxMinTemperature[i].day.mintemp_c)} °C`;
    };
};