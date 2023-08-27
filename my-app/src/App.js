import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setAlert("Hey, Dark Mode is Enabled!!", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlert("Hey, Light Mode is Enabled!!", "Success");
    }
  };
  return (
    
     <>
      <Navbar
        title="My First React App Buddy"
        abtText="About"
        homeText="Home"
      />
      <Alert alert={alert}></Alert>
      <div className="container mb-3">
        <About />
        {/* <Routes>
          <Route path="/about" element={}>
          </Route> */}
          {/* <Route path="/" element={}> */}
          <TextForm
            heading="Here Put Your Heading Buddy"
            showAlert={showAlert}
            mode={mode}
            toggleMode={toggleMode}
          />
          {/* </Route> */}
        {/* </Routes> */}
      </div>
     </>
  );
}

export default App;
