import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const MenuIcon = ({ toggle }) => {
    const { open, setOpen } = toggle

    return (
        <div className="flex flex-col relative" >
            <div className={`bg-other border-other p-3 rounded-full hover:cursor-pointer`} onClick={() => setOpen(!open)}>
                <IoMenu size={25} className={`${open ? 'opacity-0' : 'opacity-100'} duration-[1500ms]`} />
            </div>
            <div className={`bg-other border-other p-3 rounded-full hover:cursor-pointer ${open ? 'absolute' : 'opacity-0'} `} onClick={() => setOpen(!open)}>
                <IoMdClose size={25} className={`${open ? 'opacity-100' : 'opacity-0'} duration-[1500ms]`} />
            </div>
        </div>
    )
}

export default MenuIcon