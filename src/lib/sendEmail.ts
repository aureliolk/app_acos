import axios from "axios"

interface MailerProps {
    name: string
    email: string
    phone: string
    description: string
}

export const sendContactEmail = async ({ name, email, description, phone }: MailerProps) => {
    const data = {
        name,
        email,
        description,
        phone
    }

    const res = await axios.post("/api/contact", data)
    console.log(res.status)    

}

