import { useEffect, useState } from "react"
import { Link, useParams } from "react-router";

interface GitHubUser {
    login: string;
    avatar_url: string;
}

const ColorPlatter = () => {
    const [color, setColor] = useState("green")
    
    const {userId} = useParams();
    const [data, setData] = useState<GitHubUser>({ login: '', avatar_url: '' })
    useEffect(() => {
        fetch('https://api.github.com/users/hasmattechuz')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, [])

    return (
        <>
            <Link className="fixed top-5 left-5 text-white z-[99] bg-black py-2 px-4 rounded-4xl flex items-center gap-2" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                Back
            </Link>
            <div className={`bg-${color}-500 w-full h-full fixed z-10`}>
                <div className="px-[150px] py-3 text-center">
                    <div className="text-white flex items-center gap-4 text-xl">
                        <img src={data.avatar_url} alt="" className="w-14 h-14 object-cover rounded-4xl" />
                        <span>{data.login}</span>
                    </div>
                </div>
            </div>
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
