
import { data } from "../data/info";  
import Carousel from "../components/carousel";
const ProjectSection = ()=>{
    return(<>
        <div className=' mt-8 rounded-lg p-2 bg-slate-50 text-[#1e1e28] dark:text-white dark:bg-zinc-900/20 w-full relative'>
              <div className='text-[#1e1e28] dark:text-white text-lg font-bold font-mono mb-0 md:mb-4 text-white pl-2 mb-6 text-xl flex justify-center'>Projects </div>
              <Carousel/>
        </div>
    </>)
}


export default ProjectSection;