// Dom Variables
const $hamburgerButton = document.getElementById('hamburger-button');
const $logo = document.getElementById('logo');
const $menuNav = document.getElementById('mobile-menu-id');
const $closeButton = document.getElementById('close-button');
const $portfolio = document.getElementById('porfolio');
const $about = document.getElementById('about');
const $contact = document.getElementById('contact');
const $html = document.querySelector('html');

// Functions
function hideMobileMenu() {
  $hamburgerButton.classList.remove('menu-display-off');
  $logo.classList.remove('menu-display-off');
  $menuNav.classList.add('menu-display-off');
  $html.classList.remove('disable-scroll');
}

// Dom Manipulation
$hamburgerButton.addEventListener('click', () => {
  $hamburgerButton.classList.add('menu-display-off');
  $logo.classList.add('menu-display-off');
  $menuNav.classList.remove('menu-display-off');
  $menuNav.classList.add('disable-scroll');
  $html.classList.add('disable-scroll');
});

$closeButton.addEventListener('click', () => {
  hideMobileMenu();
});

$portfolio.addEventListener('click', () => {
  hideMobileMenu();
});

$about.addEventListener('click', () => {
  hideMobileMenu();
});

$contact.addEventListener('click', () => {
  hideMobileMenu();
});

// Object details

const $projectList = [{
  title: 'Next-Portfolio',
  description: 'This portfolio was created with Next.js. The goal of this is to show a simple first screen of my software development projects and to have the opportunity to be in contact with whatever want to talk about coding or start some work.',
  featureImage: './images/next-portfolio/experience-screenshoot.png',
  technologies: {
    firstTechnologie: 'Next.js',
    secondTechnologie: 'React.js',
    thirdTechnologie: 'Sanity.io',
    fourthTechnologie: 'Tailwind',
    fiftyTechnologie: 'TypeScript',
  },
  liveVersion: 'https://julio-gagliardi-portfolio.vercel.app/',
  sourceCode: 'https://github.com/BregornOriginal/next-portfolio',
},
{
  title: 'LOTR Movies Anniversary',
  description: 'First Capstone for Microverse! I choose a topic about the Lord Of The Ring, and create a fictitious website of his Anniversary.',
  featureImage: './images/LOTR-Anniversary/LOTR-Anniversary-MOKUP.png',
  technologies: {
    firstTechnologie: 'CSS',
    secondTechnologie: 'HTML',
    thirdTechnologie: 'JavasCript',
    fourthTechnologie: 'Git',
    fiftyTechnologie: 'CD/CI',
  },
  liveVersion: 'https://bregornoriginal.github.io/L-O-T-R-Anniversary/',
  sourceCode: 'https://github.com/BregornOriginal/capstone-module1/',
}, {
  title: 'Budget App',
  description: 'In this Capstone of RoR, I should create an app where the user can Log_in and Sig_up on it. Inside the app, the user can add transactions for each category',
  featureImage: './images/Screenshoot-Budget_app/all-devices-black.png',
  technologies: {
    firstTechnologie: 'RoR',
    secondTechnologie: 'SASS',
    thirdTechnologie: 'PostgreSQL',
    fourthTechnologie: 'Devise',
    fiftyTechnologie: 'CanCanCan',
  },
  liveVersion: 'https://bregorn-budget-app.herokuapp.com/',
  sourceCode: 'https://github.com/BregornOriginal/Budget-app',
},
{
  title: 'Colection of Cards',
  description: 'In this project, the requirement were to follow a disign as example to show on the home page a list of elements that was getted from an API',
  featureImage: './images/Magic-The-Gathering/Mockup screenshoot.png',
  technologies: {
    firstTechnologie: 'React',
    secondTechnologie: 'Redux',
    thirdTechnologie: 'JavaScript ES6',
    fourthTechnologie: 'Jest',
    fiftyTechnologie: 'GitHub CI/CD',
  },
  liveVersion: 'https://bregorn-magic-the-gathering.netlify.app/',
  sourceCode: 'https://github.com/BregornOriginal/react-capstone-module-3',
},
{
  title: 'Math Magicians',
  description: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA)',
  featureImage: './images/Math-Magicians/Home-mokup-screenshoot.png',
  technologies: {
    firstTechnologie: 'JS ES6',
    secondTechnologie: 'React',
    thirdTechnologie: 'Webpack',
    fourthTechnologie: 'Redux',
    fiftyTechnologie: 'Jest',
  },
  liveVersion: 'https://bregorn-calculator.netlify.app/',
  sourceCode: 'https://github.com/BregornOriginal/math-magicians',
},
{
  title: 'ezCr',
  description: 'This project consumes our own API to allow users to rent a car in a React UI.',
  featureImage: './images/ezCar/ezCar.png',
  technologies: {
    firstTechnologie: 'RoR',
    secondTechnologie: 'PostgreSQL',
    thirdTechnologie: 'React',
    fourthTechnologie: 'Redux',
    fiftyTechnologie: 'Tailwind/MUI',
  },
  liveVersion: 'https://ezcar.netlify.app/cars',
  sourceCode: 'https://github.com/indigodavid/ezCar_frontend',
},
{
  title: 'Prode',
  description: 'ON WORK - AVAIBLE SOON',
  featureImage: './images/image-background-data-dashboard.svg',
  technologies: {
    firstTechnologie: 'React',
    secondTechnologie: 'MySQL',
    thirdTechnologie: 'JavaScript',
    fourthTechnologie: 'Nest.js',
    fiftyTechnologie: 'Node.js',
  },
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio',
}];

