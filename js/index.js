
// 先规定好每张图片处于的位置和状态
var states = [

				{ZIndex:1,width:120,height:150,top:69,left:134,Opacity:0.2},
				{ZIndex:2,width:130,height:170,top:59,left:0,Opacity:0.5},
				{ZIndex:3,width:170,height:218,top:34,left:110,Opacity:0.7},
				{ZIndex:4,width:224,height:288,top:0,left:263,Opacity:1},
				{ZIndex:3,width:170,height:218,top:34,left:470,Opacity:0.7},
				{ZIndex:2,width:130,height:170,top:59,left:620,Opacity:0.5},	
				{ZIndex:1,width:120,height:150,top:69,left:498,Opacity:0.2}				
			 ];

var lis = $("#box ul li");

// 让每个 li 对应上面 states 的每个状态 

function move(){
	lis.each(function(index,ele){
		var state = states[index];
		$(ele).css("zIndex",state.ZIndex).finish().animate(state,1000).find("img").css("opacity",   state.Opacity);
	});
}
// 让 li 从正中间展开
move();

// 下一张，让轮播图发生偏移
function next(){
	// 原理：把数组最后一个元素 移到数组的第一位
	// states.pop(): 把数组最后一个元素删掉
	states.unshift(states.pop());
//	$("#box ul li:last").prependTo($("#box ul"));
	move();	
//	$("#box ul li").last().appendTo($("#box ul"));
}

$(".next").click(function(){
	next();
});

function prev(){
	
	states.push(states.shift());
	move();
}

$(".prev").click(function(){
	prev();
});

var interval = null;
function autoChange(){
	interval = setInterval(next,2000);
}
autoChange();

$("#box ul li").add("#box section").hover(function(){
	clearInterval(interval);
},function(){
	autoChange();
});
