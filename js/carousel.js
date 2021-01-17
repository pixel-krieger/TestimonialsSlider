function findCurrentSlide(btnNode){
    var currentSlide = btnNode;
    while ( !(currentSlide.classList.contains("active")) ){
        currentSlide = currentSlide.parentElement;
    }
    return currentSlide;
}
function nextSlide(event){
    var currentSlide = findCurrentSlide(event.currentTarget);
    var nextSlide = currentSlide.nextElementSibling;
    currentSlide.classList.remove("active");
    if (nextSlide!==null){
        nextSlide.classList.add("active");
    } else {
        currentSlide.parentElement.firstElementChild.classList.add("active");
    }
}
function previousSlide(event){
    var currentSlide = findCurrentSlide(event.currentTarget);
    var previousSlide = currentSlide.previousElementSibling;
    currentSlide.classList.remove("active");
    if (previousSlide!==null){
        previousSlide.classList.add("active");
    } else {
        currentSlide.parentElement.lastElementChild.classList.add("active");
    }
    
}