import './App.css'; 
import bg from '../src/img/bg.jpg'; 
import Content from './Sidebar/content';
import MainContent from './Main/main'; 

function App() { 
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
  return (  
  <div className='h-screen w-full bg-white dark:bg-[#191923]'>
    <div className="container mx-auto  scroll-smooth hover:scroll-auto px-0 md:px-6">
      <div className="h-screen min-h-full flex flex-wrap">
        <div className="relative my-4 rounded-l-sm  relative flex-1 min-h-max bg-slate-50 dark:bg-[#20202a] h-[95%]  w-full md:max-w-[290px]">
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
  </div>

  );
}

export default App;
