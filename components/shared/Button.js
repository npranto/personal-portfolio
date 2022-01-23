export default function Button({
	variant = 1,
	className = '',
	children,
	...props
}) {
	if (variant === 1) {
		return (
			<a
				className={`inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200
				hover:-translate-y-1 ${className}`}
				{...props}
			>
				{children}
			</a>
		);
	}
	if (variant === 2) {
		return (
			<button
				type="button"
				className={`flex space-x-1 font-medium text-indigo-600 hover:text-indigo-500 ${className}`}
				{...props}
			>
				{children}
			</button>
		);
	}
	if (variant === 3) {
		return (
			<a className={className} {...props}>
				{children}
			</a>
		);
	}
	if (variant === 4) {
		return (
			<button
				type="button"
				className={`inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200
				hover:-translate-y-1 ${className}`}
				{...props}
			>
				{children}
			</button>
		);
	}
	if (variant === 5) {
		return (
			<button type="button" className={className} {...props}>
				{children}
			</button>
		);
	}
	if (variant === 6) {
		return (
			<a
				className={`inline-flex bg-gray-100 hover:bg-gray-800 text-black hover:text-slate-50 rounded-full h-6 px-3 justify-center items-center ${className}`}
				{...props}
			>
				{children}
			</a>
		);
	}
	if (variant === 7) {
		return <a {...props}>{children}</a>;
	}
	if (variant === 8) {
		return (
			<a
				className={`flex items-center rounded-sm text-base hover:font-semibold whitespace-nowrap py-2 focus:outline-none text-gray-800 hover:bg-gray-100 transition ease-in-out hover:-translate-x-2 hover:px-1 ${className}`}
				{...props}
			>
				{children}
			</a>
		);
	}
	if (variant === 9) {
		return (
			<a
				className={`text-indigo-600 hover:text-indigo-500 ${className}`}
				{...props}
			>
				{children}
			</a>
		);
	}
	return (
		<a
			className={`inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200
				hover:-translate-y-1 ${className}`}
			{...props}
		>
			{children}
		</a>
	);
}
