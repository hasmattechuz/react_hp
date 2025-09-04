import { useState } from "react";
import { Link } from "react-router";

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const add = () => {
    // count1 < 10 ? setCount1(count1 + 1)setCount1(count1 + 1) : "";
     count1 < 10 ? setCount1(count1 => count1 + 1) : ''
  };
  const minus = () => {
    count1 > 0 ? setCount1(count1 => count1 - 1) : "";
  };

  return (<>
    <Link className="fixed top-5 left-5 text-white z-[99] bg-black py-2 px-4 rounded-4xl flex items-center gap-2" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
      Back
    </Link>
    <div className="flex items-center justify-center gap-4 p-5">
        <button className="w-10 h-10 text-2xl bg-blue-500 text-white cursor-pointer rounded-4xl" onClick={add}>+</button>
        {count1}
        <button className="w-10 h-10 text-2xl bg-red-500 text-white cursor-pointer rounded-4xl" onClick={minus}>-</button>
    </div></>);
};

export default Counter;
