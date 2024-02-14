'use client'
import { Typewriter } from 'react-simple-typewriter'

const Typing = () => {
    const words = [
        "Next JS Developer",
        "React JS Developer",
        "Full Stack Developer",
    ]
    return (
        <div className='text-primary flex flex-col font-quick gap-3'>
            <span className='text-2xl font-bold'>Waqas Mehmood </span>
            <span>I&apos;m <span className='text-other text-sm underline'><Typewriter words={words} loop cursor cursorBlinking cursorColor='white'/></span></span>
        </div>
    )
}

export default Typing