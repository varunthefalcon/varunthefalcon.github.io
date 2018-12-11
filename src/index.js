import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

console.log(process.env.PUBLIC_URL);

ReactDOM.render(          
<BrowserRouter basename="/">
<App />
</BrowserRouter>  , document.getElementById('root'));
registerServiceWorker();