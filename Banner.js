// Slideshow cinematic background
const images = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
];

let index = 0;
const banner = document.querySelector(".banner");

setInterval(() => {
    index = (index + 1) % images.length;
    banner.style.backgroundImage = `url("${images[index]}")`;
}, 6000);