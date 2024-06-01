import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './components/ipltable/table';
import './style.css'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav-bar/nav';
import BasicExample from './components/accordin/accordin';
// import  Image from './components/images/image.js';
import Caursol from './components/caursol/caursol';
import But from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        {/* <Nav></Nav> */}
        <But></But>
        <center>
        {/* <Caursol></Caursol> */}
        </center>
    {/* <BasicExample></BasicExample>  */}
    { /* <Image></Image> */ }


  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
