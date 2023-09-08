import "./Appa.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
  HashRouter
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1800)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#292929';
      showAlert("Dark mode enabled", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff'
      showAlert("Light mode enabled", "success");
    }
  }

  return (
    <>
    <HashRouter>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <TextForm heading="Analyze your text here" mode={mode} showAlert = {showAlert}/> */}
        {/* <About/> */}

        
      <Routes>
        <Route exact path="/" element={<TextForm heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert = {showAlert}/>} />
        <Route exact path="/about/" element={<About mode={mode}/>} />
      </Routes>
      </div>
    </HashRouter>

    </>
  );
}

export default App;
