import {TopBar, FluidContainer, ButtonOutline} from '@makinox/makinox-ui';
import Icon from '../../assets/images/Logo.svg';
import './navbar.css';

export default function navbar() {
  const navbarIcon = new Image();
  navbarIcon.src = Icon;
  navbarIcon.style.width = '40px';
  navbarIcon.alt = 'Logo snake';

  const navbar = document.querySelector('nav');
  navbar.className = TopBar({});

  const section = document.querySelector('section');
  section.className = `flex justify-between items-center ${FluidContainer()}`;
  section.style.padding = '0';

  const navbarChildF = document.querySelector('nav section div:first-of-type');
  navbarChildF.className = 'flex items-center';
  navbarChildF.prepend(navbarIcon);

  const navbarTitle: HTMLElement = document.querySelector('nav section div:first-of-type span');
  navbarTitle.style.width = '100%';

  const navbarA = document.querySelectorAll('nav section div:last-of-type a');
  navbarA.forEach((el: HTMLElement) => {
    el.style.textDecoration = 'none';
  });

  const navbarRef = document.querySelectorAll('nav section div:last-of-type i');

  navbarRef.forEach((el: HTMLElement) => {
    el.style.transition = 'all 0.3s ease 0s';
    el.style.color = 'rgb(var(--light-primary))';
    el.style.cursor = 'pointer';
    el.style.fontSize = '20px';
    el.style.margin = '0 2px';
  });

  const resetButton = document.querySelector('#reset');
  resetButton.className = ButtonOutline({});
}
