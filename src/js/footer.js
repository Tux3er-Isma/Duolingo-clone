//Variables
const head = document.head;
const footer = document.querySelector('footer');
const blsContainer = document.querySelector('.footer__bls-container');
const blsArray = blsContainer.childNodes;
const sources = document.querySelector('.footer__sources');

//Arrays
const firstArray = ['Cursos', 'Misión', 'Método de enseñanza', 'Eficacia', 'Equipo', 'Investigación', 'Empleo', 'Guía para uso de marca', 'Tienda', 'Prensa', 'Inversionistas', 'Contáctanos'];
const secondArray = ['Duolingo', 'Duolingo for Schools', 'Duolingo English Test', 'Podcast', 'Cuentos', 'Duolingo for Business', 'Súper Duolingo', 'Regala Súper Duolingo'];
const thirdArray = ['Duolingo para Android', 'Duolingo para iOS'];
const fourthArray = ['App de Duolingo', 'Schools', 'Duolingo English Test', 'Estado'];
const fifthArray = ['Normas de la comunidad', 'Términos', 'Privacidad'];

//Functions
const createFooterBubbles = (qnty) =>{
    for (let i = 0; i < qnty; i++){
        let bls = document.createElement('DIV');
        bls.classList.add('footer__bls-container__bls');
        blsContainer.appendChild(bls);
    }
}

//Conditions
if (window.screen.availWidth <= 480){
    createFooterBubbles(50)
    blsArray.forEach(element =>{
        let coords = element.getBoundingClientRect();
        let randomSize = Math.floor(Math.random()*5);
        element.style.width = 2 +  randomSize + 'px';
        element.style.height = 2 + randomSize + 'px';
        element.style.left = Math.floor(Math.random()*350) + 'px';
        element.style.top = coords.y + Math.floor(Math.random()*300) + 'px';
        element.style.animation = `fm-bubbles ${3 + Math.floor(Math.random()*8)}s infinite`;
    })
} else {
    createFooterBubbles(100);
    blsArray.forEach(element =>{
        let coords = element.getBoundingClientRect();
        let randomSize = Math.floor(Math.random()*8);
        element.style.width = 2 + randomSize + 'px';
        element.style.height = 2 + randomSize + 'px';
        element.style.left = Math.floor(Math.random()*1200) + 'px';
        element.style.top = coords.y + Math.floor(Math.random()*300) + 'px';
        element.style.animation = `fd-bubbles ${3 + Math.floor(Math.random()*8)}s infinite`;
    })
}

const createLinksContainer = (titleCnt, array, dbl) =>{
    //Variables
    const container = document.createElement('DIV');
    container.classList.add('footer__sources__link-container');
    let title = document.createElement('H3');
    title.textContent = titleCnt;
    title.classList.add('footer__sources__link-container__title');

    sources.appendChild(container);
    container.appendChild(title);

    //Loops
    for (let i = 0; i < array.length; i++){
        let link = document.createElement('P');
        link.innerHTML = array[i] + '<br>';
        link.classList.add('footer__sources__link-container__link');
        container.appendChild(link);
    }
    
    //Conditions
    if (dbl == true){
        let secondTitle = document.createElement('H3');
        secondTitle.classList.add('footer__sources__link-container__title');
        const arraySix = ['Blog', 'Instagram', 'Facebook', 'Twitter', 'YouTube'];
        secondTitle.textContent = 'Social';
        container.appendChild(secondTitle)
        for (let i = 0; i < arraySix.length; i++){
            let link = document.createElement('P');
            link.innerHTML = arraySix[i] + '<br>';
            link.classList.add('footer__sources__link-container__link');
            container.appendChild(link);
        }
    }
}

//Calling Functions
createLinksContainer('Sobre Nosotros', firstArray);
createLinksContainer('Productos', secondArray);
createLinksContainer('Aplicaciones', thirdArray);
createLinksContainer('Ayuda y soporte', fourthArray);
createLinksContainer('Términos y provacidad', fifthArray, true);