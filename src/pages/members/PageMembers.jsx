import { NavLink, Outlet } from 'react-router-dom';
import { Separator } from '../../components/Separator';

export const PageMembers = () => {
	return (
		<div className="page_members">
			<nav className="navMembers">
				<NavLink to="info">Info</NavLink>
				<Separator />
				<NavLink to="edward">Edward</NavLink>
				<Separator />
				<NavLink to="tom">Tom</NavLink>
				<Separator />
				<NavLink to="felix">Felix</NavLink>
				<Separator />
				<NavLink to="dima">Dima</NavLink>
				<Separator />
				<NavLink to="alecu">Alecu</NavLink>
				<Separator />
				<NavLink to="meryem">Meryem</NavLink>
				<Separator />
				<NavLink to="dawid">Dawid</NavLink>
			</nav>
			<Outlet />
		</div>
	);
};
