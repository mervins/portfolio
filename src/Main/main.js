import {data} from '../data/info.js'; 
import BannerSection from './bannerSection.js';
import ProjectSection from './projectSection.js';
import FrameworkSection from './frameworkSection.js';
import ExperienceSection from './experienceSection.js';
import AboutMe from './AboutMe.js';
const MainContent = ()=>{
   
    return(
        <>
            <BannerSection/>  
            <AboutMe/>
            <FrameworkSection/>
            <ProjectSection/>
            <ExperienceSection/>
            
        </>
    )
}

export default MainContent;