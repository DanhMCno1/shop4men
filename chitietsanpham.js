var prevScrollpos = window.pageYOffset;
var scrollIntro = document.querySelector('.intro-box');
var scrollHeadingBox = document.querySelector('.heading-box')
var scrollHeading = document.querySelector('.heading')
var scrollSeenProduct = document.querySelector('.category-seen-product')
var fixedImg = document.querySelector('.img-view-others')
var fixedInfo = document.querySelector('.detail-info-good')
var fixedImgEnlarge = document.querySelector('.img-views-enlarge')

var reviewOder = document.querySelector('.detail-info-product-box-review')
var modal = document.querySelector('.modal')
var buttonOderRightNow = document.querySelector('.order_right_now')
var active = document.querySelector('.active')



const closedReviews = document.querySelectorAll("div.closed")


// when click button Oder Right Now , 1 tab review product appear 
buttonOderRightNow.addEventListener('click', function() {
  reviewOder.classList.remove('js-none')
  modal.classList.remove('js-none')
})

modal.addEventListener('click', function() {
  reviewOder.classList.add('js-none')
  modal.classList.add('js-none')
})



window.onscroll = function() {
  scrollButton() 
  scrollButton2()
  scrollButton3()
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
    fixedImgEnlarge.style.margin = " 0 0 0 108px";
  } else {
    scrollHeadingBox.classList.remove('active-box-color');
    scrollHeading.classList.remove('active');
    fixedInfo.classList.remove('active-detail-info');
    fixedImg.classList.remove('active-detail-img')
    fixedImgEnlarge.style.margin = "0"
  }
}

// Bỏ fixed 2 khung ảnh và info khi lướt quá 4500
function scrollButton3() {
  if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000 ) {
    fixedImg.style.position = "absolute"
    fixedInfo.style.position = "absolute"

  } else {
    fixedImg.style.position = null
    fixedInfo.style.position = null
  }
}


