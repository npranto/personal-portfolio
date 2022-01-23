import { useState } from 'react';
import Button from '../shared/Button';
import InputField from './InputField';
import TextareaField from './TextareaField';

export default function ContactForm() {
	const [fields, setFields] = useState({
		name: { value: '', error: null },
		email: { value: '', error: null },
		message: { value: '', error: null },
	});

	const validateField = (field, value) => {
		const emailRegex =
			// eslint-disable-next-line no-useless-escape
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		const isNameValid = (name) =>
			typeof name === 'string' && name.length > 0 && name.length <= 63;
		const isEmailValid = (email) =>
			typeof email === 'string' &&
			email.length > 0 &&
			emailRegex.test(email.toLowerCase());
		const isMessageValid = (message) =>
			typeof message === 'string' &&
			message.length > 0 &&
			message.length <= 500;

		if (field === 'name') {
			const isValid = isNameValid(value);
			return {
				isValid,
				error: isValid ? null : 'Please enter a valid name',
			};
		}

		if (field === 'email') {
			const isValid = isEmailValid(value);
			return {
				isValid,
				error: isValid ? null : 'Please enter a valid email',
			};
		}

		const isValid = isMessageValid(value);
		return {
			isValid,
			error: isValid ? null : 'Please enter a valid message',
		};
	};

	const sanitizeFields = () => ({
		name: fields.name.value.trim(),
		email: fields.email.value.toLowerCase(),
		message: fields.message.value.trim(),
	});

	const onChange = (event) => {
		const { name: n, value: v } = event?.target || {};
		const { error } = validateField(n, v);

		setFields((prevState) => ({
			...prevState,
			[n]: { value: v, error },
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		const sanitizedFields = sanitizeFields();
		const mailTo = 'npranto@gmail.com';
		const subject = `Urgent: Message from ${sanitizedFields.name}`;
		const body = encodeURIComponent(sanitizedFields.message);
		window.open(`mailto:${mailTo}?subject=${subject}&body=${body}`);
	};

	const allFieldsValid =
		fields.name.value.length > 0 &&
		fields.name.error === null &&
		fields.email.value.length > 0 &&
		fields.email.error === null &&
		fields.message.value.length > 0 &&
		fields.message.error === null;

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
					value={fields.name.value}
					type="text"
					name="name"
					placeholder="John Smith"
					error={fields.name.error}
					onChange={onChange}
				/>
				<InputField
					id="email-field"
					label="Email"
					value={fields.email.value}
					type="email"
					name="email"
					placeholder="jsmith@gmail.com"
					error={fields.email.error}
					onChange={onChange}
				/>
				<TextareaField
					id="message-field"
					label="Message"
					value={fields.message.value}
					type="text"
					name="message"
					placeholder="How can I help?"
					error={fields.message.error}
					onChange={onChange}
				/>
			</div>
			<Button
				type="submit"
				disabled={!allFieldsValid}
				className={!allFieldsValid ? 'opacity-50 cursor-not-allowed' : ''}
				variant={4}
				data-e2e="send-btn"
			>
				Send
			</Button>
		</form>
	);
}
