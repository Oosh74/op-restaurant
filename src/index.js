import './styles.css';
import homePage from './components/homepage.js';
import aboutPage from './components/about.js';
import contactPage from './components/contact.js';
import menuPage from './components/menu.js';

const content = document.querySelector('#content');
const navBtnArr = Array.from(document.querySelectorAll('.nav-btn'));

console.log(navBtnArr);

content.appendChild(homePage());

const renderPage = (newPage) => {
  content.innerHTML = '';
  content.appendChild(newPage);
};

navBtnArr.forEach((navBtn) => {
  navBtn.addEventListener('click', (e) => {
    const btn = e.target.id;
    if (btn === 'home-btn') {
      renderPage(homePage());
    } else if (btn === 'about-btn') {
      renderPage(aboutPage());
    } else if (btn === 'menu-btn') {
      renderPage(menuPage());
    } else if (btn === 'contact-btn') {
      renderPage(contactPage());
    }
  });
});

content.appendChild(homePage());
