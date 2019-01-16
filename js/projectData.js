//项目工程

function projectFn(data){

	var lHtml = "";

	data.forEach(function(item,index){

		lHtml += `<li>
        <img src="../images/free_icon.png" alt="">
        <h3>${item.projectitle}</h3>
        <img src="../images/project_line.png" alt="">
        <p>${item.projectcontent}</p>
    </li>`

	});

	$(".project_content ul").html(lHtml);

};

// 项目介绍
function projectDetailFn(data){

	var lHtml = "";

	data.forEach(function(item,index){

		lHtml += ` <li>
        <p><img src="../images/${item.projectsrc}" alt=""></p>
        <p><img src="../images/honor_line.png" alt=""></p>
        <p>${item.projectname}</p>
        <div class="dontate">
            <img src="../images/contribution_icon.png" alt="">
            <a href="javascript:;">我要捐款</a>
        </div>
    </li>`

	});

	$(".project_contents ul").html(lHtml);

};
window.onload=function(){
  var projectsv = document.getElementsByClassName('project_contents')[0];
  var us = projectsv.getElementsByTagName('ul')[0];
    var lis = us.getElementsByTagName('li');
    for(var i=0;i<lis.length;i++){
        if(i % 4 ==0){
        lis[i].className = "noleft";
        }
    }   
}
 
  

