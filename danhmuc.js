var prevScrollpos = window.pageYOffset;
var scrollIntro = document.querySelector('.intro-box');
var scrollHeadingBox = document.querySelector('.heading-box')
var scrollHeading = document.querySelector('.heading')
var scrollSeenProduct = document.querySelector('.category-seen-product')

window.onscroll = function() {
  scrollButton() 
  scrollButton2()
  scrollButton3()
}

let myButton = document.querySelector('.button-scroll-on-top');

function scrollButton() {
  if (document.body.scrollTop > 720 || document.documentElement.scrollTop > 720 ) {
    myButton.classList.remove('js-none');
    scrollSeenProduct.classList.add('seen-goods-fixed')
  } else {
    myButton.classList.add('js-none');
    scrollSeenProduct.classList.remove('seen-goods-fixed')
  }
}
// When the user clicks on the button, scroll to the top of the document
  myButton.addEventListener('click', function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
})

function scrollButton2() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollHeadingBox.classList.add('active-box-color')
    scrollHeading.classList.add('active')
  } else {
    scrollHeadingBox.classList.remove('active-box-color');
    scrollHeading.classList.remove('active');
  }
}


function scrollButton3() {
  if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000 ) {
    scrollSeenProduct.style.position = "absolute"
  } else {
    scrollSeenProduct.style.position = null
  }
}






