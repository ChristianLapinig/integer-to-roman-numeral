import { useContext } from "react";

import { ErrorContextType, ErrorContext } from "../context/ErrorContext";

export default function useError(): ErrorContextType {
	const context = useContext(ErrorContext);
	if (!context) {
		throw new Error("No context provided. useError should be used within ErrorProvider");
	}
	return context;
}
