import { data } from "../data/info"
const ExperienceSection = ()=>{
    return (
        <div className='mt-4 bg-zinc-900/20 rounded-lg p-2'>
                <div className='text-white pl-2'>Experience</div> 
                {
                    data.experience.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div className='flex justify-center h-20 overflow-hidden' >
                                    <div className='text-white flex  w-40  '>
                                        <div>
                                            {item.year}
                                        </div> 
                                    </div> 
                                    <div className='text-white flex justify-center relative w-96'>
                                        <div className="absolute left-2 w-0.5 h-screen bg-slate-200"></div>
                                        <div className='absolute left-[0.5px] w-4 h-4 bg-slate-200 rounded-full'></div>
                                        <div className='text-white ml-12 w-full bg-slate-50/10 m-1 pl-2 rounded-lg'>
                                            <div>
                                                {item.title}
                                            </div>
                                            <div className="text-xs ml-4">
                                                {item.course}
                                            </div>
                                            <ul className="ml-4">
                                               {
                                                item.profile.map((profile,indexProfile)=>{
                                                    return(
                                                        <li key={indexProfile} className="text-xs">
                                                            {profile}
                                                        </li>
                                                    )
                                                })
                                               }
                                            </ul>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
    )
}

export default ExperienceSection;