import { Link } from "phosphor-react"
import { useState } from "react"
import { useGetPortifolioQuery } from "../../graphql/generated"
import { ButonNext } from "../button/Buttons"

export const Portifolio = () => {

    const { data } = useGetPortifolioQuery()
    const [show, setShow] = useState(false)
    const [idElemnt, setIdElement] = useState("")

    if (!data) {
        return <>Carregando ...</>
    }

    return (
        <>
            <section id="portifolio" className="h-screen  bg-cover font-grotesk pt-14 flex flex-col justify-between">
                <div>
                    <h2 className="text-7xl text-yellow-100 font-bold">Portfólio</h2>
                    <p className="w-1/2 py-8">Confira alguns dos meus projetos .</p>
                    <div className="w-full grid grid-cols-3 gap-8">
                        {data.portfolios.map(site => {
                            return (
                                <div key={site.id} className="flex flex-col items-center">
                                    <div className="w-full h-80 rounded overflow-hidden cursor-pointer relative"
                                        onMouseEnter={
                                            () => { setShow(true), setIdElement(site.id) }
                                        }
                                        onMouseLeave={
                                            () => { setShow(false), setIdElement(site.id) }
                                        }
                                    >
                                        <img src={site.screenshot.url} alt={`Imagem ${site.title}`} />
                                        {show && site.id === idElemnt && (
                                            <a href={site.url} target="_blank" className="flex-1 flex flex-col justify-between rounded border border-orange-500 p-4 absolute bottom-0 h-1/2 bg-teal-900/90">
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-2xl">{site.title}</span>
                                                    <span className="text-xs">{site.description}</span>
                                                </div>
                                                <span className="text-sm flex items-center justify-center gap-2 hover:text-orange-500 font-light">{<Link />} Ver Site</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex justify-center">
                    <ButonNext src="#contato" />
                </div>
            </section>
        </>
    )
}