import {data} from '../data/info.js'; 
import BannerSection from './bannerSection.js';
import ProjectSection from './projectSection.js';
import FrameworkSection from './frameworkSection.js';
import ExperienceSection from './experienceSection.js';
const MainContent = ()=>{
   
    return(
        <>
            <BannerSection/>  
            <FrameworkSection/>
            <ProjectSection/>
            <ExperienceSection/>
            
        </>
    )
}

export default MainContent;