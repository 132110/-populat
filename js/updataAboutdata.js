//关于我们
 $(function(){
    var abText = document.getElementById('abText');
    abText.innerHTML = aboutinfo.aboutcontent; 
 })  

// 分会介绍
function updateFenHuiFn(data){

	var sHtml = "";

	data.forEach(function(item,index){

		sHtml += `<li>
        <a href="javascript:void(0)"><img src="../images/${item.introduceimg}" alt=""></a>
        <a href="javascript:void(0)"><img src="../images/${item.introduceimg1}" alt=""></a>
        <a href="javascript:void(0)"><img src="../images/${item.introduceimg2}" alt=""></a>
      </li>	`
	});

	$(".carousel .img-ct").html(sHtml);

};
//协会文化
$(function(){
    var xieHui = document.getElementById('xiehui');
    xieHui.innerHTML = cultureinfo.culturecontent;
})

//协会架构
$(function(){
    var details = document.getElementById('detail');
for(var i=0;i<frameworkinfo.length;i++){
    var strs = document.createElement('p');
    strs.innerHTML = frameworkinfo[i].frameintroduce;
    details.appendChild(strs);
}
})

// 协会荣誉

function xiehuiHonorFn(data){

	var lHtml = "";

	data.forEach(function(item,index){

		lHtml += ` <li>
        <p><img src="../images/${item.honorimg}" alt=""></p>
        <p><img src="../images/honor_line.png" alt=""></p>
        <p>${item.honortitle}</p>
      </li>`

	});

	$(".honor_content ul").html(lHtml);

};
