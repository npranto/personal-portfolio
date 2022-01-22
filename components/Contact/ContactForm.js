import { useState } from 'react';
import Button from '../Button';

function InputField({
	id,
	label,
	value,
	type,
	name,
	placeholder,
	error,
	onChange,
}) {
	return (
		<div className="w-full md:w-1/2 px-3 mb-6 md:mb-2">
			<label
				className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				htmlFor={id}
			>
				{label}
				<input
					className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
					id={id}
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
				/>
			</label>
			{error && <p className="text-red-500 text-xs italic">{error}</p>}
		</div>
	);
}

function TextareaField({
	id,
	label,
	value,
	name,
	placeholder,
	error,
	onChange,
}) {
	return (
		<div className="w-full px-3 mb-6 md:mb-3">
			<label
				className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				htmlFor={id}
			>
				{label}
				<textarea
					className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48"
					name={name}
					id={id}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
			</label>
			{error && <p className="text-red-500 text-xs italic">{error}</p>}
		</div>
	);
}

export default function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errors, setErrors] = useState({
		name: null,
		email: null,
		message: null,
	});

	const clearErrors = () => {
		setErrors({
			name: null,
			email: null,
			message: null,
		});
	};

	const validateFields = () => {
		const emailRegex =
			// eslint-disable-next-line no-useless-escape
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		const isNameValid =
			typeof name === 'string' && name.length > 0 && name.length <= 63;
		const isEmailValid =
			typeof email === 'string' &&
			email.length > 0 &&
			emailRegex.test(email.toLowerCase());
		const isMessageValid =
			typeof message === 'string' &&
			message.length > 0 &&
			message.length <= 500;

		return {
			isValid: isNameValid && isEmailValid && isMessageValid,
			errors: {
				name: isNameValid ? null : 'Please enter a valid name',
				email: isEmailValid ? null : 'Please enter a valid email',
				message: isMessageValid ? null : 'Please enter a valid message',
			},
		};
	};

	const sanitizeFields = () => ({
		name: name.trim(),
		email: email.toLowerCase(),
		message: message.trim(),
	});

	const onChange = (event) => {
		const { name: n, value: v } = event?.target || {};
		if (n === 'name') {
			setName(v);
		} else if (n === 'email') {
			setEmail(v);
		} else if (n === 'message') {
			setMessage(v);
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();

		clearErrors();

		const { isValid, errors: e } = validateFields();

		if (!isValid) {
			setErrors(e);
		} else {
			const sanitizedFields = sanitizeFields();
			const mailTo = 'npranto@gmail.com';
			const subject = `Urgent: Message from ${sanitizedFields.name}`;
			const body = encodeURIComponent(sanitizedFields.message);
			window.open(`mailto:${mailTo}?subject=${subject}&body=${body}`);
		}
	};

	return (
		<form
			className="w-full max-w-lg"
			id="contact-form"
			data-e2e="contact-form"
			onSubmit={onSubmit}
		>
			<div className="flex flex-wrap -mx-3 mb-6">
				<InputField
					id="name-field"
					label="Name"
					value={name}
					type="text"
					name="name"
					placeholder="John Smith"
					error={errors.name}
					onChange={onChange}
				/>
				<InputField
					id="email-field"
					label="Email"
					value={email}
					type="email"
					name="email"
					placeholder="jsmith@gmail.com"
					error={errors.email}
					onChange={onChange}
				/>
				<TextareaField
					id="message-field"
					label="Message"
					value={message}
					type="text"
					name="message"
					placeholder="How can I help?"
					error={errors.message}
					onChange={onChange}
				/>
			</div>
			<Button type="submit" variant={4} data-e2e="resume-btn">
				Send
			</Button>
		</form>
	);
}
