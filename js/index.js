import { getWeatherDataCurrent } from "./api.js";
import { getWeatherDataPeriod } from "./api.js";
import { getWeatherDataNextDays } from "./api.js";
import { manageSpot } from "./appCity.js";
import { createContent } from "./appContent.js";
import { DateCurrent, nextThreeDays } from "./appDate.js";


const app = async() => {
    nextThreeDays();

    DateCurrent();

    const weatherCurrent = await getWeatherDataCurrent(JSON.parse(localStorage.getItem('city')) || 'Madrid');

    const weatherPerioud = await getWeatherDataPeriod(JSON.parse(localStorage.getItem('city')) || 'Madrid');
    
    const weatherPerioudNextDays = await getWeatherDataNextDays(JSON.parse(localStorage.getItem('city')) || 'Madrid');

    const buttonCityName = document.querySelector('.header__choice');

    buttonCityName.innerHTML = JSON.parse(localStorage.getItem('city'));

    const generateUI = createContent(weatherCurrent, weatherPerioud, 
    weatherPerioudNextDays);

    manageSpot();
};

app();
