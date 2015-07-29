var $carousel = $('#carousel-container');
var dataIndex = 0;

//  populate starting items
for(var i = 0; i < 5; i++) {
  addItem();
}

function addItem(){
  // loop items when reaching end
  if(dataIndex >= carouselData.length) {
    dataIndex = 0;
  }
  $carousel.append(carouselData[dataIndex++]);
};

// add item to the end every two seconds
setInterval(addItem, 2000);
