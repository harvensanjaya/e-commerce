import '@fontsource/inter';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {NavbarProvider} from './context/NavbarContext'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </StrictMode>,
)
