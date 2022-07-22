"use strict";

const clock = document.querySelector(".clock");

function getClock() {
	const date = new Date();
	const hour = date.getHours();
	const min = String(date.getMinutes()).padStart(2, "0");
	
	clock.innerText = `${hour}:${min}`
}

getClock();
setInterval(getClock, 1000);