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
			<div>
				<div className="flex items-center space-x-3">
					<span className="h-10 w-10 sm:h-20 sm:w-20 transition ease-out duration-300">
						{skillsvg}
					</span>
					<p className="text-gray-300 font-bold sm:text-lg">{name}</p>
				</div>
			</div>
		</>
	);
}

export default SkillsCard;
