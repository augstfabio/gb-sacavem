import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Horarios from './pages/Horarios.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/gb-sacavem' element={<Home/>}/>
          <Route path='/horarios' element={<Horarios/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
