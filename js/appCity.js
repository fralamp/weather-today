import {
     getWeatherDataCurrent, 
     getWeatherDataNextDays,
     getWeatherDataPeriod } from "./api.js";

import { handleWeatherByGeolocation } from "./apiGeolocation.js";

import { createContent } from "./appContent.js";
import { showError } from "./helper.js";


export const manageSpot = () => {
    const container = document.querySelector('.header__button-group');
    const buttonCityName = document.querySelector('.header__choice');
    const inputCityName = document.querySelector('.header__input');
    const buttonOk = document.querySelector('.header__btn-accept');

    buttonCityName.addEventListener('click', () => {
        container.classList.add('header__button-group--active');
    })

    buttonOk.addEventListener('click', async () => {
        const city = inputCityName.value.trim();

        if (!city){
            return;
        };

        try {
            const weatherCurrent = await getWeatherDataCurrent (city);
            const weatherPerioud = await getWeatherDataPeriod(city);
            const weatherPerioudNextDays = await getWeatherDataNextDays(city);

            if (weatherCurrent.message ||
                weatherPerioud.message) {
                showError(weatherPerioud.message);
                return;
            }

            console.log(weatherPerioudNextDays)            
            const generateUI = createContent(weatherCurrent, weatherPerioud, weatherPerioudNextDays);

            localStorage.setItem('city', JSON.stringify(city))

            buttonCityName.textContent = inputCityName.value;
            
            container.classList.remove('header__button-group--active');
            
            inputCityName.value = '';

        } catch (error) {
            console.log(error);
        };

    });


    window.addEventListener('click', (e) => {
        if (e.target == buttonOk || 
            e.target == inputCityName || 
            e.target == container || 
            e.target == buttonCityName) {
            return;
        } else {
            container.classList.remove('header__button-group--active');
            inputCityName.value = '';
        };
    });

    const btn = document.querySelector('.header__geolocation');

    btn.addEventListener('click', handleWeatherByGeolocation);
};


export const  updateCity = (city) => {
    const buttonCityName = document.querySelector('.header__choice');
    buttonCityName.innerHTML = `${city}`;
};