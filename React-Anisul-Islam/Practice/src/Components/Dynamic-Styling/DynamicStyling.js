import React, { useEffect, useState } from "react";

const DynamicStyling = () => {
  const [name, setName] = useState("");

  const [validInput, setValidInput] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (name.length < 2) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [name]);

  return (
    <div>
      <h1>Dynamic Styling</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className={`${validInput ? "valid" : "invalid"}`}
      />
    </div>
  );
};

export default DynamicStyling;
