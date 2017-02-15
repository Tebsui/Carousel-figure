
// 方法一: 首先我们准备把代码这样改:
//function slide(){
	// 把下面的 所有代码全部黏贴过来
	
//}
//slide();
/*
function slide(){
	// 先规定好每张图片处于的位置和状态
	var states = [
		{ ZIndex: 1, width: 120, height: 150, top: 69, left: 134, Opacity: 0.2 },
		{ ZIndex: 2, width: 130, height: 170, top: 59, left: 0, Opacity: 0.5 },
		{ ZIndex: 3, width: 170, height: 218, top: 34, left: 110, Opacity: 0.7 },
		{ ZIndex: 4, width: 224, height: 288, top: 0, left: 263, Opacity: 1 },
		{ ZIndex: 3, width: 170, height: 218, top: 34, left: 470, Opacity: 0.7 },
		{ ZIndex: 2, width: 130, height: 170, top: 59, left: 620, Opacity: 0.5 },
		{ ZIndex: 1, width: 120, height: 150, top: 69, left: 498, Opacity: 0.2 }
				];
	
	var lis = $("#box ul li");
	
	// 让每个 li 对应上面 states 的每个状态 
	
	function move() {
		lis.each(function(index, ele) {
			var state = states[index];
			$(ele).css("zIndex", state.ZIndex).finish().animate(state, 1000).find("img").css("opacity", state.Opacity);
		});
	}
	// 让 li 从正中间展开
	move();
	
	// 下一张，让轮播图发生偏移
	function next() {
		// 原理：把数组最后一个元素 移到数组的第一位
		// states.pop(): 把数组最后一个元素删掉
		states.unshift(states.pop());
		//	$("#box ul li:last").prependTo($("#box ul"));
		move();
		//	$("#box ul li").last().appendTo($("#box ul"));
	}
	
	$(".next").click(function() {
		next();
	});
	
	function prev() {
	
		states.push(states.shift());
		move();
	}
	
	$(".prev").click(function() {
		prev();
	});
	
	var interval = null;
	
	function autoChange() {
		interval = setInterval(next, 2000);
	}
	autoChange();
	
	$("#box ul li").add("#box section").hover(function() {
		clearInterval(interval);
	}, function() {
		autoChange();
	});
}

slide();
*/

/*
 	
 * 
 *	
 *	变量的作用域问题:
 * 1.全局域(Window)	2.函数域名(Function域)		3.Block域
 * 	全局域: 从页面被打开之后到页面被关闭 之前，始终存在   (尽量减少全局变量)
 * 	函数域: 存在于函数调用的一瞬间 (也不一定,要考虑闭包的存在)
 *  Block域: 
 * 
 *  闭包的理解:
 * 		闭包的作用: 可以保留函数的作用域 延长 变量的存在时间 (要不然闭包里面的函数 move 就不能使用 slide 函数域里面的变量 lis states 等)
 * 		闭包产生的必要的条件：函数里面套函数(内层函数要使用外层函数作用域里面的变量) 但函数套函数不一定会产生闭包
 * 		全局变量会产生闭包吗？ 答：不会。因为全局变量存在全局域里。
 * */

// 自运行的匿名函数
//(function(){
//	
//})();
//
//$(function(){
//	
//});

(function(){
		// 先规定好每张图片处于的位置和状态
	var states = [
		{ ZIndex: 1, width: 120, height: 150, top: 69, left: 134, Opacity: 0.2 },
		{ ZIndex: 2, width: 130, height: 170, top: 59, left: 0, Opacity: 0.5 },
		{ ZIndex: 3, width: 170, height: 218, top: 34, left: 110, Opacity: 0.7 },
		{ ZIndex: 4, width: 224, height: 288, top: 0, left: 263, Opacity: 1 },
		{ ZIndex: 3, width: 170, height: 218, top: 34, left: 470, Opacity: 0.7 },
		{ ZIndex: 2, width: 130, height: 170, top: 59, left: 620, Opacity: 0.5 },
		{ ZIndex: 1, width: 120, height: 150, top: 69, left: 498, Opacity: 0.2 }
				];
	
	var lis = $("#box ul li");
	
	// 让每个 li 对应上面 states 的每个状态 
	
	function move() {
		lis.each(function(index, ele) {
			var state = states[index];
			$(ele).css("zIndex", state.ZIndex).finish().animate(state, 1000).find("img").css("opacity", state.Opacity);
		});
	}
	// 让 li 从正中间展开
	move();
	
	// 下一张，让轮播图发生偏移
	function next() {
		// 原理：把数组最后一个元素 移到数组的第一位
		// states.pop(): 把数组最后一个元素删掉
		states.unshift(states.pop());
		//	$("#box ul li:last").prependTo($("#box ul"));
		move();
		//	$("#box ul li").last().appendTo($("#box ul"));
	}
	
	$(".next").click(function() {
		next();
	});
	
	function prev() {
	
		states.push(states.shift());
		move();
	}
	
	$(".prev").click(function() {
		prev();
	});
	
	var interval = null;
	
	function autoChange() {
		interval = setInterval(next, 2000);
	}
	autoChange();
	
	$("#box ul li").add("#box section").hover(function() {
		clearInterval(interval);
	}, function() {
		autoChange();
	});
})();
