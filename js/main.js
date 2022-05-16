const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('active')
});

const locationLabel = document.querySelector('label[for="location"]');

locationLabel.addEventListener('click', () => {
  locationLabel.nextElementSibling.classList.toggle('visually-hidden')
})