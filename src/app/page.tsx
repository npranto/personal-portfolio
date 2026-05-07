import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Work } from '@/components/sections/Work';
import { Projects } from '@/components/sections/Projects';
import { Blog } from '@/components/sections/Blog';
import { Videos } from '@/components/sections/Videos';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { loadPortfolioContent } from '@/lib/content/loaders';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

const {
  config,
  nav,
  profile,
  about,
  work,
  projects,
  education,
  socials,
  blogPosts,
  videoPosts,
} = loadPortfolioContent();

/**
 * Main portfolio page.
 * All data is imported at build time from src/content/*.json.
 * Section visibility is controlled by config.json feature flags.
 */
export default function Home() {
  return (
    <>
      <Navbar links={nav.links} initials="NP" />

      <main id="main-content" className="flex-1">
        {config.showJumbotron && <Hero profile={profile} socials={socials} />}
        <Section id="value" label="Value proposition">
          <h2 className="text-2xl font-bold">
            What I Bring as a Senior Engineer
          </h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              'Scalable frontend systems',
              'eCommerce and product ownership',
              'Performance and accessibility',
              'AI-assisted developer workflows',
            ].map((item) => (
              <Card key={item} className="p-4">
                <p className="font-semibold">{item}</p>
              </Card>
            ))}
          </div>
        </Section>

        {config.showAbout && <About about={about} />}

        {config.showWork && <Work header={work.header} items={work.items} />}

        {config.showProjects && (
          <Projects header={projects.header} items={projects.items} />
        )}

        {config.showBlog && <Blog posts={blogPosts.slice(0, 9)} />}

        {config.showVideos && <Videos posts={videoPosts.slice(0, 6)} />}

        {config.showEducation && (
          <Education header={education.header} items={education.items} />
        )}

        {config.showContact && (
          <Contact email={profile.email} socials={socials} />
        )}
      </main>

      <Footer author={profile.author} socials={socials} />
    </>
  );
}
