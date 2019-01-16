
$(function(){
var ulss = document.getElementById('uls');
var li = ulss.getElementsByTagName('li');
var strs = li[0].offsetWidth;
var dots = document.getElementsByClassName('bullet')[0];
var liv = dots.getElementsByTagName('li');
var n = 0;
var timer = setInterval(times,3000)
function times(){
  n++;
  ulss.className = "img-ct sty";
  if(n==li.length){
    n=0;
    ulss.className = "img-ct transiti";
  }
  ulss.style.left = -strs*n+"px";

  for(var i=0;i<liv.length;i++){
    liv[i].className = ''
  }
  liv[n].className= 'active'; 
  
}
for(var i=0;i<liv.length;i++){
  liv[i].index=i;
  liv[i].onclick=function(){
    clearInterval(timer);
    n = this.index;
    ulss.style.left = -strs*n+"px";
    for(var i=0;i<liv.length;i++){
      liv[i].className = ''
    }
    liv[n].className= 'active';
  }
}
dots.onmouseleave=function(){
  timer = setInterval(times,4000)
}

});