
import profilePic from '../img/profilePic.jpg'; 
import bg from '../img/bg.jpg'; 
import resume from '../img/Resume.pdf';
import { saveAs } from "file-saver";
const BannerSection = ()=>{
    const myStyle2={
        backgroundImage: `url(${bg})`,
        width: '100%',
        height: '350px',
        backgroundPosition: 'center',
        backgroundSize: 'cover', 
    };
    const onDownload3 = () => {
      saveAs(resume, "Resume.pdf");
    };
    return(
        <>  
            <div className='bg-slate-50 dark:bg-[#24242e] mx-12 h-8 hidden 2xl:block'>  
            </div>  
            <div style={myStyle2} className="relative">  
                <div className="art-top-bg-overlay2 w-full h-full relative"></div> 
                <div className='text-white absolute top-12 mx-12'> 
                <div className='text-[3vmin] lg:text-4xl font-sans font-bold'>
                  Find all about my Amazing <br/>Art Lab!
                </div>
                <div className='mt-8 text-md block'>
                  <span className='mr-1'>&lt;</span>
                  <span className='text-yellow-500'> code </span>
                  <span className='ml-1'>&gt;</span>
                    <span className='mx-1'> I build web applications</span>
                  <span className='mr-1'>&lt;</span>/
                  <span className='text-yellow-500'> code </span>
                  <span className='ml-1'>&gt;</span>
                </div>
                <div className='mt-2 text-md block'>
                  <span className='mr-1'>&lt;</span>
                  <span className='text-yellow-500'> code </span>
                  <span className='ml-1'>&gt;</span>
                    <span className='mx-1'> I build mobile applications</span>
                  <span className='mr-1'>&lt;</span>/
                  <span className='text-yellow-500'> code </span>
                  <span className='ml-1'>&gt;</span>
                </div>
                <div className='mt-4'>
                  <button className="rounded-lg bg-yellow-500 text-white p-2 text-sm w-28" onClick={onDownload3}>Resume</button>
                  {/* <a href="https://mervins.github.io/" className="rounded-lg bg-yellow-500 text-white p-2 text-sm w-28">Resume</a> */}
                </div>
                </div>
                <div>
                    <img className='profile-pic absolute hidden xl:block h-[60vmin]' src={profilePic}/>
                </div>
            </div>
        </>
    )
}
export default BannerSection;