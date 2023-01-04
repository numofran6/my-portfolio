import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

function About({}: Props) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
				className=" h-screen flex flex-col text-center sm:text-left max-w-7xl px-10 items-center justify-center md:mx-auto"
			>
				<motion.h3
					initial={{ opacity: 0, y: 80 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="uppercase tracking-[0.3rem] text-gray-400 text-2xl font-bold sm:mb-20"
				>
					About Me
				</motion.h3>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="sm:px-6 text-justify"
				>
					<div className="space-y-5 text-gray-400 sm:space-y-5 sm:px-5">
						<h3 className="text-xl text-center sm:text-4xl font-semibold text-[#ce8e04] uppercase">
							Here is a little background
						</h3>

						<div className="space-y-5">
							<h4 className=" px-1 sm:px-0">
								I started my tech journey as a Security Analyst. Overtime, I
								developed a greater interest in building 'cyber-secure'
								applications with elegant user interface and experience.
							</h4>

							<h4 className=" px-1 sm:px-0">
								I'm keen on writing maintainable and easy to understand code.
								Also, I have developed the needed patience and skills needed to
								debug code errors.
							</h4>

							<h4 className="px-1 sm:px-0">
								I specialise in Front-End Developement using technologies like
								React, React Native, Next.js, etc. I work on the backend using
								Node.js, Express, MongoDB, Firebase etc. I leverage my knowledge
								as a Security Tester in building 'cyber-secure' web applications
								and I am adaptive to the ever changing tech space.
							</h4>
						</div>
					</div>

					<div className="flex justify-end text-xl mt-8">
						<Link
							href="/projects"
							className="uppercase text-[#ce8e04] hover:text-gray-400 transition ease-out duration-300 active:text-[#ce8e04] animate-pulse px-1"
						>
							My Projects
						</Link>
					</div>
				</motion.div>
			</motion.div>
		</>
	);
}

export default About;
