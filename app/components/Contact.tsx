"use client"



const Contact = () => {


    return (

        <section className="px-2 xl:px-10 container p-5">

            <form className="h-full card rounded-3xl p-5 sm:p-8 md:p-10 md:text-lg font-extralight space-y-5 md:space-y-7">

                <div className="grid md:grid-cols-2 space-y-5 md:gap-4 md:space-y-0">

                    <div className="flex flex-col items-start gap-4">
                        <label htmlFor="name">NUMELE DUMNEAVOASTRĂ</label>
                        <input className="w-full p-3 rounded-3xl bg-input" id="name" type="text"></input>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <label htmlFor="phone">NUMĂRUL DE TELEFON</label>
                        <input className="w-full p-3 rounded-3xl bg-input" id="phone" type="number"></input>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 space-y-5 md:gap-4 md:space-y-0">
                    <div className="flex flex-col items-start gap-4">
                        <label htmlFor="site">SITE-UL DVS</label>
                        <input className="w-full p-3 rounded-3xl bg-input" id="site" type="text"></input>
                    </div>
                    <div className="flex flex-col items-start gap-4 pe-2">
                        <label htmlFor="options">CE TE INTERESEAZĂ?</label>
                        <div className="select-mod">

                            <select className="select-input w-full focus:outline-none  rounded-3xl bg-input" id="options">
                                <option className="" value="">Alege o opțiune...</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <label htmlFor="text">MESAJUL DVS:</label>
                    <textarea className="w-full p-3 rounded-3xl" id="text"></textarea>
                </div>
                <div className="flex justify-end  py-2">
                    <button className="border font-semibold rounded-3xl p-3 md:w-[230px]" type="submit">Trimite mesaj</button>
                </div>

            </form>

        </section>
    )
}

export default Contact;