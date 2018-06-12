let images = document.querySelectorAll('.image');
let next = document.querySelector('.next-image');
let previous = document.querySelector('.previous-image');
let dots = document.querySelectorAll('.dots');
let current = 0;

function start() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[0].style.display = "block";
  dots[0].className += " active";
}

function previousImage() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active","");
  }
  images[current - 1].style.display = "block";
  dots[current - 1].className += " active";
  current--;
}

function nextImage() {
  for (let i = 0; i < images.length; i++) {
    dots[i].className = dots[i].className.replace(" active","");
    images[i].style.display = "none";
  }
  images[current + 1].style.display = "block";
  dots[current + 1].className += " active";
  current++;
}

previous.addEventListener("click", function() {
  if (current === 0) {
    current = images.length;
  }
  previousImage();
});

next.addEventListener("click", function() {
  if (current === images.length - 1) {
    current = -1;
  }
  nextImage();
});

start();

