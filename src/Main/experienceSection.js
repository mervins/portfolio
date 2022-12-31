import { data } from "../data/info"
const ExperienceSection = ()=>{
    return (
        <div className='mt-4 rounded-lg p-2 mb-6 bg-slate-50 text-[#1e1e28] dark:text-white dark:bg-zinc-900/20'>
            <div className='pl-2 mb-6 text-xl flex justify-center text-center'>Education and Work Background</div>  
            <div className="flex flex-col">
            {
                    data.experience.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div className='flex justify-center items-center overflow-hidden' >
                                    <div className='flex  w-1/4 hidden md:block'>
                                        <div className="hidden md:block">
                                            {item.year}
                                        </div> 
                                    </div> 
                                    <div className=' relative w-[70vw] md:w-96'>
                                        {/* <div className="absolute left-2 w-0.5 h-screen bg-slate-200"></div>
                                        <div className='absolute left-[0.5px] w-4 h-4 bg-slate-200 rounded-full'></div> */}
                                        <div className=' w-full bg-slate-50/10 m-1 pl-2 rounded-lg py-2 border shadow-md'>
                                            <div className="block md:hidden text-xs flex justify-center">
                                                {item.year}
                                            </div> 
                                            <div className="flex justify-center mb-1">
                                                {item.title}
                                            </div>
                                            <div className="flex justify-center text-xs text-center">
                                                {item.course}
                                            </div> 
                                        </div>  
                                    </div>
                                </div>
                            </div> 
                        )
                    })
                }
            </div>  
        </div>     
    )
}

export default ExperienceSection;