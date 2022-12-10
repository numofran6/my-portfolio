import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from './Header';

type Props = {};

function About({}: Props) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className=" h-screen flex flex-col text-center sm:text-left max-w-7xl px-10 items-center justify-center mx-auto"
			>
				<h3 className="uppercase tracking-[20px] text-gray-400 text-2xl font-bold mb-10 sm:mb-20">
					About Me
				</h3>

				<div className="sm:px-6">
					<div className="space-y-3 text-gray-400 sm:space-y-5 sm:px-5">
						<h3 className="text-xl sm:text-4xl font-semibold text-[#ce8e04] uppercase">
							Here is a little background
						</h3>

						<h4 className=" px-3 sm:px-0">
							I started my tech journey as a Security Analyst. Overtime, I
							developed a greater interest in building 'cyber-secure'
							applications rather than poking holes through apps as a security
							tester.
						</h4>

						<h4 className="px-3 sm:px-0">
							I specialise in Front-End Developement using technologies like
							React, React Native, Next.js, etc. When freelancing, I work on the
							backend using Node.js, Express, MongoDB, Firebase etc.
						</h4>

						<h4 className="px-3 sm:px-0">
							I leverage my knowledge as a Security Tester in building
							'cyber-secure' web applications and I am adaptive to the ever
							changing tech space.
						</h4>
					</div>

					<div className="flex justify-end text-xl mt-16">
						<Link
							href="/projects"
							className="uppercase text-[#ce8e04] hover:text-gray-400 transition ease-out duration-300 active:text-[#ce8e04]"
						>
							Check Out My Projects
						</Link>
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default About;
