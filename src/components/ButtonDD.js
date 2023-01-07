import { useState } from "react";
const DropDownButton = (props)=>{ 
    const [showDP, setShowDD] = useState(false);
    return(
        <div className="relative inline-block text-left">
            <div>
                <span className="rounded-md shadow-sm">
                <button type="button" onClick={()=> setShowDD(!showDP)} className="inline-flex justify-center gap-1 w-full items-center rounded-md 
                px-4 py-2 bg-white text-sm leading-5 font-medium hover:scale(.5) focus:outline-none focus:border-blue-300 
                focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out bg-yellow-500  text-white">
                    Resume
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>

                    

                </button>
                </span>
            </div>
            {showDP && <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg">
                <div className="rounded-md bg-white shadow-xs">
                <div className="py-1">
                    {props.children}
                </div>
                </div>
            </div>}
        </div>
    );
}

export default DropDownButton;