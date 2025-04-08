import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { Rutas } from './components/Router/Rutas'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
        <Rutas/>
   </BrowserRouter>  
   </StrictMode>,
)
