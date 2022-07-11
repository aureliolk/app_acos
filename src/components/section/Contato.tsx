import { ButonNext } from "../button/Buttons"

export const Contato = () => {

    return (
        <>
            <section id="contato" className="h-screen  bg-cover font-grotesk pt-14 flex flex-col justify-between">
                <div>
                    <h2 className="text-7xl text-yellow-100 font-bold">Contato</h2>
                    <p className="w-1/2 py-8">Gostou de alguns dos meu projetos? Entre em contato!</p>
                     <div className="border flex">
                        <div className="">

                        </div>
                        <div className="flex-1">
                            form
                        </div>
                     </div>   
                </div>
                <div className="flex justify-center">
                    <ButonNext src="#" />
                </div>
            </section>
        </>
    )
}