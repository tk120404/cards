$(document).ready(function() {

 		    $("li").css("float","left");
                    $(".card-0").transition({ x:  460, y: 0 });
		    $(".card-1").transition({ x:  300, y: 0 });
	            $(".card-2").transition({ x:  140, y: 0 });
		    $(".card-3").transition({ x:  0  , y: 0 });
		    $(".card-4").transition({ x: -140, y: 0 });
	            $(".card-5").transition({ x: -300, y: 0 });
		    $(".card-6").transition({ x: -460, y: 0 });               
		    $(".card-0").transition({ x: 230 , y: 80, rotate:-30, easing: 'out', duration: 3000 });
		    $(".card-1").transition({ x: 150 , y: 40, rotate:-20, easing: 'out', duration: 3000 });
  		    $(".card-2").transition({ x:  70 , y: 10, rotate:-10, easing: 'out', duration: 3000 });
  		    $(".card-4").transition({ x: -70 , y: 10, rotate: 10, easing: 'out', duration: 3000 });
 		    $(".card-5").transition({ x: -150, y: 40, rotate: 20, easing: 'out', duration: 3000 });
		    $(".card-6").transition({ x: -230, y: 80, rotate: 30, easing: 'out', duration: 3000 });
 });
