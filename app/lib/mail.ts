import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmailContact = async (
    name: string,
    phone: string,
    option: string,
    message: string,
    site: string,
) => {

    await resend.emails.send({
        from: "contact@tipmarketing.ro",
        to: 'tipmarketing.contact@gmail.com',
        subject: "Mesaj potențial client",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
         <p>Stimate domn,</p>
    
    <p>Vă contactăm pentru a vă informa că ${name} a solicitat să ia legătura cu dumneavoastră.</p>
    
    <p>Detaliile cererii sunt următoarele:</p>
    
    <ul>
        <li><strong>Nume:</strong> ${name}</li>
        <li><strong>Număr de telefon:</strong> ${phone}</li>
        <li><strong>Interes manifestat pentru:</strong> ${option}</li>
        <li><strong>Site-ul actual al companiei:</strong> ${site}</li>
    </ul>
    
    <p><strong>Mesajul potențialului client:</strong></p>
    <p>${message}</p>
    
    <p>Vă rugăm să contactați persoana interesată cât mai curând posibil pentru a discuta despre cererea sa.</p>
    
    <p>Cu stimă,<br>
    TIP Marketing</p>
</div>
`
    });

}