import _ from 'lodash';
import './style.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hey', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
