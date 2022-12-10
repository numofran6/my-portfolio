import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ContactMe from '../components/ContactMe';

export default function Home() {
	return (
		<div className="h-screen bg-[rgb(36,36,36)] text-gray-400 z-0 snap-y snap-mandatory overflow-scroll scrollbar-thin scrollbar-track-gray-500/10 scrollbar-thumb-[#ce8e04]/80">
			<Head>
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

			<footer>
				<p className="text-center">All images by freepik.</p>
			</footer>
		</div>
	);
}
