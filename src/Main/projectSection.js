
import { data } from "../data/info";  
import Carousel from "../components/carousel";
const ProjectSection = ()=>{
    return(<>
        <div className='mt-8 rounded-lg p-2 bg-slate-50 text-[#1e1e28] dark:text-white dark:bg-zinc-900/20'>
              <div className='text-[#1e1e28] dark:text-white text-lg font-bold font-mono mb-0 md:mb-4 text-white pl-2 mb-6 text-xl flex justify-center'>Projects </div>
              <Carousel/>
              {/* <div className='flex gap-2 justify-start md:justify-center flex-unwrap md:flex-wrap overflow-x-auto no-scrollbar'>  
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
                          <img className='w-96 h-96 transition ease-in-out duration-500 group-hover:scale-110 delay-150 z-0 object-cover' src={item.img} /> 
                        </div>  
                      )
                    })
                  } 
              </div>   */}
        </div>
    </>)
}

// const ProjectSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0); 
//   const slides = data.company_projects;

//   const handlePreviousClick = () => {
//     const newSlide = currentSlide - 1;
//     setCurrentSlide(newSlide < 0 ? slides.length - 1 : newSlide);
//   };

//   const handleNextClick = () => {
//     const newSlide = currentSlide + 1;
//     setCurrentSlide(newSlide >= slides.length ? 0 : newSlide);
//   };

//   return (
//       <div className="relative w-full h-[60vmin] mt-8 bg-zinc-900/20 rounded-lg p-2"> 
//       <div className='text-[#1e1e28] dark:text-white text-lg font-bold font-mono mb-0 md:mb-4 text-white pl-2 mb-6 text-xl flex justify-center'>Projects </div>
//         <motion.div className="relative h-full" initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
//           <img src={slides[currentSlide].img} alt="Slide" className="w-full h-full object-cover" />
//         </motion.div>
//         <div className="absolute right-1 top-1 flex items-center justify-center">
//           <button className="text-white hover:text-gray-300 focus:outline-none focus:shadow-outline-blue bg-red-500"
//             onClick={handleNextClick}>
//             <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//             </svg>
//           </button>
//         </div>
//         <div className="absolute left-1 top-1 flex items-center justify-center">
//           <button className="text-white hover:text-gray-300 focus:outline-none focus:shadow-outline-blue bg-red-500"
//             onClick={handlePreviousClick}>
//             <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//   );
// };

export default ProjectSection;