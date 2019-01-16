


$(function(){
	//头部导航鼠标移入移出
	$("#nav li").on("mousemove",function(){
		$(this).addClass("move-act");
	});

	$("#nav li").on("mouseout",function(){
		$(this).removeClass("move-act");
	});


	//跳转
	$("[j-jump]").on("click",function(){

		var jump = $(this).attr("j-jump");

		var href = location.href;

		var prefix = href.indexOf("index.html") > -1 ? "./" : "../";

		console.log(prefix);

		if(jump == "index"){//首页
			location = "../index.html";
		}else if(jump == "about"){//关于我们
			location = prefix + "page/about.html";
		}else if(jump == "news"){//新闻资讯
			location = prefix + "page/news.html";
		}else if(jump == "project"){//项目介绍
			location = prefix + "page/project.html";
		}else if(jump == "concat"){//加入我们
			location = prefix + "page/concat.html";
		}else if(jump == "application"){//项目申请
			location = prefix + "page/application.html";
		}else if(jump == "contribution"){//我要捐款
			location = prefix + "page/contribution.html";
		}

	})
});
