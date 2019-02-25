
$(document).ready(function() {
  $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    var path = $('.active').find('img').attr('src');
    document.getElementById('modalImg').src=path;
  });
});

