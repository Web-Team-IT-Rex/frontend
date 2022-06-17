import { NavLink } from 'react-router-dom';

export const PageShowcases = () => {
	return (
		<div className="page_showcases">
			<p>These are working examples and finished demonstrations of libraries, tools, and coding concepts. For projects which members are still experimenting on, see the <NavLink to="/research">Research</NavLink> page.</p>
		</div>
	)
}