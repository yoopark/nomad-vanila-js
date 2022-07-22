"use strict";

const images = ["11.jpg", "12.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const src = `img/${chosenImage}`;
document.body.style.background = `url('${src}') center no-repeat`;
document.body.style.backgroundSize = "cover";