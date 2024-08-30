const quoteText = document.querySelector('.quotes');
const author = document.querySelector('.author');
const quoteBtn = document.getElementById('get-quotes');
const img = document.querySelector('.img');
const url = "https://api.quotable.io/random";

// Array of images to cycle through
const images = [
  'images/img-01.jpg',
  'images/img-02.jpg',
  'images/img-03.jpg',
  'images/img-04.jpg',
  'images/img-05.jpg',
  'images/img-06.jpg',
  'images/img-07.jpg',
  'images/img-08.jpg',
  'images/img-09.jpg',
  'images/img-10.jpg',
  'images/img-11.jpg',
  'images/img-12.jpg',
  'images/img-13.jpg',
  'images/img-14.jpg',
  'images/img-15.jpg',
  'images/img-16.jpg',
  'images/img-17.jpg',
  'images/img-18.jpg',
  'images/img-19.jpg',
  'images/img-20.jpg',
  'images/img-21.jpg',
  'images/img-22.jpg',
  'images/img-23.jpg',
  'images/img-24.jpg',
  'images/img-25.jpg',
  'images/img-26.jpg',
  'images/img-27.jpg',
  'images/img-28.jpg',
  'images/img-29.jpg',
  'images/img-30.jpg',
  'images/img-31.jpg',
  'images/img-32.jpg',
  'images/img-33.jpg',
  'images/img-34.jpg',
  'images/img-35.jpg',
  // Add as many images as you want
];

let currentImageIndex = 0;

let getQuote = () => {
  fetch(url)
    .then(data => data.json())
    .then((item) => {
      quoteText.innerText = item.content;
      author.innerText = item.author;

      // Change the background image
      img.style.backgroundImage = `url(${images[currentImageIndex]})`;

      // Update the image index
      currentImageIndex = (currentImageIndex + 1) % images.length;
    });
}

// Load a quote and image when the page loads
window.addEventListener('load', getQuote);

// Change quote and image when the button is clicked
quoteBtn.addEventListener('click', getQuote);