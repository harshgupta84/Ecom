import React from "react";
import { useContext } from "react";
import { AppContext } from "./context/productcontext";

const About = () => {

  const mnane=useContext(AppContext);
  return <div>
  {mnane}
  </div>;
};

export default About;
