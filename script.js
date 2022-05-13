// Dom Variables
const $hamburgerButton = document.getElementById('hamburger-button');
const $logo = document.getElementById('logo');
const $menuNav = document.getElementById('mobile-menu-id');
const $closeButton = document.getElementById('close-button');
const $portfolio = document.getElementById('porfolio');
const $about = document.getElementById('about');
const $contact = document.getElementById('contact');

// Functions
function hideMobileMenu() {
  $hamburgerButton.classList.remove('menu-display-off');
  $logo.classList.remove('menu-display-off');
  $menuNav.classList.add('menu-display-off');
}

// Dom Manipulation
$hamburgerButton.addEventListener('click', () => {
  $hamburgerButton.classList.add('menu-display-off');
  $logo.classList.add('menu-display-off');
  $menuNav.classList.remove('menu-display-off');
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
  title: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  featureImage: './images/image-section-one.svg',
  technologies: {
    firstTechnologie: 'CSS',
    secondTechnologie: 'HTML',
    thirdTechnologie: 'Bootstrap',
    fourThechnologie: 'Ruby',

  },
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio-/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio-',
}, {
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  featureImage: './images/image-background-data-dashboard.svg',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
  },
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio-/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio-',
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
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio-/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio-',
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
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio-/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio-',
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
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio-/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio-',
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
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio-/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio-',
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
  liveVersion: 'https://bregornoriginal.github.io/Julio-Gagliardi-Portfolio-/',
  sourceCode: 'https://github.com/BregornOriginal/Julio-Gagliardi-Portfolio-',
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
    <li class="technologies-works-one">${$projectList[i].technologies.fourThechnologie}</li>
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

$worksContainer.appendChild($gridSection);

// Open "See Project" Close button popup
const $buttonsPopup = document.querySelectorAll('.popup-button');
const $popupSection = document.querySelector('.popup-section');
const $header = document.getElementById('header-popup');
const $main = document.getElementById('main-popup');

for (let i = 0; i < $buttonsPopup.length; i += 1) {
  $buttonsPopup[i].addEventListener('click', () => {
    $popupSection.classList.remove('no-visible');
    $header.classList.add('blur');
    $main.classList.add('blur');
  });
}

const $closeBtnPopup = document.getElementById('popUp-close-btn');

$closeBtnPopup.addEventListener('click', () => {
  $popupSection.classList.add('no-visible');
  $header.classList.remove('blur');
  $main.classList.remove('blur');
});

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
