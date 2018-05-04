/* Flex Direction */
$('.row-radio').click(function(){
  $('.flex-box').removeClass('row-reverse column column-reverse').addClass('row');
});

$('.row-reverse-radio').click(function(){
  $('.flex-box').removeClass('row column column-reverse').addClass('row-reverse');
});

$('.column-radio').click(function(){
  $('.flex-box').removeClass('row row-reverse column column-reverse').addClass('column');
});

$('.column-reverse-radio').click(function(){
  $('.flex-box').removeClass('row row-reverse column').addClass('column-reverse');
});

/* Justify Content */
$('.flex-start-radio').click(function(){
  $('.flex-box').removeClass('flex-end space-between center space-around').addClass('flex-start');
});

$('.flex-end-radio').click(function(){
  $('.flex-box').removeClass('flex-start space-between center space-around').addClass('flex-end');
});

$('.space-between-radio').click(function(){
  $('.flex-box').removeClass('flex-start flex-end center space-around').addClass('space-between');
});

$('.center-radio').click(function(){
  $('.flex-box').removeClass('flex-start flex-end space-between space-around').addClass('center');
});


$('.space-around-radio').click(function(){
  $('.flex-box').removeClass('flex-start flex-end space-between center').addClass('space-around');
});