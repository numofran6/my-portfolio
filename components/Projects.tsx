import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '../utils/data';
import { BiArrowBack } from 'react-icons/bi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

type Props = {};

function Projects({}: Props) {
	return (
		<>
			<div className="mb-4 mt-7 flex">
				<Link
					href={'/#hero'}
					className="flex items-center space-x-2 tracking-wide font-bold active:scale-90 transition ease-in-out duration-300 text-[#ce8e04] hover:text-gray-400 ml-6 sm:ml-36 lg:ml-60"
				>
					<BiArrowBack />
					<span>Go Back</span>
				</Link>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="flex flex-col items-center space-y-5 md:space-y-8 mx-auto max-w-full"
			>
				<h3 className="uppercase tracking-[0.3rem] font-bold text-gray-400 text-2xl">
					Projects
				</h3>

				<div className="w-full flex overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ce8e04]/50 snap-x snap-mandatory z-10 relative">
					{data.map((project) => (
						<div
							key={project.id}
							className="flex flex-col items-center space-y-6 flex-shrink-0 w-screen justify-center snap-center pb-5 z-20"
						>
							<a href={project.url}>
								<Image
									src={project.image}
									alt={project.name}
									width={2000}
									height={1000}
									className="h-[150px] w-[300px] bg-gray-600 rounded hover:opacity-70 active:opacity-100 object-cover"
								/>
							</a>

							<div className="text-center space-y-5 max-w-6xl px-5 sm:px-10">
								<a
									href={project.url}
									className="hover:text-gray-400 active:text-white text-white text-2xl sm:text-4xl"
								>
									<span className="underline decoration-gray-400 text-gray-300">
										{project.id} of {data.length}:
									</span>{' '}
									<span className="font-bold uppercase">{project.name}</span>
								</a>

								<div className="my-3 text-[#ce8e04] font-semibold">
									{project.stack}
								</div>

								<div className="text-gray-300 font-semibold text-sm md:text-md text-left space-y-1 pl-5 flex flex-col">
									{project.description[0] && (
										<span>&bull; {project.description[0]}</span>
									)}
									{project.description[1] && (
										<span>&bull; {project.description[1]}</span>
									)}
									{project.description[2] && (
										<span>&bull; {project.description[2]}</span>
									)}
									{project.description[3] && (
										<span>&bull; {project.description[3]}</span>
									)}
									{project.description[4] && (
										<span>&bull; {project.description[4]}</span>
									)}
									{project.description[5] && (
										<span>&bull; {project.description[5]}</span>
									)}
									{project.description[6] && (
										<span>&bull; {project.description[6]}</span>
									)}
									{project.description[7] && (
										<span>&bull; {project.description[7]}</span>
									)}
								</div>

								<div className="flex space-x-10 justify-end px-5 text-white uppercase">
									<a
										href={project.url}
										className="flex items-center hover:text-[#ce8e04] active:scale-90 transition duration-300 ease-in-out"
									>
										Live Site <BsFillArrowRightCircleFill className="ml-2" />
									</a>

									<a
										href={project.github}
										className="flex items-center hover:text-[#ce8e04] active:scale-90 transition duration-300 ease-in-out"
									>
										Github <BsFillArrowRightCircleFill className="ml-2" />
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="w-full  absolute sm:top-[30%] top-[50%] bg-[#ce8e04]/5 h-[300px] left-0 -skew-y-12 z-0" />
			</motion.div>
		</>
	);
}

export default Projects;
