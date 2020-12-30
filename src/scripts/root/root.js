import './root.css';

export default function root() {
  const fontAwesomeIcons = document.createElement('script');
  fontAwesomeIcons.src = 'https://kit.fontawesome.com/307e2eecdc.js';
  fontAwesomeIcons.crossOrigin = 'anonymous';

  document.head.appendChild(fontAwesomeIcons);
}
