
import { data } from "../data/info";   
const ProjectSection = ()=>{
    return(<>
        <div className=' mt-8 rounded-lg p-2 bg-slate-50 text-[#1e1e28] dark:text-white dark:bg-zinc-900/20 w-full relative'>
              <div className='text-[#1e1e28] dark:text-white text-lg font-bold font-mono mb-0 md:mb-4 text-white pl-2 mb-6 text-xl flex justify-center'>Personal Projects</div>
              {/* <Carousel/> */}
              <div className='flex flex-col gap-2 justify-start md:justify-center flex-unwrap md:flex-wrap overflow-x-auto no-scrollbar'>  
                  {
                    data.company_projects.map((item,index)=>{
                      return(
                        // <div key={index} className='overflow-hidden w-4/5 md:w-[350px] h-80 md:h-86 max-h-fit cursor-pointer relative group shrink-0 md:shrink'>
                        <div key={index}>
                          {/* <div className='z-10 text-white absolute duration-500 transition-all bottom-0 bg-[#2d2d39] w-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-40 px-4 pt-2' >
                            <div className=''>{item.title}</div>
                            <div className='text-[12px] mt-2'>
                              {item.description}
                            </div>
                            <div className='text-[12px] mt-2'>
                              {item.declaim}
                            </div>
                          </div> */}
                            <div className="relative w-full grid grid-cols-3 md:grid-cols-8 gap-0 md:gap-5 border p-2 md:p-0">
                                <div className="col-span-3">
                                    <img className='w-86 h-64 transition ease-in-out duration-500 group-hover:scale-110 delay-150 z-0 object-cover' src={item.img} /> 
                                </div>
                                <div className="col-span-5"> 
                                <div className='mt-5 font-bold text-lg'>{item.title}</div>
                                <div className='text-[12px] mt-2'>
                                    {item.description}
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
    </>)
}


export default ProjectSection;