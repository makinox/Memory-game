import Icon from '../../assets/images/Logo.svg';
import './navbar.css';

export default function navbar() {
  const navbar = document.createElement('nav');
  const navbarSection = document.createElement('section');

  const navbarIcon = new Image();
  navbarIcon.src = Icon;
  navbarIcon.alt = 'Logo snake';
  const navbarTitle = document.createElement('span');
  navbarTitle.innerHTML = 'emory game';
  const navbarTop = document.createElement('div');
  navbarTop.appendChild(navbarIcon);
  navbarTop.appendChild(navbarTitle);

  const homeLinkIcon = document.createElement('i');
  homeLinkIcon.className = 'fas fa-home';
  const homeLink = document.createElement('a');
  homeLink.href = 'https://jesusbossa.dev';
  homeLink.append(homeLinkIcon);

  const twitterLinkIcon = document.createElement('i');
  twitterLinkIcon.className = 'fas fa-twitter-square';
  const twitterLink = document.createElement('a');
  twitterLink.href = 'https://twitter.com/jesMakinox';
  twitterLink.appendChild(twitterLinkIcon);

  const linkedinLinkIcon = document.createElement('i');
  linkedinLinkIcon.className = 'fas fa-linkedin';
  const linkedinLink = document.createElement('a');
  linkedinLink.href = 'https://www.linkedin.com/in/makinox';
  linkedinLink.appendChild(linkedinLinkIcon);

  const navbarBottom = document.createElement('div');
  navbarBottom.appendChild(homeLink);
  navbarBottom.appendChild(twitterLink);
  navbarBottom.appendChild(linkedinLink);

  navbarSection.appendChild(navbarTop);
  navbarSection.appendChild(navbarBottom);

  navbar.appendChild(navbarSection);
  navbar.className = 'game-navbar';

  document.body.appendChild(navbar);
}
