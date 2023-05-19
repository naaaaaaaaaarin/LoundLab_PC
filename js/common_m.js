// side Menu
$('header .ham').click(function(){
  $('header .side_manu').css("left", "0");
  $('body').css("overflow", "hidden");
});
$('header .close').click(function(){
  $('header .side_manu').css("left", "-100%");
  $('body').css("overflow", "auto");
});

// 맨위 / 맨아래 버튼
$('.toTop').click(function(){
  window.scrollTo({top:0, left:0, behavior:'smooth'})
});
$('.toBottom').click(function(){
  let bottom = document.body.scrollHeight;
  console.log(bottom)
  window.scrollTo({top:bottom, left:0, behavior:'smooth'})
});


// fade in Effect
const fadeTriggerMargin = 50;
const fadeElementList = document.querySelectorAll('.sa');
const fadeFnc = function(){
  for(const element of fadeElementList){
    if(!element.classList.contains('show')){
      if(window.innerHeight > element.getBoundingClientRect().top +fadeTriggerMargin){
        element.classList.add('show');
      };
    };
  };
};
window.addEventListener('scroll', fadeFnc);