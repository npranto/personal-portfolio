import React from 'react';
import CardHeading from './card-heading';
import Card from './card';
import SOCIALS from '../content/socials.json';
import PROFILE from '../content/profile.json';

const Contact = () => {
  const socials = SOCIALS?.socials || {};
  const profile = PROFILE?.profile || {};

  return (
    <Card id="contact" className="contact card" data-e2e="contact">
      <CardHeading>Contact</CardHeading>
      <p className="text-base text-gray-500 my-2">
        Connect with me on{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold"
          href={socials.linkedin?.href}
        >
          LinkedIn
        </a>{' '}
        | Email me at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold"
          href={`mailto:${profile.email}`}
        >
          npranto@gmail.com
        </a>
        .
        <br />
        <i>... I’ll try to get back to you as soon as I can!</i>
      </p>
    </Card>
  );
};

export default Contact;
