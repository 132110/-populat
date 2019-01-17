
//合作伙伴动画
parterAnimate = {
	intervalTime:null,
	oAnimateEle:null,
	page:1,
	pageSize:8,
	totalPage:1,
	start:function(){

		this.oAnimateEle = $(".partner_box .partner-table-box");
		this.totalPage = Math.ceil(this.oAnimateEle.length / this.pageSize);

		

		var that = this;

		this.intervalTime = setInterval(function(){

			that.closeAnimate();

			if(that.page == that.totalPage){
				that.page = 1;
			}else{
				that.page += 1;
			};

			var start = ((that.page - 1) * that.pageSize) + 1;
			var end = that.page * that.pageSize;

			for(var i = start;i <= end;i++){
				that.loadAnimate($(that.oAnimateEle[i]));
			};

		},6000);
	},
	end(){
		clearInterval(this.intervalTime);
	},
	closeAnimate(){
		this.oAnimateEle.hide();
		this.oAnimateEle.removeClass("flipInX");

	},
	loadAnimate(obj){
		obj.show();
		obj.addClass("flipInX");
	},
};



//更新项目介绍数据
function updateprojectInfoFn(data){

	var sHtml = "";

	data.forEach(function(item,index){

		sHtml += `
					<div class="swiper-slide projectinfo-slide"">
                    	<div class="projectinfo-item">
	                        <div class="notice-img">
	                            <img src="./images/${item.projectsrc}" alt="">
	                        </div>
                            <div class="handshake-img">
                                <img src="./images/project_icons.png" alt="">
                        	</div>
                            <div class="project-name">${item.projectname}</div>
                            <div class="project-time">${item.projecttime}</div>
                        </div>
                    </div>`

	});

	$(".carousel .projectinfo-wrapper").html(sHtml);


	projectInfoSwiper = new Swiper('.projectinfo-container', {
        autoplay: 5000, //可选选项，自动滑动
        speed:1200,
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 3, //每次滑动3个
        pagination: '.projectinfo-swiper-pagination',
      

    });

    

};

//更新爱心医院数据
function updateLoveHospitalFn(data){

	var sHtml = "";

	data.forEach(function(item,index){


		sHtml += `<div class="swiper-slide hosiptalshow-swiper-slide">
                    <div class="hosiptalshow-item-img">
                        <img src="images/${item.lovePic}" alt="">
                        <span class="j-money">${item.donatemoney}</span>
                    </div>
                    <p class="time">${item.donatetime}</p>
                    <p class="hospital-name">${item.hostipalname}</p>
                </div>`;

	});

	$(".hosiptalshow .hosiptalshow-swiper-wrapper").html(sHtml);


	hosiptalshowSwiper = new Swiper('.hosiptalshow-swiper-container', {
        autoplay: 5000, //可选选项，自动滑动
        speed:1800,
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerGroup: 4, //每次滑动4个
        pagination: '.hosiptalshow-swiper-pagination',
        onInit:function(){
        	console.log($(".hosiptalshow-swiper-slide").length)

        	gradualChange();
        }

    });
};



//更新申报方案数据
function updateSchemeFn(data){

	var sHtml = "";

	data.forEach(function(item,index){


		sHtml += `<div class="swiper-slide scheme-swiper-slide">
                    <div>
                        <img class="img" src="images/scheme_icon.png" alt="">
                        <h3 class="title">${item.casename}</h3>
                        <div class="content">${item.casedetail}</div>
                    </div>
                </div>`;

	});

	$(".scheme .scheme-swiper-wrapper").html(sHtml);


	schemeSwiper = new Swiper('.scheme-swiper-container', {
        autoplay: 5000, //可选选项，自动滑动
        speed:1200,
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4, //每次滑动4个
        pagination: '.scheme-swiper-pagination',

    });
};



//更新最新资讯数据
function updateInformation(data){

	var sHtml = "";

	data.forEach(function(item,index){


		sHtml += `<div class="swiper-slide information-swiper-slide">
                    <div>
                        <h4>${item.newstitle}<em>${item.newstime}</em></h4>
                        <p>${item.newscontent}</p>
                    </div>
                </div>`;

	});

	$(".information .information-swiper-wrapper").html(sHtml);


	informationSwiper = new Swiper('.information-swiper-container', {
        autoplay: 3000, //可选选项，自动滑动
        speed:1200,
        direction: 'vertical',
        slidesPerView: 4,
    });
};


//更新合作伙伴数据
function updateParterDataFn(data){

	var sHtml = "";

	data.forEach(function(item,index){


		sHtml += `<div class="partner-table-box animated slow slow">
                    <div class="partner-table-cell">
                        <img src="images/${item.parterimg}" alt="" />
                    </div>
                </div>`;

	});

	$(".partner .partner_box").html(sHtml);

	parterAnimate.start();



};



//修改爱心捐赠的金额渐变色
function gradualChange(){
	var arrys = [
		{colorF:"#07d1d5",colorL:"#22dba2"},
		{colorF:"#fed17c",colorL:"#fcb84d"},
		{colorF:"#2dc4fd",colorL:"#6fa7fa"},
		{colorF:"#75f4fd",colorL:"#7cb4ff"},
		{colorF:"#07d1d5",colorL:"#22dba2"},
		{colorF:"#fed17c",colorL:"#fcb84d"},
		{colorF:"#2dc4fd",colorL:"#6fa7fa"},
		{colorF:"#75f4fd",colorL:"#7cb4ff"},
		{colorF:"#07d1d5",colorL:"#22dba2"},
		{colorF:"#fed17c",colorL:"#fcb84d"},
		{colorF:"#2dc4fd",colorL:"#6fa7fa"},
		{colorF:"#75f4fd",colorL:"#7cb4ff"},
		{colorF:"#07d1d5",colorL:"#22dba2"},
		{colorF:"#fed17c",colorL:"#fcb84d"},
		{colorF:"#2dc4fd",colorL:"#6fa7fa"},
		{colorF:"#75f4fd",colorL:"#7cb4ff"},
		{colorF:"#07d1d5",colorL:"#22dba2"},
		{colorF:"#fed17c",colorL:"#fcb84d"},
		{colorF:"#2dc4fd",colorL:"#6fa7fa"},
		{colorF:"#75f4fd",colorL:"#7cb4ff"}
	];

	$(".hosiptalshow .hosiptalshow-swiper-slide .j-money").each(function(index,item){

		var i = randomFrom(0,arrys.length-1);

		$(item).css({
			"background-image":"-webkit-linear-gradient("+arrys[i].colorF+","+arrys[i].colorL+")",
			"background-image":"-o-linear-gradient("+arrys[i].colorF+","+arrys[i].colorL+")",
			"background-image":"-moz-linear-gradient("+arrys[i].colorF+","+arrys[i].colorL+")",
			"background-image":"linear-gradient("+arrys[i].colorF+","+arrys[i].colorL+")"
		});

	});



};


function randomFrom(min,max){

 return Math.floor(Math.random() * (max - min + 1) + min);
}





