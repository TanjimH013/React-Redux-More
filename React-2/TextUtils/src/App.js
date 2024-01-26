import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#343a40";

      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";

      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          home="Home"
          about="About"
          contact="Contact"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <Navbar/> */}

        {/* <Navbar title="TextUtils" /> */}
        <div className="container my-3">
          <Routes>
            <Route
              path="/about"
              element={
                <About
                  mode={mode}
                  toggleMode={toggleMode}
                  showAlert={showAlert}
                />
              }
            />

            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  toggleMode={toggleMode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
