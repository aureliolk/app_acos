import { CaretDown } from "phosphor-react"
import { useContext, useRef, useState } from "react"
import { SectionContext } from "../contexts/SectionContexts"
import { Loading } from "../element/Loading"

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
    idButton : string
}

export const ButonNext = ({idButton}:ButtonNext) => {

    const {isLoading, NextButton}= useContext(SectionContext)

    return (
        <div id={idButton} className={`inline-block m-auto rounded-full p-2 bg-gradient-to-b from-orange-500 transition-all hover:bg-gradient-to-t  hover:animate-bounce cursor-pointer`} onClick={()=>{NextButton(idButton)}}  >
            {isLoading ? <Loading /> : <CaretDown size={28} />}
        </div>
    )
}

