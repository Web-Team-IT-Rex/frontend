import { useContext } from 'react';
import { AppContext } from '../../AppContext';

export const PageMembersEdward = () => {
	const { siteTitle } = useContext(AppContext);

	return (
		<>
			<p>This website "{siteTitle}" was created in June 2022.</p>
		</>
	);
};
