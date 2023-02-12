//Variables
const main = document.querySelector('main');
const article = document.querySelectorAll('.main__article');
const articleTwo = document.querySelector('.main__article--two');
const articleTwoTextContent = document.querySelector('.main__article--two__text-content');
const imgRoutesArticleTwo = ['https://d35aaqx5ub95lt.cloudfront.net/images/1994201dce8a55a0017d59b58a035fc3.svg', 'https://d35aaqx5ub95lt.cloudfront.net/images/8f1e99a540ab7afcf5915e8852024e4c.svg', 'https://d35aaqx5ub95lt.cloudfront.net/images/splash/ebdcc22deaf0f85388fcb09e7ecfbe78.svg', 'https://d35aaqx5ub95lt.cloudfront.net/images/splash/a4d5fab3d1926c240cb2ae696b07d156.svg'];
const imgRoutes = [];
const articleName = ['three', 'five', 'seven'];
const articleThree = document.querySelector('.main__article--three');
const articleFour = document.querySelector('.main__article--four');
const articleFive = document.querySelector('.main__article--five');
const articleSix = document.querySelector('.main__article--six');
const articleSeven = document.querySelector('.main__article--seven');

//Conditions
if (window.screen.availWidth <= 480){
    //Functions
    const createMobileArticleTwo = () =>{
        //Variables
        const imgContainer = document.createElement('PICTURE');
        let img = document.createElement('IMG');
        let title = document.createElement('H2');
        let informationContainer = document.createElement('DIV');

        //Attributes and Content
        img.setAttribute('src', 'https://d35aaqx5ub95lt.cloudfront.net/images/3816ddfd0658efd7bb713fd823053b82.svg');
        img.setAttribute('alt', 'computer');
        title.textContent = 'Por qué te encantará aprender con Duolingo';

        //Classes
        imgContainer.classList.add('main__article--two__text-content__img-container')
        img.classList.add('main__article--two__text-content__img-container__img');
        title.classList.add('main__article--two__text-content__title');
        title.classList.add('main__article__text-content__title');
        informationContainer.classList.add('main__article--two__text-content__information-container');

        //AppendChild
        articleTwoTextContent.appendChild(imgContainer);
        imgContainer.appendChild(img);
        articleTwoTextContent.appendChild(title);
        articleTwoTextContent.appendChild(informationContainer);

        //Functions
        const createContainer = (imgRoute, imgAlt, title, text) =>{
            //Variables
            const container = document.createElement('DIV');
            let containerImg = document.createElement('IMG');
            const textContainer = document.createElement('DIV');
            let textContainerTitle = document.createElement('H3');
            let textContainerText = document.createElement('P');

            //Attributes
            containerImg.setAttribute('src', imgRoute);
            containerImg.setAttribute('alt', imgAlt);

            //TextContent
            textContainerTitle.textContent = title;
            textContainerText.textContent = text;

            //Classes
            container.classList.add('main__article--two__text-content__information-container__little-container')
            containerImg.classList.add('main__article--two__text-content__information-container__little-container__img');
            textContainer.classList.add('main__article--two__text-content__information-container__little-container__text-container')
            textContainerTitle.classList.add('main__article--two__text-content__information-container__little-container__text-container__title');
            textContainerText.classList.add('main__article--two__text-content__information-container__little-container__text-container__text');

            //AppendChild
            informationContainer.appendChild(container);
            container.appendChild(containerImg);
            container.appendChild(textContainer);
            textContainer.appendChild(textContainerTitle);
            textContainer.appendChild(textContainerText);
        }

        //Calling Functions
        createContainer(imgRoutesArticleTwo[0], 'fire', 'Efectivo y eficiente', 'Nuestros cursos enseñan a leer, escuchar y hablar en otro idioma de forma efectiva y eficiente. ¿Ya viste nuestros estudios más recientes?');
        createContainer(imgRoutesArticleTwo[1], 'correct', 'Aprendizaje personalizado', 'Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan a tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.');
        createContainer(imgRoutesArticleTwo[2], 'crown', 'Mantente motivado', 'Al sentirse como un juego y ofrecerte desafíos divertidos, hacemos que sea fácil formar un hábito de aprendizaje de idiomas. Además, siempre contarás con el apoyo y los recordatorios de nuestra amistosa mascota, Duo, el búho.');
        createContainer(imgRoutesArticleTwo[3], 'woman', '¡Diviértete!', '¡El aprendizaje puede ser efectivo y divertido a la vez! Desarrolla tus habilidades cada día con ejercicios entretenidos y personajes entrañables.');
    }

    createMobileArticleTwo();
} else{
    //Functions
    const createDesktopArticleTwo = () =>{
        //Variables
        let title = document.createElement('H2');
        const flexContainer = document.createElement('DIV');
        const firstBlock = document.createElement('DIV');
        let img = document.createElement('IMG');
        const secondBlock = document.createElement('DIV');

        //Attributes and Content
        title.textContent = `Por qué te encantará aprender con Duolingo`;
        img.setAttribute('src', 'https://d35aaqx5ub95lt.cloudfront.net/images/3816ddfd0658efd7bb713fd823053b82.svg');
        img.setAttribute('alt', 'computer');

        //Classes
        title.classList.add('main__article--two__title');
        flexContainer.classList.add('main__article--two__text-content__desktop__flex-container');
        firstBlock.classList.add('main__article--two__text-content__desktop__flex-container__first-block');
        img.classList.add('main__article--two__text-content__desktop__flex-container__img');
        secondBlock.classList.add('main__article--two__text-content__desktop__flex-container__second-block');

        //AppendChild
        articleTwo.appendChild(title);
        articleTwoTextContent.appendChild(flexContainer);
        flexContainer.appendChild(firstBlock);
        flexContainer.appendChild(img);
        flexContainer.appendChild(secondBlock);

        //Functions
        const createInformationContainers = (container, imgRoute, imgAlt, title, text) =>{
            //Variables
            const informationContainer = document.createElement('DIV');
            let img = document.createElement('IMG');
            const textContainer = document.createElement('DIV');
            let textContainerTitle = document.createElement('H3');
            let textContainerText = document.createElement('P');

            //Attributes and content
            img.setAttribute('src', imgRoute);
            img.setAttribute('alt', imgAlt);
            textContainerTitle.textContent = title;
            textContainerText.textContent = text;


            //Classes
            img.classList.add(`main__article--two__text-content__desktop__flex-container__${container}__information-container__img`);
            informationContainer.classList.add(`main__article--two__text-content__desktop__flex-container__${container}__information-container`);
            textContainer.classList.add(`main__article--two__text-content__desktop__flex-container__${container}__information-container__text-container`)
            textContainerTitle.classList.add(`main__article--two__text-content__desktop__flex-container__${container}__information-container__text-container__title`);
            textContainerText.classList.add(`main__article--two__text-content__desktop__flex-container__${container}__information-container__text-container__text`);

            //AppendChild
            if (container == 'first-block'){
                firstBlock.appendChild(informationContainer);
            } else {
                secondBlock.appendChild(informationContainer);
            }

            informationContainer.appendChild(img);
            informationContainer.appendChild(textContainer);
            textContainer.appendChild(textContainerTitle);
            textContainer.appendChild(textContainerText);
        }

            //Calling Functions
            createInformationContainers('first-block', imgRoutesArticleTwo[0], 'fire', 'Efectivo y eficiente', 'Nuestros cursos enseñan a leer, escuchar y hablar en otro idioma de forma efectiva y eficiente. ¿Ya viste nuestros estudios más recientes?');
            createInformationContainers('first-block', imgRoutesArticleTwo[1], 'correct', 'Aprendizaje personalizado', 'Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan a tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.');
            createInformationContainers('second-block', imgRoutesArticleTwo[2], 'crown', 'Mantente motivado', 'Al sentirse como un juego y ofrecerte desafíos divertidos, hacemos que sea fácil formar un hábito de aprendizaje de idiomas. Además, siempre contarás con el apoyo y los recordatorios de nuestra amistosa mascota, Duo, el búho.');
            createInformationContainers('second-block', imgRoutesArticleTwo[3], 'woman', '¡Diviértete!', '¡El aprendizaje puede ser efectivo y divertido a la vez! Desarrolla tus habilidades cada día con ejercicios entretenidos y personajes entrañables.');
    }

    createDesktopArticleTwo();
}

const createArticleStructure = (articleContainerDOM, imgRoute, imgAlt, titleContent, textCnt, linkContent) =>{
    //Variables
    const articleContainer = document.querySelector(`main__article--${articleContainerDOM}`);
    let img = document.createElement('IMG');
    const informationContainer = document.createElement('DIV');
    let title = document.createElement('H1');
    let text = document.createElement('P');
    let link = document.createElement('A');

    //Attributes and Content
    img.setAttribute('src', imgRoute);
    img.setAttribute(imgAlt);
    title.textContent = titleContent;
    text.textContent = textCnt;
    link.textContent = linkContent;

    //Classes
    img.classList.add('main__article__img');
    informationContainer.classList.add('main__article__information-container');
    title.classList.addd('main__article__information-container__title');
    text.classList.add('main__article__information-container__text');
    link.classList.add('main__article__information-container__link');

    //AppendChild
    articleContainer.appendChild(img);
    articleContainer.appendChild(informationContainer);
    informationContainer.appendChild(title);
    informationContainer.appendChild(text);
    informationContainer.appendChild(link);
}

//Calling Functions
