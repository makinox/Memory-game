import './styles/colors.css';
import '@makinox/makinox-ui/dist/index.css';
import {Charge, Navbar, Helmet, SW} from './components/index';

function initializeApp() {
  SW();
  Helmet();
  Navbar();
  Charge();
}

initializeApp();
