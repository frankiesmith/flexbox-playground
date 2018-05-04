/* Flex Direction */
$('.f-d-row-radio').click(function(){
  $('.flex-box').removeClass('fd-row-reverse fd-column fd-column-reverse').addClass('fd-row');
});

$('.f-d-row-reverse-radio').click(function(){
  $('.flex-box').removeClass('fd-row fd-column fd-column-reverse').addClass('fd-row-reverse');
});

$('.f-d-column-radio').click(function(){
  $('.flex-box').removeClass('fd-row fd-row-reverse fd-column fd-column-reverse').addClass('fd-column');
});

$('.f-d-column-reverse-radio').click(function(){
  $('.flex-box').removeClass('fd-row fd-row-reverse fd-column').addClass('fd-column-reverse');
});

/* Justify Content */
$('.j-c-flex-start-radio').click(function(){
  $('.flex-box').removeClass('jc-flex-end jc-space-between jc-center jc-space-around').addClass('jc-flex-start');
});

$('.j-c-flex-end-radio').click(function(){
  $('.flex-box').removeClass('jc-flex-start jc-space-between jc-center jc-space-around').addClass('jc-flex-end');
});

$('.j-c-space-between-radio').click(function(){
  $('.flex-box').removeClass('jc-flex-start jc-flex-end jc-center jc-space-around').addClass('jc-space-between');
});

$('.j-c-center-radio').click(function(){
  $('.flex-box').removeClass('jc-flex-start jc-flex-end jc-space-between jc-space-around').addClass('jc-center');
});

$('.j-c-space-around-radio').click(function(){
  $('.flex-box').removeClass('jc-flex-start jc-flex-end jc-space-between jc-center').addClass('jc-space-around');
});

/* Align Items */
$('.ai-flex-start-radio').click(function(){
  $('.flex-box').removeClass('ai-flex-end ai-center ai-baseline ai-stretch').addClass('ai-flex-start');
});

$('.ai-flex-end-radio').click(function(){
  $('.flex-box').removeClass('ai-flex-start ai-center ai-baseline ai-stretch').addClass('ai-flex-end');
});

$('.ai-center-radio').click(function(){
  $('.flex-box').removeClass('ai-flex-start ai-flex-end ai-baseline ai-stretch').addClass('ai-center');
});

$('.ai-baseline-radio').click(function(){
  $('.flex-box').removeClass('ai-flex-start ai-flex-end ai-center ai-stretch').addClass('ai-baseline');
});

$('.ai-stretch-radio').click(function(){
  $('.flex-box').removeClass('ai-flex-start ai-flex-end ai-center ai-baseline').addClass('ai-stretch');
});