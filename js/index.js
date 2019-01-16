$(function(){

    

    var mySwiper = new Swiper('.ja-whole-wp', {
        //autoplay:5000,
        speed:1000,
        direction:"vertical",
        pagination : '.ja-whole-swiper-pagination',
        paginationClickable :true,
        mousewheelControl : true,
        initialSlide:0,
        onSlideChangeEnd:function(swiper){

            console.log(swiper.activeIndex);

            if(swiper.activeIndex==1){
                $(".project_box .project-titile").css({
                    "transform":"scale(1)"
                });
            }
            if(swiper.activeIndex==2){

                if($('.love-number').attr("isfinsh") != "finsh"){

                    $('.love-number').css("visibility","visible")
                    $('.love-number').countUp({
                        time: 2000
                    });

                    $('.love-number').attr("isfinsh","finsh");
                }
                
            };
            if (swiper.activeIndex == 3) {
                $(".scheme_title .scheme_title-text").css({
                    "transform":"scale(1)"
                });
            }
            if (swiper.activeIndex == 4) {
                $(".information_title .information_title-text").css({
                    "transform":"scale(1)"
                });
            }
            if (swiper.activeIndex == 5) {
                $(".partner_title .partner_title-text").css({
                    "transform":"scale(1)"
                });
            };
            
        }
    });

    mySwiper.disableTouchControl();
    
    
})
$(function(){
var arrys = [{colorF:"#07d1d5",colorL:"#22dba2"},{colorF:"#fed17c",colorL:"#fcb84d"},{colorF:"#2dc4fd",colorL:"#6fa7fa"},{colorF:"#75f4fd",colorL:"#7cb4ff"},{colorF:"#07d1d5",colorL:"#22dba2"},{colorF:"#fed17c",colorL:"#fcb84d"},{colorF:"#2dc4fd",colorL:"#6fa7fa"},{colorF:"#75f4fd",colorL:"#7cb4ff"},{colorF:"#07d1d5",colorL:"#22dba2"},{colorF:"#fed17c",colorL:"#fcb84d"},{colorF:"#2dc4fd",colorL:"#6fa7fa"},{colorF:"#75f4fd",colorL:"#7cb4ff"},{colorF:"#07d1d5",colorL:"#22dba2"},{colorF:"#fed17c",colorL:"#fcb84d"},{colorF:"#2dc4fd",colorL:"#6fa7fa"},{colorF:"#75f4fd",colorL:"#7cb4ff"},{colorF:"#07d1d5",colorL:"#22dba2"},{colorF:"#fed17c",colorL:"#fcb84d"},{colorF:"#2dc4fd",colorL:"#6fa7fa"},{colorF:"#75f4fd",colorL:"#7cb4ff"}];
var allH = document.getElementsByClassName('j-money');
for(var i=0;i<allH.length;i++){
    //alert(1);
    allH[i].style.backgroundClip = "text";
    allH[i].style.background="linear-gradient("+arrys[i].colorF+", "+ arrys[i].colorL+")";
}
})



