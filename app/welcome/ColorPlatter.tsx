import { useState } from "react"

const ColorPlatter = () => {
    const [color, setColor] = useState("green")

    return (
        <>
            <div className={`bg-${color}-500 w-full h-full fixed z-10`}></div>
            <div className="flex w-full h-[100dvh] p-5 justify-center items-end">
                <div className="flex gap-2 z-20 relative p-3 justify-center bg-white w-fit rounded-4xl">
                    <button onClick={() => setColor("red")} className="cursor-pointer bg-red-500 min-w-[100px] text-white rounded-4xl py-2 px-4">
                        Red
                    </button>
                    <button onClick={() => setColor("green")} className="cursor-pointer bg-green-500 min-w-[100px] text-white rounded-4xl py-2 px-4">
                        Green
                    </button>
                    <button onClick={() => setColor("blue")} className="cursor-pointer bg-blue-500 min-w-[100px] text-white rounded-4xl py-2 px-4">
                        blue
                    </button>
                </div>
            </div>
        </>
    );
};

export default ColorPlatter;
