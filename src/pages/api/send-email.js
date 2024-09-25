import { SendgridService } from '@/services/sendgrid';

const handler = async (req, res) => {
	console.log('req:', req.body, req.method);

	if (req?.method === 'POST') {
		const { name, email, message } = req?.body || {};
		const { sendEmail } = SendgridService();
		try {
			await sendEmail({
				name,
				email,
				message,
			});
			res.status(200).json({ success: 'Email sent successfully!' });
		} catch (error) {
			res
				.status(500)
				.json({ error: 'Something went wrong while sending the email.' });
		}
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
};

export default handler;
