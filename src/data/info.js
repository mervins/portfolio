import express from '../img/express.png';
import costTool from '../img/costTool.png';
import impulse from '../img/impulse.png';
import pastil from '../img/pastil.png'; 
import implicit from '../img/implicit.png';
import laravel from '../img/laravel.png';
import flutter from '../img/flutter.png';
import react from '../img/react.png'; 
import vue from '../img/vue.png'; 
import pos from '../img/pos.png';

export const  data = {
    profile:[
            {
                name:"Osmer Vinarao",
                class:"text-[#1e1e28] dark:text-white text-lg mt-1"
            },
            {
                name:"Full Stack",
                class:"text-[#1e1e28] dark:text-white text-xs mt-2"
            },
            {
                name:"Software Developer,",
                class:"text-[#1e1e28] dark:text-white text-xs"
            },
             
    ],
    location:[
        {
            name:"Residence",
            value:"Philippines", 
        }, 
        {
            name:"City",
            value:"Malaybalay", 
        },
        {
            name:"Age",
            value:"26"
        },
    ],
    status:[
            {
                name:"Work",
                percentage:"85%",
                class:"fill"
            },
            {
                name:"Travel",
                percentage:"45%",
                class:"fill2"
            },
            {
                name:"Sports",
                percentage:"45%",
                class:"fill2"
            }
        ],
    language:[
            {
                name:"html",
                percentage:"90"
            },
            {
                name:"CSS",
                percentage:"60"
            },
            {
                name:"js",
                percentage:"80"
            },
            {
                name:"php",
                percentage:"70"
            }
        ],
    company_projects:[
        {
            title:'Express',
            description:'The app was build on Larvel Jetstream where the frontend used VUE.JS and tailwind for CSS framework.',
            declaim:'Disclaimer: This project belongs to the company and the intention is to promote the portfolio as a part of the development.',
            img:express,
        },
        {
            title:'Cost Tool',
            description:'The app was built on Larvel with PHP server-side, VUE for the client side and bootstrap of css utility.',
            declaim:'Disclaimer: This project belongs to the company and the intention is to promote the portfolio as a part of the development.',
            img:costTool,
        },
        {
            title:'Impulse',
            description:'The app was built on Larvel with PHP server-side, VUE for the client side and bootstrap of css utility.',
            declaim:'Disclaimer: This project belongs to the company and the intention is to promote the portfolio as a part of the development.',
            img:impulse,
        },
        {
            title:'Dr.Implicit',
            description:'The app was built on Flutter.',
            declaim:'Disclaimer: This project belongs to the company and the intention is to promote the portfolio as a part of the development.',
            img:implicit,
        },
        {
            title:'IDLLES Inventory',
            description:'The app was build on React.JS for frontend, Node.JS for backend, pure css and deploy in Electron.JS (Desktop).',
            declaim:'The purpose I use Electron is to run the app in offline mode and stand alone.',
            img:pos,
        },
        {
            title:'Pastil Ni Babo',
            description:' Thes project was built on Rect.JS with PHP server-side and VUE for the client side.',
            declaim:'',
            img:pastil,
        }
    ], 
    cascade:["Bootstrap","Tailwind","Git knowledge"],
    framwork:[
        {
            title:'Larvel',
            desc:'Laravel are the main framework that we used in our development a side from that laravel are more efficient, open source, MVC support, greate security and etc..',
            img:laravel
        },
        {
            title:'Vue.JS',
            desc:'Vue are easy to learn, have excellent documentation, particularly helpful when designing the user experience and support from committed.',
            img:vue
            
        },
        {
            title:'React.JS',
            desc:'I commonly used React for my personal project app and currently learning more.',
            img:react
        
        },
        {
            title:'Flutter',
            desc:'The team decide to use flutter for the reason that the framework are supported from different type of platform specially for android and ios.',
            img:flutter
        }
    ],
    experience:[
        {
            year:'June 12, 2014',
            title:'College',
            course:'BSIT',
            profile:["COMSOC Officer, PineapplePy Volunteer - Python community"]
        },
        {
            year:'June 12, 2014',
            title:'Intern',
            course:'BSIT',
            profile:["Frappe"]
        },
        {
            year:'June 12, 2014',
            title:'College',
            course:'BSIT',
            profile:["COMSOC Officer, PineapplePy Volunteer - Python community"]
        },
        {
            year:'June 12, 2014',
            title:'Employed',
            course:'Software Developer',
            profile:["Laravel, Vue, Flutter"]
        }
    ]
    
}
export const Info = ()=>{
    return  data;
}