function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;

}

function undo(){
    document.getElementById("right").innerHTML="<h3>about the picture</h3>";
  }
  function info(element){
    if(element.alt === "beach")
    document.getElementById("right").innerHTML="<h2>This is my photo of childhood and this was taken when i was in my native</h2>";
    if(element.alt === "butterfly")
    document.getElementById("right").innerHTML="<h2>A Fancy dress competition was going to be held in school so i tried out the Butterfly Costume and took a shot .</h2>";
    if(element.alt === "cutiepie")
    document.getElementById("right").innerHTML="<h2>a cute little me ,my mom at that time had a hobby of photography.</h2>";
    if(element.alt === "malyalikutti")
    document.getElementById("right").innerHTML="<h2>This was the dance performance for the annual day in school of standard fifth where we students were wearing the custom of a kerala tradition.</h2>";
    if(element.alt === "missindia")
    document.getElementById("right").innerHTML="<h2> Fancy dress competition where i wore a costume to represent miss india</h2>";
    if(element.alt === "missnador")
    document.getElementById("right").innerHTML="<h2> This one's a shot were i was miss nador, nador being the name of our caste.and in this i wore the dress stitched by my mom</h2>";
    if(element.alt === "radha")
    document.getElementById("right").innerHTML="<h2> here i have become radha</h2>";
    if(element.alt === "sweater")
    document.getElementById("right").innerHTML="<h2>i like this sweater top </h2>";
    if(element.alt === "withtoys")
    document.getElementById("right").innerHTML="<h2>im playing with all my toys</h2>";
    

}
