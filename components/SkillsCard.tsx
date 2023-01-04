import { motion } from 'framer-motion';
import React from 'react';

type Props = {
	directionLeft?: boolean;
	skillsvg: React.ReactNode;
	name: string;
};

function SkillsCard({ directionLeft, skillsvg, name }: Props) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: directionLeft ? 100 : -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<div className="flex items-center space-x-3">
					<span className="h-10 w-10 sm:h-20 sm:w-20 transition ease-out duration-300">
						{skillsvg}
					</span>
					<p className="text-gray-300 font-bold sm:text-lg">{name}</p>
				</div>
			</motion.div>
		</>
	);
}

export default SkillsCard;
