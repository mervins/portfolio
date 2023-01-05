
import { data } from "../data/info"
const FrameworkSection = ()=>{
    return(<>
        <div className='mt-8 bg-slate-50 text-[#1e1e28] dark:text-white dark:bg-transparent rounded'>
            <div className=' text-lg font-bold font-mono mb-4 pl-2 mb-6 text-xl flex justify-center'>Frameworks & Libraries</div> 
            <div className='flex gap-2 flex-unwrap md:flex-wrap overflow-x-auto no-scrollbar px-2 pb-2 w-full'>
              {
                data.framwork.map((item,index)=>{
                  return(
                    <div key={index} className='bg-slate-100 dark:bg-[#2d2d39] max-h-fit rounded-md relative box-border border grow h-28 md:h-28 flex items-center gap-4'>
                   
                        <div className="w-20 h-20 rounded-full p-2">
                            <img src={item.img}/>
                        </div>
                        <div>
                          <div className=' font-bold font-mono mb-2 text-[18px]'>
                            {item.title}
                          </div>
                          <div className="text-[2vmin] w-[300px] md:w-full flex justify-content items-center">
                            <p className="line-clamp-8">
                              {item.desc}
                            </p>
                          </div>
                        </div> 
                    </div> 
                  )
                })
              }  
            </div>
        </div>
    </>)
}

export default FrameworkSection;


// import { useState, useRef, useEffect } from 'react';

// // Data
// import data from './data.json';

// const Carousel = () => {
//   const maxScrollWidth = useRef(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carousel = useRef(null);

//   const movePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevState) => prevState - 1);
//     }
//   };

//   const moveNext = () => {
//     if (
//       carousel.current !== null &&
//       carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
//     ) {
//       setCurrentIndex((prevState) => prevState + 1);
//     }
//   };

//   const isDisabled = (direction) => {
//     if (direction === 'prev') {
//       return currentIndex <= 0;
//     }

//     if (direction === 'next' && carousel.current !== null) {
//       return (
//         carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
//       );
//     }

//     return false;
//   };

//   useEffect(() => {
//     if (carousel !== null && carousel.current !== null) {
//       carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
//     }
//   }, [currentIndex]);

//   useEffect(() => {
//     maxScrollWidth.current = carousel.current
//       ? carousel.current.scrollWidth - carousel.current.offsetWidth
//       : 0;
//   }, []);

//   return (
//     <div className="carousel my-12 mx-auto">
//       <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
//         Our epic carousel
//       </h2>
//       <div className="relative overflow-hidden">
//         <div className="flex justify-between absolute top left w-full h-full">
//           <button
//             onClick={movePrev}
//             className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//             disabled={isDisabled('prev')}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-20 -ml-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span className="sr-only">Prev</span>
//           </button>
//           <button
//             onClick={moveNext}
//             className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//             disabled={isDisabled('next')}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-20 -ml-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </button>
//         </div>
//         <div ref={carousel}
//           className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
//         >
//           {data.resources.map((resource, index) => {
//             return (
//               <div key={index}
//                 className="carousel-item text-center relative w-64 h-64 snap-start"
//               >
//                 <a
//                   href={resource.link}
//                   className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
//                   style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
//                 >
//                   <img
//                     src={resource.imageUrl || ''}
//                     alt={resource.title}
//                     className="w-full aspect-square hidden"
//                   />
//                 </a>
//                 <a
//                   href={resource.link}
//                   className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
//                 >
//                   <h3 className="text-white py-6 px-3 mx-auto text-xl">
//                     {resource.title}
//                   </h3>
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


























