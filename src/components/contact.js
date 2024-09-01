import React, { useState } from 'react';
import CardHeading from './card-heading';
import Card from './card';
import Socials from './socials';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let valid = true;

		const newErrors = {
			name: '',
			email: '',
			message: '',
		};

		if (!formData.name) {
			newErrors.name = 'Name is required';
			valid = false;
		}
		if (!formData.email) {
			newErrors.email = 'Email is required';
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email is invalid';
			valid = false;
		}
		if (!formData.message) {
			newErrors.message = 'Message is required';
			valid = false;
		}

		setErrors(newErrors);

		if (valid) {
			console.log('Form Data:', formData, 'Sending email...');
		}
	};

	return (
		<Card id="contact" className="contact card" data-e2e="contact">
			<CardHeading>Contact</CardHeading>

			<Socials className="my-10" hideDevTo hideGithub hideMedium hideYoutube />

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
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-name"
							type="text"
							name="name"
							placeholder="John Smith"
							value={formData.name}
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
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-email"
							type="email"
							name="email"
							placeholder="jsmith@gmail.com"
							value={formData.email}
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
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48"
							name="message"
							id="grid-message"
							placeholder="How can I help?"
							value={formData.message}
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
					className="inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200 hover:-translate-y-1"
				>
					Send
				</button>
			</form>
		</Card>
	);
};

export default Contact;
