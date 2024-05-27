import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './App.js';
import './style.css'
import reportWebVitals from './reportWebVitals';
// import Hello from './components/button/button';
import  Image from './components/images/image.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello></Hello>
    <Image></Image>


  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
