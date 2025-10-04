import React, { useEffect, useState, useRef } from 'react'

// Simple typewriter that cycles through provided names
const NameSwitcher = ({ names = [], typeSpeed = 80, pause = 1200 }) => {
  const [display, setDisplay] = useState('')
  const [nameIndex, setNameIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    return () => { mounted.current = false }
  }, [])

  useEffect(() => {
    if (!names || names.length === 0) return

    const currentName = names[nameIndex]
    let timeout = null

    if (!deleting && charIndex <= currentName.length) {
      timeout = setTimeout(() => {
        if (!mounted.current) return
        setDisplay(currentName.slice(0, charIndex))
        setCharIndex((i) => i + 1)
      }, typeSpeed)
    } else if (!deleting && charIndex > currentName.length) {
      // pause before deleting
      timeout = setTimeout(() => {
        if (!mounted.current) return
        setDeleting(true)
      }, pause)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        if (!mounted.current) return
        setDisplay(currentName.slice(0, charIndex))
        setCharIndex((i) => i - 1)
      }, typeSpeed / 1.5)
    } else if (deleting && charIndex < 0) {
      // move to next name
      timeout = setTimeout(() => {
        if (!mounted.current) return
        setDeleting(false)
        setCharIndex(0)
        setNameIndex((i) => (i + 1) % names.length)
      }, 200)
    }

    return () => timeout && clearTimeout(timeout)
  }, [charIndex, deleting, nameIndex, names, typeSpeed, pause])

  return (
    <span>
      {display}
      <span className="inline-block w-[1ch] animate-blink">|</span>
    </span>
  )
}

export default NameSwitcher
