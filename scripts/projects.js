// var declarations
var projectsContainer = document.getElementById("projects-container");
var projects = document.getElementsByClassName("projects");
var gallery = document.getElementById("projects-gallery");
var animation = document.getElementsByClassName("grow-content");
var content = document.getElementsByClassName("projects-content");
var a = document.querySelectorAll(".projects a");
var img = document.querySelectorAll(".projects img");
var growContent = document.getElementsByClassName(".grow-content")[0];


//Loop through .projects so I have access to all of the elements during event
for(var i = 0; i<projects.length; i++){	
projects[i].addEventListener("mouseover", function(event){

var target = event.target;

//if event.target is the border of the container or the image, animate
if(target.className == "projects"){
target.childNodes[3].style.display = "block";
target.childNodes[3].classList.remove("shrink-content");
target.childNodes[3].classList.add("grow-content");
} else if(target.tagName == "IMG"){
	target.nextElementSibling.style.display = "block";
	target.nextElementSibling.classList.remove("shrink-content");
	target.nextElementSibling.classList.add("grow-content");
}
});
}

// Mouseleave event handler
for(var x=0; x< content.length; x++){
content[x].addEventListener("mouseleave", function(event){

var target = event.target;

target.classList.replace("grow-content", "shrink-content");

});
}
