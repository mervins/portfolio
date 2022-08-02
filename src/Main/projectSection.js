
import { data } from "../data/info"
const ProjectSection = ()=>{
    return(<>
        <div className='mt-8'>
              <div className='text-white text-lg font-bold font-mono mb-4'>Company Projects </div>
              <div className='flex gap-2 flex-wrap mx-auto'>  
                  {
                    data.company_projects.map((item,index)=>{
                      return(
                        <div key={index} className='overflow-hidden w-[350px] max-w-fit h-96 max-h-fit cursor-pointer relative group'>
                          <div className='z-10 text-white absolute duration-500 transition-all bottom-0 bg-[#2d2d39] w-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-40 px-4 pt-2 font-bold' >
                            <div className=''>{item.title}</div>
                            <div className='text-[12px] mt-2'>
                              {item.description}
                            </div>
                            <div className='text-[12px] mt-2'>
                              {item.declaim}
                            </div>
                          </div>
                          <img className='w-96 h-96 transition ease-in-out duration-500 group-hover:scale-110 delay-150 z-0' src={item.img} /> 
                        </div>  
                      )
                    })
                  } 
              </div> 
              <div className='text-white text-lg font-bold font-mono mb-4 mt-8'>Personal Projects </div>
              <div className='flex gap-2 flex-wrap mx-auto'>  
                  {
                    data.personal_projects.map((item,index)=>{
                      return(
                        <div key={index} className='overflow-hidden w-[350px] max-w-fit h-96 max-h-fit cursor-pointer relative group'>
                          <div className='z-10 text-white absolute duration-500 transition-all bottom-0 bg-[#2d2d39] w-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-40 px-4 pt-2 font-bold' >
                            <div className=''>{item.title}</div>
                            <div className='text-[12px] mt-2'>
                              {item.description}
                            </div>
                            <div className='text-[12px] mt-2'>
                              {item.declaim}
                            </div>
                          </div>
                          <img className='w-96 h-96 transition ease-in-out duration-500 group-hover:scale-110 delay-150 z-0' src={item.img} /> 
                        </div>  
                      )
                    })
                  }  
            </div>
        </div>
    </>)
}

export default ProjectSection;