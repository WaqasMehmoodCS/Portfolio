import { links } from "@/lib/data"
import Link from "next/link"

const NavLinks = () => {
    return (
        links.map((link => {
            return (
                <div key={link.id} className='p-2 font-manrope mt-4 hover:cursor-pointer hover:bg-slate-700 rounded-lg duration-700'>
                    <Link href={link.address}>
                        <div className="flex items-center gap-4">
                            {link.icon}
                            <div>{link.name}</div>
                        </div>
                    </Link>
                </div>
            )
        }))

    )
}

export default NavLinks