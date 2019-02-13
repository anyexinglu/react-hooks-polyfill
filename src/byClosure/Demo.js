import React from "react";
import { useState, runCycle } from "./hooks";

function Demo() {
  // runCycle();
  const [name, setName] = useState("noName");
  const [address, setAddress] = useState("noAddrress");
  const handleNameChange = e => {
    const val = e.target.value;
    setName(val);
    console.log(val);
  };

  const handleAddressChange = e => {
    const val = e.target.value;
    setAddress(val);
    console.log(val);
  };

  return (
    <div>
      <p>user info</p>
      name: {name} <input name={name} onInput={handleNameChange} />
      <br />
      address: {address} <input name={address} onInput={handleAddressChange} />
      <br />
    </div>
  );
}

export default Demo;
