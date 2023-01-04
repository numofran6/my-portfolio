import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GrMail } from '@react-icons/all-files/gr/GrMail';
import { useRouter } from 'next/router';

type Props = {};

function Header({}: Props) {
	const { asPath } = useRouter();

	return (
		<>
			<header className="flex justify-between items-center bg-[#242424] sticky top-0 z-20 lg:px-[200px] xl:px-[300px] sm:px-16 px-5 shadow-md">
				<motion.div
					initial={{
						opacity: 0,
						scale: 0.8,
					}}
					animate={{
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 0.8,
					}}
				>
					<SocialIcon
						url="https://linkedin.com/in/numofrancis"
						fgColor="#ce8e04"
						bgColor="transparent"
					/>
					<SocialIcon
						url="https://github.com/numofran6"
						fgColor="#ce8e04"
						bgColor="transparent"
					/>
					<SocialIcon
						url="https://twitter.com/numofree"
						fgColor="#ce8e04"
						bgColor="transparent"
					/>
				</motion.div>

				<motion.div
					initial={{
						opacity: 0,
						scale: 0.8,
					}}
					animate={{
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 0.8,
					}}
				>
					<Link
						href={asPath === '/' ? '#contact-me' : '/#contact-me'}
						className=" flex items-center mr-4 hover:text-[#ce8e04] active:text-gray-400"
					>
						<span className="uppercase font-bold text-[16px]">Hire Me</span>

						<GrMail className="w-6 h-6 sm:w-7 sm:h-7 ml-1 sm:ml-2" />
					</Link>
				</motion.div>
			</header>
		</>
	);
}

export default Header;
