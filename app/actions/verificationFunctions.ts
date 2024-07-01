

export  function validateName(name: string) {

    name = name.trim();

    if (name.length === 0) {
        return { isValid: false, message: "NUMELE DUMNEAVOASTRĂ este obligatoriu." };
    }


    const nameRegex = /^[A-Za-zĂăÂâÎîȘșȚț]{1,25}([-\s][A-Za-zĂăÂâÎîȘșȚț]{1,25})*$/;

    if (!nameRegex.test(name)) {
        return {
            isValid: false,
            message: "Numele trebuie să conțină doar litere, spații și cratimă!"
        };
    }

    return { isValid: true };
}

export function validatePhoneNumber(phone: string) {

    phone = phone.replace(/\s+/g, '').replace(/[^0-9+]/g, '');

    // Regex telefon 
    const phoneRegex = /^((\+|00)40|0)?7[0-9]{8}$/;

    if (!phoneRegex.test(phone)) {
        return {
            isValid: false,
            message: "Numărul de telefon nu este valid. Vă rugăm să introduceți un număr de telefon mobil românesc valid."
        };
    }

    return { isValid: true };
}

