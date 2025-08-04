import { useCallback, useEffect, useRef, useState } from "react"

const PasswordGenerator = () => {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")
    const [copied, setCopied] = useState(false)

    const PasswordGeneratorCall = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*-_+= []{}~`'";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, charAllowed, setPassword]);

    const passwordRef = useRef<HTMLInputElement>(null);

    const Clipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, [password])

    useEffect(()=> {
        PasswordGeneratorCall()
    }, [length, numberAllowed, charAllowed, PasswordGeneratorCall]);

    return (
        <>
            <div className="p-5 bg-black min-h-[100dvh] flex flex-wrap justify-center items-center">
                <div className="bg-gray-900 w-[560px] p-6 rounded-2xl">
                    <h1 className="text-2xl text-center text-white mb-5">Password Generator</h1>

                    <div className="flex flex-wrap gap-6 w-full">
                        <div className="flex w-full">
                            <input 
                            type="text" 
                            className="w-full bg-white outline-0 p-2" 
                            value={password} 
                            placeholder="Password" 
                            ref={passwordRef}
                            readOnly />
                            <button 
                            onClick={Clipboard} 
                            className={`${copied?`bg-blue-900`:`bg-blue-500`} text-white py-2 px-4 cursor-pointer w-[100px]`}>
                               {copied ? "Copied!" : "Copy"}
                            </button>
                        </div>
                        <div className="w-full text-white text-[16px] flex flex-wrap gap-8 justify-between">
                            <div className="flex gap-2">
                                <input 
                                    type="range" 
                                    min={6}
                                    max={30}
                                    className="cursor-pointer" 
                                    value={length}
                                    onChange={(e) => {setLength(Number(e.target.value))}}
                                />
                                <label className="min-w-[90px]">Length: {length} </label>
                            </div>
                            <div className="flex gap-2">
                                <input 
                                    type="checkbox" 
                                    defaultChecked={numberAllowed}
                                    id="Numbers"
                                    onChange={() => setNumberAllowed((prev) => !prev)}
                                />
                                <label htmlFor="Numbers">Numbers {numberAllowed}</label>
                            </div>
                            <div className="flex gap-2">
                                <input 
                                    type="checkbox" 
                                    defaultChecked={charAllowed}
                                    id="Characters"
                                    onChange={() => setCharAllowed((prev) => !prev)}
                                />
                                <label htmlFor="Characters">Characters {charAllowed}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGenerator