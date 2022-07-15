import { BgAnimations } from "./BgAnimations"
/* @ts-ignore */
import Typical from 'react-typical'
import { ButonNext, ButtonOrder } from "./button/Buttons"
import { Technology } from "./section/Technology"
import { Portifolio } from "./section/Portifolio"
import { Contato } from "./section/Contato"
import { useContext } from "react"
import { Layout } from "./Layout"
import { SectionContext } from "./contexts/SectionContexts"
import { CaretCircleUp, Spinner } from "phosphor-react"
import classNames from "classnames"
import { FeedBack } from "./section/FeedBack"



export const Body = () => {
    const { showTecnology, showPortifolio, showContato, showButtonHome,hiddenButton,showFeedBack, ScrollToHome } = useContext(SectionContext)

    return (
        <Layout>
            <div className="lg:p-4 lg:px-10" id="menu">
                <section className={classNames("h-screen flex flex-col justify-between w-full",{"h-auto":showTecnology})} >
                    <div className='py-20 w-full flex flex-col lg:flex-row justify-between items-center'>
                        <div className='flex flex-col justify-between gap-2 flex-1'>
                            <h1 className="text-yellow-100 font-grotesk font-bold text-center p-1 lg:text-start text-5xl lg:text-6xl ">
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
                        <div className='w-[90%] mt-8 lg:mt-0 lg:w-96' ><BgAnimations /></div>
                    </div>
                    {showTecnology && hiddenButton ? null : <ButonNext idButton="tecnologias" />}
                </section>
                {showTecnology && (
                    <div className="h-screen flex flex-col justify-between">
                        <Technology />
                        {showPortifolio && hiddenButton ? null : <ButonNext idButton="portifolio" />}
                    </div>
                )}
                {showPortifolio && (
                    <div className="h-screen  flex flex-col justify-between">
                        <Portifolio />
                        {showContato && hiddenButton ? null : <ButonNext idButton="contato" />}
                    </div>
                )}
                {showContato && (
                    <div className="h-screen  flex flex-col justify-between">
                        <Contato />
                        {showFeedBack && hiddenButton ? null : <ButonNext idButton="feedback" />}
                    </div>
                )}
                {showFeedBack && (
                    <div className="h-screen pt-8 flex flex-col justify-between">
                     <FeedBack />
                    </div>
                )}
                {showButtonHome && (
                    <button className="fixed bottom-10 right-10 z-50 rounded-full p-1 bg-gradient-to-b from-orange-500 transition-all hover:bg-gradient-to-t  hover:animate-bounce" onClick={()=>{ScrollToHome()}}>
                        <CaretCircleUp size={32} />
                    </button>
                )}
                <div>

                </div>
            </div>
        </Layout>
    )
}