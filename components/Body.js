import Thumbnail from './Thumbnail';

const Body = ({ results }) => {
	console.log(results);
	return (
		<div>
			{results.map((result) => (
				<Thumbnail key={result.id} result={result} />
			))}
		</div>
	);
};

export default Body;
