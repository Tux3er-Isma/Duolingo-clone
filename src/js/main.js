//Variables
const main = document.querySelector('main');
const article = document.querySelectorAll('.main__article');
const articleTwo = document.querySelector('.main__article--two');
const articleTwoTextContent = document.querySelector('.main__article--two__text-content');
const imgRoutes = ['https://d35aaqx5ub95lt.cloudfront.net/images/1994201dce8a55a0017d59b58a035fc3.svg', 'https://d35aaqx5ub95lt.cloudfront.net/images/8f1e99a540ab7afcf5915e8852024e4c.svg', 'https://d35aaqx5ub95lt.cloudfront.net/images/splash/ebdcc22deaf0f85388fcb09e7ecfbe78.svg', 'https://d35aaqx5ub95lt.cloudfront.net/images/splash/a4d5fab3d1926c240cb2ae696b07d156.svg'];

//Conditions
if (window.screen.availWidth <= 480){
    //Functions
    const createMobileArticleTwo = () =>{
        //Variables
        let img = document.createElement('IMG');
        let title = document.createElement('H2');
        let informationContainer = document.createElement('DIV');

        //Attributes and Content
        img.setAttribute('src', 'https://d35aaqx5ub95lt.cloudfront.net/images/3816ddfd0658efd7bb713fd823053b82.svg');
        title.textContent = 'Por qué te encantará aprender con Duolingo';

        //Classes
        img.classList.add('main__article--two__text-content__img');
        title.classList.add('main__article--two__text-content__title');
        informationContainer.classList.add('main__article--two__text-content__information-container');

        //AppendChild
        articleTwoTextContent.appendChild(img);
        articleTwoTextContent.appendChild(title);
        articleTwoTextContent.appendChild(informationContainer);

        //Functions
        const createContainer = (imgRoute, imgAlt, title, text) =>{
            //Variables
            const container = document.createElement('DIV');
            let containerImg = document.createElement('IMG');
            let containerTitle = document.createElement('H3');
            let containerText = document.createElement('P');

            //Attributes
            containerImg.setAttribute('src', imgRoute);
            containerImg.setAttribute('alt', imgAlt);

            //TextContent
            containerTitle.textContent = title;
            containerText.textContent = text;

            //Classes
            container.classList.add('main__article--two__text-content__information-container__little-container')
            containerImg.classList.add('main__article--two__text-content__information-container__little-container__img');
            containerTitle.classList.add('main__article--two__text-content__information-container__little-container__title');
            containerText.classList.add('main__article--two__text-content__information-container__little-container__text');

            //AppendChild
            informationContainer.appendChild(container);
            container.appendChild(containerImg);
            container.appendChild(containerTitle);
            container.appendChild(containerText);
        }

        //Calling Functions
        createContainer(imgRoutes[0], 'fire', 'Efectivo y eficiente', 'Nuestros cursos enseñan a leer, escuchar y hablar en otro idioma de forma efectiva y eficiente. ¿Ya viste nuestros estudios más recientes?');
        createContainer(imgRoutes[1], 'correct', 'Aprendizaje personalizado', 'Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan a tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.');
        createContainer(imgRoutes[2], 'crown', 'Mantente motivado', 'Al sentirse como un juego y ofrecerte desafíos divertidos, hacemos que sea fácil formar un hábito de aprendizaje de idiomas. Además, siempre contarás con el apoyo y los recordatorios de nuestra amistosa mascota, Duo, el búho.');
        createContainer(imgRoutes[3], 'woman', '¡Diviértete!', '¡El aprendizaje puede ser efectivo y divertido a la vez! Desarrolla tus habilidades cada día con ejercicios entretenidos y personajes entrañables.');
    }

    createMobileArticleTwo();
}