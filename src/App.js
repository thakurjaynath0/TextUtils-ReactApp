import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#04192d'
      showAlert("Dark mode has been enabled", "success")
      setTimeout(() => {
        document.title = 'Text Utils - Dark Mode'
      }, 1000);
      
    }else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      setTimeout(() => {
        document.title = 'Text Utils - Light Mode'
      }, 1000);
    }
  }

  return (
    <>
     <Router>
       <Navbar  title='TitleUtils' homeText='Home' aboutText='About' mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert}/>
       <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={
          <Form showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} /> 
          }/>
        </Routes>
     </Router>
     </>
  );
}

export default App;
