// 面向对象的轮播图插件的写法
(function($){	
	 // 构造函数				
	 function Slide(ele,options){
		// 转化为 jQuery 标签对象
		
		this.$ele = $(ele);
		this.lis = this.$ele.find("li");
		this.interval = null;
		
		// 默认设置选项
		this.setting = {
			// 控制刚开始炸开的时间
			delay: 1000,
			// 控制 interval 的时间 (轮播速度)
			speed: 2000
		};
		$.extend(true, this.setting, options);
		
		if(this.setting.delay > this.setting.speed){
			this.setting.delay = this.setting.delay + this.setting.speed;
			this.setting.speed = this.setting.delay - this.setting.speed;
			this.setting.delay = this.setting.delay - this.setting.speed;
		}
			// 先规定好每张图片处于的位置和状态
		this.states = [
			{ ZIndex: 1, width: 120, height: 150, top: 69, left: 134, Opacity: 0.2 },
			{ ZIndex: 2, width: 130, height: 170, top: 59, left: 0, Opacity: 0.5 },
			{ ZIndex: 3, width: 170, height: 218, top: 34, left: 110, Opacity: 0.7 },
			{ ZIndex: 4, width: 224, height: 288, top: 0, left: 263, Opacity: 1 },
			{ ZIndex: 3, width: 170, height: 218, top: 34, left: 470, Opacity: 0.7 },
			{ ZIndex: 2, width: 130, height: 170, top: 59, left: 620, Opacity: 0.5 },
			{ ZIndex: 1, width: 120, height: 150, top: 69, left: 498, Opacity: 0.2 }
		];
	

	
	
		// 让 li 从正中间展开
		this.move();
		// 自动轮播
		this.autoChange();
		
		// 下一张，让轮播图发生偏移	
		this.$ele.find(".sly-next").click(function() {
			this.next();
		}.bind(this));
		this.prev();		
	
	
		this.$ele.find(".sly-prev").click(function() {
			this.prev();
		}.bind(this));
	
//		停止轮播
		this.$ele.find("section").add(this.lis).hover(function() {
			clearInterval(this.interval);
		}.bind(this), function() {
			this.autoChange();
		}.bind(this));
	}
		// 让 li 从正中间展开	 
		 Slide.prototype.move = function(){
	 		// 让每个 li 对应上面 states 的每个状态 	
	 		var states = this.states;
	 		var setting = this.setting;
			this.lis.each(function(index,value) {
				var state =states[index];
				$(this).css("zIndex", state.ZIndex).finish().animate(state,setting.delay ).find("img").css("opacity", state.Opacity);
			});		
			return this;
		 }
	 	// 下一张，让轮播图发生偏移
		Slide.prototype.next = function() {
			// 原理：把数组最后一个元素 移到数组的第一位
			// states.pop(): 把数组最后一个元素删掉
//			var states = this.states;
			this.states.unshift(this.states.pop());
			//	$("#box ul li:last").prependTo($("#box ul"));
			this.move();
			//	$("#box ul li").last().appendTo($("#box ul"));
			return this;
		}
		
		 // 上一张，让轮播图发生偏移
	 	Slide.prototype.prev =  function() {	
			this.states.push(this.states.shift());
			this.move();
			return this;
		}
	 	// 自动轮播
	 	Slide.prototype.autoChange = function() {
	 		var _this = this;
			this.interval = setInterval(function(){
				_this.next();
			}, _this.setting.speed);
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
//				slide(ele,options);				
			 	new Slide(ele,options);
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