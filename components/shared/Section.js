export default function Section({ id, children, className = '', ...props }) {
	return (
		<section
			id={id}
			className={`py-10 px-4 drop-shadow-sm ${className}`}
			{...props}
		>
			{children}
		</section>
	);
}
