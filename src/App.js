import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';



function App() {
  
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')    
  // }

  const toggleMode = (cls) =>{
    // removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
    
  }
  return (
    <>
    <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading = "Try TextUtlis - " mode ={mode}/>
    </div>

    </>
  );
}

export default App;
