import React from 'react'
import { Card } from './ui/card'
import '../styles/animations.css'
import sargam25 from '../assets/sargam-25.mp4'
import musprint from '../assets/musprint-cet.png'
import dfk from '../assets/drug-free-kerala.png'
import beyondhack from '../assets/beyondhack.mp4'
import minmark from '../assets/min-mark.png'
import portfolio from '../assets/portfolio.png'

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
            description: 'Auth taking page for Drug Free Kerala',
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
    ];
    
    return (
    <div className='gap-4 m-6'>
        <div className="flex items-center justify-center bg-black text-white font-redhat">
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
                        <h3 className="text-xl font-bold text-white"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
                        <p className="text-gray-400">{project.description}</p>
                        {project.preview ? (
                            <video 
                                src={project.preview}
                                className="w-full h-64 mt-4 rounded-lg"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        ) : <img src={project.image} alt={project.title} className="w-full h-64 mt-4 rounded-lg text-white" />}
                    </div>
                ))}
            </div>
        </Card>
    </div>
  )
}

export default Projects