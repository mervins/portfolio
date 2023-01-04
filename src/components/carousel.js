import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn" 
import { data } from "../data/info" 
import "./styles.css"

const sliderVariants = {
  incoming: direction => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: direction => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
}

const sliderTransition = {
  duration: 0.5,
  ease: [0.56, 0.03, 0.12, 1.04]
}

const Carousel = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0,data?.company_projects[0]])

  const activeImageIndex = wrap(0, data.company_projects.length, imageCount)

  const swipeToImage = swipeDirection => { 
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  }

  const dragEndHandler = dragInfo => {
    const draggedDistance = dragInfo.offset.x
    const swipeThreshold = 50
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1)
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1)
    }
  }

  const skipToImage = imageId => {  
    let changeDirection
    if (imageId > activeImageIndex) {
      changeDirection = 1
    } else if (imageId < activeImageIndex) {
      changeDirection = -1
    }
    setImageCount([imageId, changeDirection]);
  }

  return (
    <main>
      <div className="hidden md:flex gap-[4px]">
        {data.company_projects.map(image => (
          <div key={image.id} onClick={() => skipToImage(image.id)} className="thumbnail-container">
            <img src={image.img} alt="Projects" className="rounded-lg"/>
            <div className={`active-indicator ${image.id === activeImageIndex ? "active-indicatorako rounded-lg" : "text-white"}`}></div>
          </div>
        ))}
      </div>
      <div className="slider-container relative bg-slate-50 rounded-lg p-0 md:p-2 mb-6"> 
        <button className="absolute -left-4 z-20 top-[45%] text-red-500 md:text-slate-700" onClick={() => swipeToImage(-1)}>
           <div className="bg-white flex items-center justify-center rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" />
            </svg> 
           </div>
        </button>
        <button className="absolute -right-4 z-20 top-[45%] text-red-500 md:text-slate-700" onClick={() => swipeToImage(1)}>
            <div className="bg-white flex items-center justify-center rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>

            </div>
        </button> 
        <div className="slider group"> 
          <AnimatePresence initial={false} custom={direction}>
            <div className='z-10 text-white absolute duration-500 transition-all bottom-0 bg-[#2d2d39] w-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-40 px-4 pt-2' >
              <center className='underline'>{data.company_projects[activeImageIndex].title}</center>
              <div className='text-[12px] mt-2'>
                {data.company_projects[activeImageIndex].description}
              </div>
              <div className='text-[12px] mt-2'>
                {data.company_projects[activeImageIndex].declaim}
              </div>
            </div>
            <motion.div key={imageCount} style={{backgroundImage: `url(${data.company_projects[activeImageIndex].img})`}}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="image cursor-pointer"
            />
          </AnimatePresence>
        </div>  
      </div> 
    </main>
  )
}

export default Carousel;
