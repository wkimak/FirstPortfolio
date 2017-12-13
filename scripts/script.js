// ------------------- HEADER ----------------- //

//var declarations
var intro = document.getElementById("intro");
var intro2 = document.getElementById("intro2");


// animate Letters on screen load function
window.addEventListener("load", function(){
	intro.className = "animateWelcome";
setTimeout(function(){
  intro2.className = "animateIntro";
},0);

});




// --------- Contact Btn event handler ------------ //
var form = document.getElementById("main-form-container");
var contactText = document.getElementById("contact-text-container");
var contactBtn = document.getElementById("contactBtn");
var contactIcon = document.getElementById("contactNav");
var body = document.getElementsByTagName("body")[0];
var exitBtn = document.getElementsByClassName("exitBtn")[0];

//Change display of form container when Btn or Icon are clicked
body.addEventListener("click", function(event){

if(event.target == contactBtn){
	form.style.display = "block";
}else if(event.target == exitBtn){
	form.style.display = "none";
}
});
