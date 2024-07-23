import { useState } from 'react';
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from './Components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState("light")
  const[alert, setalert] = useState(null)

  const showAlert = (message, type)=>{
    setalert({
        msg : message,
        type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggle = ()=>{
    if (mode === "light"){
      setMode("dark");
      document.body.style.background = "#171c40";
      document.body.style.color = "white";
      showAlert("Dark mode is set", "success")
    }
    else{
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light mode is set", "success")
    }
  }

  const toggleGreen = ()=>{
    if (mode === "light"){
      setMode("green");
      document.body.style.background = "green";
      document.body.style.color = "white";
      showAlert("Green mode is set", "success")
    }
    else{
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light mode is set", "success")
    }
  }
    return (
    <>
    <Router>
      <NavBar heading = "REACT" onclick = {toggle} Mode={mode} green={toggleGreen}/>
      <Alert alert = {alert}/>
      <div className='container my-8'>
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<TextForm heading = "Enter text here" Mode={mode} green={toggleGreen}/>}/>
      </Routes>
      </div>
    </Router>
    </> 
  );
}

export default App;
