import React, { useState } from "react";

function FC(props) {
  const [count, setCount] = useState(0);
  console.log("MemoedFC render", props);
  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>add Count</button>
    </div>
  );
}

const MemoedFC = React.memo(FC);

const Demo = () => {
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
  console.log("Demo render");

  return (
    <div>
      <p>user info</p>
      name: {name} <input name={name} onInput={handleNameChange} />
      <br />
      address: {address} <input name={address} onInput={handleAddressChange} />
      <MemoedFC name={name} />
    </div>
  );
};

export default Demo;
