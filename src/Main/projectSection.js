
import { data } from "../data/info"
const ProjectSection = ()=>{
    return(<>
        <div className='mt-8'>
              <div className='text-[#1e1e28] dark:text-white text-lg font-bold font-mono mb-0 md:mb-4 text-white pl-2 mb-6 text-xl flex justify-center'>Projects </div>
              <div className='flex gap-2 flex-unwrap md:flex-wrap overflow-x-auto no-scrollbar'>  
                  {
                    data.company_projects.map((item,index)=>{
                      return(
                        <div key={index} className='overflow-hidden w-4/5 md:w-[350px] h-80 md:h-96 max-h-fit cursor-pointer relative group shrink-0 md:shrink rounded-md'>
                          <div className='z-10 text-white absolute duration-500 transition-all bottom-0 bg-[#2d2d39] w-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-40 px-4 pt-2' >
                            <div className=''>{item.title}</div>
                            <div className='text-[12px] mt-2'>
                              {item.description}
                            </div>
                            <div className='text-[12px] mt-2'>
                              {item.declaim}
                            </div>
                          </div>
                          <img className='w-96 h-96 transition ease-in-out duration-500 group-hover:scale-110 delay-150 z-0 object-contain md:object-cover' src={item.img} /> 
                        </div>  
                      )
                    })
                  } 
              </div> 
              {/* <div className='text-[#1e1e28] dark:text-white text-lg font-bold font-mono mt-8 mb-0 md:mb-4'>Personal Projects </div>
              <div className='flex gap-2 flex-unwrap md:flex-wrap overflow-x-auto no-scrollbar'>  
                  {
                    data.personal_projects.map((item,index)=>{
                      return(
                        <div key={index} className='overflow-hidden w-4/5 md:w-[350px] max-w-fit h-96 max-h-fit cursor-pointer relative group shrink-0 md:shrink rounded-md'>
                          <div className='z-10 text-white absolute duration-500 transition-all bottom-0 bg-slate-50 bg-[#2d2d39] w-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-40 px-4 pt-2' >
                            <div className=''>{item.title}</div>
                            <div className='text-[12px] mt-2'>
                              {item.description}
                            </div>
                            <div className='text-[12px] mt-2'>
                              {item.declaim}
                            </div>
                          </div>
                          <img className='w-96 h-96 transition ease-in-out duration-500 group-hover:scale-110 delay-150 z-0 object-contain md:object-cover' src={item.img} /> 
                        </div>  
                      )
                    })
                  }  
            </div> */}
        </div>
    </>)
}

export default ProjectSection;