import React from 'react'
import { Card } from './ui/card'
import '../styles/animations.css'

const Projects = () => {
    
    // Sample project data
    const projects = [
        {
            title: 'Sargam 2025',
            description: 'Point table for CET\'s Official Cultural Fest',
            link: 'https://sargam25.cet.ac.in/'
        },

        {
            title: 'MuSprint',
            description: 'Leaderboard for MuLearn CET Karma Mining',
            link: 'https://musprint-cet.vercel.app/'
        },
        {
            title: 'Drug Free Kerala',
            description: 'Auth taking page for Drug Free Kerala',
            link: 'https://drugfreekerala.com/'
        },
        {
            title: 'BeyondHack',
            description: 'Landing page for BeyondHack',
            link: 'https://beyondhack.com/'
        },
        {
            title: 'Min Mark Calculator',
            description: 'Web app to calculate minimum marks required to pass',
            link: 'https://min-mark-app.vercel.app/'
        },
        {
            title: 'My Portfolio',
            description: 'Personal portfolio showcasing my work and projects',
            link: "https://amaljithmv.vercel.app/"
        },
    ];
    
    return (
    <div className='gap-4 m-6'>
        <div className="flex items-center justify-center bg-black text-white font-redhat">
            <h1 className="text-4xl font-bold">My Projects</h1>
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
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-gray-400">{project.description}</p>
                        <iframe src={project.link} className="w-full h-64 mt-4 rounded-lg" title={project.title}></iframe>
                    </div>
                ))}
            </div>
        </Card>
    </div>
  )
}

export default Projects