"use strict";

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form > input");

function handleSearch(event) {
	event.preventDefault();
	const s = searchInput.value;
	searchInput.value = "";
	location.href = `https://www.google.com/search?q=${s}`
}

searchForm.addEventListener("submit", handleSearch);