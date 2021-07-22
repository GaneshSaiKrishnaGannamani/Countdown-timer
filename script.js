const daysL= document.getElementById("days");
const hoursL= document.getElementById("hours");
const minsL= document.getElementById("mins");
const secsL= document.getElementById("secs");

// we can change the date that we required
const ipDate="24 nov 2021";

function clock(){

const givenDate = new Date(ipDate) ;
const currentDate = new Date();


const totalSeconds = (givenDate - currentDate) / 1000;

const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor(totalSeconds / 3600) % 24;
const mins = Math.floor(totalSeconds / 60) % 60;
const seconds = Math.floor(totalSeconds) % 60;

daysL.innerHTML = days;
hoursL.innerHTML = formatTime( hours);
minsL.innerHTML =  formatTime(mins);
secsL.innerHTML =  formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

clock();

setInterval(clock , 1000);



