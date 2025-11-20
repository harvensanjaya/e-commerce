// import '@fontsource/inter';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import { store } from './redux/store.ts'
import './index.css'
import App from './App.tsx'
import {NavbarProvider} from './context/NavbarContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
      <NavbarProvider>
        <App />
      </NavbarProvider>
      </Provider>
  </StrictMode>,
)
