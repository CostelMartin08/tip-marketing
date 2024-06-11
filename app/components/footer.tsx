"use client"



const Footer = () => {



    return (


        <footer className="container mx-auto px-6">

            <div className="divide-y divide-gray-400">

                <section className="xl:px-8">

                    <div className="flex flex-col md:flex-row justify-between ">
                        <div className="p-8">
                            <p className="font-black text-xl md:text-3xl">Vrei să obții mai mulți clienți?</p>
                            <p className="text-sm md:text-lg">tipmarketing.contact@gmail.com<br />
                                +40 756 345 892</p>
                        </div>
                        <div className="px-8 pb-6 md:pb-0 flex items-center">
                            <button className="bg-yellow-500 w-full md:w-auto p-3 rounded-lg">Solicită oferta</button>
                        </div>

                    </div>

                </section>




                <section className="xl:px-8 flex flex-col lg:flex-row items-left justify-between">

                    <div className="p-8">
                        <p className="font-bold text-xl pb-3">Generale</p>
                        <ul className="space-y-3 text-lg">
                            <li>Despre campanii</li>
                            <li>Intrebari frecvente</li>
                            <li>A.N.P.C</li>
                        </ul>
                    </div>
                    <div className="p-8">
                        <p className="font-bold text-lg pb-3">Utile</p>
                        <ul className="space-y-3 text-lg">
                            <li>Blog</li>
                            <li>Termeni si conditii</li>
                            <li>Politica cookies</li>
                        </ul>
                    </div>

                    <div className="p-8">
                        <p className="font-bold text-lg pb-3">Contact</p>
                        <ul className="space-y-3 text-lg">
                            <li>Vanzari</li>
                            <li>+40745202847</li>
                            <li>tipmarketing.contact@gmail.com</li>
                        </ul>
                    </div>

                </section>
            </div>
            <section className="xl:px-8">

                <p className="md:px-8 text-sm md:text-base py-3">Creat din pasiune de <span className="font-bold">TipMarketing</span> pentru <span className="font-bold">TipMarketing</span> ❤️</p>

            </section>


        </footer>
    )


}


export default Footer;