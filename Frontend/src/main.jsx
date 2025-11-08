import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Context from './Components/Context/Context'; // ✅ Import your provider

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  
);