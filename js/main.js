window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider.cats'), {
        slidesToShow: 5,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
    })
});

const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('active')
});