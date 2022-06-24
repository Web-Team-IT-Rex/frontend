import { useContext } from 'react';
import { AppContext } from '../../AppContext';

export const PageMembersDawid = () => {
	const { siteTitle } = useContext(AppContext);

	return (
		<>
			<p>This is a "{siteTitle}":</p>
			<ul>
				<li>cheerio.js</li>
				<li>chart.js</li>
				<li>examples of custom hooks</li>
				<li>build in custom useContext</li>
			</ul>
		</>
	);
};
