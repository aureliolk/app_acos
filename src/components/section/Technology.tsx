import { Transition } from "@headlessui/react"
import classNames from "classnames"
import { CaretDoubleDown, CaretDoubleUp } from "phosphor-react"
import { useEffect, useState } from "react"
import { useGetSkillQuery } from "../../graphql/generated"

import { ButonNext, ButtonOrder } from "../button/Buttons"
import { LogoListTecnology } from "../element/Logolisttecnology"

export const Technology = () => {
    const { data } = useGetSkillQuery()
    const [showDesc, setShowDesc] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    useEffect(() => {
        const listener = () => {

            if (window.scrollY >= 1302 ) {
                setIsHidden(true);
            } else setIsHidden(false);
        };
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    if (!data || !data.skills) {
        return <>..Carregando</>
    }

    const skilLevel = (lvl: number) => {
        if (lvl <= 49) {
            return "Iniciante"
        } else if (lvl >= 50 && lvl <= 74) {
            return "Regular"
        } else {
            return "Avançado"
        }
    }


   

    return (
        <section id="tecnologias" className="h-screen  bg-cover font-grotesk pt-14 flex flex-col justify-between px-2 ">
            <div className="flex flex-col flex-1">
                <h2 className="text-6xl lg:text-7xl text-center lg:text-start text-yellow-100 font-bold w-full mb-0 lg:mb-8">Tecnologias</h2>
                <div className="flex flex-col lg:flex-row lg:h-full-row ">
                    <div className="flex flex-col lg:w-[35%] justify-between py-4 lg:p-4">
                        <div className="flex justify-center flex-col">
                            <div className={classNames("h-12 lg:h-full overflow-hidden w-full", { "h-36 text-center": showDesc })}>
                                {!showDesc && (
                                    <p >Minha linguagem principal é JavaScript, mais entendo que a melhor linguagem é aquela que soluciona problemas e gera valor ao cliente. Ciente disso estou me tornando um excelete Desenvolvedor FullStack pois acredito que há busca de conhecimento nunca termina.</p>
                                )}
                                <Transition
                                    show={showDesc}
                                    enter="transition-opacity duration-[1000ms]"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity  duration-[100ms]"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <p >Minha linguagem principal é JavaScript, mais entendo que a melhor linguagem é aquela que soluciona problemas e gera valor ao cliente. Ciente disso estou me tornando um excelete Desenvolvedor FullStack pois acredito que há busca de conhecimento nunca termina.</p>
                                    <p>Ja trabalhei ou trabalho algumas dessas tecnologias</p>
                                </Transition>

                            </div>
                            <div className={"inline-flex mx-auto my-4 justify-center items-center rounded-full p-1  bg-gradient-to-t from-transparent to-orange-500 animate-bounceSlow lg:hidden"} onClick={() => setShowDesc((showDesc) => !showDesc)}>{showDesc ? <CaretDoubleUp size={10} /> : <CaretDoubleDown size={10} />}</div>
                            {showDesc}
                        </div>
                        <div className="hidden lg:block"><ButtonOrder /></div>
                    </div>
                    <div className="flex-1 flex flex-col lg:flex-row justify-between items-center gap-2">
                        <LogoListTecnology />

                    </div>
                </div>
            </div>
            <div className={classNames("flex justify-center",{"hidden": isHidden})}>
                    <ButonNext src="#portifolio" />
                </div>
        </section>
    )
}