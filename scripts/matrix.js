// Create slideIndex variable to keep track of the current slide
let slideIndex = 0;

// Calling the showSlides function when the page loads so the page can display the first slide
showSlides();

// This function will allow movement to the next or previous slide
function plusSlides(n) {
  // Calling the showSlides function with the updated slideIndex where it is incremented or decremented by n
  showSlides(slideIndex += n);
}

// This function will allow movement to a specific slide
function currentSlide(n) {
  // Setting the slideIndex to the specified slide number. n - 1 is used to match index
  showSlides(slideIndex = n - 1);
}

// This function will display slides and update dots
function showSlides(n) {
  // Selecting all elements with the class of slide (which includes the content) and the class of dot (the selector dots)
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');

  // Will check if slideIndex is greater than or equal to the number of slides and if so, it will set it to 0 (when user reaches end of matrix and goes one step forward)
  if (n >= slides.length) {
    slideIndex = 0;
  }

  // Will check if slideIndex is less than 0, and if so, it will set it to the last slide index (when user goes back on first slide)
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Preparing for current slides ->
  // Hiding all the slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active-slide');
  }

  // Removing the active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  // Finally ->
  // Displaying the current slide by adding the active class
  slides[slideIndex].classList.add('active-slide');

  // Adding an active class to the corresponding dot
  dots[slideIndex].classList.add('active');
}
