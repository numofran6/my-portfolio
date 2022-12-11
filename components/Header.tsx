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
			<header className="flex justify-between bg-[#242424] sticky top-0 z-20 lg:px-[200px] xl:px-[300px] sm:px-16 px-5">
				<motion.div
					initial={{
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1,
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
						url="https://twitter.com/numofran6"
						fgColor="#ce8e04"
						bgColor="transparent"
					/>
				</motion.div>

				<motion.div
					initial={{
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1,
					}}
					className="flex items-center"
				>
					<Link
						href={asPath === '/' ? '#contact-me' : '/#contact-me'}
						className="mr-4 sm:mr-2"
					>
						<GrMail className="w-7 h-7 hover:text-[#ce8e04] active:text-gray-400" />
					</Link>

					<Link
						href={asPath === '/' ? '#contact-me' : '/#contact-me'}
						className="uppercase text-gray-400 hidden sm:inline-flex mr-4 hover:text-[#ce8e04] active:text-gray-400"
					>
						Get in touch
					</Link>
				</motion.div>
			</header>
		</>
	);
}

export default Header;
