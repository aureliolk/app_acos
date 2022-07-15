import { GithubLogo, InstagramLogo, LinkedinLogo, List, X } from "phosphor-react"
import { Fragment, useContext, useEffect, useState } from "react";
import ProgressBar from './ProgressBar'
import classNames from "classnames";
import { Transition } from '@headlessui/react'
import { SectionContext } from "./contexts/SectionContexts";


export const Header = () => {
    const {setShowButtonHome,showButtonHome} = useContext(SectionContext)
    const [animateHeader, setAnimateHeader] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [showMenu, setShowMenu] = useState(false)



    useEffect(() => {
        const listener = () => {
            console.log(showButtonHome)
            setScroll(window.scrollY)
            if (window.scrollY > 33) {
                setAnimateHeader(true);
            } else {
                setAnimateHeader(false);
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
                <a href="#" className="w-44 h-full">
                    <img src="/LgAcosv4x.png" alt="Logo da Acos Services" />
                </a>
                <div className={classNames({ "hidden  lg:block flex-1": showMenu === false }, { "block": showMenu })}>
                <ul className="justify-center gap-8 font-grotesk font-light  hidden lg:flex lg:text-base flex-col lg:flex-row">
                            <a href="#" className="hover:underline"><li>Início</li></a>
                            <a href="#tecnologias" className="hover:underline"><li>Tecnologias</li></a>
                            <a href="#portifolio" className="hover:underline"><li>Portifolio</li></a>
                            <a href="#" className="hover:underline"><li>Sobre</li></a>
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
                            <a href="#" className="hover:underline"><li>Início</li></a>
                            <a href="#tecnologias" className="hover:underline"><li>Tecnologias</li></a>
                            <a href="#portifolio" className="hover:underline"><li>Portifolio</li></a>
                            <a href="#" className="hover:underline"><li>Sobre</li></a>
                        </ul>
                        <div className="flex flex-col justify-between items-center h-80 p-8  border-t border-yellow-900  lg:hidden">
                            <div className="flex justify-center gap-4 w-full font-grotesk text-xl font-light">
                                <InstagramLogo size={34} />
                                <LinkedinLogo size={34} />
                                <GithubLogo size={34} />
                            </div>
                            <div className=" w-full flex justify-center border-t border-b border-yellow-900 ">
                                <img className="w-60" src="/LgAcosv4x.png" alt="Logo da Acos Services" />
                            </div>
                        </div>
                    </Transition>
                </div>
                <div className="flex items-center gap-2">
                    <div className="lg:hidden" onClick={() => setShowMenu((showMenu) => !showMenu)}><List size={29} /></div>
                    <a href="#"><GithubLogo size={24} /></a>
                    {scroll}
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






