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
  }
}, {
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
  }
},
{
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
  }
},
{
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
  }
},
{
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
  }
},
{
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
  }
},
{
  title: 'Data Dashboard Healthcare',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  technologies: {
    firstTechnologie: 'HTML',
    secondTechnologie: 'Bootstrap',
    thirdTechnologie: 'Ruby',
  }
}];

const $worksContainer = document.getElementById('works-container');
const $article = document.createElement('article');
$article.classList.add('works-section-one-container');


$article.innerHTML = `<div class="image-recent-works-container">
<img
  id="image-recent-works"
  src="${$projectList[0].featureImage}"
  alt="A woman doing Yoga"
/>
</div>
<div class="information-and-icons-container">
<h4 class="title-recent-works-one">${$projectList[0].title}</h4>
<p class="description-recent-works-one">${$projectList[0].description}</p>
<div>
  <ul class="technologies-container-works-one">
    <li class="technologies-works-one">${$projectList[0].technologies.firstTechnologie}</li>
    <li class="technologies-works-one">${$projectList[0].technologies.secondTechnologie}</li>
    <li class="technologies-works-one">${$projectList[0].technologies.thirdTechnologie}</li>
    <li class="technologies-works-one">${$projectList[0].technologies.fourThechnologie}</li>
  </ul>
  <button type="button" class="button-see-project-multi-post-stories">
    See Project
  </button>
</div>
</div>`;
$worksContainer.appendChild($article);

const $gridSection = document.createElement('section');
$gridSection.classList.add('grid-section');

const $articleCard = document.createElement('article');
$articleCard.classList.add('secondary-card', 'grid-1');

$articleCard.innerHTML = `
<h4>${$projectList[1].title}</h4>
<p>
 ${$projectList[1].description}
</p>
<ul>
  <li>${$projectList[1].technologies.firstTechnologie}</li>
  <li>${$projectList[1].technologies.secondTechnologie}</li>
  <li>${$projectList[1].technologies.thirdTechnologie}</li>
</ul>
<div class="full-width-btn">
  <a href="#">See Project</a>
</div>`;

$gridSection.appendChild($articleCard);
$worksContainer.appendChild($gridSection);
