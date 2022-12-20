import Link from 'next/link';
import Header from '../components/Header';

export default function PageNotFound() {
	return (
		<div className="h-screen bg-[rgb(36,36,36)] text-gray-400">
			<Header />

			<div className="flex flex-col items-center justify-center h-[80%] space-y-7 sm:space-y-10">
				<h1 className="text-red-700 uppercase text-3xl md:text-6xl font-bold">
					Page Not Found
				</h1>

				<div className="flex flex-col items-center space-y-3 sm:space-y-6">
					<Link href={'/#hero'} className="heroButton m-0">
						Go to Profile
					</Link>
					<Link href={'/#contact-me'} className="heroButton m-0">
						Get In Touch
					</Link>
					<Link href={'/projects'} className="heroButton m-0">
						View Projects
					</Link>
				</div>
			</div>
		</div>
	);
}
