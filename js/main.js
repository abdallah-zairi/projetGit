

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function myFunction() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


$(document).ready(function () {

  $(" #myCarousel").on("slide.bs.carousel", function (e) {

    var $e = $(e.relatedTarget);

    var idx = $e.index();

    var itemsPerSlide = 3;

    var totalItems = $("#myCarousel .carousel-item").length;



    if (idx >= totalItems - (itemsPerSlide - 1)) {



      var it = itemsPerSlide - (totalItems - idx);

      for (var i = 0; i < it; i++) {

        // append slides to end

        if (e.direction === "left") {

          $("#myCarousel .carousel-item")

            .eq(i)

            .appendTo("#myCarousel .carousel-inner");

        } else {

          $("#myCarousel .carousel-item")

            .eq(0)

            .appendTo($(this).find(".carousel-inner"));

        }

      }

    }

  });

});



$(function () 
{
  var datas ;
  var img;
  
  $('#zone').html('');
  $.getJSON('https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN',
    function (file) 
    {
      for (var i = 0; i < file.data.length; i++) {
        datas = file.data[i].label;
        img = file.data[i].imagePath;
        if (datas == 'Wax') 
        {
          $('#lb').append('<p> ' + datas + '<br>' + ' ' + file.data[i].description + '<br>'+'</p>');
          $('#i1').append('<p> ' + img + '</p>');
        }
        else if(datas=='Nails'){
          $('#lb1').append('<p> ' + datas + '<br>' + ' ' + file.data[i].description +'<br>'+ '</p>');

        }
        else if(datas=='Makeup'){
          $('#lb2').append('<p> ' + datas + '<br>' + ' ' + file.data[i].description + '<br>'+'</p>');
        }
        else if(datas=='Hair'){
          $('#lb3').append('<p> ' + datas + '<br>' + ' ' + file.data[i].description + '<br>'+'</p>');
        }
        else if (datas=='Lashes and Brows'){
          $('#lb4').append('<p> ' + datas + '<br>' + ' ' + file.data[i].description +'<br>'+ '</p>');
        }

      }
    });

});
