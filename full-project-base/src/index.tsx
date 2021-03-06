import React from 'react';
import ReactDOM from 'react-dom';
import './polyfill';
import './index.css';
import App from './App';
import './common/internationalization/i18n';
import * as serviceWorker from './serviceWorker';
import { initContainer } from './common/injection/inversify.config';

initContainer()
  .then(container => ReactDOM.render(<App container={container} />, document.getElementById('root')));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
