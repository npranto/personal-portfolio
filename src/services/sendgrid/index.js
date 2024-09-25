import sendgrid from '@sendgrid/mail';
import { SENDGRID_API_KEY, SENDGRID_EMAIL_FROM } from '@/config/index.mjs';

const sendEmail = async ({ name, email, message }) => {
	try {
		await sendgrid.send({
			to: `${email}`,
			from: `${SENDGRID_EMAIL_FROM}`,
			subject: `Yoo! ${name} wants to contact you!`,
			html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
		});
	} catch (error) {
		console.error('Error sending email via SendGrid:', error);
		throw error;
	}
};

const SendgridService = () => {
	sendgrid.setApiKey(SENDGRID_API_KEY);
	return { sendEmail };
};

export { SendgridService };
