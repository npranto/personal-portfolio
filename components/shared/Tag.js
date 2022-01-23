export default function Tag({ children, className = '' }) {
	return (
		<span
			className={`px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500 ${className}`}
		>
			{children}
		</span>
	);
}
