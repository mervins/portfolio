import './App.css'; 
import bg from '../src/img/bg.jpg'; 
import Content from './Sidebar/content';
import MainContent from './Main/main'; 
import {useState,useEffect} from 'react';
import { data } from './data/info';

function App() { 
  const [isLoading,setIsLoading] = useState(true); 
  const [loadedImages, setLoadedImages] = useState([]); 

  const myStyle={
    backgroundImage: `url(${bg})`,
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    top: '0',
    backgroundPosition: 'center',
    height: '100%',
    backgroundSize: 'cover',
}; 
useEffect(() => {
  fetchImages().then((data) => {
    console.log(data);
    let newArray = []
    data.map((item,index)=>{
     checkImageLoaded(item);
    });
    console.log(newArray)
  });
}, []);

useEffect(()=>{ 
   if(loadedImages.length === data.company_projects.length){
    setIsLoading(false);
   }
  console.log(loadedImages);
},[loadedImages])

const checkImageLoaded = (url)=>{
  var img = new Image();
  img.src = url; 
  var _dimensions = ''
  img.onload = async () => {
    _dimensions = Number(img.width).toLocaleString() + 'x' + Number(img.height).toLocaleString();
    console.log(url);
    setLoadedImages(prev=>[...prev,{[url]:true}])
  };
  
}
  
const fetchImages = async()=> {
  let images = []
  data.company_projects.map(image=>images.push(image.img));
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve(images);
    }, 10);
  });
}


  return (  
  <div className='h-screen w-full bg-white dark:bg-[#191923]'>
    {isLoading && 
    <div className='h-screen w-full flex flex-col justify-center items-center bg-[#191923] relative'> 
          <div className='text-lg relative'>
            <div className='w-24 h-24 origin-center rotate-45 absolute -top-[2.8rem] right-[1.1rem] rounded-lg z-10 border-4 border-orange-600 bg-orange-400'></div>
            <div className='w-[131px] h-10 rounded-lg z-20 relative flex items-center justify-center border-x-4 border-orange-600'>
              <div className='font-md text-[40px] mb-8 text-[#191923]/75 font-mono'>MER</div>
              </div>
            <div className='w-24 h-24 bg-slate-50 origin-center rotate-45 absolute -bottom-[2.8rem] right-[1.1rem] rounded-lg z-0 border-4  border-orange-600 bg-[#191923]'></div>
          </div> 
          <div className='absolute bottom-[280px]'>
            <div id="loader">
              <div className="ls-particles ls-part-1"></div>
              <div className="ls-particles ls-part-2"></div>
              <div className="ls-particles ls-part-3"></div>
              <div className="ls-particles ls-part-4"></div>
              <div className="ls-particles ls-part-5"></div>
              <div className="lightsaber ls-left ls-green"></div>
              <div className="lightsaber ls-right ls-red"></div>
            </div>
          </div>
    </div>
    }
    {
      !isLoading && 
      <div className="container mx-auto  scroll-smooth hover:scroll-auto px-0 md:px-6">
      <div className="h-screen min-h-full flex flex-wrap">
        <div className="relative my-0 md:my-4 rounded-l-sm  relative flex-1 min-h-max bg-slate-50 dark:bg-[#20202a] h-full md:h-[95%]  w-full md:max-w-[290px]">
          <Content/>
        </div> 
        <div className="mt-4 mr-4 mb-4 bg-slate-100 rounded-r-sm relative flex-1 min-h-max overflow-y-auto no-scrollbar h-[95%] hidden md:block">
            
            <div style={myStyle}>  
              <div className="art-top-bg-overlay dark:bg-gradient-to-b from-[#1e1e28]/90 to-[#1e1e28]/90"></div>
            </div> 
            <div className='px-10 mt-8 min-h-max  overflow-y-auto no-scrollbar h-[95%] '>
              <div className='flex flex-col relative '>  
                <MainContent/>
              </div> 
            </div>
        </div>
      </div>
    </div>
    }
  </div>

  );
}

export default App;
