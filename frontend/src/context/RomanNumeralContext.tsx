import { useState, createContext, FC, ReactNode } from "react";

export interface RomanNumeralContextType {
	romanNumeral: string | null;
	setRomanNumeral: (value: string | null) => void;
};

interface ProviderProps {
	children: ReactNode;
}

export const RomanNumeralContext = createContext<RomanNumeralContextType | undefined>(undefined);

export const RomanNumeralProvider: FC<ProviderProps> = ({ children }) => {
	const [romanNumeral, setRomanNumeral] = useState<string | null>(null);


	return (
		<RomanNumeralContext.Provider value={{ romanNumeral, setRomanNumeral }}>
			{children}
		</RomanNumeralContext.Provider>
	);
};
