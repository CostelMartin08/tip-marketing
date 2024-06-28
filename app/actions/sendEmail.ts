'use server'

import { sendEmailContact } from "@/app/lib/mail";


export const sendEmail = async (name: string, phone: string, option: string, message: string, site: string) => {

    await sendEmailContact(name, phone, option, message, site);

    return { message: "Mesajul dumneavoastră a fost trimis cu succes!" };

}