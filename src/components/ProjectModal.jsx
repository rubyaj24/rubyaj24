import React, { useEffect } from 'react'

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-lg w-11/12 max-w-5xl mx-4 p-5 overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full bg-black flex items-center justify-center p-4">
            {project.preview ? (
              <video
                src={project.preview}
                className="w-full h-auto max-h-[60vh] rounded"
                controls
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img src={project.image} alt={project.title} className="w-full h-auto max-h-[60vh] object-contain rounded" />
            )}
          </div>
          <div className="lg:w-1/2 w-full p-6 text-white">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold">{project.title}</h2>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-sm text-blue-400 underline">
                    {project.link}
                  </a>
                )}
                <p className="mt-3 text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools && project.tools.map((tool, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800 text-sm rounded border border-gray-700 text-gray-200">{tool}</span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close preview"
                className="ml-4 text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
