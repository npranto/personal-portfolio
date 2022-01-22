export default function MenuTab({
	children,
	className = '',
	href = '#/',
	...props
}) {
	return (
		<a
			href={href}
			className={`inline-flex bg-gray-100 hover:bg-gray-800 text-black hover:text-slate-50 rounded-full h-6 px-3 justify-center items-center ${className}`}
			{...props}
		>
			{children}
		</a>
	);
}
