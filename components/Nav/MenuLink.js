export default function MenuLink({ children, href, className = '', ...props }) {
	return (
		<a
			{...props}
			href={href}
			className={`flex items-center rounded-sm text-base hover:font-semibold whitespace-nowrap py-2 focus:outline-none text-gray-800 hover:bg-gray-100 transition ease-in-out hover:-translate-x-2 hover:px-1 ${className}`}
		>
			{children}
		</a>
	);
}
