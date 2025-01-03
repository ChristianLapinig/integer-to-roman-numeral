import { useContext } from "react";

import { RomanNumeralContextType, RomanNumeralContext } from "../context/RomanNumeralContext";

export default function useRomanNumeral(): RomanNumeralContextType {
	const context = useContext(RomanNumeralContext);
	if (!context) {
		throw new Error("No context provided. useRomanNumeral should be used within the RomanNumeralProvider");
	}
	return context;
}
