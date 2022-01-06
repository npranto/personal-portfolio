import emailJS from 'emailjs-com';

emailJS.init('user_qr1iHKBXV0ybU4tsMHVHA');


const sendEmail = (connectForm) => {
    return emailJS.send("gmail","template_mlEX1ucr",
        {
            fromName: connectForm['name'],
            fromEmail: connectForm['email'],
            subject: connectForm['subject'],
            message: connectForm['message']
        })
}

export const sendEmailViaEmailJS = sendEmail;


