import { NavLink } from 'react-router-dom';

export const PageResearch = () => {
	return (
		<div className="page_research">
			<p>These are new tools, libraries, etc. that members are experimenting with. Projects here are generally not complete. For that, see the <NavLink to="/showcases">Showcases</NavLink> page.</p>
		</div>
	)
}