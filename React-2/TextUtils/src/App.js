import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

export default function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About" contact="Contact" />
      {/* <Navbar/> */}

      <div className="container">
        <TextForm heading="Enter the text to analyze" />

        <About />
      </div>
    </>
  );
}
