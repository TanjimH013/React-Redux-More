import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

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

      document.body.style.backgroundColor = "gray";

      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";

      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
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
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />

        <About mode={mode} toggleMode={toggleMode} />
      </div>
    </>
  );
}
