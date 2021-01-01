import Icon from '../../assets/images/Logo.svg';

export default function Helmet() {
  const faviconElement = document.createElement('link');
  faviconElement.rel = 'icon';
  faviconElement.href = Icon;
  document.head.appendChild(faviconElement);
}
