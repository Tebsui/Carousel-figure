
(function($){
	// 本函数存在的意义，每次调用只负责一个轮播图的功能
	// 也就说只会产生一个轮播图，这个函数的作用域只能分配给一个轮播图
	// 所以要求在调用本函数的时候 务必把当前轮播图的根标签传递过来
	// 这里的形参 ele 就是某个轮播图的根标签
	var slide = function(ele,options){
		// 转化为 jQuery 标签对象
		
		var $ele = $(ele);
		
		// 默认设置选项
		var setting = {
			// 控制刚开始炸开的时间
			delay: 1000,
			// 控制 interval 的时间 (轮播速度)
			speed: 2000
		};
		$.extend(true, setting, options);
		
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
	
		var lis = $ele.find("li");
	
		// 让每个 li 对应上面 states 的每个状态 
	
		function move() {
			lis.each(function(index) {
				var state = states[index];
				$(this).css("zIndex", state.ZIndex).finish().animate(state,setting.delay ).find("img").css("opacity", state.Opacity);
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
	
		$ele.find(".sly-next").click(function() {
			next();
		});
	
		function prev() {	
			states.push(states.shift());
			move();
		}
	
		$ele.find(".sly-prev").click(function() {
			prev();
		});
	
		var interval = null;
	
		function autoChange() {
			interval = setInterval(next, setting.speed);
		}
		autoChange();
	
//		停止轮播
		$ele.find("section").add(lis).hover(function() {
			clearInterval(interval);
		}, function() {
			autoChange();
		});
	}
		// 找到要轮播的轮播图的根标签，调用 slide 方法
//		for(var i=0;i<$(".sly-slide").length;i++){			
//			slide($(".sly-slide").eq(i));
//		}
//		$(".sly-slide").each(function(){
//			slide($(this));
//		})
		// $.fn jquery封装插件的方法 fn 标签选择器
		$.fn.slyslide = function(options){
			$(this).each(function(i,ele){
				slide(ele,options);
			});
			
			// 支持链式调用
			return $(this);
		}
		
//		$.fn.name = function(){
//	
//		}
})(jQuery);

/*
 	用 jQuery 封装插件的几种写法:
 	插件类写法:
 	$.fn.customFun = function(){
 		自定义插件的代码
 	}
 	
 	用法:
 	$("selector").customFun();
 	
 	工具类的写法:
 	$.customFun =function(){
 		// 自定义工具类的代码
 	}
 	用法:
 	$.customFun();
 * */