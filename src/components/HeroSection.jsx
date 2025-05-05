import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import '../styles/card.css'

const SocialLink = ({ href, icon: Icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-zinc-400 hover:text-white transition-colors duration-200"
    aria-label={label}
  >
    {Icon && <Icon className="w-5 h-5" />}
  </a>
)

const HeroSection = () => {
return (
    <div className="w-full max-w-2xl font-redhat">
        <Card className="glow-card p-8">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                    <CardTitle className="text-3xl font-bold text-white">
                        Amaljith M V
                    </CardTitle>
                    <CardContent className="p-0 space-y-2">
                        <p className="text-base text-zinc-200">Front End Developer</p>
                        <p className="text-base text-zinc-200">UI/UX Designer</p>
                        <p className="text-sm text-zinc-400 mt-4">
                            Passionate about creating seamless web experiences and contributing to open-source projects.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <SocialLink
                                href="https://github.com/rubyaj24"
                                icon={FaGithub}
                                label="GitHub Profile"
                            />
                            <SocialLink
                                href="https://linkedin.com/in/amaljithmv2004"
                                icon={FaLinkedin}
                                label="LinkedIn Profile"
                            />
                            <SocialLink
                                href="https://instagram.com/the.prime.mover"
                                icon={FaInstagram}
                                label="Instagram Profile"
                            />
                        </div>
                    </CardContent>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <img 
                src='https://avatars.githubusercontent.com/rubyaj24' 
                alt="Technologies" 
                className="rounded-full border-2 hover:border-0 hover:scale-105 transition-transform duration-500 ease-in-out" 
            />
            </div>
            </div>
        </Card>
    </div>
)
}

export default HeroSection