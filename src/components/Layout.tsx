import Head from "next/head"
import { BoxSocial } from "./element/BoxSocial"
import { Footer } from "./Footer"
import { Header } from "./Header"

export interface ChildrenProps {
    children: React.ReactNode
}

export const Layout = ({ children }: ChildrenProps) => {
    
    return (
        <>
            <Head>
                 <title>Acos Services - Desenvolvimento de Sites Profissional</title>
                 <link rel="shortcut icon" href="/favIcon.ico" />
                 <meta name="description" content="Agência de Desenvolvimento de sites profissionais, desenvolva seu WebSite com as melhores tecnologias da Web." />
            </Head>
            <Header/>
            <BoxSocial/>
            {children}
            <Footer />
        </>
    )
}