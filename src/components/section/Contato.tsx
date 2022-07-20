import classNames from "classnames"
import { EnvelopeSimple, MapPinLine, WhatsappLogo } from "phosphor-react"
import { FormEvent, useState } from "react"
import { Loading } from "../element/Loading"
import axios from "axios"

export const Contato = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [description, setDescription] = useState("")
    const [erro, setErro] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault()
        setIsLoading(true)
        if (!name || !email || !phone || !description) {
            setErro("Preencha todos os campos")
            setTimeout(() => {
                setErro("")
            }, 3000);
        }

        const data = {
            name,
            email,
            phone,
            description
        }

        const res = await axios.post("/api/contact", data)

        console.log(res)

        if (res.status === 200) {
            setIsLoading(false)
            setErro("Sua mensagem foi enviada com Sucesso!")
            setName("")
            setEmail("")
            setPhone("")
            setDescription("")
            setTimeout(() => {
                setErro("")
            }, 3000)
        } else {
            setErro("Houve um erro ao enviar sua mensagem!")
            setIsLoading(false)
            setTimeout(() => {
                setErro("")
                
            }, 3000)
        }
    }

    return (
        <section id="contato" className="font-grotesk py-10 px-2">
            <h2 className="text-7xl text-yellow-100 font-bold text-center lg:text-start mb-8">Contato</h2>
            <div className="flex flex-col p-2 lg:p-0 lg:flex-row">
                <div className="flex flex-col gap-10 w-full lg:w-72">
                    <strong className="text-2xl text-center lg:text-start">Quer falar comigo ?</strong>
                    <div className="flex flex-wrap gap-y-6 gap-x-1 mb-8 lg:flex-col lg:gap-10">
                        <a href="https://api.whatsapp.com/send?phone=5573991121575&text=Oi%20!!%20Preciso%20de%20informa%C3%A7%C3%A3o%20.." className="p-2 lg:p-0 rounded bg-slate-900/50 lg:bg-transparent flex-1 flex flex-col gap-2" target="noopener">
                            <div className="flex items-center gap-4 w-full justify-center lg:justify-start">
                                <WhatsappLogo size={20} className="text-orange-500" /> <strong>WhatsApp</strong>
                            </div>
                            <span className="text-sm font-light w-full lg:w-fit">73 99112-1575</span>
                        </a>
                        <a href="malito:aurelio.cos@outlook.com" className="p-2 lg:p-0 rounded bg-slate-900/50 lg:bg-transparent  flex-1 flex flex-col gap-2" target="noopener">
                            <div className="flex items-center gap-4 w-full justify-center lg:justify-start"><EnvelopeSimple size={20} className="text-orange-500" /> <strong>Email</strong></div>
                            <span className="text-sm font-light w-full lg:w-fit">aurelio.cos@outlook.com</span>
                        </a>
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
                    <form className="flex flex-col justify-end items-end gap-4 w-full p-4  bg-slate-900/40  rounded" onSubmit={onSubmit}>
                        <input value={name} onChange={({ target }) => { setName(target.value) }} className={classNames("w-full p-2 bg-transparent font-light outline-none focus:border focus:border-orange-500", { "border-b border-teal-800": !name }, { "border border-orange-500/50": name })} type="text" placeholder="Nome/Empresa" />
                        <div className="flex w-full gap-4">
                            <input value={email} onChange={({ target }) => { setEmail(target.value) }} className={classNames("w-full p-2 bg-transparent font-light outline-none focus:border focus:border-orange-500", { "border-b border-teal-800": !email }, { "border border-orange-500/50": email })} type="text" placeholder="Email" />
                            <input value={phone} onChange={({ target }) => { setPhone(target.value) }} className={classNames("w-full p-2 bg-transparent font-light outline-none focus:border focus:border-orange-500", { "border-b border-teal-800": !phone }, { "border border-orange-500/50": phone })} type="text" placeholder="Celular/WhatsApp" />
                        </div>
                        <textarea value={description} onChange={({ target }) => { setDescription(target.value) }} className={classNames("w-full rounded  p-2 bg-transparent font-light outline-none focus:border focus:border-orange-500", { "border border-teal-800": !description }, { "border border-orange-500/50": description })} placeholder="Assunto" rows={5} />
                        <div className="flex justify-between items-center w-full">
                            <div>{erro}</div>
                            <button className="border rounded border-teal-800 inline-block w-fit px-12 py-1 font-light float-right">{isLoading ? <Loading /> : "Enviar"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}