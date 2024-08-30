import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta name="description" content="Your profile description here" />
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
				{/* <link rel="stylesheet" href="/styles/index.css" /> */}

				{/* TODO: how do we isolate this onto its own file? */}
				{/* Global site tag (gtag.js) - Google Analytics */}
				{/* <script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-1WW5F0M4MQ"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1WW5F0M4MQ');
          `,
					}}
				/> */}
			</Head>
			<body
				className="max-w-screen-lg m-auto mt-0 mb-0"
				class="max-w-screen-lg m-auto mt-0 mb-0"
			>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
