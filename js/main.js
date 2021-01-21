

//Toggle burguer animacion
const menuBtn = document.querySelector('.animated-icon1');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


$('.dropdown').on('hidden.bs.dropdown', function(e) {
  
  $(".rotate").toggleClass('down');
});

$('.dropdown').on('shown.bs.dropdown', function(e) {
  
  $(".rotate").toggleClass('down');
});


//Cambiar src img
/*
$(document).ready(function() {
  if($(window).width() > 992) {
      $("#imgPrincipal").attr("src", "/img/principal_2.jpg");
  } else {
      $("#imgPrincipal").attr("src", "/img/principal_2_mini.jpg");
  }
}); */