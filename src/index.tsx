import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.module.scss';
import Navbar from './components/navbar/navbar';

import MyFirstComponent from './components/page2/myFirstComponent';
import ContactInfo from './components/page3/contactInfo';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/project' element={<MyFirstComponent />} />
      <Route path='/contact' element={<ContactInfo />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

