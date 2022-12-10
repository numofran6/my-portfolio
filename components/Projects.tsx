import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '../utils/data';

type Props = {};

function Projects({}: Props) {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="flex flex-col mt-10 items-center space-y-10 mx-auto max-w-full"
			>
				<h3 className="uppercase tracking-[5px] sm:tracking-[20px] font-bold text-gray-400 text-2xl">
					Projects
				</h3>

				<div className="w-full flex overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ce8e04]/50 snap-x snap-mandatory z-20">
					{data.map((project) => (
						<div
							key={project.id}
							className="flex flex-col items-center space-y-6 flex-shrink-0 w-screen justify-center snap-center pb-10"
						>
							<a href={project.url}>
								<Image
									src={project.image}
									alt={project.name}
									width={3000}
									height={2000}
									className="h-[150px] w-[300px] rounded hover:opacity-70 active:opacity-100 object-cover"
								/>
							</a>

							<div className="text-center space-y-5 max-w-6xl px-5 sm:px-10">
								<a
									href={project.url}
									className="hover:text-gray-400 active:text-white text-white text-2xl sm:text-4xl"
								>
									<span className="underline decoration-[#363636]">
										Case Study {project.id} of {data.length}:
									</span>{' '}
									<span className="font-bold uppercase">{project.name}</span>
								</a>

								<div className="my-3 text-[#ce8e04] font-semibold">
									{project.stack}
								</div>

								<p className="text-sm md:text-md">{project.description}</p>
							</div>
						</div>
					))}
				</div>

				<Link
					href={'/#hero'}
					className="tracking-widest font-bold hover:bg-[#ce8e04] transition ease-in-out duration-300 px-3 py-0.5 rounded-full text-[#ce8e04] hover:text-gray-800 border-2 border-[#ce8e04] active:bg-gray-800 active:text-[#ce8e04]"
				>
					HOME
				</Link>

				<div className="w-full absolute top-[30%] bg-[#ce8e04]/10 h-[300px] left-0 -skew-y-12 z-0" />

				{/* <div className="w-full absolute top-[30%] bg-[#ce8e04]/10 h-[300px] right-0 skew-y-12 z-0" /> */}
			</motion.div>
		</div>
	);
}

export default Projects;
