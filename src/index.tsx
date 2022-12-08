import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SomeExampleComponent from './components/example/someExampleComponent';
import MyFirstComponent from './components/myFirstComponent';
import Test from './components/test/test';
import './index.module.scss';
import Navbar from './components/navbar/navbar';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='example' element={<SomeExampleComponent />} />
      <Route path='/first' element={<MyFirstComponent />} />
      <Route path='/second' element={<Test />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

