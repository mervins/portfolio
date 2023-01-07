
import profilePic from '../img/profilePic.webp'; 
import bg from '../img/bg.webp'; 
import resume from '../img/Resume.pdf';
import { saveAs } from "file-saver";
import DropDownButton from '../components/ButtonDD';
import Contact from './Contacts';
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
                <div className='text-white absolute top-12  mx-4 lg:mx-12'> 
                <div className='text-[2.5vmin] lg:text-4xl font-sans font-bold w-[80vw] md:w-full lg:w-[70vmin]'>
                  {/* Find all about my Amazing <br/>Art Lab! */}
                  Sharing knowledge and experience through my work
                </div>
                <div className='mt-8 text-md block text-[2vmin]'>
                  <span className=''>&lt;</span>
                  <span className='text-yellow-500'> code </span>
                  <span className=''>&gt;</span>
                    <span className=''> I build web applications</span>
                  <span className=''>&lt;</span>/
                  <span className='text-yellow-500'> code </span>
                  <span className=''>&gt;</span>
                </div>
                <div className='mt-2 text-md block text-[2vmin]'>
                  <span className=''>&lt;</span>
                  <span className='text-yellow-500'> code </span>
                  <span className=''>&gt;</span>
                    <span className=''> I build mobile applications</span>
                  <span className=''>&lt;</span>/
                  <span className='text-yellow-500'> code </span>
                  <span className=''>&gt;</span>
                </div>
                <div className='mt-4'>
                  {/* <button className="rounded-lg bg-yellow-500 text-white p-2 text-sm w-auto" onClick={onDownload3}>Download Resume</button> */}
                  <DropDownButton>
                    <a href="https://mervins.github.io/" target="_blank" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                          <div className="inline-flex gap-2 w-full items-center">
                              <div>View</div>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clipRule="evenodd" />
                              </svg> 
                          </div>
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                          <div className="inline-flex gap-2 w-full items-center">
                              <div>Download</div>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                              </svg>

                          </div>
                      </a>
                  </DropDownButton> 
                </div>
                {/* <Contact/> */}
                </div>
                <div>
                    <img className='profile-pic absolute hidden xl:block h-[60vmin]' src={profilePic}/>
                </div>
            </div>
        </>
    )
}
export default BannerSection;