import { data } from "../data/info"
const ExperienceSection = ()=>{
    return (
        <div className='mt-4 bg-zinc-900/20 rounded-lg p-2 mb-6 '>
                <div className='text-white pl-2 mb-6 text-xl flex justify-center'>Education and Work Background</div> 
                {/* <div className="flex flex-row justify-between mx-6 overflow-hidden h-64 items-center"> */}
                {
                    data.experience.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div className='flex justify-center h-20 overflow-hidden' >
                                    <div className='text-white flex  w-1/4'>
                                        <div>
                                            {item.year}
                                        </div> 
                                    </div> 
                                    <div className='text-white flex justify-center relative w-96'>
                                        <div className="absolute left-2 w-0.5 h-screen bg-slate-200"></div>
                                        <div className='absolute left-[0.5px] w-4 h-4 bg-slate-200 rounded-full'></div>
                                        <div className='text-white ml-12 w-full bg-slate-50/10 m-1 pl-2 rounded-lg'>
                                            <div>
                                                {item.title}
                                            </div>
                                            <div className="text-xs ml-4">
                                                {item.course}
                                            </div> 
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            // <div className="flex flex-col text-white gap-4 w-[20%]" key={index}>
                            //     <div className="relative">
                            //         <div className="bg-slate-50/10 mx-4 p-2 rounded-md mb-4"> 
                            //             <div>
                            //                 {item.title}
                            //             </div>
                            //             <div className="text-xs">
                            //                 {item.course}
                            //             </div>
                               
                            //         </div>  
                            //         <div className="absolute bottom-2 h-[0.5px] w-80 bg-slate-200"></div> 
                            //         <div className="flex justify-center">
                            //         <div className='  w-4 h-4 bg-slate-200 rounded-full'></div>
                            //         </div>
                            //     </div>
                            //     <div className="mt-2 flex justify-center">
                            //         {item.year}
                            //     </div>
                            // </div>
                        )
                    })
                }
                </div>    
            // </div>
    )
}

export default ExperienceSection;