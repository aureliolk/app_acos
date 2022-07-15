import Image from "next/image"

export const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-orange-900 to-gray-900 px-2 flex flex-col justify-center items-center gap-2 lg:justify-between lg:items-baseline  lg:flex-row">
            <div className=" w-40 " >
                <Image src="/LgAcosv4x.png" alt="Logo da Acos Services" />
            </div>
            <div className="text-sm font-grotesk font-light">
            Todos os Direitos Reservados <strong>2022</strong>
            </div>
        </div>
    )
}