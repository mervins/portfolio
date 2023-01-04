import express from '../img/express.webp';
import costTool from '../img/costTool.webp';
import impulse from '../img/impulse.webp';
import pastil from '../img/pastil.webp'; 
import implicit from '../img/implicit.webp';
import laravel from '../img/laravel.webp';
import flutter from '../img/flutter.png';
import react from '../img/react.webp'; 
import vue from '../img/vue.png'; 
import pos from '../img/pos.webp';
import bg from '../img/bg.webp'; 
import profilePic from '../img/profilePic.webp'; 
import timer from '../img/timer.webp';

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
            name:"JavaScript (ES6)"
        }, 
        {
            name:"PHP",
            percentage:"70"
        },
        {
            name:"Python",
            percentage:"70"
        },
        {
            name:"Java"
        },
        {
            name:"Dart"
        },
        {
            name:"HTML (markup languages)",
            percentage:"90"
        },
        {
            name:"CSS (stylesheet languages)",
            percentage:"60"
        }, 
    ],
    company_projects:[
        {
            id:0,
            title:'Tie-Mer',
            description:'This web application was built using ReactJS, Tailwind and utilizes local storage for data storage(DexieJS). It is a Progressive Web App (PWA) designed specifically for use as a timer for mountain bike enduro races. The purpose of the app is to provide a reliable and convenient timer for enduro races, allowing users to easily track and record their times.',
            declaim:'',
            img:timer,
        },
        {   id:1,
            title:'IDLLES Inventory',
            description:'The app was built on React.JS for frontend, Node.JS for backend, pure css and deploy in Electron.JS (Desktop). This inventory management system is a software application that helps businesses track and manage their inventory levels. It allows companies to accurately track the quantity, location, and status of products or materials, and can be used to optimize the ordering and stocking of items.',
            declaim:'The purpose I use Electron is to run the app in offline mode and stand alone.',
            img:pos,
        },
        {    id:2,
            title:'Pastil Ni Babo',
            description:' This application is created using ReactJS and pure CSS. Our blog is all about delicious and healthy food options for breakfast, lunch, and dinner. We love to mix and match different ingredients to create a wide variety of dishes for you to enjoy. We hope you find something tasty and inspiring on our blog!"',
            declaim:'',
            img:pastil,
        },
        {
            id:3,
            title:'Express',
            description:'The app was built on Larvel Jetstream where the frontend used is VUE.JS and tailwind for CSS framework.',
            declaim:'Disclaimer:The following project is being shared for demonstrative purposes only and does not belong to me. I am simply sharing my experience with the project for informational purposes only.',
            img:express,
        },
        {
            id:4,
            title:'Cost Tool',
            description:'The app was built on Larvel with PHP server-side where the frontend used is VUE for the client side and bootstrap of css utility.',
            declaim:'Disclaimer: The following project is being shared for demonstrative purposes only and does not belong to me. I am simply sharing my experience with the project for informational purposes only.',
            img:costTool,
        },
        {
            id:5,
            title:'Impulse',
            description:'The app was built on Larvel with PHP server-side where the frontend used is VUE for the client side and bootstrap of css utility.',
            declaim:'Disclaimer: The following project is being shared for demonstrative purposes only and does not belong to me. I am simply sharing my experience with the project for informational purposes only.',
            img:impulse,
        },
        {
            id:6,
            title:'Dr.Implicit',
            description:'The app was built on Flutter.',
            declaim:'Disclaimer: The following project is being shared for demonstrative purposes only and does not belong to me. I am simply sharing my experience with the project for informational purposes only.',
            img:implicit,
        }
    ], 
    cascade:["Bootstrap","Tailwind","Git knowledge"],
    framwork:[
        {
            title:'Laravel',
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
            year:'July 12, 2018 - Present',
            title:'Occupation',
            course:'Currently working at Split Second Software Services as software developer',
            location:["Laravel, Vue, Flutter"]
        },
        {
            year:'December 08, 2017',
            title:'Internship',
            course:'Bai Web & Mobile Lab at Cagayan de Oro as a software developer ',
            location:["Frappe"]
        }, 
        {
            year:'November 05, 2013 - 2018',
            title:'College',
            course:'Bukidnon State University at Malaybalay City, Bukidnon took Bachelor of Information Technology',
            location:["Graduate"]
        },
        {
            year:'June 06, 2008',
            title:'Secondary School',
            course:'NOTRE DAME OF UPI at Nuro, Upi Maguindanao',
            location:["COMSOC Officer, PineapplePy Volunteer - Python community"]
        },
        
        
        
    ],
    images:[express,impulse,costTool,pastil,implicit,laravel,flutter,react,vue,pos,bg,profilePic]
    
}
export const Info = ()=>{
    return  data;
}