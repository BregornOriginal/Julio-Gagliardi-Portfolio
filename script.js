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

for (let i = 0; i < $projectList.length; i += 1) {
  let count = i;
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
  <button type="button" class="button-see-project-multi-post-stories popup-button">
    See Project
  </button>
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
<div class="full-width-btn popup-button">
  <a href="#">See Project</a>
</div>`;
    $gridSection.appendChild($article);
  }
};

$worksContainer.appendChild($gridSection);

const $buttonsPopup = document.querySelectorAll('popup-button');
const $popupSection = document.querySelector('.popup-section');


for (let i = 0; i < $buttonsPopup.length; i += 1) {
$buttonsPopup[i].addEventListener('click', () => {
  $popupSection.classList.remove('no-visible')
})
};
