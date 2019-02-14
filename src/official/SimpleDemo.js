import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>add Count: {count}</button>
  );
}

const Demo = () => {
  return (
    <div>
      <span>这是一个带hook的函数组件：</span>
      <Counter />
    </div>
  );
};

export default Demo;
