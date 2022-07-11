import Link from "next/link"
import { CaretDown } from "phosphor-react"

export const ButtonOrder = () => {
    return (
        <a href={"#"} target="_blank" className=" w-full flex justify-center lg:justify-start">
            <div className="svg-wrapper">
                <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                    <rect className="shape" height="60" width="320" />
                </svg>
                <div className="text-center text-base absolute top-5 m-auto left-0 right-0 font-bold font-grotesk tracking-widest  ">SOLICITAR ORÇAMENTO</div>
            </div>
        </a>
    )
}


interface ButtonNext {
    src : string
}

export const ButonNext = ({src}:ButtonNext) => {
    return (
        <a href={src} className="inline-block m-auto rounded-full p-2 bg-gradient-to-b from-orange-500 transition-all hover:bg-gradient-to-t  hover:animate-bounce">
            <CaretDown size={28} />
        </a>
    )
}

