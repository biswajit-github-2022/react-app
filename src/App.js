//import './App.css';
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TetxForm";


function App() {

  const changeCol=(col)=>{
    if (col==="danger"){
      document.body.style.backgroundColor = "red"
    }
    if(col==="warning"){
      document.body.style.backgroundColor = "yellow"
    }
    if(col==="primary"){
      document.body.style.backgroundColor = "blue"
    }
  }

  const [alert, setAlert] = useState(null)
  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("LightMode Enabled","success")
      document.title="TextUtils-Home"
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40"
      showAlert("DarkMode Enabled","success")
      document.title="TextUtils Dark mode"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} showAlert={showAlert} changeCol={changeCol}/>
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter the text to Your Website" mode={mode} showAlert={showAlert}/>
        <About />
      </div>

    </>
  );
}

export default App;
