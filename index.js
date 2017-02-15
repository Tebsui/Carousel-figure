
// jquery 出让 $ 符号的使用权限 (也就是说，从这开始 $ 将不是 jquery ，只能用变量 jquery)
//jQuery.noConflict();

// slyslide() 只要轮播图的根标签(任何选择器)

$(".slide").slyslide({speed:1000}).css("background-color","aqua");
$("#slide").slyslide({delay:3000,speed:2000}).css("box-shadow","0 5px 5px #ccc");



