
import { useState } from "react";
import React from 'react';
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); // dark mode enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(41 46 50 / 96%)";
      document.body.style.color = "white";
      showAlert("Dark mode enable");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enable");
    }
  };
  return (
    <>
        <Router>
          
      <Navbar
        title="Word-Twist"
        About="Get to know me"
        mode={mode}
        toggleMode={toggleMode}
        />
      <div className="container">
        <Alert alert={alert} />
      </div>
      
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />}/>

           <Route exact index element = {<TextForm
              heading="Enter Your Text To Analyze"
              showAlert={showAlert}
            />} />
           
            
          
        </Routes> 
      </div> 
      
       </Router>
    </>
  );
}

export default App;
