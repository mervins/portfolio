import {data} from '../data/info.js'; 
import '../index.css';
import FrameworkSection from '../Main/frameworkSection.js'; 
import ProjectSection from '../Main/projectSection.js';
import ExperienceSection from '../Main/experienceSection.js';
import AboutMe from '../Main/AboutMe.js';
const BodySection = ()=>{ 
    return(
        <>  
            <div className="text-[#191923] dark:text-white flex-grow relative mx-8 overflow-y-auto no-scrollbar">
                <div className="p-15-15 mt-2 text-sm"> 
                {
                    data.location.map((item,index)=>{
                        return(<div key={index} className='flex justify-between items-center mt-2'>
                            <div key={item.name} className='address text-xs mt-2'>{item.name}</div>
                            <div key={item.value} className='citiyValue text-xs'>{item.value}</div>
                        </div>)
                    })
                }  
                </div>
                <div className='block md:hidden'> 
                    <div className='divide_line my-2'></div>
                    <AboutMe/>
                    <div className='divide_line my-2'></div>
                    <FrameworkSection/>
                    <div className='divide_line my-2'></div>
                    <ProjectSection/>
                    <div className='divide_line my-2'></div>
                    <ExperienceSection/>
                </div>
                <div className='divide_line my-2'></div>
                <div className='mt-8 flex gap-8 items-center justify-center mb-8'>
                    {
                        data.status.map((item,index)=>{
                            return(
                                <div key={index} className="flex flex-col gap-4 items-center">
                                    <div className="circle-wrap">
                                        <div className="circle">
                                        <div className="mask full">
                                            <div className={item.class}></div>
                                        </div>
                                        <div className="mask half">
                                            <div className="fill"></div>
                                        </div>
                                        <div className="inside-circle bg-slate-50 dark:bg-[#1e1e28] text-[#1e1e28] dark:text-white font-bold"> {item.percentage} </div>
                                        </div>
                                    </div> 
                                    <div className='text-xs '>{item.name}</div>
                                </div>
                            )
                        })
                    } 
                    </div>
                <div className='divide_line'></div>
                <div className='mt-4 flex justify-center items-center'>Programming Languages</div>
                <div className='mb-8 flex flex-wrap'>
                    {
                        data.language.map((item,index)=>{
                            return(
                                <div key={index} className='flex flex-col mt-2 mx-1'>
                                    <div className='flex justify-between'>
                                        <div className='text-xs flex items-center '>
                                            <span className='inline text-yellow-500 mr-1'><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg></span>{item.name},
                                        </div>
                                        {/* <div className='text-xs dark:font-medium'>
                                            {item.percentage} %
                                        </div> */}
                                    </div>
                                    {/* <div data-width="0">
                                        <span className='color'  data-width={item.percentage}></span>
                                    </div> */}
                                </div>
                            )
                        })
                    } 
                </div> 
                <div className='divide_line'></div>
                <div className='text-xs mb-8'>
                {
                    data.cascade.map((item,index)=>{
                        return(
                            <div key={index} className='mt-3 flex gap-2 text-xs'>
                                <span className='text-yellow-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <div className='text-xs'>{item}</div> 
                            </div>
                        )
                    })
                    }
                </div>
                <div className='divide_line'></div>
                <div className='mt-3 text-xs font-bold mb-6 cursor-pointer'>
                    DOWNLOAD RESUME
                </div>
                </div>  
        </>
    )
}

export default BodySection;