import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {Toaster} from "react-hot-toast"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>

        <App />
        <Toaster/>

  </React.StrictMode>
    


);


