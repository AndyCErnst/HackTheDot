var $carousel = $('#carousel');
var dataIndex = 0;

//  populate starting items
// for(var i = 0; i < 5; i++) {
//   addItem();
// }

function addItem(){
  // loop items when reaching end
  if(dataIndex >= carouselData.length) {
    dataIndex = 0;
  }
  $carousel.append('<span class="carousel-item">'+carouselData[dataIndex++]+'</span>');
}

// add item to the end every two seconds
setInterval(addItem, 2000);
