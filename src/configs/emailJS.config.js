import emailJS from 'emailjs-com';

emailJS.init('user_qr1iHKBXV0ybU4tsMHVHA');


const sendEmail = () => {
    emailJS.send("gmail","template_mlEX1ucr",
        {
            fromName: "Kobe Bryant",
            fromEmail: "kobe@gmail.com",
            subject: 'Front End Developer Role Available',
            message: "Are you interested by any chance?"
        })
        .then(function(response) {
            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, function(err) {
            console.log("FAILED. error=", err);
        });
}

export const sendEmailViaEmailJS = sendEmail;


