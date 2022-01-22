import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Portfolio website - Nazmuz Pranto, a front-end engineer"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/assets/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/assets/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;900&display=swap"
          rel="stylesheet"
        />

        <title>Portfolio - Nazmuz Pranto v3.0.0</title>
      </Head>

      <div className="max-w-screen-lg m-auto mt-0 mb-0 bg-gray-50">
        {/* <!-- slider (for above the fold CSS) --> */}

        {/* <!-- nav (start)  --> */}
        <nav className="fixed md:w-64 z-10" data-e2e="nav">
          {/* <!-- menu tabs (bottom, fixed) --> */}
          <div
            id="menu-tabs"
            className="md:hidden bottom-0 w-full fixed bg-white flex overflow-x-auto space-x-2 px-4 pb-6 pt-4"
          >
            <a
              href="#about"
              className="inline-flex bg-gray-100 hover:bg-gray-800 text-black hover:text-slate-50 rounded-full h-6 px-3 justify-center items-center"
            >
              About
            </a>
            <a
              href="#work"
              className="inline-flex bg-gray-100 hover:bg-gray-800 text-black hover:text-slate-50 rounded-full h-6 px-3 justify-center items-center"
            >
              Work
            </a>
            <a
              href="#projects"
              className="inline-flex bg-gray-100 hover:bg-gray-800 text-black hover:text-slate-50 rounded-full h-6 px-3 justify-center items-center"
            >
              Projects
            </a>
            <a
              href="#blog"
              className="inline-flex bg-gray-100 hover:bg-gray-800 text-black hover:text-slate-50 rounded-full h-6 px-3 justify-center items-center"
            >
              Blog
            </a>
            <a
              href="#education"
              className="inline-flex bg-gray-100 hover:bg-gray-800 text-black hover:text-slate-50 rounded-full h-6 px-3 justify-center items-center"
            >
              Education
            </a>
            <a
              href="#contact"
              className="inline-flex bg-gray-100 hover:bg-gray-800 text-black hover:text-slate-50 rounded-full h-6 px-3 justify-center items-center"
            >
              Contact
            </a>
            <ul className="socials flex flex-row space-x-2">
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://github.com/npranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="github-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://www.linkedin.com/in/npranto/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="linkedin-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-linkedin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <line x1="8" y1="11" x2="8" y2="16" />
                      <line x1="8" y1="8" x2="8" y2="8.01" />
                      <line x1="12" y1="16" x2="12" y2="11" />
                      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://twitter.com/nazmuzpranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="twitter-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-twitter"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://dev.to/npranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="dev-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-code"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="7 8 3 12 7 16" />
                      <polyline points="17 8 21 12 17 16" />
                      <line x1="14" y1="4" x2="10" y2="20" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://medium.com/@npranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="medium-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-medium"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M8 9h1l3 3l3 -3h1" />
                      <line x1="8" y1="15" x2="10" y2="15" />
                      <line x1="14" y1="15" x2="16" y2="15" />
                      <line x1="9" y1="9" x2="9" y2="15" />
                      <line x1="15" y1="9" x2="15" y2="15" />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- menu sidebar (left) --> */}
          <section
            id="nav-menu"
            className="navigation-menu hidden md:block h-screen px-4 py-4 box-border"
          >
            <div className="profile-picture mb-2">
              <picture>
                <source
                  srcSet="./assets/images/profile-v3-160.png?as=webp"
                  type="image/webp"
                />
                <img
                  src="./assets/images/profile-v3-160.png?width=160"
                  alt="Profile Avatar"
                  width="160px"
                  height="auto"
                />
              </picture>
            </div>
            <h1 className="name inline-block text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight my-2">
              Nazmuz
              <br />
              Pranto
            </h1>
            <p className="title text-base text-gray-500">Software Engineer</p>
            <p className="location text-base text-gray-500">Cambridge, MA</p>

            <ul id="menu-links" className="menu-links grid grid-cols-1 my-10">
              <li>
                <a
                  href="#about"
                  type="button"
                  className="flex items-center rounded-sm text-base hover:font-semibold whitespace-nowrap py-2 focus:outline-none text-gray-800 hover:bg-gray-100 transition ease-in-out hover:-translate-x-2 hover:px-1"
                  data-e2e="menu-link-about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  type="button"
                  className="flex items-center rounded-sm text-base hover:font-semibold whitespace-nowrap py-2 focus:outline-none text-gray-800 hover:bg-gray-100 transition ease-in-out hover:-translate-x-2 hover:px-1"
                  data-e2e="menu-link-work"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  type="button"
                  className="flex items-center rounded-sm text-base hover:font-semibold whitespace-nowrap py-2 focus:outline-non text-gray-800 hover:bg-gray-100 transition ease-in-out hover:-translate-x-2 hover:px-1"
                  data-e2e="menu-link-projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  type="button"
                  className="flex items-center rounded-sm text-base hover:font-semibold whitespace-nowrap py-2 focus:outline-non text-gray-800 hover:bg-gray-100 transition ease-in-out hover:-translate-x-2 hover:px-1"
                  data-e2e="menu-link-blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  type="button"
                  className="flex items-center rounded-sm text-base hover:font-semibold whitespace-nowrap py-2 focus:outline-none text-gray-800 hover:bg-gray-100 transition ease-in-out hover:-translate-x-2 hover:px-1"
                  data-e2e="menu-link-education"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  type="button"
                  className="flex items-center rounded-sm text-base hover:font-semibold whitespace-nowrap py-2 focus:outline-none text-gray-800 hover:bg-gray-100 transition ease-in-out hover:-translate-x-2"
                  data-e2e="menu-link-contact"
                >
                  Contact
                </a>
              </li>
            </ul>

            <ul className="socials flex flex-row space-x-2">
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://github.com/npranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="github-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://www.linkedin.com/in/npranto/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="linkedin-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-linkedin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <line x1="8" y1="11" x2="8" y2="16" />
                      <line x1="8" y1="8" x2="8" y2="8.01" />
                      <line x1="12" y1="16" x2="12" y2="11" />
                      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://twitter.com/nazmuzpranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="twitter-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-twitter"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://dev.to/npranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="dev-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-code"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="7 8 3 12 7 16" />
                      <polyline points="17 8 21 12 17 16" />
                      <line x1="14" y1="4" x2="10" y2="20" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://medium.com/@npranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="medium-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-medium"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M8 9h1l3 3l3 -3h1" />
                      <line x1="8" y1="15" x2="10" y2="15" />
                      <line x1="14" y1="15" x2="16" y2="15" />
                      <line x1="9" y1="9" x2="9" y2="15" />
                      <line x1="15" y1="9" x2="15" y2="15" />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </section>
        </nav>
        {/* <!-- nav (end)  --> */}

        <main className="md:ml-64 space-y-10 sm:px-5">
          {/* <!-- jumbotron intro (start) --> */}
          <section
            id="jumbotron"
            className="jumbotron-intro py-10 px-4 drop-shadow-sm"
            data-e2e="jumbotron"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-300 tracking-tight mb-6">
              Hello,
              <span className="text-green-600 block leading-snug md:inline-block">
                I'm Shakib
              </span>
            </h1>
            <div className="profile-picture mb-2 md:hidden">
              <picture>
                <source
                  srcSet="./assets/images/profile-v3-112.png?as=webp&width=112"
                  type="image/webp"
                />
                <img
                  src="./assets/images/profile-v3-112.png?width=160"
                  alt="Profile Avatar"
                  width="112px"
                  height="auto"
                />
              </picture>
            </div>
            <div className="slider sm:mb-10">
              <h2 className="item flex text-2xl md:text-4xl font-extrabold text-red-600 tracking-tight mb-10">
                &lt; Frontend Engineer /&gt;
              </h2>
              <h2 className="item flex text-2xl md:text-4xl font-extrabold text-lime-600 tracking-tight mb-10">
                &lt; Creative Thinker /&gt;
              </h2>
              <h2 className="item flex text-2xl md:text-4xl font-extrabold text-emerald-500 tracking-tight mb-10">
                &lt; Problem Solver /&gt;
              </h2>
              <h2 className="item flex text-2xl md:text-4xl font-extrabold text-yellow-600 tracking-tight mb-10">
                &lt; Rookie Blogger /&gt;
              </h2>
              <h2 className="item flex text-2xl md:text-4xl font-extrabold text-red-700 tracking-tight mb-10">
                &lt; Mentor /&gt;
              </h2>
            </div>
            <div className="action-call flex flex-row space-x-2">
              <a
                href="./assets/resume.pdf"
                target="_blank"
                className="inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200 hover:-translate-y-1"
                data-e2e="resume-btn"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200 hover:-translate-y-1"
                data-e2e="lets-talk-btn"
              >
                Let's Talk
              </a>
            </div>
            <ul className="socials flex flex-row space-x-2 md:hidden mt-5">
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://github.com/npranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="github-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-github"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://www.linkedin.com/in/npranto/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="linkedin-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-linkedin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <line x1="8" y1="11" x2="8" y2="16" />
                      <line x1="8" y1="8" x2="8" y2="8.01" />
                      <line x1="12" y1="16" x2="12" y2="11" />
                      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://twitter.com/nazmuzpranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="twitter-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-twitter"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://dev.to/npranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="dev-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-code"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="7 8 3 12 7 16" />
                      <polyline points="17 8 21 12 17 16" />
                      <line x1="14" y1="4" x2="10" y2="20" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="transition ease-in-out hover:-translate-y-1">
                <a
                  href="https://medium.com/@npranto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="medium-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-medium"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M8 9h1l3 3l3 -3h1" />
                      <line x1="8" y1="15" x2="10" y2="15" />
                      <line x1="14" y1="15" x2="16" y2="15" />
                      <line x1="9" y1="9" x2="9" y2="15" />
                      <line x1="15" y1="9" x2="15" y2="15" />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </section>
          {/* <!-- jumbotron intro (end) --> */}

          {/* <!-- about (start) --> */}
          <section
            id="about"
            className="bg-red-100 rounded-lg about py-10 px-4"
            data-e2e="about"
          >
            <h2 className="flex text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight my-2">
              About
            </h2>

            <div className="text-base text-gray-500">
              <p className="text-base text-gray-500 my-2">
                I am Nazmuz (Shakib) Pranto, a front-end engineer with hands-on
                experience building single and multi-page web applications. I’m
                passionate about crafting clean, responsive, reusable user
                interfaces with modern technologies including
                <span> </span>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                  rel="noreferrer"
                >
                  React
                </a>
                ,<span> </span>
                <a
                  href="https://redux.js.org/"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                  rel="noreferrer"
                >
                  Redux
                </a>
                , and <span> </span>
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                  rel="noreferrer"
                >
                  Next.js
                </a>
                . I also love creating products that serve instant value to
                customers.
              </p>
              <p className="text-base text-gray-500 my-2">
                Over the past few years, I had the honor of helping build a
                highly customizable eCommerce platform as an engineer at Newfold
                Digital. This, in return, accelerated development time and
                feature delivery for multiple client-side teams within the
                organization. On the side, I also built and published mini
                utility libraries and APIs using
                <span> </span>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                  rel="noreferrer"
                >
                  Node.js
                </a>
                <span> </span>
                for external use.
              </p>
              <p className="text-base text-gray-500 my-2">
                Currently, I am learning techniques to better architect
                client-side applications to deliver more performant, reliable
                applications. So, if you are looking for a front-end focused
                developer who can take on a project to improve developer
                experience, create dynamic user interfaces, and collaborate
                effectively to turn a product into reality,
                <span> </span>
                <a
                  href="#contact"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  let’s stay in touch!
                </a>
              </p>
            </div>

            <div
              id="read-more-content"
              className="hidden transition ease-in-out"
              data-e2e="read-more-content"
            >
              <h3 className="font-semibold mt-3">My Journey</h3>
              <p className="text-base text-gray-500 my-2">
                I started my journey to web development during my first year of
                college as a Computer Science student. I was learning HTML and
                CSS for the very first time, not through a college course
                though, but on an online learning platform called -
                <a
                  href="https://www.codecademy.com/"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                  rel="noreferrer"
                >
                  Codeacademy
                </a>
                . I found that to be way more fun and practical than the college
                courses I was taking back then. Thus, I continued with it and
                pushed to learn even more on the side. Eventually, I fell in
                love with it so much that I took the risk of taking time off
                from college and fully dedicated my time to a software
                engineering immersive program called
                <a
                  href="https://devmountain.com/"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                  rel="noreferrer"
                >
                  DevMountain
                </a>
                .
              </p>
              <p className="text-base text-gray-500 my-2">
                I always believed that I was a go-getter who loves taking risks
                to improve and get better progressively. That's why I pursued an
                alternative track to higher education. While I understand the
                importance of traditional computer science education with a
                heavy theoretical learning approach, I don't think it's enough
                for diving into real-world problems in the most effective way.
                We need more hands-on, practical, project-based learning, where
                learning to code is acquired from a series of trials and
                mistakes. As a DevMountain scholar, I have learned to do exactly
                that and have taken that lesson to heart till today.
              </p>
              <p className="text-base text-gray-500 my-2">
                Since my exposure to DevMountain, I have taken on a junior role
                at
                <a
                  href="https://www.lexialearning.com/"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                  rel="noreferrer"
                >
                  Lexia Learning
                </a>
                to a full-time Software Engineer gig at
                <a
                  href="https://newfold.com/"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                  rel="noreferrer"
                >
                  Newfold Digital
                </a>
                , working on enterprise-level applications used by millions of
                customers and internal teams.
              </p>

              <h3 className="font-semibold mt-3">Future Ambitions</h3>
              <p className="text-base text-gray-500 my-2">
                Of course, I still have a long way to go and I am working on
                getting better one day at a time. For now, I plan to actively
                contribute the skills I have acquired till now on my next role
                and learn modern, industry-proven techniques and best practices
                from both experienced and newbie developers to be a more
                well-rounded senior engineer and a mentor.
              </p>
            </div>

            <button
              type="button"
              id="read-more-btn"
              className="flex space-x-1 font-medium text-indigo-600 hover:text-indigo-500"
              data-e2e="read-more-btn"
            >
              Read more
              <span className="arrow-down-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-down"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            <button
              type="button"
              id="collapse-read-more-btn"
              className="flex space-x-1 font-medium text-indigo-600 hover:text-indigo-500 hidden"
              data-e2e="collapse-btn"
            >
              Collapse
              <span className="arrow-up-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-up"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="6 15 12 9 18 15" />
                </svg>
              </span>
            </button>
          </section>
          {/* <!-- about (end) --> */}

          {/* <!-- work (start) --> */}
          <section
            id="work"
            className="bg-amber-100 rounded-lg py-10 px-4"
            data-e2e="work"
          >
            <h2 className="flex text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight my-2">
              Work
            </h2>

            <ul className="work-list">
              <li
                className="work-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md"
                data-e2e="newfold-item"
              >
                <label htmlFor="newfold-input">
                  <input
                    className="hidden"
                    type="checkbox"
                    id="newfold-input"
                    name="newfold-input"
                    value="newfold-dropdown-content"
                  />
                  <div className="cursor-pointer p-4">
                    <div className="flex space-x-2">
                      <div className="logo flex-shrink-0">
                        <picture>
                          <source
                            srcSet="./assets/images/newfold-logo-48.jpeg?as=webp"
                            type="image/webp"
                            media="(max-width: 768px)"
                          />
                          <source
                            srcSet="./assets/images/newfold-logo-64.jpeg?as=webp"
                            type="image/webp"
                          />
                          <source
                            srcSet="./assets/images/newfold-logo-64.jpeg"
                            type="image/jpeg"
                          />
                          <img
                            className="object-cover rounded-md"
                            src="./assets/images/newfold-logo-64.jpeg"
                            alt="Newfold Digital"
                          />
                        </picture>
                      </div>
                      <div className="flex flex-col flex-grow top-level-details">
                        <h4 className="text-base font-semibold">
                          Software Engineer
                        </h4>
                        <p className="text-sm text-gray-500">
                          Newfold Digital, Burlington, MA
                        </p>
                        <p className="text-sm text-gray-500">
                          Jul 2018 - Jul 2021 | Full-time
                        </p>
                      </div>
                    </div>
                    <div
                      className="description-and-tech hidden"
                      id="newfold-dropdown-content"
                      data-e2e="newfold-dropdown-content"
                    >
                      <ul className="descriptions mt-2 text-sm space-y-1 list-disc text-gray-500 mx-6">
                        <li>
                          Built and maintained robust, reusable e-commerce based
                          UI components using React and Redux to ease feature
                          development for multiple internal teams
                        </li>
                        <li>
                          Added over 50+ bug-fixes and features along with unit
                          tests to enhance and improve existing single page
                          application (SPA) for customer registration and
                          checkout
                        </li>
                        <li>
                          Frequently collaborated with internal front and
                          backend services teams to integrate new products and
                          payment gateways
                        </li>
                        <li>
                          Integrated Contentful, a headless CMS, to prefetch
                          product contents for better client-side performance
                          and to enable marketing teams to make custom content
                          changes without code releases
                        </li>
                        <li>
                          Worked on a fast-paced agile environment with multiple
                          releases per sprint basis
                        </li>
                      </ul>
                      <div className="technologies flex flex-wrap my-2 gap-2">
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          React
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Redux
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Sass
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Webpack
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Contentful
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Node.js
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Git
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          JIRA
                        </span>
                      </div>
                    </div>
                  </div>
                </label>
              </li>

              <li
                className="work-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 p-4 my-3 rounded-md"
                data-e2e="lexia-item"
              >
                <label htmlFor="lexia-input">
                  <input
                    className="hidden"
                    type="checkbox"
                    id="lexia-input"
                    name="lexia-input"
                    value="lexia-dropdown-content"
                  />
                  <div className="cursor-pointer">
                    <div className="flex space-x-2">
                      <div className="logo flex-shrink-0">
                        <picture>
                          <source
                            srcSet="./assets/images/lexia-logo-48.jpeg?as=webp"
                            type="image/webp"
                            media="(max-width: 768px)"
                          />
                          <source
                            srcSet="./assets/images/lexia-logo-64.jpeg?as=webp"
                            type="image/webp"
                          />
                          <source
                            srcSet="./assets/images/lexia-logo-48.jpeg"
                            media="(max-width: 768px)"
                          />
                          <img
                            className="object-cover rounded-md"
                            src="./assets/images/lexia-logo-64.jpeg"
                            alt="Lexia Learning"
                          />
                        </picture>
                      </div>
                      <div className="flex flex-col flex-grow top-level-details">
                        <h4 className="text-base font-semibold">
                          Software Engineer
                        </h4>
                        <p className="text-sm text-gray-500">
                          Lexia Learning, Concord, MA
                        </p>
                        <p className="text-sm text-gray-500">
                          Sep - Dec 2016 & Jun - Aug 2017 | Contract
                        </p>
                      </div>
                    </div>
                    <div
                      className="description-and-tech hidden"
                      id="lexia-dropdown-content"
                      data-e2e="lexia-dropdown-content"
                    >
                      <ul className="descriptions mt-2 text-sm space-y-1 list-disc text-gray-500 mx-6">
                        <li>
                          Built 20+ JSON schemas to validate and structure
                          large, nested JSON objects, or lesson tasks for
                          production-level reading software program
                        </li>
                        <li>
                          Written various JavaScript functions or snippets to
                          automate JSON file modifications to simplify and speed
                          up application content updates.
                        </li>
                      </ul>
                      <div className="technologies flex flex-wrap my-2 gap-2">
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          JavaScript
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          JSON Schema
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Git
                        </span>
                      </div>
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </section>
          {/* <!-- work (end) --> */}

          {/* <!-- projects (start) --> */}
          <section
            id="projects"
            className="bg-lime-100 rounded-lg py-10 px-4"
            data-e2e="projects"
          >
            <h2 className="flex text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight my-2">
              Projects
            </h2>

            <ul className="projects-list lg:grid h-auto lg:grid-cols-2 lg:gap-x-4 lg:grid-flow-row lg:items-baseline">
              {/* <!-- NEW (start) --> */}

              <li className="project-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md">
                <label htmlFor="portfolio-v2-input">
                  <input
                    className="hidden"
                    type="checkbox"
                    id="portfolio-v2-input"
                    name="portfolio-v2-input"
                    value="portfolio-v2-dropdown-content"
                  />
                  <div className="cursor-pointer p-4">
                    <div className="flex space-x-2">
                      <div className="logo flex-shrink-0">
                        <picture>
                          <source
                            srcSet="
                          ./assets/images/portfolio-v2-logo-48.png?as=webp
                        "
                            type="image/webp"
                          />
                          <img
                            width="48px"
                            height="auto"
                            className="object-cover rounded-md"
                            src="./assets/images/portfolio-v2-logo-48.png"
                            alt="Portfolio v2.0.0"
                          />
                        </picture>
                      </div>
                      <div className="flex flex-col flex-grow top-level-details">
                        <h4 className="text-base font-semibold">
                          Portfolio v2.0.0
                        </h4>
                        <p className="text-sm text-gray-500">Jan 2022</p>
                      </div>
                      <div className="resources flex space-x-2">
                        <a
                          href="https://github.com/npranto/personal-portfolio"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="github-icon transition ease-in-out hover:-translate-y-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-brand-github"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                          </span>
                        </a>
                        <a
                          href="https://npranto.dev/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="share-icon transition ease-in-out hover:-translate-y-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-screen-share"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
                              <line x1="7" y1="20" x2="17" y2="20" />
                              <line x1="9" y1="16" x2="9" y2="20" />
                              <line x1="15" y1="16" x2="15" y2="20" />
                              <path d="M17 4h4v4" />
                              <path d="M16 9l5 -5" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div
                      className="description-and-tech mt-2 space-y-2 text-sm text-gray-500 hidden"
                      id="portfolio-v2-dropdown-content"
                    >
                      <p>
                        A static personal portfolio website to showcase
                        projects, work experiences, and blogs.
                      </p>
                      <p>
                        <span className="font-semibold">Motivation:</span>
                        It's been almost 3 years since I have launched
                        <a
                          className="text-indigo-600 hover:text-indigo-500"
                          href="https://nsp.surge.sh/"
                        >
                          v1.0.0
                        </a>
                        of my personal portfolio site. At that time, I was
                        heavily involved with building single-page applications
                        w/ React. So, even for a simple static website like a
                        portfolio, I went overboard and built it as a SPA.
                        Looking back at it, I realized there was no need to
                        complicate building static websites. That can be
                        achieved pretty easily with a few HTML, CSS, and
                        JavaScript files. Thus, I decided to redesign the UI and
                        keep the architecture simple to make future updates easy
                        and more manageable. Unlike v1.0.0, I also added
                        end-to-end UI testing with Cypress and also set up a
                        CI/CD pipeline with GitHub Actions to automate tests and
                        deployment on code changes.
                      </p>

                      <div className="technologies flex flex-wrap my-2 gap-2">
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          HTML
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          CSS
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          JavaScript
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Tailwind CSS
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Parcel
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Cypress
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Netlify
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          ESLint
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Prettier
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          GitHub Actions
                        </span>
                      </div>
                    </div>
                  </div>
                </label>
              </li>

              {/* <!-- NEW (end) --> */}
              <li className="project-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md">
                <label htmlFor="logtrade-input">
                  <input
                    className="hidden"
                    type="checkbox"
                    id="logtrade-input"
                    name="logtrade-input"
                    value="logtrade-dropdown-content"
                  />
                  <div className="cursor-pointer p-4">
                    <div className="flex space-x-2">
                      <div className="logo flex-shrink-0">
                        <picture>
                          <source
                            srcSet="./assets/images/logtrade-logo-48.png?as=webp"
                            type="image/webp"
                          />
                          <img
                            width="48px"
                            height="auto"
                            className="object-cover rounded-md"
                            src="./assets/images/logtrade-logo-48.png"
                            alt="LogTrade"
                          />
                        </picture>
                      </div>
                      <div className="flex flex-col flex-grow top-level-details">
                        <h4 className="text-base font-semibold">LogTrade</h4>
                        <p className="text-sm text-gray-500">
                          Oct 2021 - Present
                        </p>
                      </div>
                      <div className="resources flex space-x-2">
                        <a
                          href="https://github.com/npranto/logtrade"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="github-icon transition ease-in-out hover:-translate-y-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-brand-github"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                          </span>
                        </a>
                        <a
                          href="https://logtrade.netlify.app/home/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="share-icon transition ease-in-out hover:-translate-y-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-screen-share"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
                              <line x1="7" y1="20" x2="17" y2="20" />
                              <line x1="9" y1="16" x2="9" y2="20" />
                              <line x1="15" y1="16" x2="15" y2="20" />
                              <path d="M17 4h4v4" />
                              <path d="M16 9l5 -5" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div
                      className="description-and-tech mt-2 space-y-2 text-sm text-gray-500 hidden"
                      id="logtrade-dropdown-content"
                    >
                      <p>
                        A personal journal for keeping track of all your trades
                        online.
                      </p>
                      <p>
                        <span className="font-semibold">Motivation:</span> A
                        friend reached out to me to ask for an application that
                        he wants to use to log daily stock trades. I found the
                        idea fairly simple to implement as it seemed very
                        similar to any other note or record tracking software.
                        Thus, I felt the need to jump on it right away. I didn't
                        want to spend too much time building out the entire
                        application, specially handling APIs and databases, so I
                        decided to go with a firebase database to store stock
                        trades on the backend. As for user authentication,
                        firebase authentication also came in handy as well. This
                        way, I was able to focus more on the client side and
                        build a responsive, playful UI with React
                      </p>
                      <p>
                        <span className="font-semibold">Future Plans:</span> As
                        of October 17, 2021, LogTrade
                        <a
                          className="text-indigo-600 hover:text-indigo-500"
                          href="https://github.com/npranto/logtrade/releases/tag/v1.0.0"
                        >
                          v1.0.0
                        </a>
                        is
                        <a
                          className="text-indigo-600 hover:text-indigo-500"
                          href="https://616ccd47646645000896e7cb--logtrade.netlify.app/home/"
                        >
                          live
                        </a>
                        in production. More potential bug-fixes and feature
                        enhancements will be added pretty soon. Also, I do have
                        plans to release v2.0.0 early to mid 2022.
                      </p>
                      <div className="technologies flex flex-wrap my-2 gap-2">
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          React
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Tailwind CSS
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Weback
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Firebase
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Netlify
                        </span>
                      </div>
                    </div>
                  </div>
                </label>
              </li>

              <li className="project-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md">
                <label htmlFor="regexer-input">
                  <input
                    className="hidden"
                    type="checkbox"
                    id="regexer-input"
                    name="regexer-input"
                    value="regexer-dropdown-content"
                  />
                  <div className="cursor-pointer p-4">
                    <div className="flex space-x-2">
                      <div className="logo flex-shrink-0">
                        <picture>
                          <source
                            srcSet="./assets/images/regexer-logo-48.png?as=webp"
                            type="image/webp"
                          />
                          <img
                            width="48px"
                            className="object-cover rounded-md"
                            src="./assets/images/regexer-logo-48.png"
                            alt="Regexer"
                          />
                        </picture>
                      </div>
                      <div className="flex flex-col flex-grow top-level-details">
                        <h4 className="text-base font-semibold">Regexer</h4>
                        <p className="text-sm text-gray-500">
                          Jul 2018 - Present
                        </p>
                      </div>
                      <div className="resources flex space-x-2">
                        <a
                          href="https://github.com/npranto/regexer"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="github-icon transition ease-in-out hover:-translate-y-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-brand-github"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                          </span>
                        </a>
                        <a
                          href="https://www.npmjs.com/package/nsp-regexer"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="package-icon transition ease-in-out hover:-translate-y-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-box"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                              <line x1="12" y1="12" x2="20" y2="7.5" />
                              <line x1="12" y1="12" x2="12" y2="21" />
                              <line x1="12" y1="12" x2="4" y2="7.5" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div
                      className="description-and-tech mt-2 space-y-2 text-sm text-gray-500 hidden"
                      id="regexer-dropdown-content"
                    >
                      <p>
                        An utility library of functions that leverage regular
                        expressions to validate different types of inputs
                      </p>
                      <p>
                        <span className="font-semibold">Motivation:</span> Using
                        regexes is very common for developers to validate inputs
                        like email, zip code, or credit card number. I wanted to
                        build a small utility library to verify many different
                        types of inputs with regexes, so I never have to reach
                        out to google to find the same, trustworthy regex every
                        time. Currently, I do not have an exhaustive list of all
                        the regexes there are, but I have plans to add more and
                        more over time. Regexer is a node package that can be
                        installed for both server side and client side use.
                      </p>
                      <div className="technologies flex flex-wrap my-2 gap-2">
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Node.js
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          ESLint
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Mocha
                        </span>
                        <span className="px-1 rounded-sm inline text-xs font-medium text-gray-50 bg-gray-500">
                          Semantic Release
                        </span>
                      </div>
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </section>
          {/* <!-- projects (end) --> */}

          {/* <!-- blog (start) --> */}
          <section
            id="blog"
            className="bg-green-100 blog rounded-lg py-10 px-4"
            data-e2e="blog"
          >
            <h2 className="flex text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight my-2">
              Blog
            </h2>

            <ul className="blog-list lg:grid h-auto lg:grid-cols-2 lg:gap-x-4 lg:grid-flow-row">
              <li className="blog-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md">
                <a
                  href="https://medium.com/@npranto/macos-web-development-setup-guide-db229bcbb849"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                  rel="noreferrer"
                >
                  <div className="cursor-pointer p-4">
                    <div className="flex space-x-2">
                      <div className="flex flex-col flex-grow top-level-details">
                        <h4 className="text-lg font-semibold">
                          macOS Web Development Setup Guide
                        </h4>
                        <p className="text-sm text-gray-500">
                          Published on Dec 8, 2021
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="blog-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 my-3 rounded-md">
                <a
                  href="https://dev.to/npranto/quick-bite-ssh-key-4llh"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                  rel="noreferrer"
                >
                  <div className="cursor-pointer p-4">
                    <div className="flex space-x-2">
                      <div className="flex flex-col flex-grow top-level-details">
                        <h4 className="text-lg font-semibold">
                          Quick Bite: SSH Key
                        </h4>
                        <p className="text-sm text-gray-500">
                          Published on Dec 4, 2021
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </section>
          {/* <!-- blog (end) --> */}

          {/* <!-- education (start) --> */}
          <section
            id="education"
            className="bg-sky-100 rounded-lg education py-10 px-4"
            data-e2e="education"
          >
            <h2 className="flex text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight my-2">
              Education
            </h2>

            <ul className="education-list lg:grid h-auto lg:grid-cols-2 lg:gap-x-4 lg:grid-flow-row">
              <li className="education-item bg-gray-100 drop-shadow-lg transition ease-in-out duration-500 my-3 rounded-md">
                <div className="cursor-pointer p-4">
                  <div className="flex space-x-2">
                    <div className="flex flex-col flex-grow top-level-details">
                      <h4 className="text-base font-semibold">DevMountain</h4>
                      <p className="text-sm text-gray-500">2016 | Dallas, TX</p>
                      <p className="text-sm text-gray-500">
                        Web Development Immersive Program
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="education-item bg-gray-100 drop-shadow-lg transition ease-in-out duration-500 my-3 rounded-md">
                <div className="cursor-pointer p-4">
                  <div className="flex space-x-2">
                    <div className="flex flex-col flex-grow top-level-details">
                      <h4 className="text-base font-semibold">freeCodeCamp</h4>
                      <p className="text-sm text-gray-500">
                        Jul 2015 - Present
                      </p>
                      <p className="text-sm text-gray-500">
                        Certifications:
                        <a
                          className="text-indigo-600 hover:text-indigo-500 underline"
                          href="https://www.freecodecamp.org/certification/npranto/responsive-web-design"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Responsive Web Design
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          {/* <!-- education (end) --> */}

          {/* <!-- contact (start) --> */}
          <section
            id="contact"
            className="rounded-lg education px-4 pt-10 pb-20"
            data-e2e="contact"
          >
            <h2 className="flex text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight my-2">
              Contact
            </h2>

            <form
              className="w-full max-w-lg"
              id="contact-form"
              data-e2e="contact-form"
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-name"
                  >
                    Name
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-name"
                      type="text"
                      name="name"
                      placeholder="John Smith"
                    />
                  </label>
                  <p
                    className="text-red-500 text-xs italic hidden"
                    id="name-error"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-email"
                      type="email"
                      name="email"
                      placeholder="jsmith@gmail.com"
                    />
                  </label>
                  <p
                    className="text-red-500 text-xs italic hidden"
                    id="email-error"
                  />
                </div>
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-message"
                  >
                    Message
                    <textarea
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48"
                      name="message"
                      id="grid-message"
                      type="text"
                      placeholder="How can I help?"
                    />
                  </label>
                  <p
                    className="text-red-500 text-xs italic hidden"
                    id="message-error"
                  />
                </div>
              </div>
              <button
                type="submit"
                id="send-email-btn"
                className="inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200 hover:-translate-y-1"
              >
                Send
              </button>
            </form>
          </section>
          {/* <!-- contact (end) --> */}

          {/* <!-- dynamic classes (added w/ JavaScript) --> */}
          <span className="hidden -translate-x-2 bg-gray-800 text-slate-50 px-1 border-red-500" />
        </main>
        {/* <script type="module" async src="./scripts/index.js" /> */}
      </div>

      {/* <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
          Welcome to Portfolio!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </>
  );
}
