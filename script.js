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
  title: 'Capstone Module 1 Microverse',
  description: 'First Capstone for Microverse Bootcamp! I choose a topic about the Lord Of The Ring, and create a fictitious website of his Anniversary.',
  featureImage: './images/Screenshoot-Project 1/Capstone-module-1-mobile.png',
  technologies: {
    firstTechnologie: 'CSS',
    secondTechnologie: 'HTML',
    thirdTechnologie: 'JavasCript',

  },
  liveVersion: 'https://bregornoriginal.github.io/capstone-module1/',
  sourceCode: 'https://github.com/BregornOriginal/capstone-module1/',
}, {
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  featureImage: './images/image-background-data-dashboard.svg',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
  },
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio',
},
{
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  featureImage: './images/image-background-data-dashboard.svg',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
  },
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio',
},
{
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  featureImage: './images/image-background-data-dashboard.svg',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
  },
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio',
},
{
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  featureImage: './images/image-background-data-dashboard.svg',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
  },
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio',
},
{
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  featureImage: './images/image-background-data-dashboard.svg',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
  },
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio',
},
{
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  featureImage: './images/image-background-data-dashboard.svg',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
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
    // $html.classList.add('disable-scroll');
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
