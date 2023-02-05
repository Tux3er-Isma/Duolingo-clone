//Header Variables
const header = document.querySelector('header');
const nav = document.querySelector('.header__nav');
const bubblesContainer = document.querySelector('.header__bubbles-container');
const bubblesArray = bubblesContainer.childNodes;

//Functions
const createBubbles = (quantity) =>{
    for (let i = 0; i < quantity; i++){
        let bubbles = document.createElement('DIV');
        bubbles.classList.add('header__bubbles-container__bubbles');
        bubblesContainer.appendChild(bubbles);
    }
}

//Calling Functions

//Conditions
if (window.screen.availWidth <= 480){
    console.log("El dispositivo es un movil 📱");
    createBubbles(35);
    bubblesArray.forEach(element =>{
        let randomSize = Math.floor(Math.random()*5);
        element.style.width = 2 + randomSize + 'px';
        element.style.height = 2 + randomSize + 'px';
        element.style.left = Math.floor(Math.random()*350 ) + 'px';
        element.style.top = Math.floor(Math.random()*600) + 'px';
        element.style.animation = `bubbles ${4 + Math.floor(Math.random()*6)}s infinite`;
    })
} 