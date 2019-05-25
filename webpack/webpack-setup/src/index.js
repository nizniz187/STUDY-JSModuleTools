import _ from 'lodash';
import './styles/style.css';
import GIF from './images/dancing-banana.gif';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    const image = new Image();
    image.src = GIF;

    element.appendChild(image);
    return element;
  }
  
  document.body.appendChild(component());