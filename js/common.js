

// 맨위 / 맨아래 버튼
$('.toTop').click(function(){
  window.scrollTo({top:0, left:0, behavior:'smooth'})
});
$('.toBottom').click(function(){
  let bottom = document.body.scrollHeight;
  console.log(bottomy)
  window.scrollTo({top:bottom, left:0, behavior:'smooth'})
});


// fade in Effect
const fadeTriggerMargin = 200;
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