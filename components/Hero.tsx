import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

function Hero({}: Props) {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
				className="h-screen grid lg:grid-cols-2"
			>
				<div className="flex flex-col space-y-3 items-center mt-24 lg:mt-0 justify-center">
					<h1 className="uppercase text-center font-bold text-2xl tracking-[0.3rem] text-gray-400 md:hidden">
						My Portfolio
					</h1>

					<div className="">
						<div className="text-white p-5 px-6 md:px-28 mt-10 mb-5 md:m-0 text-left md:text-left space-y-1 ">
							<motion.p
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 1 }}
								className="text-[#ce8e04] uppercase"
							>
								Hi there, I'm
							</motion.p>
							<p className="text-5xl font-bold">Francis Numo</p>
							<p className="text-gray-300">
								A Front-End Developer who specializes in building elegant user
								interface with the aim to create exceptional digital experience
							</p>
						</div>

						<div className="z-10 flex justify-center md:flex-col items-center text-xl md:space-x-0 lg:mt-3 lg:space-y-2 ">
							<Link href="/projects">
								<button className="heroButtonMobile md:heroButton">
									My Projects
								</button>
							</Link>
							<Link href="#contact-me" className="hidden md:inline-flex">
								<button className="heroButton">Contact Me</button>
							</Link>
							<Link href="#skills" className="hidden md:inline-flex">
								<button className="heroButton">Skills</button>
							</Link>
							<Link href="#about-me" className="hidden md:inline-flex">
								<button className="heroButton">About Me</button>
							</Link>
						</div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.2 }}
				>
					<Image
						src={'/developer.png'}
						alt="Developer"
						width={6000}
						height={4500}
						className="hidden lg:block w-full h-full object-cover"
					/>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Hero;
