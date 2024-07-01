"use client"

import { useState, SetStateAction } from "react";
import { sendEmail } from "../actions/sendEmail";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { validateName, validatePhoneNumber } from "../actions/verificationFunctions";

import { InputField, SelectField, TextareaField } from "../components/InputField";
import { ErrorsMessage } from "../components/ErrorsMessage";

const Contact = () => {

    const [success, setSuccess] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        site: '',
        option: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        nameError: '',
        phoneError: '',
        optionError: '',
        messageError: '',
    });

    const updateSuccessWithTimeout = (newValue: SetStateAction<string>, timeout = 5000) => {
        setSuccess(newValue);

        setTimeout(() => {
            setSuccess('');
        }, timeout);
    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;


        setFormData({ ...formData, [name]: value });


        if (name === 'name' && errors.nameError && value.trim() !== '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                nameError: '',
            }));
        }

        if (name === 'phone' && errors.phoneError && value.trim() !== '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phoneError: '',
            }));
        }

        if (name === 'option' && errors.optionError && value.trim() !== '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                optionError: '',
            }));
        }

        if (name === 'message' && errors.messageError && value.trim() !== '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                messageError: '',
            }));
        }
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();


        setErrors({
            nameError: '',
            phoneError: '',
            optionError: '',
            messageError: '',
        });


        let validationResult = validateName(formData.name);
        if (!validationResult.isValid) {
            return setErrors((prevErrors) => ({
                ...prevErrors,
                nameError: validationResult.message ?? 'Numele este obligatoriu',
            }));

        }

        let validationPhone = validatePhoneNumber(formData.phone);
        if (!validationPhone.isValid) {
            return setErrors((prevErrors) => ({
                ...prevErrors,
                phoneError: validationPhone.message ?? 'Numărul de telefon este invalid',
            }));

        }

        if (!formData.option) {
            return setErrors((prevErrors) => ({
                ...prevErrors,
                optionError: 'Rubrica "Ce te interesează" este obligatorie',
            }));

        }


        if (!formData.message) {
            return setErrors((prevErrors) => ({
                ...prevErrors,
                messageError: 'Rubrica "Mesajul dvs" este obligatorie',
            }));
        }

        sendEmail(formData.name, formData.phone, formData.option, formData.message, formData.site)
            .then((data) => {

                updateSuccessWithTimeout(data.message);
                setFormData({
                    name: '',
                    phone: '',
                    site: '',
                    option: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.log(error);
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

                        <InputField
                            label={"NUMELE DUMNEAVOASTRĂ *"}
                            name={"name"}
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.nameError} />

                        <InputField
                            label="NUMĂRUL DE TELEFON *"
                            name={"phone"}
                            value={formData.phone}
                            onChange={handleChange}
                            error={errors.phoneError} />

                    </div>

                    <div className="grid md:grid-cols-2 space-y-5 md:gap-4 md:space-y-0">

                        <InputField
                            label="SITE-UL DVS"
                            name={"site"}
                            value={formData.site}
                            onChange={handleChange}

                        />

                        <SelectField
                            label="CE TE INTERESEAZĂ? *"
                            name={"option"}
                            value={formData.option}
                            onChange={handleChange}
                            error={errors.optionError}
                        />

                    </div>

                    <TextareaField
                        label="MESAJUL DVS *"
                        name={"message"}
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.messageError}
                    />

                    <ErrorsMessage value={errors} />

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