//Variables
const main = document.querySelector('main');
const article = document.querySelectorAll('.main__article');
const articleBtnContainer = document.querySelector('.main__article__information-container__btn-container');
const platfromClasses = ['fa-apple', 'fa-google-play'];
const articleTwo = document.querySelector('.main__article--two');
const articleTwoTextContent = document.querySelector('.main__article--two__text-content');
const imgRoutesArticleTwo = ['https://d35aaqx5ub95lt.cloudfront.net/images/1994201dce8a55a0017d59b58a035fc3.svg', 'https://d35aaqx5ub95lt.cloudfront.net/images/8f1e99a540ab7afcf5915e8852024e4c.svg', 'https://d35aaqx5ub95lt.cloudfront.net/images/splash/ebdcc22deaf0f85388fcb09e7ecfbe78.svg', 'https://d35aaqx5ub95lt.cloudfront.net/images/splash/a4d5fab3d1926c240cb2ae696b07d156.svg'];
const imgRoutes = ['https://d35aaqx5ub95lt.cloudfront.net/images/super/8183c77cba99daf1e900fb5f9b0cc671.svg', 'https://d35aaqx5ub95lt.cloudfront.net/images/af5bf404fb8ea1ff96fdc9247a1e36e0.svg', 'https://d35aaqx5ub95lt.cloudfront.net/images/efficacyPage/5b117228254f9a9d8c7f541734f18225.svg'];
const articleName = ['three', 'five', 'seven'];
const articleThree = document.querySelector('.main__article--three');
const articleFour = document.querySelector('.main__article--four');
const articleFive = document.querySelector('.main__article--five');
const articleSix = document.querySelector('.main__article--six');
const articleSeven = document.querySelector('.main__article--seven');
let lineBreak = '<br>';

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
        title.textContent = 'Por qu?? te encantar?? aprender con Duolingo';

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
        createContainer(imgRoutesArticleTwo[0], 'fire', 'Efectivo y eficiente', 'Nuestros cursos ense??an a leer, escuchar y hablar en otro idioma de forma efectiva y eficiente. ??Ya viste nuestros estudios m??s recientes?');
        createContainer(imgRoutesArticleTwo[1], 'correct', 'Aprendizaje personalizado', 'Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan a tu desempe??o para ayudarte a aprender al nivel adecuado y a tu propio ritmo.');
        createContainer(imgRoutesArticleTwo[2], 'crown', 'Mantente motivado', 'Al sentirse como un juego y ofrecerte desaf??os divertidos, hacemos que sea f??cil formar un h??bito de aprendizaje de idiomas. Adem??s, siempre contar??s con el apoyo y los recordatorios de nuestra amistosa mascota, Duo, el b??ho.');
        createContainer(imgRoutesArticleTwo[3], 'woman', '??Divi??rtete!', '??El aprendizaje puede ser efectivo y divertido a la vez! Desarrolla tus habilidades cada d??a con ejercicios entretenidos y personajes entra??ables.');
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
        title.textContent = `Por qu?? te encantar?? aprender con Duolingo`;
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
            createInformationContainers('first-block', imgRoutesArticleTwo[0], 'fire', 'Efectivo y eficiente', 'Nuestros cursos ense??an a leer, escuchar y hablar en otro idioma de forma efectiva y eficiente. ??Ya viste nuestros estudios m??s recientes?');
            createInformationContainers('first-block', imgRoutesArticleTwo[1], 'correct', 'Aprendizaje personalizado', 'Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan a tu desempe??o para ayudarte a aprender al nivel adecuado y a tu propio ritmo.');
            createInformationContainers('second-block', imgRoutesArticleTwo[2], 'crown', 'Mantente motivado', 'Al sentirse como un juego y ofrecerte desaf??os divertidos, hacemos que sea f??cil formar un h??bito de aprendizaje de idiomas. Adem??s, siempre contar??s con el apoyo y los recordatorios de nuestra amistosa mascota, Duo, el b??ho.');
            createInformationContainers('second-block', imgRoutesArticleTwo[3], 'woman', '??Divi??rtete!', '??El aprendizaje puede ser efectivo y divertido a la vez! Desarrolla tus habilidades cada d??a con ejercicios entretenidos y personajes entra??ables.');
    }

    createDesktopArticleTwo();
}

