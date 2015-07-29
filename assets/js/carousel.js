var $carousel = $('#carousel');

var html = "<div>";
for(var i = 0; i < carouselData.length; i++) {
  html += '<span class="carousel-item">'+carouselData[i]+'</span>';
}
html += "</div>";
$carousel.append(html);
