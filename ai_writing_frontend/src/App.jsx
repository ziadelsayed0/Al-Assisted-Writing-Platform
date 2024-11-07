import './App.css'
import React, { useEffect } from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ChatWindow from './pages/ChatWindow'
import StartWindow from './pages/StartWindow'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element= {<SignIn/>}/>
      <Route path="/chat" element= {<ChatWindow/>}/>
      <Route path="/" element= {<StartWindow/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
