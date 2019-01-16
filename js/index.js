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




