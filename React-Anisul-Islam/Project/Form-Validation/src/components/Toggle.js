import React, { useState } from "react";
import SignIn from "./SignIn";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return <div>{toggle && <SignIn />}</div>;
};

export default Toggle;
