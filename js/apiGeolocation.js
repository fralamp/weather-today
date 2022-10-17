import { getWeatherDataCurrent, 
        getWeatherDataNextDays, 
        getWeatherDataPeriod } from "./api.js";
import { updateCity } from "./appCity.js";
import { createContent } from "./appContent.js";



export const handleWeatherByGeolocation = () => {
    const options = {
        enableHighAccuracy: true, 
        timeout: 5000, 
        maximumAge: 0
    };
    
    const success = async (pos) => {
        const crd = pos.coords;

        const response = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&lang=en&apiKey=e5fa3a876d914845bee96ed595abadf5`
        );

        const result = await response.json();

        const data = result.features[0].properties.city;

        const weatherCurrent = await getWeatherDataCurrent(data);

        const weatherPerioud = await getWeatherDataPeriod(data);

        const weatherThreeDays = await getWeatherDataNextDays(data); // передаём из объекта значение города
        
        localStorage.setItem('city', JSON.stringify(data));

        updateCity(data);

        createContent(weatherCurrent,weatherPerioud, weatherThreeDays);
    };

    const error = (err) => {
        console.log(err.code + ' ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options); //метод позволяет получить данные пользователя (долгота и широта)
};