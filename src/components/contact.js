import React, { useState, useEffect } from 'react';
import CardHeading from './card-heading';
import Card from './card';
import Socials from './socials';

const Contact = () => {
	const [contactDetails, setContactDetails] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [submissionStatus, setSubmissionStatus] = useState({
		success: '',
		error: '',
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContactDetails({
			...contactDetails,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let valid = true;

		const newErrors = {
			name: '',
			email: '',
			message: '',
		};

		if (!contactDetails.name) {
			newErrors.name = 'Name is required';
			valid = false;
		}
		if (!contactDetails.email) {
			newErrors.email = 'Email is required';
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(contactDetails.email)) {
			newErrors.email = 'Email is invalid';
			valid = false;
		}
		if (!contactDetails.message) {
			newErrors.message = 'Message is required';
			valid = false;
		}

		setErrors(newErrors);

		if (valid) {
			setLoading(true);

			console.log('Form Data:', contactDetails, 'Sending email...');

			try {
				const response = await fetch('/api/send-email', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(contactDetails),
				});

				console.log('Response:', response);

				if (response.ok) {
					console.log('✅ Email sent successfully');
					setSubmissionStatus({
						success: 'Your message has been sent successfully!',
						error: '',
					});
				} else {
					throw new Error('Failed to send email, no errors detected	');
				}
			} catch (error) {
				console.error('❌ Error sending email:', error);
				setSubmissionStatus({
					success: '',
					error: 'Something went wrong! Please try again.',
				});
			} finally {
				setContactDetails({
					name: '',
					email: '',
					message: '',
				});
				setLoading(false);
			}
		}
	};

	useEffect(() => {
		if (submissionStatus.success || submissionStatus.error) {
			const timer = setTimeout(() => {
				setSubmissionStatus({
					success: '',
					error: '',
				});
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [submissionStatus]);

	return (
		<Card id="contact" className="contact card" data-e2e="contact">
			<CardHeading>Contact</CardHeading>

			<Socials className="my-10" hideDevTo hideGithub hideMedium hideYoutube />

			{submissionStatus.success && (
				<div className="mb-4 flex">
					<span className="p-2 text-green-700 bg-green-200 border border-green-400 rounded">
						{submissionStatus.success}
					</span>
				</div>
			)}
			{submissionStatus.error && (
				<div className="mb-4 flex">
					<span className="p-2 text-red-700 bg-red-200 border border-red-400 rounded">
						{submissionStatus.error}
					</span>
				</div>
			)}

			<form
				className="w-full max-w-lg"
				id="contact-form"
				data-e2e="contact-form"
				onSubmit={handleSubmit}
			>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-name"
						>
							Name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-colors ease-in-out duration-500"
							id="grid-name"
							type="text"
							name="name"
							placeholder="John Smith"
							value={contactDetails.name}
							onChange={handleChange}
						/>
						{errors.name && (
							<p className="text-red-500 text-xs italic">{errors.name}</p>
						)}
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-email"
						>
							Email
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-colors ease-in-out duration-500"
							id="grid-email"
							type="email"
							name="email"
							placeholder="jsmith@gmail.com"
							value={contactDetails.email}
							onChange={handleChange}
						/>
						{errors.email && (
							<p className="text-red-500 text-xs italic">{errors.email}</p>
						)}
					</div>
					<div className="w-full px-3">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-message"
						>
							Message
						</label>
						<textarea
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 transition-colors ease-in-out duration-500"
							name="message"
							id="grid-message"
							placeholder="How can I help?"
							value={contactDetails.message}
							onChange={handleChange}
						></textarea>
						{errors.message && (
							<p className="text-red-500 text-xs italic">{errors.message}</p>
						)}
					</div>
				</div>
				<button
					type="submit"
					id="send-email-btn"
					className={`inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 transition ease-in-out duration-200 hover:-translate-y-1 ${
						loading
							? 'bg-gray-500 text-gray-300 cursor-not-allowed'
							: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400'
					}`}
					disabled={loading}
				>
					{loading ? 'Sending...' : 'Send'}
				</button>
			</form>
		</Card>
	);
};

export default Contact;
