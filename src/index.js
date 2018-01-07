import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
// For more themes: https://highlightjs.org/static/demo/
import '../node_modules/highlight.js/styles/atom-one-light.css'

ReactDOM.render(
  <Docs />,
  document.getElementById('root')
);

// registerServiceWorker();

// Improve:
// - Search
// - Might need to hide internal components (new folder 'internals')
// - Group components (nested folders)
// - Live props toggling
// - Markdown support within descriptions
// ( - Live editing ) (Ex: react-toolbox) or links to ready-to-use JSBin, Code Sandbox...
