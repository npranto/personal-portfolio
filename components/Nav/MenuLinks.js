import Button from '../shared/Button';

export default function MenuLinks() {
	return (
		<ul id="menu-links" className="menu-links grid grid-cols-1 my-10">
			<li>
				<Button variant={8} href="#about" data-e2e="menu-link-about">
					About
				</Button>
			</li>
			<li>
				<Button variant={8} href="#work" data-e2e="menu-link-work">
					Work
				</Button>
			</li>
			<li>
				<Button variant={8} href="#projects" data-e2e="menu-link-projects">
					Projects
				</Button>
			</li>
			<li>
				<Button variant={8} href="#blog" data-e2e="menu-link-blog">
					Blog
				</Button>
			</li>
			<li>
				<Button variant={8} href="#education" data-e2e="menu-link-education">
					Education
				</Button>
			</li>
			<li>
				<Button variant={8} href="#contact" data-e2e="menu-link-contact">
					Contact
				</Button>
			</li>
		</ul>
	);
}
