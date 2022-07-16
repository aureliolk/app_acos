import Image from "next/image"

export const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-orange-900 to-gray-900 px-2 py-1 flex flex-col justify-center items-center gap-2  lg:justify-between lg:items-baseline  lg:flex-row">
            <a href={"https://acos-services.vercel.app"}>
                <Image  width={150} height={23} src="/LgAcosv4x.png" alt="Logo da Acos Services" />
            </a>
            <div className="text-sm font-grotesk font-light">
            Todos os Direitos Reservados <strong>2022</strong>
            </div>
        </div>
    )
}