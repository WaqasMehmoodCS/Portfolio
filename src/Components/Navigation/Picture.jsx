import Image from "next/image"

const Picture = () => {
    return (
        <div className="flex justify-center">
            <div className="absolute w-32 h-32 border-8 border-gray-800 rounded-full overflow-hidden">
                <Image src='/pic.png' alt="WaqasPicture" fill sizes="(max-width:5000px) 50vw, 100vw" priority />
            </div>
        </div>
    )
}

export default Picture