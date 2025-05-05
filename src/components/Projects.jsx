import React from 'react'
import { Card } from './ui/card'

const Projects = () => {
    
    // Sample project data
    const projects = [
        {
            title: 'Sargam 2025',
            description: 'Description of Project 1',
            link: 'https://sargam25.cet.ac.in/'
        },

        {
            title: 'MuSprint',
            description: 'Description of Project 2',
            link: 'https://musprint-cet.vercel.app/'
        },
        {
            title: 'Drug Free Kerala',
            description: 'Description of Project 3',
            link: 'https://drugfreekerala.com/'
        },
        {
            title: 'BeyondHack',
            description: 'Description of Project 4',
            link: 'https://beyondhack.com/'
        },
        {
            title: 'Min Mark Calculator',
            description: 'Description of Project 5',
            link: 'https://min-mark-app.vercel.app/'
        },
        {
            title: 'My Portfolio',
            description: 'Description of Project 6',
            link: ""
        },
        {
            title: 'Code ReCET',
            description: 'Description of Project 7',
            link: 'https://coderecet.com/'
        }
    ];
    
    return (
    <div className='gap-4 m-6'>
        <div className="flex items-center justify-center bg-black text-white font-redhat">
            <h1 className="text-4xl font-bold">My Projects</h1>
        </div>
        <Card className={"glow-card p-8 mt-4"}>
            <div className="grid grid-cols-4 md:grid-cols-2 gap-4 p-8">
                {projects.map((project, index) => (
                    <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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