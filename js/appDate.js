export const nextThreeDays = () => {
    const today = new Date();

    const days = ['Sunday', 'Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday'];  

    const weekdayText = days.filter(function weekday(item, index) {
        const next = today.getDay();
        return index == next + 1 || 
               index == next + 2 || 
               index == next + 3;
    });

    const elementsHtml = document.querySelectorAll('.weather__day-week');

    for (let j = 0; j < elementsHtml.length; j++) {
        elementsHtml[j].innerHTML = weekdayText[j];
    };

};


export const DateCurrent = () => {
    const currentDate = new Date();
    const options = {
        month: 'short', 
        day: 'numeric' 
    };

    const date = currentDate.toLocaleDateString('en-US', options);

    const dateBlock = document.querySelector('.weather__date');

    dateBlock.textContent = `${date}`;

};