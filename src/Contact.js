import React, { useState } from "react";
import Component from "react";
///function component
function Contact(props) {
  const [val, setVal] = useState("vishal");
  const test = (e) => {
    console.warn("test function", e.target.value);
    setVal(e.target.value);
  };

  return (
    <div>
      <h1>Contact us component</h1>
      <input type="text" value={val} onChange={test}  />
      <button onClick={() => alert(val)}>click me</button>
    </div>
  );
}

export default Contact;
