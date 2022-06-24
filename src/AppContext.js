import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

	return (
		<AppContext.Provider 
			value={{
				siteTitle: "Web Team IT-Rex"
			}}>
			{children}
		</AppContext.Provider>
	);
};