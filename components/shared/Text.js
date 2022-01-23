export default function Text({ children, variant = 1, className = '' }) {
	if (variant === 1) {
		return <p className={`text-base text-gray-500 ${className}`}>{children}</p>;
	}
	if (variant === 2) {
		return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
	}
	return <p className={`text-base text-gray-500 ${className}`}>{children}</p>;
}
