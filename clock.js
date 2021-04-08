setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-min-hand]')
const secHand = document.querySelector('[data-sec-hand]')

function setClock(){
    const currDate = new Date();
    const secondRatio = currDate.getSeconds()/60;
    const minRatio = (secondRatio+ currDate.getMinutes())/60;
    const hourRatio = (minRatio+currDate.getHours())/12;
    setRotation(secHand,secondRatio);
    setRotation(minHand,minRatio);
    setRotation(hourHand,hourRatio);
}
function setRotation(element, rotationRato)
{
    element.style.setProperty('--rotation',rotationRato*360);
}
setClock();