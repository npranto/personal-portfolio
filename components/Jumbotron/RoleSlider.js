import Header from '../shared/Header';

export default function RoleSlider() {
	return (
		<div className="slider sm:mb-10">
			<Header variant={7} className="text-red-600">
				&lt; Frontend Engineer /&gt;
			</Header>
			<Header variant={7} className="text-lime-600">
				&lt; Creative Thinker /&gt;
			</Header>
			<Header variant={7} className="text-emerald-500">
				&lt; Problem Solver /&gt;
			</Header>
			<Header variant={7} className="text-yellow-600">
				&lt; Rookie Blogger /&gt;
			</Header>
			<Header variant={7} className="text-red-700">
				&lt; Mentor /&gt;
			</Header>
		</div>
	);
}
