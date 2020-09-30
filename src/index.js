import React from 'react'; //tworzenie reactowych komponentow
import ReactDOM from 'react-dom'; //paczka do wyrenderowania bezposrednio do pliku HTML
import './views/Root/index.css';
import Root from './views/Root/Root.js';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
   <Root/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
