var indice = 0;
function ChangerImage()
{
 var nouvelleImage = new Image();

 nouvelleImage.onload = function() 
 {
 document.getElementById("monimage").src = nouvelleImage.src;
 }

 nouvelleImage.src = images[indice];
 if(indice < images.length - 1)
 {
 indice++;
 }
 else
 {
 indice = 0;
 }
 setInterval ("ChangerImage()", 4000) ; //4000 milliseoncdes = 4 secondes 

}
var images = new Array();
images.push("nature1.jpg");
images.push("nature2.jpg");
images.push("nature3.png");
images.push("nature4.jpg");
images.push("nature5.jpg");
window.onload = function(){
ChangerImage();
}