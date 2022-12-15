import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.module.scss';
import Navbar from './components/navbar/navbar';


import ContactInfo from './components/page3/contactInfo';
import GallaryComponent from './components/page2/gallary';
import AboutMe from './components/page1/aboutMe';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<AboutMe />}></Route>
      <Route path='/gallary' element={<GallaryComponent />} />
      <Route path='/contact' element={<ContactInfo />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

