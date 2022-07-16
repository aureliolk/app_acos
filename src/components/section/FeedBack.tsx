import { useGetFeedBacksQuery } from "../../graphql/generated"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Star } from "phosphor-react";
import Image from "next/image";

export const FeedBack = () => {
    const { data } = useGetFeedBacksQuery()

    return (
        <section id="feedback" className="p-2 lg:p-2">
            <h2 className="text-7xl text-yellow-100 font-bold text-center lg:text-start mb-8">FeedBack</h2>
            <p className="text-2xl px-8 lg:p-0 text-center lg:text-base lg:font-light lg:text-start my-8 lg:my-2">Veja o que os nossos clientes falam sobre nossos serviços.</p>
            <div>
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
                        420: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        }
                    }}
                    effect="fade"
                    fadeEffect={{
                        crossFade: true
                    }}
                    autoplay={{
                        delay: 10000,
                    }}
                >
                    {data?.customers.map(feedBack => {
                        return (
                            <SwiperSlide key={feedBack.id} className="rounded-2xl rounded-bl-none p-5 mb-4 flex flex-col justify-between bg-slate-900/50">
                                <header className="flex items-center gap-2 mb-2">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <Image width={48} height={48} src={feedBack.avatar?.url as string} alt={feedBack.name} />
                                    </div>
                                    <div>
                                        <strong>{feedBack.name} {feedBack.lastName}</strong>
                                        <div className="flex">
                                            <Star weight="fill" />
                                            <Star weight="fill" />
                                            <Star weight="fill" />
                                            <Star weight="fill" />
                                            <Star weight="fill" />
                                        </div>
                                    </div>
                                </header>
                                <main className="h-36">
                                    {feedBack.feedback}
                                </main>
                                <footer>
                                    <a href={"https://acos-services.vercel.app"} target="noopener"><strong>Site: </strong>{feedBack.business}</a>
                                </footer>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}