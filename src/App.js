import React from 'react'
import Login from './Login'
import Register from './Register'
import './Login.css';
import './Register.css';


import { BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/Register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
