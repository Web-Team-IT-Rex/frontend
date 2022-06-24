import { createContext } from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [nouns, setNouns] = useState([]);

	useEffect(() => {
		(async () => {
			const nounsUrl = "https://edwardtanguay.netlify.app/share/germanNouns.json";
			const _nouns = (await axios.get(nounsUrl)).data;
			setNouns(_nouns);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				siteTitle: 'Web Team IT-Rex',
				nouns,
				setNouns
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
