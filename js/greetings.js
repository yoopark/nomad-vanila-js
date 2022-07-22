const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form > input");
const greeting = document.querySelector(".greeting");
const focusH = document.querySelector(".focus-h");
const focusForm = document.querySelector(".focus-form");

const toDoForm = document.querySelector(".todo__form")
const toDoLabel = document.querySelector(".todo-label");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
	event.preventDefault(); // 새로고침 방지
	loginForm.classList.add(HIDDEN_CLASSNAME);

	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);

	toDoForm.classList.remove(HIDDEN_CLASSNAME);
	toDoLabel.classList.remove(HIDDEN_CLASSNAME);
	focusH.classList.remove(HIDDEN_CLASSNAME);
	focusForm.classList.remove(HIDDEN_CLASSNAME);
}

function getMorningSth() {
	hours = (new Date()).getHours();
	if (6 <= hours && hours < 12) {
		return "Morning";
	} else if (12 <= hours && hours < 18) {
		return "Afternoon";
	} else {
		return "Evening";
	}
}
	
function paintGreetings(username) {
	s = getMorningSth();
	greeting.innerText = `Good ${s}, ${username}.`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	toDoForm.classList.remove(HIDDEN_CLASSNAME);
	toDoLabel.classList.remove(HIDDEN_CLASSNAME);
	focusH.classList.remove(HIDDEN_CLASSNAME);
	focusForm.classList.remove(HIDDEN_CLASSNAME);
	paintGreetings(savedUsername);
}