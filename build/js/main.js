const initApp = () => {
 const hamburgerBtn = document.getElementById('burger-menu')
 const mobileMenu = document.getElementById('mobile-menu')

 const toggleMenu = () => {
  mobileMenu.classList.toggle('hidden')
  mobileMenu.classList.toggle('flex')
  hamburgerBtn.classList.toggle('toggle-btn')
 }

 hamburgerBtn.addEventListener('click', toggleMenu)
 mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

const circleFloat = () => {

 // Get the circle element
 const circle = document.querySelector('.circle');

 // Function to generate a random number between min and max
 function random(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 // Update the animation with random values
 function updateAnimation() {
    const translateY = random(50, 400); // Random value for translateY
    const translateX = random(50, 1500); // Random value for translateX
    const duration = random(200, 500); // Random value for duration in seconds

    // Update the animation property with the new values
    circle.style.animation = `float ${duration}s infinite`;
    circle.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
    circle.style.zIndex = `-10`;
}

// Call the updateAnimation function initially
updateAnimation();

}

document.addEventListener('DOMContentLoaded', circleFloat)