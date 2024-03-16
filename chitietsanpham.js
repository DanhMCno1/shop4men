var prevScrollpos = window.pageYOffset;
var scrollIntro = document.querySelector('.intro-box');
var scrollHeadingBox = document.querySelector('.heading-box')
var scrollHeading = document.querySelector('.heading')
var scrollSeenProduct = document.querySelector('.category-seen-product')
var fixedImg = document.querySelector('.img-view-others')
var fixedInfo = document.querySelector('.detail-info-good')

window.onscroll = function() {
  scrollButton() 
  scrollButton2()
}

let myButton = document.querySelector('.button-scroll-on-top');

function scrollButton() {
  if (document.body.scrollTop > 720 || document.documentElement.scrollTop > 720 ) {
    myButton.classList.remove('js-none');
  } else {
    myButton.classList.add('js-none');
  }
}
// When the user clicks on the button, scroll to the top of the document
  myButton.addEventListener('click', function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
})

function scrollButton2() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollHeadingBox.classList.add('active-box-color');
    scrollHeading.classList.add('active');
    fixedInfo.classList.add('active-detail-info');
    fixedImg.classList.add('active-detail-img');
  } else {
    scrollHeadingBox.classList.remove('active-box-color');
    scrollHeading.classList.remove('active');
    fixedInfo.classList.remove('active-detail-info');
    fixedImg.classList.remove('active-detail-img')
  }
}


