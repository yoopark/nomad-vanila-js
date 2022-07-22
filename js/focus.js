const focusInput = document.querySelector(".focus-form > input");
const focusTodayH = document.querySelector(".focus-today-h");
const focusToday = document.querySelector(".focus-today");
const checkbox = document.querySelector(".focus-today > input");
const span = document.querySelector(".focus-today > span");
const focusTodayDeleteBtn = document.querySelector(".focus-today__delete-btn");
const focusTodayPomodoroBtn = document.querySelector(".focus-today__pomodoro-btn");

const FOCUS_KEY = "focus";

let focusObj = null;

function toggleFocusToday(event) {
	if (event.currentTarget.checked) {
		span.style.textDecoration = "line-through";
		focusObj.checked = true;
	} else {
		span.style.textDecoration = null;
		focusObj.checked = false;
	}
	localStorage.setItem(FOCUS_KEY, JSON.stringify(focusObj));
}

function deleteFocusToday() {
	checkbox.checked = false;
	span.style.textDecoration = null;
	localStorage.removeItem(FOCUS_KEY);
	focusH.classList.remove(HIDDEN_CLASSNAME);
	focusForm.classList.remove(HIDDEN_CLASSNAME);
	focusTodayH.classList.add(HIDDEN_CLASSNAME);
	focusToday.classList.add(HIDDEN_CLASSNAME);
}

function paintFocus(focusObj) {
	focusH.classList.add(HIDDEN_CLASSNAME);
	focusForm.classList.add(HIDDEN_CLASSNAME);
	focusTodayH.classList.remove(HIDDEN_CLASSNAME);
	focusToday.classList.remove(HIDDEN_CLASSNAME);

	span.innerText = focusObj.text;
	if (focusObj.checked) {
		checkbox.checked = true;
		span.style.textDecoration = "line-through";
	}
	
	checkbox.addEventListener("change", toggleFocusToday);
	focusTodayDeleteBtn.addEventListener("click", deleteFocusToday);
	focusTodayPomodoroBtn.addEventListener("click", togglePomodoro);
}

function handleFocus(event) {
	event.preventDefault();
	const s = focusInput.value;
	focusInput.value = "";
	
	focusObj = {
		text: s,
		checked: false
	};
	
	localStorage.setItem(FOCUS_KEY, JSON.stringify(focusObj));
	paintFocus(focusObj);
}

focusForm.addEventListener("submit", handleFocus);

const savedFocus = localStorage.getItem(FOCUS_KEY);
if (savedFocus !== null) {
	const parsedFocus = JSON.parse(savedFocus);
	focusObj = parsedFocus;
	paintFocus(focusObj);
}