import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import requests from '../utils/requests';

export const getServerSideProps = async (context) => {
	const genre = context.query.genre;
	const request = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre]?.url || requests.fetchTrending.url
		}`
	)
		.then((res) => res.json())
		.catch((err) => console.log(err));

	return {
		props: {
			results: request.results,
		},
	};
};

export default function Home({results}) {
	return (
		<div>
			<Head>
				<title>Nextjs Streaming App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<Navbar />
		</div>
	);
}

