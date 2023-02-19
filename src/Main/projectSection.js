
import { data } from "../data/info";   
import { useState } from "react";
const ProjectSection = ()=>{

    const [mainProject, showMainProject] = useState(false);

    return(<>
        <div className=' mt-8 rounded-lg p-2 bg-slate-50 text-[#1e1e28] dark:text-white dark:bg-zinc-900/20 w-full relative'>
                
                <div className="flex mb-4 sticky top-0 p-2 z-50 text-white bg-[#24242f]/90 dark:bg-[#24242f]/90 justify-between">
                    <div className="flex gap-4">
                        {/* <button onClick={()=>showMainProject(true)} className={mainProject ? 'border-b' : 'border-none'}>Company</button>  */}
                        <button onClick={()=>showMainProject(false)} className={!mainProject ? 'border-b' : 'border-none'}>Personal</button>
                    </div>
                    <div className='text-lg font-bold font-mono mb-0 md:mb-2 text-white pl-2 mb-2 text-xl flex justify-center'>Projects</div>
                </div>
              {/* <Carousel/> */}
                <div className="relative overflow-hidden">
                    {/* <div className={mainProject ? 'translate-x-0 duration-300 transition-all' : '-translate-x-[95vw] duration-300 transition-all'}>
                        <div className='flex flex-col gap-2 justify-start md:justify-center flex-unwrap md:flex-wrap overflow-x-auto no-scrollbar'>  
                            {
                            data.company_projects.map((item,index)=>{
                            return(
                                // <div key={index} className='overflow-hidden w-4/5 md:w-[350px] h-80 md:h-86 max-h-fit cursor-pointer relative group shrink-0 md:shrink'>
                                <div key={index}> 
                                    <div className="relative w-full grid grid-cols-3 md:grid-cols-3 lg:grid-cols-8 gap-0 md:gap-0 lg:gap-5 border p-2 md:p-0">
                                        <div className="col-span-3">
                                            <img className='w-86 h-full transition ease-in-out duration-500 group-hover:scale-110 delay-150 z-0 object-cover' src={item.img} /> 
                                        </div>
                                        <div className="col-span-5 p-2"> 
                                        <div className='mt-5 font-bold text-lg'>{item.title}</div>
                                        <div className='text-[12px] mt-2'>
                                            {item.description}
                                        </div>
                                        <div className='text-[12px] mt-2'>
                                            {item.declaim}
                                        </div>
                                        <div className="mt-4">
                                            <div className="text-xs font-bold">
                                                Used Stack:
                                            </div>
                                            <div className="flex gap-2 mt-2">
                                                {
                                                    item.stacks.map((stack,key) =>{
                                                        return (<div key={key} className="text-xs border shadow-lg p-2">
                                                            {stack}
                                                        </div>)
                                                    })
                                                }
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div> 
                                )}
                                )}
                        </div>
                    </div> */}
                    {/* <div className={mainProject ? 'translate-x-[95vw] absolute top-1 duration-300 transition-all' : 'translate-x-0 absolute top-1 duration-300 transition-all'}> */}
                    <div>
                        <div className='flex flex-col gap-2 justify-start md:justify-center flex-unwrap md:flex-wrap overflow-x-auto no-scrollbar'>  
                            {
                            data.personal_projects.map((item,index)=>{
                            return(
                                // <div key={index} className='overflow-hidden w-4/5 md:w-[350px] h-80 md:h-86 max-h-fit cursor-pointer relative group shrink-0 md:shrink'>
                                <div key={index}> 
                                    <div className="relative w-full grid grid-cols-3 md:grid-cols-3 lg:grid-cols-8 gap-0 md:gap-0 lg:gap-5 border p-2 md:p-0">
                                        <div className="col-span-3">
                                            <img className='w-86 h-full transition ease-in-out duration-500 group-hover:scale-110 delay-150 z-0 object-cover' src={item.img} /> 
                                        </div>
                                        <div className="col-span-5 p-2"> 
                                        <div className='mt-5 font-bold text-lg'>{item.title}</div>
                                        <div className='text-[12px] mt-2'>
                                            {item.description}
                                        </div>
                                        <div className='text-[12px] mt-2'>
                                            {item.declaim}
                                        </div>
                                        <div className="mt-4">
                                            <div className="text-xs font-bold">
                                                Used Stack:
                                            </div>
                                            <div className="flex gap-2 mt-2">
                                                {
                                                    item.stacks.map((stack,key) =>{
                                                        return (<div key={key} className="text-xs border shadow-lg p-2">
                                                            {stack}
                                                        </div>)
                                                    })
                                                }
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div> 
                                )}
                                )}
                        </div>
                    </div>
                </div>
        </div>
    </>)
}


export default ProjectSection;