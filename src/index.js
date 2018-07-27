import React from 'react';
import {render} from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import App from './App.jsx';
import {store} from './store/store'

store.subscribe(() => {console.log('Store Updated')});

let rootElement = document.getElementById('root');

render(
    <Provider store = {store}>
        <App />
    </Provider>,  
    rootElement);
registerServiceWorker();
