let store = new Map(); // 存储 stateName对应的set和get，以及当前的stateValue
let count = 0; // 存储数组项长度，每次重新执行render清零？

/**
 * example: 

  const [name, setName] = useState("noName");
  const [address, setAddress] = useState("noAddrress");
  
  const handleNameChange = e => {
    const val = e.target.value;
    setName(val);
  }

 */

export const useState = function(initialState) {
  count++;
  const stateName = Symbol.for(`state_${count}`);
  let current = store[stateName];
  if (!current) {
    current = {
      value: initialState
    };
  }
  current = {
    ...current,
    get: () => {
      return current.value;
    },
    set: newValue => {
      current.value = newValue;
      // 备注下，set完 ……
      // 如果用depList订阅方式呢？
    }
  };
  store[stateName] = current;
  console.log("store", store);
  return [current.get(), current.set];
};

// export const runCycle = () => {
//   count = 0;
// };

// 备注下，runCycle存在的问题
