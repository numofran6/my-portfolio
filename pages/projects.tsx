import Head from 'next/head';
import Header from '../components/Header';
import Projects from '../components/Projects';

type Props = {};

function projects({}: Props) {
	return (
		<>
			<div className="pb-10 h-screen bg-[rgb(36,36,36)] text-gray-400 overflow-auto">
				<Head>
					<title>My Projects</title>
				</Head>

				<Header />

				<section>
					<Projects />
				</section>
			</div>
		</>
	);
}

export default projects;
