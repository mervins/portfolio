import {data} from '../data/info.js';
import profilePic from '../img/profile.jpg';
import useDarkMode from '../hooks/useDarkMode.js';
const ProfileSection = ()=>{
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    let profile = data.profile.map((item,index)=>{
        return (
            <div className={item.class} key={index}> 
                <div className=''>{item.name}</div> 
            </div>
        )
    })
    return(
        <>
            <div className="art_header bg-slate-200/95 dark:bg-[#242430]/[99%] flex flex-col justify-content items-center">
                <div className=' absolute left-2 top-2 w-10 h-6 flex items-center justify-between bg-white dark:bg-[#4b4b66] rounded-full cursor-pointer' 
                    onClick={()=>{toggleDarkMode();}}>
                    <div className={!isDarkMode ? 'opacity-100 duration-500 transition-all text-white pl-2' : 'opacity-0 duration-500 transition-all -pl-3'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </div>
                    <div className={!isDarkMode ? 'opacity-0 duration-500 transition-all' : 'opacity-100 duration-500 transition-all pr-2 -pr-3'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                </div>
                <div className='mt-12 relative'>
                    <img className='rounded-full  w-24 h-24 overflow-hidden object-cover' src={profilePic} /> 
                    <span className="flex h-3 w-3 absolute top-16 right-0">
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="absolute inline-flex rounded-full h-4 w-4 bg-yellow-500"></span>
                </span>
                </div>
                {
                    profile
                } 
            </div>   
        </>
    )
}

export default ProfileSection;