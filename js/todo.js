const toDoFormInput = document.querySelector(".todo__form > input");
const toDoList = document.querySelector(".todo__list");

const TODOS_KEY = "todos";

let toDos = []; // 주소 자체를 바꾸는 경우에 let

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 매번 append 되는게 아니라 array가 text로 바뀌어서 매번 갱신되는 것
	// localStorage에는 text밖에 저장 못하니까.
}

function deleteToDo(event) {
	const li = event.target.parentElement; // 어떤 X가 클릭되었는지 모르니까
	toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
	saveToDos();
	li.remove();
}

function toggleToDo(event) {
	const li = event.target.parentElement;
	const span = li.querySelector("span");
	if (event.currentTarget.checked) {
		toDos.forEach(toDo => {
			if (toDo.id === parseInt(li.id)) {
				toDo.checked = true;
			}
		})
		span.style.textDecoration = "line-through";
	} else {
		toDos.forEach(toDo => {
			if (toDo.id == parseInt(li.id)) {
				toDo.checked = false;
			}
		})
		span.style.textDecoration = null;
	}
	saveToDos();
}

function paintToDo(newToDoObj) {
	const li = document.createElement("li");
	li.id = newToDoObj.id; // li의 id까지 html에 추가
	const span = document.createElement("span");
	span.innerText = newToDoObj.text;
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.addEventListener("change", toggleToDo);
	if (newToDoObj.checked) {
		checkbox.checked = true;
		span.style.textDecoration = "line-through";
	}
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteToDo);

	li.appendChild(checkbox);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDoFormInput.value;
	toDoFormInput.value = "";
	
	const newToDoObj = {
		text: newToDo,
		id: Date.now(), // 밀리초 단위
		checked: false
	};
	
	toDos.push(newToDoObj);
	saveToDos();
	paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo); // Good! 짰던 함수 활용.
	// forEach : 인자로 array의 각 요소를 하나씩 집어넣음.
}