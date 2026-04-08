import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { FirsStepsApp } from './FirstStepsApp';
// import { MyAwesomeApp } from './MyAwesomeApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirsStepsApp />
    {/* <MyAwesomeApp /> */}
  </StrictMode>
);
