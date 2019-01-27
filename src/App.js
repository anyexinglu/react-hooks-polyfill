import React from "react";
import { withHook } from "./hooks";

const Child = withHook((props, { useState }) => {
  const [name, setName] = useState("noname");
  const [address, setAddress] = useState("noaddr");
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
      age: {props.age}
      <br />
      clicked: {props.clicked}
    </div>
  );
});

class App extends React.Component {
  state = {
    clicked: 0
  };
  handleClick = e => {
    this.setState({
      clicked: this.state.clicked + 1
    });
  };
  render() {
    return (
      <div>
        <p onClick={this.handleClick}>clicked: {this.state.clicked}</p>
        <Child age={18} clicked={this.state.clicked} />
      </div>
    );
  }
}

export default App;
