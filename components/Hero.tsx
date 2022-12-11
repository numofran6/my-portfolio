import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			'Hi, the name is Francis Numo',
			'Front-End Developer',
			'React, Next.js, Redux, Typescript...',
		],
		loop: true,
		delaySpeed: 5000,
	});

	return (
		<div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="h-screen grid lg:grid-cols-2"
			>
				<div className="flex flex-col space-y-5 items-center mt-10 sm:mt-16 lg:mt-0 justify-center">
					<h3 className="uppercase lg:hidden tracking-[20px] font-bold text-gray-400 text-2xl">
						HOME
					</h3>

					<div className="">
						<Image
							src={'/software.jpg'}
							alt={'NUMO FRANCIS'}
							width={2084}
							height={2084}
							className="rounded-full w-48 h-48 object-cover mx-auto lg:hidden"
							priority
						/>

						<h1 className="uppercase text-center font-bold text-2xl lg:text-6xl tracking-[5px] px-10 text-gray-300 lg:text-white hidden sm:block">
							My Portfolio
						</h1>

						<h1 className="uppercase sm:tracking-[15px] tracking-[10px] text-[#ce8e04] px-10 mt-5 text-center">
							Software Engineer
						</h1>

						<div className="lg:text-3xl text-2xl font-semibold m-3 flex justify-center items-center">
							<span className="text-white">{text}</span>
							<Cursor cursorColor="#ce8e04" />
						</div>

						<div className="z-10 flex flex-col items-center text-2xl lg:mt-10 lg:space-y-2">
							<Link href="/projects">
								<button className="heroButton">Projects</button>
							</Link>
							<Link href="#contact-me">
								<button className="heroButton">Contact Me</button>
							</Link>
							<Link href="#skills">
								<button className="heroButton">Skills</button>
							</Link>
							<Link href="#about-me">
								<button className="heroButton">About Me</button>
							</Link>
						</div>
					</div>
				</div>

				<div>
					<Image
						src={'/developer.png'}
						alt="Developer"
						width={6000}
						height={4500}
						className="hidden lg:block w-full h-full object-cover"
					/>
				</div>
			</motion.div>
		</div>
	);
}

export default Hero;
