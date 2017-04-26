import emailJS from 'emailjs-com';

emailJS.init('user_qr1iHKBXV0ybU4tsMHVHA');


const sendEmail = (connectForm) => {
    emailJS.send("gmail","template_mlEX1ucr",
        {
            fromName: connectForm['name'],
            fromEmail: connectForm['email'],
            subject: connectForm['subject'],
            message: connectForm['message']
        })
        .then(function(response) {
            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, function(err) {
            console.log("FAILED. error=", err);
        });
}

export const sendEmailViaEmailJS = sendEmail;


