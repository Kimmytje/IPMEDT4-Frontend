import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Map from './map_components/Map';
import Map2 from './map_components/Map2';
import Map3 from './map_components/Map3';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Map3 />
  </React.StrictMode>
);

reportWebVitals();