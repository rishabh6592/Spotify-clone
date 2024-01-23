var album = document.querySelectorAll(".album")
var hover = document.querySelectorAll(".play-hover-button")

// album.addEventListener("mouseenter",function(){
//     hover.style.opacity = "1"
// })
// album.addEventListener("mouseleave",function(){
//     hover.style.opacity = "0"
// })






album.forEach(function(album) {
    album.addEventListener('mouseenter', function() {
      album.style.opacity = "1"
    });
  });

  hover.forEach(function(hover) {
    hover.addEventListener('mouseenter', function() {
      hover.style.opacity = "1"
    });
  });

  hover.forEach(function(hover) {
    hover.addEventListener('mouseleave', function() {
      hover.style.opacity = "0"
    });
  });





// for social-media-links-------------------------------

// var insta = document.querySelector(".instagram")
// var twit = document.querySelector(".twitter")
// var fb = document.querySelector(".facebook")

// insta.addEventListener("click",function(){
//   insta.style.textdecoration = "underline"
// })