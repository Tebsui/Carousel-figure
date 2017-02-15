
// jquery 出让 $ 符号的使用权限 (也就是说，从这开始 $ 将不是 jquery ，只能用变量 jquery)
jQuery.noConflict();

// slyslide() 只要轮播图的根标签(任何选择器)

jQuery(".slide").slyslide({speed:1000});
jQuery("#slide").slyslide({delay:2000,speed:3000});



