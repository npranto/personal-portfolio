import profileData from '@/content/profile.json';
import socialsData from '@/content/socials.json';
import type { ProfileContent, SocialsContent } from '@/lib/types';
import { SubpageNavbar } from '@/components/layout/SubpageNavbar';
import { Footer } from '@/components/layout/Footer';

const { profile } = profileData as ProfileContent;
const { socials } = socialsData as SocialsContent;

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubpageNavbar initials="NP" />
      <div className="flex flex-col flex-1 pt-16">{children}</div>
      <Footer author={profile.author} socials={socials} />
    </>
  );
}
