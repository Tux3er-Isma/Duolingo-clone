//Header Variables
const header = document.querySelector('header');
const nav = document.querySelector('.header__nav');
const navFixedContainer = document.querySelector('.header__nav__fixed-container');
const navFixedContainerBtnContainer = document.querySelector('.header__nav__fixed-container__btn-container');
const headerContent = document.querySelector('.header__content');
let startBtn = document.querySelector('.header__content__information-container__start-btn');
const earthContainer = document.querySelector('.header__content__earth-container');
let duolingoLogo = document.querySelector('.header__nav__fixed-container__logo');
const bubblesContainer = document.querySelector('.header__bubbles-container');
const bubblesArray = bubblesContainer.childNodes;
const headerFooter = document.querySelector('.header__footer');
const flagsContainer = document.querySelector('.header__footer__flags');
const countries = ['inglés', 'francés', 'alemán', 'italiano', 'portugués', 'catalan', 'ruso', 'sueco'];
const flagsArray = flagsContainer.childNodes;

//Functions
window.addEventListener('scroll', () =>{
    let scroll = this.scrollY;
    if (scroll >= 500){
        console.log('You are in: ' + scroll);
        console.log("You are in the main section");
        bubblesContainer.style.display = 'none';
    } else {
        bubblesContainer.style.display = 'flex';
    }

    if (window.screen.availWidth >= 1200){
        if (scroll >= 600 && scroll <= 3100){
            console.log("You are in the main section");
            navFixedContainerBtnContainer.style.display = 'block';
        } else {
            navFixedContainerBtnContainer.style.display = 'none';
        }
    }
})

const createBubbles = (quantity) =>{
    for (let i = 0; i < quantity; i++){
        let bubbles = document.createElement('DIV');
        bubbles.classList.add('header__bubbles-container__bubbles');
        bubblesContainer.appendChild(bubbles);
    }
}

const createFlags = (imgRoute, imgAlt, flagCountry) =>{
    let flag = document.createElement('LI');
    let flagImg = document.createElement('IMG');
    let flagText = document.createElement('P');

    flag.setAttribute('title', flagCountry);
    flagImg.setAttribute('src', imgRoute);
    flagImg.setAttribute('alt', imgAlt);
    flagText.textContent = flagCountry.toUpperCase();

    flag.classList.add('header__footer__flags__flag');
    flagImg.classList.add('header__footer__flags__flag__img');
    flagText.classList.add('header__footer__flags__flag__text');

    flagsContainer.appendChild(flag);
    flag.appendChild(flagImg);
    flag.appendChild(flagText);
}

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
} else {
    console.log("El dispositivo es un ordenador 🖥️");
    createBubbles(50);
    bubblesArray.forEach(element =>{
        let randomSize = Math.floor(Math.random()*8);
        element.style.width = 2 + randomSize + 'px';
        element.style.height = 2 + randomSize + 'px';
        element.style.left = Math.floor(Math.random()*1200) + 'px';
        element.style.top = Math.floor(Math.random()*800) + 'px';
        element.style.animation = `bubbles ${4 + Math.floor(Math.random()*6)}s infinite`;
    });

    duolingoLogo.addEventListener('click', () =>{
        headerContent.style.display = 'flex';
        headerFooter.style.display = 'flex';
        let earthContainerFlag = document.querySelectorAll('.header__content__earth-container__flag');
        earthContainerFlag.forEach(element =>{
            element.style.display = 'none';
        })
    });
};

//Loops
for (country of countries){
    createFlags(`/public/assets/img/flags/${country}.png`, country, country)
}

//Arrays
flagsArray.forEach(element =>{
    element.addEventListener('click', () =>{
        let imgRoute = element.childNodes[0].src;
        let imgAlt = element.childNodes[0].alt;
        headerFooter.style.display = 'none';

        let newFlag = document.createElement('IMG');
        newFlag.setAttribute('src', imgRoute);
        newFlag.setAttribute('alt', imgAlt);
        newFlag.setAttribute('title', imgAlt);
        newFlag.classList.add('header__content__earth-container__flag');

        earthContainer.appendChild(newFlag);
    });
});