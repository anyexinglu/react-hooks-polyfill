## Background

假设时光倒退：目前 react 还在 v16.7 版本，Dan 萌生了让 react 函数式组件支持 Hooks 的想法，但他要去度假了 ⛱️，于是让助手（也就是你）来做一下 poc：“实现一下 useState 等 hooks”，你会怎么写呢？

## Start

You can run:

```shell
yarn
yarn start
```

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

```jsx

import React from "react";
import { withHook } from "./hooks";

const Child = withHook((props, { useState }) => {
  const [name, setName] = useState("noName");
  const [address, setAddress] = useState("noAddrress");

  const handleNameChange = e => {
    const val = e.target.value;
    setName(val);
  };

  const handleAddressChange = e => {
    const val = e.target.value;
    setAddress(val);
  };

  return (
    <div>
      <p>user info</p>
      name: {name} <input name={name} onInput={handleNameChange} />
      <br />
      address: {address} <input name={address} onInput={handleAddressChange} />
      <br />
      age: {props.age}
    </div>
  );
});

function App() {
  render() {
    return (
      <div>
        <Child age={18} />
      </div>
    );
  }
}
```

## 说明

存在两种方式实现 useState，转成 class、fiber

- 为啥要用 class 来解决？
  如果使用闭包储存值，则值的改变不会造成 rerender ～

## TODO

[x] useState 不需要参数
[] 保存之前 useState 的值（不用重复执行）
[] 增加 hooks 的 rules
