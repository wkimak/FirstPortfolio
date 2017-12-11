$("document").ready(function(){


/* --------- Main contact Form -----------  */
$("#contact-form-main").submit(function(event){
event.preventDefault();

//Send information to EmailJS
  /*
const service_id = 'gmail';
const template_id = 'template_rco7VS5B';
const template_params = {
  name: $('#main-name').val(),
  reply_email: $('#main-email').val(),
  subject: $("#main-subject").val(),
  message: $('#main-message').val()
}
emailjs.send(service_id,template_id,template_params);
*/


//"Email Sent!"" text after form is submitted
if($("#main-name").val() != "" && $("#main-email").val() != "" && $("#main-message").val() != ""){
$("#main-form-container").append("<h1 id='emailSent'> Email Sent! </h1>");
$("#emailSent").css({"color":"rgb(76,252,216)", "font-family": "Gafata", "position": "absolute", "top": "100px"});
$("#emailSent").fadeOut(8000);
setTimeout(function(){
$("#emailSent").remove();
},8000);
} 

//erase input values after form is submitted
$("#main-name").val("");
$("#main-email").val("");
$("#main-subject").val("");
$("#main-message").val("");

});

/* ------------- Mobile Contact Form ----------- */

$("#contact-form-mobile").submit(function(event){
event.preventDefault();
console.log("it works");

//Send information to EmailJS
  /*
const service_id = 'gmail';
const template_id = 'template_rco7VS5B';
const template_params = {
  name: $('#mobile-name').val(),
  reply_email: $('#mobile-email').val(),
  subject: $("#mobile-subject").val(),
  message: $('#mobile-message').val()
}
emailjs.send(service_id,template_id,template_params);
*/

//"Email Sent!"" text after form is submitted
if($("#mobile-name").val() != "" && $("#mobile-email").val() != "" && $("#mobile-message").val() != ""){
$(".header-container").append("<h1 id='mobile-emailSent'> Email Sent! </h1>");
$("#mobile-emailSent").css({"color":"rgb(76,252,216)", "font-family": "Gafata", "position": "absolute", "left":"50px", "top": "300px"});
$("#mobile-emailSent").fadeOut(8000);
setTimeout(function(){
$("#mobile-emailSent").remove();
},8000);
} 


//erase input values after form is submitted
$("#mobile-name").val("");
$("#mobile-email").val("");
$("#mobile-subject").val("");
$("#mobile-message").val("");


});



});
