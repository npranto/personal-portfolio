import MenuLink from './MenuLink';

export default function MenuLinks() {
	return (
		<ul id="menu-links" className="menu-links grid grid-cols-1 my-10">
			<li>
				<MenuLink href="#work" data-e2e="menu-link-work">
					About
				</MenuLink>
			</li>
			<li>
				<MenuLink href="#projects" data-e2e="menu-link-projects">
					Projects
				</MenuLink>
			</li>
			<li>
				<MenuLink href="#blog" data-e2e="menu-link-blog">
					Blog
				</MenuLink>
			</li>
			<li>
				<MenuLink href="#education" data-e2e="menu-link-education">
					Education
				</MenuLink>
			</li>
			<li>
				<MenuLink href="#contact" data-e2e="menu-link-contact">
					Contact
				</MenuLink>
			</li>
		</ul>
	);
}
