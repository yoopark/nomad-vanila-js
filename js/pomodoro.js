"use strict";

const pomodoro = document.querySelector(".pomodoro");
const pomodoroTimer = document.querySelector(".pomodoro__timer");
const pomodoroTimerBtn = document.querySelector(".pomodoro__timer-btn");

let time = 25*60; // 기본 25분
let timerFunc; // 전역변수로 선언해야 clearInterval이 되네... 왜지

function togglePomodoroTimerBtn() {
	const h2 = document.querySelector(".pomodoro > h2");
	
	if (pomodoroTimerBtn.value === "NO") {
		pomodoroTimerBtn.value = "YES";
		pomodoroTimerBtn.innerText = "Stop";
		h2.innerText = "Focus";
		timerFunc = setInterval(() => {
			if (time === 0) {
				clearInterval(timerFunc);
				return;
			}
			time--;
			const min = String(Math.floor(time/60)).padStart(2, "0");
			const sec = String(time%60).padStart(2, "0");
			pomodoroTimer.innerText = `${min}:${sec}`;
		}, 1000);
	} else {
		pomodoroTimerBtn.value = "NO";
		pomodoroTimerBtn.innerText = "Start";
		h2.innerText = "Time to focus.";
		clearInterval(timerFunc);
	}
}

function togglePomodoro() {
	
	if (focusTodayPomodoroBtn.value === "NO") {
		focusTodayPomodoroBtn.value = "YES";
		clock.classList.add(HIDDEN_CLASSNAME);
		greeting.classList.add(HIDDEN_CLASSNAME);
		pomodoro.classList.remove(HIDDEN_CLASSNAME);
		pomodoro.style.display = "flex";
		
		pomodoroTimerBtn.addEventListener("click", togglePomodoroTimerBtn);
		
	} else {
		focusTodayPomodoroBtn.value = "NO";
		pomodoro.style.display = "none";
		clock.classList.remove(HIDDEN_CLASSNAME);
		greeting.classList.remove(HIDDEN_CLASSNAME);
		pomodoro.classList.add(HIDDEN_CLASSNAME);
	}
	
}


