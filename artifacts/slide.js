var myImages =["design-and-demo/artifacts/slides/WP_20140717_21_12_58_Pro.jpg", 
               "design-and-demo/artifacts/slides/WP_20140812_13_30_26_Pro.jpg",
               "design-and-demo/artifacts/slides/IMG_3634[835] (2).jpg",
               "design-and-demo/artifacts/slides/WP_20140507_18_14_09_Pro20140507185635.jpg",
               "design-and-demo/artifacts/slides/WP_20140507_18_15_45_Pro20140507185603.jpg"];

var captionImages =["Sunset Downtown","What We Want","Pride","Our City","Living Green"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

setInterval(autoSlide,2000); // Next

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}

