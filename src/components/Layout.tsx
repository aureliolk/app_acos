import { Footer } from "./Footer"
import { Header } from "./Header"

export interface ChildrenProps {
    children: React.ReactNode
}

export const Layout = ({ children }: ChildrenProps) => {
    
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}