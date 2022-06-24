import { useContext } from 'react';
import { AppContext } from '../../AppContext';

export const PageMembersDawid = () => {
	const { siteTitle, nouns, setNouns } = useContext(AppContext);
	const handleDeleteNoun = () => {
		nouns.pop();
		setNouns([...nouns]);
	}
	return (

		<>
			<p>This is a "{siteTitle}":</p>
			<p>There {nouns.length} nouns.</p>
			<button onClick={handleDeleteNoun}>delete noun</button>
			<ul>
				<li>cheerio.js</li>
				<li>chart.js</li>
				<li>examples of custom hooks</li>
				<li>build in custom useContext</li>
			</ul>
		</>
	);
};
