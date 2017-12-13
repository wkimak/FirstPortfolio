
$("document").ready(function(){
	
	$(".projects").mouseenter(function(){
     $(this).children(".projects-content").stop().animate({height: "200px"}, 400);
}).mouseleave(function(){
     $(this).children(".projects-content").stop().animate({height: "0px"}, 800);
});
	
});
