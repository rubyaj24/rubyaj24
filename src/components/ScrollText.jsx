import React from 'react'
import '../styles/scroll.css'

const ScrollText = () => {
  const developers = Array(18).fill("Developer")
  const designers = Array(18).fill("Designer")
  const Videographer = Array(18).fill("Videographer")
  
  return (
    <div className='gap-auto flex flex-col items-center justify-center'>
      <div className="tag-list">
        <div className="inner-reverse">
          {developers.map((text, index) => (
            <div key={index} className="tag">{text}</div>
          ))}
        </div>
      </div>
      <div className="tag-list">
        <div className="inner">
          {designers.map((text, index) => (
            <div key={index} className="tag">{text}</div>
          ))}
        </div>
      </div>
      <div className="tag-list">
        <div className="inner">
          {Videographer.map((text, index) => (
            <div key={index} className="tag">{text}</div>
          ))}
        </div>
      </div>
      <div className="tag-list">
        <div className="inner">
          {designers.map((text, index) => (
            <div key={index} className="tag">{text}</div>
          ))}
        </div>
      </div>
      <div className="tag-list">
        <div className="inner">
          {designers.map((text, index) => (
            <div key={index} className="tag">{text}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollText
