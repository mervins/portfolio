import express from '../img/express.png';
import costTool from '../img/costTool.png';
import impulse from '../img/impulse.png';
import pastil from '../img/pastil.png';

export const  data = {
    profile:[
            {
                name:"Osmer Vinarao",
                class:"text-[#1e1e28] dark:text-white text-lg mt-1"
            },
            {
                name:"Software Developer",
                class:"text-[#1e1e28] dark:text-white text-xs mt-2"
            },
            {
                name:"Full Stack,",
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
            description:'This project was build on Larvel Jetstream and Inertia for frontend.',
            declaim:'Disclaimer: This project belongs to the company and the intention is to promote my portfolio as a developer of this project.',
            img:express,
        },
        {
            title:'Cost Tool',
            description:'This project was built on Larvel with PHP server-side and VUE for the client side.',
            declaim:'Disclaimer: This project belongs to the company and the intention is to promote my portfolio as a developer of this project.',
            img:costTool,
        },
        {
            title:'Impulse',
            description:' This project was built on Larvel with PHP server-side and VUE for the client side.',
            declaim:'Disclaimer: This project belongs to the company and the intention is to promote my portfolio as a developer of this project.',
            img:impulse,
        },
    ],
    personal_projects:[
        {
            title:'Express',
            description:'This project was build on Larvel Jetstream and Inertia for frontend.',
            declaim:'Disclaimer: This project belongs to the company and the intention is to promote my portfolio as a developer of this project.',
            img:express,
        },
        {
            title:'Pastil Ni Babo',
            description:' This project was built on Larvel with PHP server-side and VUE for the client side.',
            declaim:'Disclaimer: This project belongs to the company and the intention is to promote my portfolio as a developer of this project.',
            img:pastil,
        }
    ],
    cascade:["Bootstrap","Tailwind","Git knowledge"],
    framwork:[
        {
            title:'Larvel',
            desc:'Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.'
        },
        {
            title:'Vue.JS',
            desc:'Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.'
        },
        {
            title:'React.JS',
            desc:'Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.'
        },
        {
            title:'Flutter',
            desc:'Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.'
        }
    ]
    
}
export const Info = ()=>{
    return  data;
}