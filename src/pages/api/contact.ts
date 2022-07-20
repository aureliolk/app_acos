// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer";


  const hostname= process.env.NEXT_PUBLIC_EMAIL_HOSTNAME
  const username= process.env.NEXT_PUBLIC_EMAIL_USERNAME
  const password= process.env.NEXT_PUBLIC_EMAIL_PASSWORD
  

const transporter = nodemailer.createTransport({
  host: hostname,
  port: 587 || 465,
  secure: false,
  requireTLS: true,
  auth: {
    user: username,
    pass: password,
  },
  logger: true
});


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {name, email, phone, description} = req.body

   const AcosServicesContact = await transporter.sendMail({
    from: `"Acos Services ${name}" <${username}>`,
    to: "aurelio.cos@outlook.com",
    subject: `Um novo contato de ${name}`,
    html:`
    <strong>Nome: ${name} </strong>
    <br>
    <strong>Telefone: ${phone} </strong> e <strong>Email: ${email} </strong>
    <br>
    <strong>${description}</strong>
    `,
    headers: { 'x-myheader': 'test header' }
  })

  const AcosServicesWelcome = await transporter.sendMail({
    from: `"Acos Services Suporte" <${username}>`,
    to: `${email}`,
    subject: `Solicita de Contato`,
    html:`
    <div>
      <h1>Bem vindo a Acos Services</h1>
      <h2>${name}</h2>  
    </div>
    <div>
    Recebemos sua solicitação de suporte, em algumas horas nosso time entrará em contato para o número ${phone}.
    </div>
    <div>
      <strong>BY</strong>: Acos Services
      <br>
      <strong>CTO</strong>: Aurélio Castro
    </div>
    
    `,
    headers: { 'x-myheader': 'test header' }
  })

  console.log(AcosServicesContact)
  console.log(AcosServicesWelcome)
  
  return res.send(AcosServicesContact.response as any)

}