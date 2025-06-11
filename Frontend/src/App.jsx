import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route,BrowserRouter as Router,Routes} from "react-router-dom";
import LandingPage from './pages/LandingPage'
import './App.css'

function App() {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
    </Routes>
    </Router>
  );
}

export default App
