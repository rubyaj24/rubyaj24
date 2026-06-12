import React from 'react'

export default function loading() {
  return (<>
  <div className="bg-glow">
        <div className="bg-orb" />
        <div className="bg-orb" />
        <div className="bg-orb" />
      </div>
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="mb-2 text-2xl font-bold">Loading</h1>
        <p className="mb-8 text-sm text-white/50">
          Hold tight! This might take a moment.
        </p>
      </div>
  </>
  )
}