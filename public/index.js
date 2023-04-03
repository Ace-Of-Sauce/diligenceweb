const burger =document.querySelector('#burger')
const menu =document.querySelector('#menu')

burger.addEventListener('click',()=> {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
        
    }
    
})

const card = document.querySelector('.card');
const cardImage = card.querySelector('.card-image');
const cardContent = card.querySelector('.card-content');

cardImage.addEventListener('click', function() {
  if (cardContent.classList.contains('hidden')) {
    cardContent.classList.remove('hidden');
    cardContent.classList.add('block');
  } else {
    cardContent.classList.remove('block');
    cardContent.classList.add('hidden');
  }
});


const loadMoreButton = document.getElementById('load-more');
const images = document.querySelectorAll('.image-container img');

let visibleImageCount = 3;

loadMoreButton.addEventListener('click', () => {
  visibleImageCount += 3;

  images.forEach((image, index) => {
    if (index < visibleImageCount) {
      image.classList.remove('hidden');
    } else {
      image.classList.add('hidden');
    }
  });

  if (visibleImageCount >= images.length) {
    loadMoreButton.classList.add('hidden');
  }
});
