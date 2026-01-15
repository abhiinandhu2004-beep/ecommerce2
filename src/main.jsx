import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AgdProvider  from './context/Agdcontext'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <AgdProvider>
      <App />
    </AgdProvider>
    </BrowserRouter>
 
)
