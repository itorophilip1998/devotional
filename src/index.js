import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App'; 
import * as serviceWorker from "./service-worker"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
serviceWorker.unregister();
