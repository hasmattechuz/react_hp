import { useState } from "react";

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const add = () => {
    // count1 < 10 ? setCount1(count1 + 1)setCount1(count1 + 1) : "";
     count1 < 10 ? setCount1(count1 => count1 + 1) : ''
  };
  const minus = () => {
    count1 > 0 ? setCount1(count1 => count1 - 1) : "";
  };

  return (
    <div className="flex items-center justify-center gap-4 p-5">
        <button className="w-10 h-10 text-2xl bg-blue-500 text-white cursor-pointer rounded-4xl" onClick={add}>+</button>
        {count1}
        <button className="w-10 h-10 text-2xl bg-red-500 text-white cursor-pointer rounded-4xl" onClick={minus}>-</button>
    </div>);
};

export default Counter;
