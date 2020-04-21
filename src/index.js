import React from 'react';
import ReactDOM from 'react-dom';
import Cover from './components/cover/index.js';
import Div from './components/content/index.js';
import * as serviceWorker from './serviceWorker';
import Button from './components/content/button/index';

ReactDOM.render(
  <React.StrictMode>
    <Cover />
    {/*<Div />*/}
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
