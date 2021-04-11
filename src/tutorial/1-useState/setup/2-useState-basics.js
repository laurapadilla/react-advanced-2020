import React, { useState } from "react";

const UseStateBasics = () => {
  let textValue = "random title";
  const [text, setText] = useState(textValue);
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText(textValue);
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
