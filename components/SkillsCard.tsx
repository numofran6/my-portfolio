import { motion } from 'framer-motion';
import React from 'react';

type Props = {
	directionLeft?: boolean;
	skillsvg: React.ReactNode;
	name: string;
};

function SkillsCard({ directionLeft, skillsvg, name }: Props) {
	return (
		<div className="relative group flex cursor-pointer">
			<motion.div
				initial={{ opacity: 0, y: directionLeft ? -100 : 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.2 }}
			>
				<div className="h-20 w-20 sm:h-32 sm:w-32 transition ease-out duration-300">
					{skillsvg}
				</div>
			</motion.div>

			<div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white h-20 w-20 sm:h-32 sm:w-32 transition ease-out duration-300">
				<div className="flex items-center justify-center h-full">
					<p className="text-black opacity-100 font-bold sm:text-lg">{name} </p>
				</div>
			</div>
		</div>
	);
}

export default SkillsCard;
