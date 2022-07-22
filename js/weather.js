function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=kr&units=metric`

	fetch(url)
		.then(response => response.json())
		.then(data => {
		const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
		const weatherImage = document.querySelector(".weather__container > img");
		const temp = document.querySelector(".weather__temp");
		const city = document.querySelector(".weather__city");

		weatherImage.src = iconUrl;
		temp.innerText = `${Math.floor(data.main.temp*10)/10}°`;
		city.innerText = `${data.name}`;
	});
}

function onGeoError() {
	alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);