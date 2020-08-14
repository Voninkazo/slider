// Create a big funcion
function Slider(slider) {
    // This "if (!(slider instanceof Element))" is for checking whether slider is an element or not
  if (!(slider instanceof Element)) {
    // if t is not return this error
      throw new Error('No slider passed in');
  }
// Grab or call the element needed for the slider
const slides = slider.querySelector('.slides');
const prevButton = slider.querySelector('.goToPrev');
const nextButton = slider.querySelector('.goToNext');
// create some variables for working with the slider
// Create them with let so that we can access them later inside of this scope Slider function
let current;
let prev;
let next;
function startSlider() {
    // Referring the current, previous and the next new variables that we created above
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
}
function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
}
function move(direction) {
    // First strip all the classes off the current slidese
    // First part of this is to move the function
    // Delete all the classes from the element
    // Spread all of those arrays into each one of those functions
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === 'back') {
        // make a new array of the neew  values and destructuring them over and into the prev, current and 
        // swap the varibles when we go backwards
        [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current]
    } else {
        // swap the varibles when we go forwards
        [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild]
    }
    applyClasses();
}
// when this function is started, run the start slider function
startSlider();
applyClasses();
// Event listener
// ('click', () =>('move')) is for activating the button when it is clicked and it goes backward
prevButton.addEventListener('click', () => move('back'));
// ('click', move) is for activating the button when it is clicked and it goes forward
nextButton.addEventListener('click', move);
}
// Grabbing the slider div and the dog-slider div
const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
// Node can be an element and text but element can not be the other way around