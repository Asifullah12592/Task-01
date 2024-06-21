let currentIndex = 0;

function navigate(direction) {
  const gallery = document.querySelector('.gallery');
  const images = document.querySelectorAll('.gallery-image');
  const totalImages = images.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  } else if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  gallery.style.transform = `translateX(${offset}%)`;
}
