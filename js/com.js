$(function(){
    var oBox1=document.getElementById("lbox");
    var oControls=document.getElementById("controls");
    var aSpan=oControls.getElementsByTagName("span");
    var aBnner=oBox1.getElementsByClassName("banner");
    var oSpan=document.getElementById("number");
    var n=0;
    var timer=setInterval(gun,2500);
    oBox1.onmouseover=function(){
        clearInterval(timer);
    }
    oBox1.onmouseout=function(){
        timer=setInterval(gun,2500);
    }
    function  gun(){
        n++;
        oBox1.className="lunbo1 xg";
        var nh=0;
        if(n==3){
            n=0;
            oBox1.className="lunbo1";
        }

        for(var k=0;k<n;k++){
            nh+=aBnner[k].offsetWidth;
        }
        for(var y=0;y<aSpan.length;y++){
            aSpan[y].className="";
        }
        aSpan[n].className="currents";
        oBox1.style.marginLeft=-nh+(-n*7)+"px";
    }
})