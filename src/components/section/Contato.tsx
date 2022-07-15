import { EnvelopeSimple, MapPinLine, WhatsappLogo } from "phosphor-react"

export const Contato = () => {

    return (
        <section id="contato" className="font-grotesk py-10 ">
            <h2 className="text-7xl text-yellow-100 font-bold text-center lg:text-start mb-8">Contato</h2>
            <div className="flex flex-col p-2 lg:p-0 lg:flex-row">
                <div className="flex flex-col gap-10 w-full lg:w-72">
                    <strong className="text-2xl text-center lg:text-start">Quer falar comigo ?</strong>
                    <div className="flex flex-wrap gap-y-6 gap-x-1 mb-8 lg:flex-col lg:gap-10">
                        <button className="p-2 lg:p-0 rounded bg-slate-900/50 lg:bg-transparent flex-1 flex flex-col gap-2">
                            <div className="flex items-center gap-4 w-full justify-center lg:justify-start">
                                <WhatsappLogo size={20} className="text-orange-500" /> <strong>WhatsApp</strong>
                            </div>
                            <span className="text-sm font-light w-full lg:w-fit">73 99112-1575</span>
                        </button>
                        <button className="p-2 lg:p-0 rounded bg-slate-900/50 lg:bg-transparent  flex-1 flex flex-col gap-2">
                            <div className="flex items-center gap-4 w-full justify-center lg:justify-start"><EnvelopeSimple size={20} className="text-orange-500" /> <strong>Email</strong></div>
                            <span className="text-sm font-light w-full lg:w-fit">aurelio.cos@outlook.com</span>
                        </button>
                        <button className="p-2 lg:p-0 rounded bg-slate-900/50 lg:bg-transparent flex flex-col gap-2 w-full">
                            <div className="flex items-center gap-4 w-full justify-center lg:justify-start"><MapPinLine size={20} className="text-orange-500" /> <strong>Endereço</strong></div>
                            <div className="flex justify-center w-full text-sm font-light gap-2 lg:justify-start">
                                <span>3ª Travessa da Luiz Gama</span>
                                <strong>Ilhéus/BA</strong>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <form className="flex flex-col justify-end items-end gap-4 w-full p-4  bg-slate-900/40  rounded">
                        <input className="w-full border-b border-teal-800 p-2 bg-transparent font-light outline-none focus:border focus:border-orange-500" type="text" placeholder="Nome/Empresa" />
                        <div className="flex w-full gap-4">
                            <input className="w-full border-b border-teal-800 p-2 bg-transparent font-light outline-none focus:border focus:border-orange-500" type="text" placeholder="Email" />
                            <input className="w-full border-b border-teal-800 p-2 bg-transparent font-light outline-none focus:border focus:border-orange-500" type="text" placeholder="Celular/WhatsApp" />
                        </div>
                        <textarea className="w-full border rounded border-teal-800 p-2 bg-transparent font-light outline-none focus:border focus:border-orange-500" placeholder="Assunto" rows={5} />
                        <button className="border border-teal-800 inline-block w-fit px-12 py-1 font-light float-right">Enviar</button>

                    </form>
                </div>
            </div>
        </section>
    )
}