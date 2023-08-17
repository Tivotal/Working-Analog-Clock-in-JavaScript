/* Created by Tivotal */

let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".minute");
let secHand = document.querySelector(".second");

let updateTime = () => {
  //getting current time and calculating degrees for hands
  let date = new Date(),
    secDeg = (date.getSeconds() / 60) * 360,
    minDeg = (date.getMinutes() / 60) * 360,
    hourDeg = (date.getHours() / 12) * 360;

  //rotating clock hands according current time degrees we got
  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
};

//calling updateTime function
updateTime();

//calling updateTime function for every 1 second
setInterval(updateTime, 1000);
