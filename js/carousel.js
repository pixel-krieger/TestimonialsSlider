function findCurrentSlide(btnNode){
    var currentSlide = btnNode;
    while ( !(currentSlide.classList.contains("active")) ){
        currentSlide = currentSlide.parentElement;
    }
    return currentSlide;
}
function nextSlide(event){
    var currentSlide = findCurrentSlide(event.currentTarget);
    currentSlide.classList.remove("active");
    currentSlide.nextElementSibling.classList.add("active");
}
function previousSlide(event){
    var currentSlide = findCurrentSlide(event.currentTarget);
    currentSlide.classList.remove("active");
    currentSlide.previousElementSibling.classList.add("active");
}