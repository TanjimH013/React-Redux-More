import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "gray";
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
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
      {/* <Navbar/> */}

      {/* <Navbar title="TextUtils" /> */}
      <div className="container">
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          toggleMode={toggleMode}
        />

        <About mode={mode} toggleMode={toggleMode} />
      </div>
    </>
  );
}
