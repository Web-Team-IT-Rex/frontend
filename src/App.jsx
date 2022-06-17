import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageMembers } from './pages/members/PageMembers';
import { PageResearch } from './pages/PageResearch';
import { PageShowcases } from './pages/PageShowcases';
import { PageMembersInfo } from './pages/members/PageMembersInfo';
import { PageMembersEdward } from './pages/members/PageMembersEdward';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { Separator } from './components/Separator';

function App() {
	return (
		<div className="App">
			<h1>Web Team 001</h1>
			<nav className="navMain">
			<NavLink className="navlink" to="/welcome">Welcome</NavLink><Separator/> 
			<NavLink to="/members">Members</NavLink><Separator/>
			<NavLink to="/research">Research</NavLink><Separator/>
			<NavLink to="/showcases">Showcases</NavLink>
			</nav>
			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="members" element={<PageMembers />}>
					<Route
						path="/members"
						element={<Navigate to="/members/info" replace />}
					/>
					<Route path="info" element={<PageMembersInfo />} />
					<Route
						path="/members/edward/*"
						element={<PageMembersEdward />}
					></Route>
				</Route>
				<Route path="/research" element={<PageResearch />} />
				<Route path="/showcases" element={<PageShowcases />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
