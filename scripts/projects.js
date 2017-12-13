$("document").ready(function(){
	
	$(".projects").hover(function(){
     $(this).children(".projects-content").animate({height: "200px"}, 400);
}).mouseleave(function(){
     $(this).children(".projects-content").animate({height: "0px"}, 800);
});
	
});
