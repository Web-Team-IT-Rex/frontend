import { useContext } from 'react';
import { AppContext } from '../../AppContext';

export const PageMembersTom = () => {
	const { siteTitle } = useContext(AppContext);

	return (
		<>
			<p>I have a lot of ideas for the site "{siteTitle}":</p>
			<ul>
				<li>cheerio.js</li>
				<li>chart.js</li>
				<li>examples of custom hooks</li>
				<li>build in custom useContext</li>
			</ul>
		</>
	);
};
