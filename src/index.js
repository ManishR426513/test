import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo from './compo/todo';
import Tracker from './compo/Tracker';
import { Provider } from 'react-redux'
import store from './redux/store'
import Cart from './compo/Cart';
import Parent from './classcompo/Parent';
import Cal from './compo/Cal';
import ClassTracker from './compo/ClassTracker';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider  store={store} >
 
   <Cart/>
  
  </Provider>
);


reportWebVitals();
