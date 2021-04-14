import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("Random message");

  const changeMessage = () => {
    // use spread operator to copy old values and only overwrite message
    // setPerson({ ...person, message: "boom" });
    setMessage("hello world");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>{message}</h4>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
