import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route,BrowserRouter as Router,Routes} from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Authentication from './pages/authentication'
import './App.css'
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';  

function App() {
  return(
    <Router>
      <AuthProvider>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path='/auth' element={<Authentication />}/>
      <Route  path='/home' element={<HomeComponent/>} />
      <Route path='/history' element={<History />}/>
     
      <Route path='/:url' element={<VideoMeetComponent />}/>
    
    </Routes>
    </AuthProvider>
    </Router>
  );
}

export default App