const createArticleStructure = (articleContainerDOM, imgRoute, imgAlt, titleContent, textCnt, linkContent, linkDirection) =>{
    //Variables
    const articleContainer = document.querySelector(`.main__article--${articleContainerDOM}`);
    let img = document.createElement('IMG');
    const informationContainer = document.createElement('DIV');
    let title = document.createElement('H2');
    let text = document.createElement('P');
    let link = document.createElement('A');

    //Attributes and Content
    img.setAttribute('src', imgRoute);
    img.setAttribute('alt', imgAlt);
    title.textContent = titleContent;
    text.innerHTML = textCnt;
    link.textContent = linkContent;
    link.setAttribute('href', linkDirection);

    //Classes
    img.classList.add('main__article__img');
    img.classList.add(`main__article--${articleContainerDOM}__img`);
    informationContainer.classList.add('main__article__information-container');
    title.classList.add('main__article__information-container__title');
    text.classList.add('main__article__information-container__text');
    link.classList.add('main__article__information-container__link');

    //AppendChild
    articleContainer.appendChild(img);
    articleContainer.appendChild(informationContainer);
    informationContainer.appendChild(title);
    informationContainer.appendChild(text);
    informationContainer.appendChild(link);
}

const createBtnDownloader = (imgClass, linkRoute, platfromText, txtContent) =>{
    //Variables
    let link = document.createElement('A');
    let mainBtn = document.createElement('BUTTON');
    let img = document.createElement('I');
    let text = document.createElement('P');
    let platfrom = document.createElement('SPAN');

    //Content and Attributes
    link.setAttribute('href', linkRoute);
    mainBtn.setAttribute('title', platfromText);
    platfrom.textContent = platfromText;
    text.innerHTML = txtContent + lineBreak;

    //Classes
    mainBtn.classList.add('main__article__information-container__btn-container__btn');
    img.classList.add('main__article__information-container__btn-container__btn__img');
    img.classList.add('fa-brands');
    img.classList.add(imgClass);
    text.classList.add('main__article__information-container__btn-container__btn__text');
    platfrom.classList.add('main__article__information-container__btn-container__btn__text__platform');

    //Append Child
    articleBtnContainer.appendChild(link);
    link.appendChild(mainBtn);
    mainBtn.appendChild(img);
    mainBtn.appendChild(text);
    text.appendChild(platfrom);
}

//Calling Functions
createArticleStructure(articleName[0], imgRoutes[0], 'Super Duolingo', 'Impulsa tu aprendizaje con S??per Duolingo', `En Duolingo, puedes aprender idiomas totalmente gratis, pero puedes eliminar los anuncios y apoyar${lineBreak}la educaci??n gratuita con S??per. ??Te regalamos 2 semanas gratis!`, 'M??S SOBRE S??PER DUOLINGO', 'https://es.duolingo.com/super');
createArticleStructure(articleName[1], imgRoutes[1], 'Duolingo-Schools', 'Duolingo for Schools', `Una herramienta gratuita para maestros que ayuda a los estudiantes a aprender idiomas a${lineBreak}trav??s de la app de Duolingo, tanto dentro como fuera del sal??n de clases.`, 'USA DUOLINGO EN TU SAL??N DE CLASES', 'https://schools.duolingo.com/');
createArticleStructure(articleName[2], imgRoutes[2], 'Duolingo-Efficacy', 'Cursos efectivos y eficientes', `Nuestros cursos ense??an a leer, escuchar y hablar de forma efectiva y eficiente. ??Ya viste nuestros${lineBreak}estudios m??s recientes?`, 'M??S SOBRE NUESTROS ESTUDIOS', 'https://es.duolingo.com/efficacy');

createBtnDownloader(platfromClasses[0], 'https://apps.apple.com/app/id570060128?mt=8&pt=1374442&ct=Product+Test%3A+Mobile+web+download+banners+on+splash', 'App Store', 'Desc??rgalo en la');
createBtnDownloader(platfromClasses[1], 'https://play.google.com/store/apps/details?hl=es&id=com.duolingo&referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsplash', 'Google play', 'Disponible en')