import { useEffect, useContext, useState } from "react";
import {  List, X } from "phosphor-react"
import ProgressBar from './element/ProgressBar'
import classNames from "classnames";
import { Transition } from '@headlessui/react'
import scrollToElement from 'scroll-to-element';
import { SectionContext } from "./contexts/SectionContexts";
import Image from "next/image";
import Link from "next/link";



export const Header = () => {
    const {goToContato,goToFeedBack,goToPortifolio,goToTecnology}=useContext(SectionContext)
    const [animateHeader, setAnimateHeader] = useState(false);
    const [showMenu, setShowMenu] = useState(false)
    const [idButton, setIdButton] = useState<string | undefined>("")


    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 33) {
                setAnimateHeader(true);
                if(window.scrollY < 423){
                    setIdButton(document.querySelector("#mHome")?.id)
                    document.querySelector("#scrollButton")?.classList.add("block")
                    document.querySelector("#scrollButton")?.classList.remove("hidden")

                }else if(window.scrollY >= 423 && window.scrollY < 1103){
                    setIdButton(document.querySelector("#mTecnologias")?.id)
                }else if(window.scrollY >= 1103 && window.scrollY < 1754){
                    setIdButton(document.querySelector("#mPortifolio")?.id)
                }else if(window.scrollY >= 1754 && window.scrollY < 2377){
                    setIdButton(document.querySelector("#mContato")?.id)
                }else if(window.scrollY >= 2377){
                    setIdButton(document.querySelector("#mFeedback")?.id)
                }
                
                else{
                    setIdButton("")
                }   
            } else{
                setAnimateHeader(false)
                document.querySelector("#scrollButton")?.classList.add("hidden")
                document.querySelector("#scrollButton")?.classList.remove("block")
            }
        };
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);



    return (
        <header className={classNames("transition-all w-full p-4 fixed z-20 bg-transparent top-0", { "bg-teal-900/80": animateHeader })}>
            <div className="flex justify-between items-center lg:items-baseline ">
                <div className="w-44 h-full">
                    <Link href="/"><Image width={176} height="27" src="/LgAcosv4x.png" alt="Logo da Acos Services" /></Link>
                </div>
                <div className={classNames({ "hidden  lg:block flex-1": showMenu === false }, { "block": showMenu })}>
                    <ul className="justify-end gap-8 font-grotesk font-light  hidden lg:flex lg:text-base flex-col lg:flex-row">
                        <a onClick={()=>{scrollToElement("#menu")}} id="mHome"  className={classNames("hover:underline cursor-pointer", { "underline font-bold text-orange-500": idButton === "mHome" })}><li>Início</li></a>
                        <a onClick={()=>{goToTecnology()}} id="mTecnologias"  className={classNames("hover:underline cursor-pointer", { "underline font-bold text-orange-500": idButton === "mTecnologias" })}><li>Tecnologias</li></a>
                        <a onClick={()=>{goToPortifolio()}} id="mPortifolio"  className={classNames("hover:underline cursor-pointer", { "underline font-bold text-orange-500": idButton === "mPortifolio" })}><li>Portifolio</li></a>
                        <a onClick={()=>{goToContato()}} id="mContato"  className={classNames("hover:underline cursor-pointer", { "underline font-bold text-orange-500": idButton === "mContato" })}><li>Contato</li></a>
                        <a onClick={()=>{goToFeedBack()}} id="mFeedback" className={classNames("hover:underline cursor-pointer", { "underline font-bold text-orange-500": idButton === "mFeedback"})}><li>FeedBack</li></a>
                    </ul>

                    <Transition
                        show={showMenu}
                        enter="transition ease-in-out duration-1000 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                        className={"fixed z-50 bg-teal-900 top-0 right-0 overflow-hidden border-l-8 border-orange-500 px-4 w-full h-screen"}
                    >
                        <div className="border-b border-yellow-900 lg:hidden py-4" onClick={() => setShowMenu((showMenu) => !showMenu)}>
                            <X size={26} className="border rounded " />
                        </div>
                        <ul className="flex justify-center gap-8 font-grotesk font-light p-8 text-xl lg:text-base flex-col lg:flex-row">
                            <a onClick={()=>{scrollToElement("#menu"), setShowMenu(false)}} ><li>Início</li></a>
                            <a onClick={()=>{goToTecnology(), setShowMenu(false)}} ><li>Tecnologias</li></a>
                            <a onClick={()=>{goToPortifolio(), setShowMenu(false)}} ><li>Portifolio</li></a>
                            <a onClick={()=>{goToContato(), setShowMenu(false)}} ><li>Contato</li></a>
                            <a onClick={()=>{goToFeedBack(), setShowMenu(false)}} ><li>FeedBack</li></a>
                        </ul>
                        <div className="flex flex-col justify-between items-center h-80 p-8  border-t border-yellow-900  lg:hidden">
                            <div className=" w-full flex justify-center">
                                <Image width={240} height={35} src="/LgAcosv4x.png" alt="Logo da Acos Services" />
                            </div>
                        </div>
                    </Transition>
                </div>
                <div className="flex items-center gap-2">
                    <div className="lg:hidden" onClick={() => setShowMenu((showMenu) => !showMenu)}><List size={29} /></div>
                </div>
            </div>
            <div className="border-orange-500">
                <ProgressBar
                    color="rgb(249 115 22 / var(--tw-border-opacity))"
                    height={1}
                    direction="right"
                    position="top"
                    gradient={true}
                    gradientColor="#eee"
                />
            </div>
        </header>
    )
}






