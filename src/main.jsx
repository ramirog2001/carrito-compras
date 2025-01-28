import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StoreApp } from './StoreApp'
import { BrowserRouter } from 'react-router-dom'
import './index.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <StoreApp />
    </StrictMode>
  </BrowserRouter>
)
