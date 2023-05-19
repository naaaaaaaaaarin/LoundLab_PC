$('.top').click(function(){
  window.scrollTo({top:0, left:0, behavior:'smooth'})
});

$('.bottom').click(function(){
  let heightEnd = document.body.scrollHeight;
  window.scrollTo({top: heightEnd, left: 0, behavior:'smooth'});
});