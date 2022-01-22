export default function Section({ id, children, className = '', ...props }) {
	return (
		<section
			{...props}
			id={id}
			className={`py-10 px-4 drop-shadow-sm ${className}`}
		>
			{children}
		</section>
	);
}
