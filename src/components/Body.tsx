import { BgAnimations } from "./BgAnimations"
/* @ts-ignore */
import Typical from 'react-typical'
import { ButonNext, ButtonOrder } from "./button/Buttons"
import { Technology } from "./section/Technology"
import { Portifolio } from "./section/Portifolio"
import { Contato } from "./section/Contato"
import { useState, useEffect } from "react"
import classNames from "classnames"


export const Body = () => {
    const [isHidden, setIsHidden] = useState(false)
    useEffect(() => {
        const listener = () => {

            if (window.scrollY >= 379 ) {
                setIsHidden(true);
            } else setIsHidden(false);
        };
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    return (
        <>
            <section className="h-screen flex flex-col justify-between w-full" id="#">
                <div className='w-full flex flex-col lg:flex-row justify-between items-center'>
                    <div className='flex flex-col justify-between gap-2 flex-1'>
                        <h1 className="text-yellow-100 font-grotesk font-bold text-center p-4 lg:text-start text-5xl lg:text-6xl ">
                            Olá! Eu sou <span className="">Aurélio</span> <br />
                            <span >
                                seu Desenvolvedor
                                <div className="font-extrabold text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-600 transition-all">
                                    <Typical
                                        steps={[
                                            'Front-End',
                                            5000,
                                            'Back-End',
                                            5000,
                                            'Full-Stack',
                                            5000,
                                        ]}
                                        wrapper="p"
                                        loop={Infinity}
                                    />
                                </div>
                            </span>
                        </h1>
                        <ButtonOrder />
                    </div>
                    <div className='w-[90%] mt-8 lg:mt-0 lg:w-96 '><BgAnimations /></div>
                </div>
                <div className={classNames("flex justify-center",{"hidden":isHidden})}><ButonNext src="#tecnologias" /></div>
            </section>
            <Technology />
            <Portifolio />
            <Contato />
        </>

    )
}