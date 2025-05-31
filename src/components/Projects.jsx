import React from 'react'
import { Card } from './ui/card'
import sargam25 from '../assets/sargam-25.mp4'
import musprint from '../assets/musprint-cet.png'
import dfk from '../assets/drug-free-kerala.png'
import beyondhack from '../assets/beyondhack.mp4'
import minmark from '../assets/min-mark.png'
import portfolio from '../assets/portfolio.png'
import resume from '../assets/resume-builder.png'

const Projects = () => {
    
    // Sample project data
    const projects = [
        {
            title: 'Sargam 2025',
            description: 'Point table for CET\'s Official Cultural Fest',
            preview: sargam25,
            link: 'https://sargam-25.vercel.app/'
        },

        {
            title: 'MuSprint',
            description: 'Leaderboard for MuLearn CET Karma Mining',
            image: musprint,
            link: 'https://musprint-cet.vercel.app/'
        },
        {
            title: 'Drug Free Kerala',
            description: 'Auth taking page for Drug Free Kerala, part of permute-25',
            image: dfk,
            link: 'https://drugfreekerala.com/'
        },
        {
            title: 'BeyondHack',
            description: 'Landing page for BeyondHack',
            preview: beyondhack,
            link: 'https://beyondhack.com/'
        },
        {
            title: 'Min Mark Calculator',
            description: 'Web app to calculate minimum marks required to pass',
            image: minmark,
            link: 'https://min-mark-app.vercel.app/'
        },
        {
            title: 'My Portfolio',
            description: 'Personal portfolio showcasing my work and projects',
            image: portfolio,
            link: "https://amaljithmv.vercel.app/"
        },
        {
            title: 'Resume Builder',
            description: 'Create resume in minutes',
            image: resume,
            link: "https://resumebuilder25.vercel.app/"

        }
    ];
    
    return (
    <div className='gap-4 m-6'>
        <div className="flex items-center justify-center text-white/50 font-redhat">
            <h1 className="text-4xl font-bold">My Contributions</h1>
        </div>
        <Card className={"glow-card p-8 mt-4"}>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="project-card p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
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
                        </a>
                    </div>
                ))}
            </div>
        </Card>
    </div>
  )
}

export default Projects