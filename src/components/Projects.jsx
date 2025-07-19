import { Card } from './ui/card'
import sargam25 from '../assets/sargam-25.webm'
import musprint from '../assets/musprint-cet.png'
import dfk from '../assets/drug-free-kerala.png'
import beyondhack from '../assets/beyondhack.mp4'
import minmark from '../assets/min-mark.png'
import portfolio from '../assets/portfolio.png'
import resume from '../assets/resume-builder.png'
import earth from '../assets/threejs-earth.png'
import mument from '../assets/mument.png'
// import dotslash from '../assets/dotslash-22-promo.mp4'
// import cetalks from '../assets/cetalks_execom.mp4'

const Projects = () => {
    
    // Sample project data
    const web = [
        {
            title: 'MuMent',
            description: 'Mument\'s official project management tool',
            image: mument,
            link: 'https://mument.vercel.app/',
            tools: ['vite', 'react', 'typescript', 'tailwindcss', 'django', 'postgresql']
        },
        {
            title: 'Sargam 2025',
            description: 'Point table for CET\'s Official Cultural Fest',
            preview: sargam25,
            link: 'https://sargam-25.vercel.app/',
            tools: [
                'vite','react','javascript','tailwindcss','sheetsAPI'
            ]
        },

        {
            title: 'MuSprint',
            description: 'Leaderboard for MuLearn CET Karma Mining',
            image: musprint,
            link: 'https://musprint-cet.vercel.app/',
            tools : ['react','typescript','vanillacss']
        },
        {
            title: 'Drug Free Kerala',
            description: 'Auth taking page for Drug Free Kerala, part of permute-25',
            image: dfk,
            link: 'https://drugfreekerala.com/',
            tools : ['vite','react','typescript','tailwindcss']
        },
        {
            title: 'Resume Builder',
            description: 'Create resume in minutes',
            image: resume,
            link: "https://resumebuilder25.vercel.app/",
            tools: ['next','react','tailwindcss','jsPDF']

        },
        {
            title: 'BeyondHack',
            description: 'Landing page for BeyondHack',
            preview: beyondhack,
            link: 'https://beyondhack.com/',
            tools : ['next','react','javascript','tailwindcss']
        },
        {
            title: 'Min Mark Calculator',
            description: 'Web app to calculate minimum marks required to pass',
            image: minmark,
            link: 'https://min-mark-app.vercel.app/',
            tools : ['vite','react','javascript','tailwindcss']
        },
        {
            title: 'My Portfolio',
            description: 'Personal portfolio showcasing my work and projects',
            image: portfolio,
            link: "https://amaljithmv.vercel.app/",
            tools : ['vite','react','javascript','tailwindcss']
        },
        {
            title: 'Threejs Earth',
            description: 'Interactive 3D globe using Three.js',
            image: earth,
            link: 'https://threejs-earth.vercel.app/',
            tools: ['three.js', 'react', 'javascript']
        }
    ];

    // const ui = [
    //     {
    //         title: 'Android Project Title',
    //         description: 'Short description of the Android project.',
    //         image: 'path/to/android-project-image.png',
    //         link: 'https://your-android-project-link.com',
    //         tools: ['Android', 'Kotlin']
    //     }
    // ]

    // const video = [
    //     {
    //         title: 'Dotslash-22 Title promo',
    //         video: dotslash,
    //         link: 'https://www.instagram.com/reel/DGyKzFOBSYE/?utm_source=ig_web_copy_link&igsh=MTMydWtybXp6bW9ocQ==',
    //         tools: ['Blender3d', 'After Effects']
    //     },
    //     {
    //         title: 'MuLearn CET Launch',
    //         video: 'https://www.youtube.com/watch?v=example', // Replace with actual video link
    //         link: 'https://www.instagram.com/reel/DBd50QOy_s5/',
    //         tools: ['Adobe After Effects', 'Premiere Pro'],
    //     },
    //     {
    //         title: 'Cetalks Execom Promo',
    //         video: cetalks,
    //         link: 'https://www.instagram.com/reel/DChBv2APiIp/',
    //         tools: ['Adobe After Effects', 'Premiere Pro'],
    //     }
    // ]

    return (
        <div className='w-full px-6 py-4'>
            <div className="flex items-center justify-center text-white/50 font-redhat">
                <h1 className="text-4xl font-bold">My Contributions - Web</h1>
            </div>
            <Card className={"glow-card p-8 mt-4 w-full"}>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6">
                    {web.map((project, index) => (
                        <div 
                            key={index} 
                            className="project-card p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                            style={{ 
                                animationDelay: `${index * 150}ms`,
                                animationFillMode: 'forwards'
                            }}
                        >
                            <a href={project.link}>
                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            <p className="text-gray-400">{project.description}</p>
                            {project.preview ? (
                                <video 
                                    src={project.preview}
                                    className="w-full mt-4 rounded-lg"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : <img src={project.image} alt={project.title} className="w-full mt-4 rounded-lg text-white" />}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tools.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="border-2 border-blue-500/20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-200 px-2 py-1 rounded-lg text-xs"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                            </a>
                        </div>
                    ))}
                </div>
            </Card>
            {/* <div className="flex items-center justify-center text-white/50 font-redhat mt-6">
                <h1 className="text-4xl font-bold">My Contributions - UI</h1>
            </div>
            <Card className={"glow-card p-8 mt-4 w-full"}>
                {ui.map((project, index) => (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6" key={index}>
                        <div className="project-card p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                            <a href={project.link}>
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <p className="text-gray-400">{project.description}</p>
                                <img src={project.image} alt={project.title} className="w-full mt-4 rounded-lg" />
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tools.map((tool, i) => (
                                        <span
                                            key={i}
                                            className="border-2 border-blue-500/20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-200 px-2 py-1 rounded-lg text-xs"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </Card>
            <div className="flex items-center justify-center text-white/50 font-redhat mt-6">
                <h1 className="text-4xl font-bold">My Contributions - Video</h1>
            </div>
            <Card className={"glow-card p-8 mt-4 w-full"}>
                {video.map((project, index) => (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6" key={index}>
                        <div className="project-card p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                            <a href={project.link}>
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <p className="text-gray-400">{project.description}</p>
                                <video
                                    src={project.video}
                                    className="w-full mt-4 rounded-lg"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tools.map((tool, i) => (
                                        <span
                                            key={i}
                                            className="border-2 border-blue-500/20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-200 px-2 py-1 rounded-lg text-xs"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </Card> */}
        </div>
    )
}

export default Projects