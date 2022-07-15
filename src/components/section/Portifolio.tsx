import { Link } from "phosphor-react";
import { useState } from "react"
import { useGetPortifolioQuery } from "../../graphql/generated"
import { ButtonOrder } from "../button/Buttons"


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Portifolio = () => {

    const { data } = useGetPortifolioQuery()
    const [show, setShow] = useState(false)
    const [idElemnt, setIdElement] = useState("")

    if (!data) {
        return <>Carregando ...</>
    }

    return (
        <>
            <section id="portifolio" className="bg-cover font-grotesk pt-10 px-2 ">
                <div>
                    <h2 className="text-center lg:text-start text-7xl text-yellow-100 font-bold">Portfólio</h2>
                    <p className="text-2xl lg:text-base lg:font-light text-center lg:text-start my-8 lg:my-2">Confira alguns dos meus projetos .</p>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={3}
                        scrollbar={
                            { 
                                draggable: true,
                            }
                        }
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        breakpoints={{
                            420:{
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            640:{
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}
                        effect="fade"
                        fadeEffect={{
                            crossFade:true
                        }}
                        autoplay={{
                            delay:3000,
                        }}
                    >
                    {data.portfolios.map(site => {
                        return (
                            <SwiperSlide key={site.id}>
                            <div  className="flex flex-col items-center w-full h-[480px] mb-4  lg:p-0 lg:h-[395px]">
                                <div className="w-full rounded overflow-hidden cursor-pointer relative"
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
                            </SwiperSlide>
                        )
                    })}
                    </Swiper>
                    <div className="block lg:hidden mt-28" >
                        <ButtonOrder />
                    </div>
                </div>
            </section>
        </>
    )
}