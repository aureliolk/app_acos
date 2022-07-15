import { BgAnimations } from "../components/element/BgAnimations"
/* @ts-ignore */
import Typical from 'react-typical'
import { ButonNext, ButtonOrder, ScrollToHome } from "../components/button/Buttons"
import { Technology } from "../components/section/Technology"
import { Portifolio } from "../components/section/Portifolio"
import { Contato } from "../components/section/Contato"
import { useContext } from "react"
import { Layout } from "../components/Layout"
import { SectionContext } from "../components/contexts/SectionContexts"
import classNames from "classnames"
import { FeedBack } from "../components/section/FeedBack"



function Home(){
    const { showTecnology, showPortifolio, showContato, showButtonHome,hiddenButton,showFeedBack } = useContext(SectionContext)

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
                    <ScrollToHome />
                )}
                <div>

                </div>
            </div>
        </Layout>
    )
}

export default Home