import { useState, useEffect, ReactNode, FC, createContext } from "react";

type ColorScheme = "light" | "dark";

export interface ColorSchemeContextType {
	colorScheme: ColorScheme;
	toggleColorScheme: () => void;
};

interface ColorSchemeProviderProps {
	children: ReactNode;
};

export const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined);

export const ColorSchemeProvider: FC<ColorSchemeProviderProps> = ({ children }) => {
	const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
		// Get color scheme from local storage
		const savedColorScheme = localStorage.getItem("colorScheme") as ColorScheme | null;
		return savedColorScheme || "light";
	});

	const toggleColorScheme = () => {
		setColorScheme(prevColorScheme => prevColorScheme === "light" ? "dark" : "light");
	};

	useEffect(() => {
		// Save changes to localStorage
		localStorage.setItem("colorScheme", colorScheme);
		document.body.className = colorScheme;
	}, [colorScheme]);

	return (
		<ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
			{children}
		</ColorSchemeContext.Provider>
	);
}
