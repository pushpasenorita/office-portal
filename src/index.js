import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './All pages/User-profile/Components1/App';
import reportWebVitals from './reportWebVitals';
// import App1 from "./All pages/User-profile/subPages-of-UP/App";

const root = createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();