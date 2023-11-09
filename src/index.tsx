import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const summertime = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

//my favourite anime
summertime.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
