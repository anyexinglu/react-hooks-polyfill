import React from "react";

const useState = function(initialState) {
  this.count++;
  const stateName = Symbol.for(`state_${this.count}`);
  const isFirstUse = !(stateName in this.store);
  if (isFirstUse) {
    this.store[stateName] = {
      get: () => {
        return stateName in this.state ? this.state[stateName] : initialState;
      },
      set: newValue => {
        this.setState({
          [stateName]: newValue
        });
      }
    };
  }
  const tuple = [this.store[stateName].get(), this.store[stateName].set];
  return tuple;
};

export const withHook = functionCp => {
  console.log("withHook", withHook, functionCp);
  return class Hooks extends React.Component {
    constructor(props) {
      super(props);
      this.count = 0;
      this.store = {};
    }
    state = {};
    render() {
      const result = functionCp(this.props, {
        useState: useState.bind(this)
      });
      this.count = 0;
      return result;
    }
  };
};
