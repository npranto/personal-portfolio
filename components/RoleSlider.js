const ROLES = [
	{
		role: 'Frontend Engineer',
		color: 'text-red-600',
	},
	{
		role: 'Creative Thinker',
		color: 'text-lime-600',
	},
	{
		role: 'Problem Solver',
		color: 'text-emerald-500',
	},
	{
		role: 'Rookie Blogger',
		color: 'text-yellow-600',
	},
	{
		role: 'Mentor',
		color: 'text-red-700',
	},
];

export default function RoleSlider() {
	return (
		<div className="slider sm:mb-10">
			{ROLES.map(({ role = '', color = '' }) => (
				<h2
					key={role}
					className={`item flex text-2xl md:text-4xl font-extrabold ${color} tracking-tight mb-10`}
				>
					&lt; {role} /&gt;
				</h2>
			))}
		</div>
	);
}
