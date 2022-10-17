export const getWeatherDataCurrent = async (city) => {
    try{ 
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1b0fbcb9e5d21bbd3527fb9bcf442e2&lang=en&units=metric`);

        return await response.json();
    }catch (error) {
        console.log(error);
    }
};

export const getWeatherDataPeriod = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=4&appid=4563e3bb894ec61ca04e89740b886ef2&lang=en&units=metric`);

        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

export const getWeatherDataNextDays = async (city) => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=98c64624761044baaea152411221510&q=${city}&days=3&aqi=no&alerts=no`);

        return await response.json();
    } catch (error) {
        console.log(error);

    }
};




