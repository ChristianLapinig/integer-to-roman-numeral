import { useContext } from "react";

import { 
	ColorSchemeContextType, 
	ColorSchemeContext 
} from "../context/ColorSchemeContext";

export default function useColorScheme(): ColorSchemeContextType {
	const context = useContext(ColorSchemeContext);
	if (!context) {
		throw new Error("No context provided. useColorScheme should be used within ColorSchemeProvider");
	}
	return context;
}
