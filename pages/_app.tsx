import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="A Front-End Developer who specializes in building elegant user interface with the aim to create exceptional digital experience"
				/>
				<meta
					name="keywords"
					content="Frontend Developer, Mobile Developer, Open Source, Freelance Web Developer, Freelance Mobile Developer, React Native Developer, Developer Portfolio, React Developer, Web Developer, React Frontend Developer"
				/>

				<meta name="description" content="Page description" />
				<meta property="og:title" content="Francis Numo - Frontend Developer" />
				<meta
					property="og:description"
					content="A Front-End Developer who specializes in building elegant user interface with the aim to create exceptional digital experience"
				/>
				<meta
					property="og:image"
					content="https://numoportfolio.vercel.app/public/developer.png"
				/>

				<meta property="og:image:alt" content="Francis Numo" />
				<meta property="og:locale" content="en_GB" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="og:url"
					content="https://www.numoportfolio.vercel.app/"
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="theme-color" content="#000000" />
				<meta name="robots" content="index, follow" />

				<title>My Portfolio</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
