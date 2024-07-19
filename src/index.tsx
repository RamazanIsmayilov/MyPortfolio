import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/main.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App';
import EducationProvider from './context/EducationProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <EducationProvider>
      <App />
    </EducationProvider>
  </React.StrictMode>
);