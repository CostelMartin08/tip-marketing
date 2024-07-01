"use client"

interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

interface TextAreaProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
}
interface SelectProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, name, value, onChange, error }) => {
    return (
        <div className="flex flex-col items-start gap-4">
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full p-3 rounded-3xl bg-input ${error && 'border-2 border-red-500'}`}
                id={name}
                type="text"
            />
        </div>
    );
};

export const TextareaField: React.FC<TextAreaProps> = ({label, name, value, onChange, error }) => {


    return (
        <>
            <div className="flex flex-col items-start gap-4">
                <label htmlFor={name}>{label}</label>
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`w-full p-3 rounded-3xl ${error && 'border-2 border-red-500'}`}
                    id="text">

                </textarea>
            </div>
        </>
    )
}

export const SelectField: React.FC<SelectProps> = ({label, name, value, onChange, error }) => {


    return (
        <>
              <div className="flex flex-col items-start gap-4 pe-2">
                            <label htmlFor={name}>{label}</label>
                            <div className="select-mod">
                                <select
                                    name={name}
                                    value={value}
                                    onChange={onChange}
                                    className={`select-input w-full focus:outline-none rounded-3xl bg-input 
                                        ${error && 'border-2 border-red-500'}`}
                                    id="options"
                                >
                                    <option value="">Alege o opțiune...</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
        </>
    )
}

