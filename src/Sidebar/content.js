import ProfileSection from './profileSection.js'; 
import BodySection from './bodySection.js';
const Content = ()=>{
    
    return(
        <>
            <div className="flex flex-col h-full relative absolute">
                <ProfileSection/>
                <BodySection/>
                <div className="bg-slate-100 dark:bg-[#24242e] h-16 flex justify-contet items-center">
                    <div>
                    {/* <FontAwesomeIcon icon="faCoffee" /> */}
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Content;