const $worksContainer = document.getElementById('works-container');

const $gridSection = document.createElement('section');
$gridSection.classList.add('grid-section');

// Creation of cards

for (let i = 0; i < $projectList.length; i += 1) {
  const $article = document.createElement('article');
  if (i === 0) {
    $article.classList.add('works-section-one-container');
    $article.innerHTML = `<div class="image-recent-works-container">
<img
  id="image-recent-works"
  src="${$projectList[i].featureImage}"
  alt="A woman doing Yoga"
/>
</div>
<div class="information-and-icons-container">
<h4 class="title-recent-works-one">${$projectList[i].title}</h4>
<p class="description-recent-works-one">${$projectList[i].description}</p>
<div>
  <ul class="technologies-container-works-one">
    <li class="technologies-works-one">${$projectList[i].technologies.firstTechnologie}</li>
    <li class="technologies-works-one">${$projectList[i].technologies.secondTechnologie}</li>
    <li class="technologies-works-one">${$projectList[i].technologies.thirdTechnologie}</li>
    <li class="technologies-works-one">${$projectList[i].technologies.fourthTechnologie}</li>
    <li class="technologies-works-one">${$projectList[i].technologies.fiftyTechnologie}</li>
    </ul>
    <a class="button-see-project-multi-post-stories popup-button" href="#">See Project</a>
  </div>
</div>`;
    $worksContainer.appendChild($article);
  } else {
    $article.classList.add('secondary-card', `grid-${[i]}`);
    $article.innerHTML = `
<h4>${$projectList[i].title}</h4>
<p>
 ${$projectList[i].description}
</p>
<ul>
  <li>${$projectList[i].technologies.firstTechnologie}</li>
  <li>${$projectList[i].technologies.secondTechnologie}</li>
  <li>${$projectList[i].technologies.thirdTechnologie}</li>
  <li>${$projectList[i].technologies.fourthTechnologie}</li>
  <li>${$projectList[i].technologies.fiftyTechnologie}</li>
</ul>
  <a class="full-width-btn popup-button" href="#">See Project</a>
`;
    $gridSection.appendChild($article);
  }
}

// Creating the popup-projects

const $sectionPopupContainer = document.querySelector('#popup-container');

for (let i = 0; i < $projectList.length; i += 1) {
  const $article = document.createElement('section');
  $article.classList.add('popup-section', 'no-visible');
  $article.innerHTML = `<div class="title-menu">
      <h3>${$projectList[i].title}</h3>
      <img
        id="popUp-close-btn"
        alt="X button"
        src="./Icons/Icon-Cancel.svg"
      />
    </div>
    <ul>
      <li>${$projectList[i].technologies.firstTechnologie}</li>
      <li>${$projectList[i].technologies.secondTechnologie}</li>
      <li>${$projectList[i].technologies.thirdTechnologie}</li>
    </ul>
    <div class="project-resume">
      <div class="image-container">
        <img
          id="resume-image"
          src="${$projectList[i].featureImage}"
          alt="image whit a number ten and background pink"
        />
      </div>
      <div class="text-container">
        <p>
        ${$projectList[i].description}
        </p>
        <ul>
          <li class="link-button">
            <a
              target="_blank"
              rel="noopener"
              href=${$projectList[i].liveVersion}
            >
              See Live</a
            >
            <img
              class="resume-icon"
              alt="export icon"
              src="Icons/Icon-Export.svg"
            />
          </li>
          <li class="link-button">
            <a
              target="_blank"
              rel="noopener"
              href=${$projectList[i].sourceCode}
            >
              See Source</a
            >
            <img
              class="resume-icon"
              alt="export icon"
              src="Icons/Icon-GitHub.svg"
            />
          </li>
        </ul>
      </div>
    </div>`;
  $sectionPopupContainer.appendChild($article);
}

$worksContainer.appendChild($gridSection);

const $closeBtnPopup = document.querySelectorAll('#popUp-close-btn');

// Open "See Project" Close button popup
const $buttonsPopup = document.querySelectorAll('.popup-button');
const $popupSection = document.querySelectorAll('.popup-section');
const $header = document.getElementById('header-popup');
const $main = document.getElementById('main-popup');

for (let i = 0; i < $buttonsPopup.length; i += 1) {
  $buttonsPopup[i].addEventListener('click', () => {
    $popupSection[i].classList.remove('no-visible');
    $header.classList.add('blur');
    $main.classList.add('blur');
    // $popupSection[i].classList.add('.disable-scroll');
    $html.classList.add('disable-scroll');
  });
}

for (let i = 0; i < $buttonsPopup.length; i += 1) {
  $closeBtnPopup[i].addEventListener('click', () => {
    $popupSection[i].classList.add('no-visible');
    $header.classList.remove('blur');
    $main.classList.remove('blur');
    $html.classList.remove('disable-scroll');
  });
}

// Contact form validation

const $form = document.querySelector('#form');
const $UserEmailElement = document.querySelector('#email-address');

function checkEmail(input) {
  let valid = false;

  const patternEmail = /^[a-z\d@.\-_]+$/;

  if (patternEmail.test(input.value)) {
    valid = true;
  }
  return valid;
}

function showError(input, message) {
  const { parentElement } = input;

  const errorMessage = parentElement.querySelector('small');
  errorMessage.textContent = message;
  errorMessage.classList.add('small-validation');
}

$form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (checkEmail($UserEmailElement)) {
    $form.submit();
  } else {
    showError($UserEmailElement, 'Please complete this field whit lower case characters');
  }
});
