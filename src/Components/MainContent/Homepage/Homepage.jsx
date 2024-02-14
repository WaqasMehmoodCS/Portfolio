'use client'
import { MenuContext } from "@/Context/MenuContext"
import MenuIcon from "./MenuIcon"
import Typing from "./Typing"
import { useContext } from "react"


const HomePage = () => {
    const { open, setOpen } = useContext(MenuContext)
    return (
        <div className='flex justify-between p-4 h-full'>
            <div className='flex-[2] flex items-center' >
                <div className='sm:pl-80'><Typing /></div>
            </div>
            <div className='flex-1 flex justify-end sm:hidden'>
                <MenuIcon toggle={{ open, setOpen }} />
            </div>
        </div>
    )
}

export default HomePage