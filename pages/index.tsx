import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ContactMe from '../components/ContactMe';

export default function Home() {
	return (
		<div className="h-screen bg-[rgb(36,36,36)] text-gray-400 z-0 snap-y snap-mandatory overflow-scroll scrollbar-thin scrollbar-track-[rgb(36,36,36)] scrollbar-thumb-[#ce8e04]/80">
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

			<Header />

			<section id="hero" className="snap-start">
				<Hero />
			</section>

			<section id="about-me" className="snap-center">
				<About />
			</section>

			<section id="skills" className="snap-center">
				<Skills />
			</section>

			<section id="contact-me" className="snap-center">
				<ContactMe />
			</section>
		</div>
	);
}
