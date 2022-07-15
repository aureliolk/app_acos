import { createContext, useState } from "react";
import { ChildrenProps } from "../Layout";
import scrollToElement from 'scroll-to-element';

interface SectionContextProps {
    showTecnology: boolean
    showPortifolio : boolean
    showContato: boolean
    showButtonHome:boolean
    isLoading:boolean
    hiddenButton:boolean
    showFeedBack:boolean
    NextButton:(id:string)=>void
    ScrollToHome:()=>void
    setShowButtonHome: (showButtonHome:boolean)=>void
    goToTecnology:()=>void
    goToPortifolio:()=>void
    goToContato:()=>void
    goToFeedBack:()=>void

}

export const SectionContext = createContext({} as SectionContextProps)

export const SectionProvider = ({ children }: ChildrenProps) => {

    const [showTecnology, setShowTecnology] = useState(false)
    const [showPortifolio, setShowPortifolio] = useState(false)
    const [showContato, setShowContato] = useState(false)
    const [showFeedBack, setShowFeedBack] = useState(false)

    const [hiddenButton, setHiddenButton] = useState(false)
    const [showButtonHome, setShowButtonHome] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    


    const NextButton=async (id:String)=>{
        setIsLoading(true)
        setHiddenButton(false)
        if(id === "tecnologias"){
            setShowTecnology(true)
            setTimeout(() => {
                scrollToElement("#tecnologias")
                setIsLoading(false)
                setHiddenButton(true)
            }, 1000)
        }else if(id === "portifolio"){
            setShowPortifolio(true)
            setTimeout(() => {
                scrollToElement("#portifolio")
                setIsLoading(false)
                setHiddenButton(true)

            }, 1000)
        }else if(id === "contato"){
            setShowContato(true)
            setTimeout(() => {
                scrollToElement("#contato")
                setIsLoading(false)
                setHiddenButton(true)
            }, 1000);
        }else if(id === "feedback"){
            setShowFeedBack(true)
            setTimeout(()=>{
                scrollToElement("#feedback")
                setIsLoading(false)
                setShowButtonHome(true)
                setHiddenButton(true)
            },1000)
        }
    }

    function goToTecnology(){
        setShowTecnology(true)
        setHiddenButton(true)
        setTimeout(() => {
            scrollToElement("#tecnologias")
        }, 1000);
    }
    function goToPortifolio(){
        setShowTecnology(true)
        setShowPortifolio(true)
        setHiddenButton(true)
        setTimeout(() => {
            scrollToElement("#portifolio")
        }, 1000);
    }
    function goToContato(){
        setShowTecnology(true)
        setShowPortifolio(true)
        setShowContato(true)
        setHiddenButton(true)
        setTimeout(() => {
            scrollToElement("#contato")
        }, 1000);
    }
    function goToFeedBack(){
        setShowTecnology(true)
        setShowPortifolio(true)
        setShowContato(true)
        setShowFeedBack(true)
        setHiddenButton(true)
        setShowButtonHome(true)
        setTimeout(() => {
            scrollToElement("#feedback")
        }, 1000);
    }

    const ScrollToHome=()=>{
        setIsLoading(true)
        scrollToElement("#menu")
        setIsLoading(false)
    }

    return (
        <SectionContext.Provider value={{showButtonHome,showTecnology,showContato,showPortifolio,isLoading,hiddenButton,showFeedBack, NextButton,ScrollToHome,setShowButtonHome,goToContato,goToFeedBack,goToPortifolio,goToTecnology}}>
            {children}
        </SectionContext.Provider>
    )
}