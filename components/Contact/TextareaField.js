export default function TextareaField({
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
					className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
						error ? 'border-red-500' : 'border-gray-500'
					} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48`}
					name={name}
					id={id}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
			</label>
			{error && (
				<p className="text-red-500 text-xs italic" id={`${name}-error`}>
					{error}
				</p>
			)}
		</div>
	);
}
