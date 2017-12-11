$("document").ready(function(){

// variable used to test whether or not skills has been scrolled through
var triggered = true;
window.addEventListener("scroll", function(){


//Animate progress bars
if(triggered == true && document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
$("#html5-container .progress-bar").animate({width: '95%'}, 3000);
$("#css3-container .progress-bar").animate({width: '80%'}, 3000);
$("#bootstrap4-container .progress-bar").animate({width: '90%'}, 3000);
$("#sass-container .progress-bar").animate({width: '65%'}, 3000);
$("#javascript-container .progress-bar").animate({width: '75%'}, 3000);
$("#jquery-container .progress-bar").animate({width: '90%'}, 3000);
$("#react-container .progress-bar").animate({width: '50%'}, 3000);

//Animate Percentage values. I measured the width of the container/width of the progress bar, and then rounded up. 
setInterval(function(){
   $("#html-percent").text(Math.ceil(($("#html5-container .progress-bar").width()/$("#html5-container").width()*100)) + "%").css({"text-align":"right", "color":"black"});
   
   $("#css-percent").text(Math.ceil(($("#css3-container .progress-bar").width()/$("#css3-container").width()*100)) + "%").css({"text-align":"right", "color":"black"});

   $("#bootstrap-percent").text(Math.ceil(($("#bootstrap4-container .progress-bar").width()/$("#bootstrap4-container").width()*100)) + "%").css({"text-align":"right", "color":"black"});
   
   $("#sass-percent").text(Math.ceil(($("#sass-container .progress-bar").width()/$("#sass-container").width()*100)) + "%").css({"text-align":"right", "color":"black"});

   $("#javascript-percent").text(Math.ceil(($("#javascript-container .progress-bar").width()/$("#javascript-container").width()*100)) + "%").css({"text-align":"right", "color":"black"});

   $("#jquery-percent").text(Math.ceil(($("#jquery-container .progress-bar").width()/$("#jquery-container").width()*100)) +"%").css({"text-align":"right", "color":"black"});
   	
   $("#react-percent").text(Math.ceil(($("#react-container .progress-bar").width()/$("#react-container").width()*100)) + "%").css({"text-align":"right", "color":"black"});

},1);
triggered = false;
};

});


// ------------ Grow About Section on scroll ------------ //
var aboutContainer = document.getElementById("about-container");
var triangle = document.getElementById("triangle-down");
window.addEventListener("scroll", function(){

if(document.body.scrollTop > 700){
   $("#about-container").animate({
      height: "325px"},2000);
   setTimeout(function(){
   $("#triangle-down").addClass("growTriangle");
},1500);
}
  
});
   
 

});
