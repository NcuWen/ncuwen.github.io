	var	c=document.getElementById('myCanvas');
	var ctx=c.getContext("2d");
	ctx.font="25px Arial";
	ctx.fillText("Blog",30,60);

	var c2=document.getElementById('myCanvas2');
	var ctx2=c2.getContext("2d");
	ctx2.font="25px Arial";
	ctx2.fillText("Govern",15,60);

	var c3=document.getElementById('myCanvas3');
	var ctx3=c3.getContext("2d");
	ctx3.font="25px Arial";
	ctx3.fillText("NcuWen",10,60);

	function clickCon(obj){
		var x = event.clientX - obj.getBoundingClientRect().left; 
		var y = event.clientY - obj.getBoundingClientRect().top;
		var radiu=obj.getBoundingClientRect().width/2;
		if((x-radiu)*(x-radiu)+(y-radiu)*(y-radiu)<=radiu*radiu){
			if(obj.id=="myCanvas"){
				window.location.href = "http://ncuwen.github.io/blog/";
			}else if(obj.id=="myCanvas2"){
				window.location.href = "http://ncuwen.github.io/GovernBook/";
			}else{
				window.location.href = "http://ncuwen.cn";
			}
		}
	}
		
