import EducationItem from './EducationItem';

export default function BlogList({ className = '' }) {
	return (
		<ul className={className}>
			<EducationItem
				institution="DevMountain"
				location="Dallas, TX"
				startAndEndDate="2016"
				description="Web Development Immersive Program"
			/>
			<EducationItem
				institution="freeCodeCamp"
				startAndEndDate="Jul 2015 - Present"
				description={
					<span>
						Certifications:
						<span> </span>
						<a
							className="text-indigo-600 hover:text-indigo-500 underline"
							href="https://www.freecodecamp.org/certification/npranto/responsive-web-design"
							target="_blank"
							rel="noreferrer"
						>
							Responsive Web Design
						</a>
					</span>
				}
			/>
		</ul>
	);
}
