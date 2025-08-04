import { useEffect, useState } from "react";
export function WelcomePage() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function() {
    getAdvice();
  }, []);

  return (
    <main className="flex items-center justify-center pt-16 pb-4 flex-wrap">
      <div>
        <div className="text-center">
          <h1 className="text-3xl mb-6 mx-auto max-w-[850px]">{advice}</h1>
          <button onClick={getAdvice} className="mb-5 bg-blue-500 text-white px-5 py-2 cursor-pointer rounded-4xl">Click Here</button>
          <Message count={count} />
        </div>
      </div>
    </main>
  );
}

function Message(props){
  return (<p>You have read <strong className="text-blue-500">{props.count}</strong> pieces of advice</p>);
}