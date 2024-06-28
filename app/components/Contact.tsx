"use client"
import { useState, SetStateAction } from "react";
import { sendEmail } from "../actions/sendEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { validateName, validatePhoneNumber } from "../actions/verificationFunctions";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        site: '',
        option: '',
        message: ''
    });


    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const updateSuccessWithTimeout = (newValue: SetStateAction<string>, timeout = 5000) => {
        setSuccess(newValue);

        setTimeout(() => {
            setSuccess('');
        }, timeout);
    };

    const handleChange = (e: { target: { name: any; value: string; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();


        let validationResult = validateName(formData.name);
        if (!validationResult.isValid) {
            return setError(validationResult.message ?? '');
        }

        let validationPhone = validatePhoneNumber(formData.phone);
        if (!validationPhone.isValid) {
            return setError(validationPhone.message ?? '');
        }

        if (!formData.option) {
            return setError('Rubrica CE TE INTERESEAZĂ este obligatorie');
        }

        if (!formData.message) {
            return setError('Rubrica MESAJUL DVS este obligatorie');
        }

        sendEmail(formData.name, formData.phone, formData.option, formData.message, formData.site)
            .then((data) => {

                updateSuccessWithTimeout(data.message);
                setError('');
                setFormData({
                    name: '',
                    phone: '',
                    site: '',
                    option: '',
                    message: ''
                });
            })
            .catch((error) => {
                setError(`Error: ${error}`);
            });

    };

    return (

        <section className="px-2 xl:px-10 container p-5">

            {!success

                ?

                <form
                    onSubmit={handleSubmit}
                    className="h-full card rounded-3xl p-5 sm:p-8 md:p-10 md:text-lg font-extralight space-y-5 md:space-y-7">

                    <div className="grid md:grid-cols-2 space-y-5 md:gap-4 md:space-y-0">

                        <div className="flex flex-col items-start gap-4">
                            <label htmlFor="name">NUMELE DUMNEAVOASTRĂ *</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-3xl bg-input"
                                id="name"
                                type="text">

                            </input>
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <label htmlFor="phone">NUMĂRUL DE TELEFON *</label>
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-3 rounded-3xl bg-input"
                                id="phone"
                                type="text">

                            </input>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 space-y-5 md:gap-4 md:space-y-0">
                        <div className="flex flex-col items-start gap-4">
                            <label htmlFor="site">SITE-UL DVS</label>
                            <input
                                name="site"
                                value={formData.site}
                                onChange={handleChange}
                                className="w-full p-3 rounded-3xl bg-input"
                                id="site"
                                type="text">

                            </input>
                        </div>
                        <div className="flex flex-col items-start gap-4 pe-2">
                            <label htmlFor="options">CE TE INTERESEAZĂ? *</label>
                            <div className="select-mod">
                                <select
                                    name="option"
                                    value={formData.option}
                                    onChange={handleChange}
                                    className="select-input w-full focus:outline-none rounded-3xl bg-input"
                                    id="options"
                                >
                                    <option value="">Alege o opțiune...</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <label htmlFor="text">MESAJUL DVS *</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded-3xl"
                            id="text">

                        </textarea>
                    </div>

                    {
                        error &&
                        <>
                            <div className='bg-red-700 h-16 p-4 w-full xl:w-2/3 rounded-3xl flex items-center text-left'>
                                <FontAwesomeIcon className="text-[2rem]" icon={faTriangleExclamation} />
                                <h2 className='font-bold text-white ps-3'>{error}</h2>
                            </div>
                        </>
                    }


                    <div className="flex justify-end  py-2">
                        <button className="border font-semibold rounded-3xl p-3 md:w-[230px]" type="submit">Trimite mesaj</button>
                    </div>

                </form>

                :

                <div className="h-96 flex justify-center flex-col gap-8 card rounded-3xl p-5 sm:p-8 md:p-10">

                    <FontAwesomeIcon className="text-[5rem] md:text-[12rem]" icon={faCircleCheck} />
                    <p className="font-semibold text-2xl">{success}</p>

                </div>
            }
        </section>
    )
}

export default Contact;