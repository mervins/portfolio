import {data} from '../data/info.js'; 
import BannerSection from './bannerSection.js';
import ProjectSection from './projectSection.js';
import FrameworkSection from './frameworkSection.js';
const MainContent = ()=>{
   
    return(
        <>
            <BannerSection/>  
            <FrameworkSection/>
            <ProjectSection/>
        </>
    )
}

export default MainContent;