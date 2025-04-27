import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MainHeading from './Components/jsx/MainHeading.jsx';
import CustomCursor from './Components/jsx/CustomCursor.jsx';
import SideButtons from './Components/jsx/SideButtons.jsx';

import './Components/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div className="MainWrapper">
    <div className="SideButtonsWrapper">

    <SideButtons />

    </div>
    <MainHeading />
    <CustomCursor />
    </div>

  </StrictMode>
);
