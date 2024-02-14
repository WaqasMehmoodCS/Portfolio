import { socialIcons } from "@/lib/socialIcons";
import Link from "next/link";

const SocialIcons = () => {

    return (
        <div className="flex justify-center items-center gap-2 mt-4">
            {socialIcons && socialIcons.map((icon) => {
                return (
                    <div key={icon.id} className="bg-slate-700 hover:scale-105 duration-700 text-primary p-2 rounded-full hover:bg-slate-800 hover:cursor-pointer">
                        <Link href={icon.address}>
                            {icon.icon}
                        </Link>
                    </div>
                )
            })}
        </div>
    )

}
export default SocialIcons