import { useState, createContext, FC, ReactNode } from "react";

export interface ErrorContextType {
	error: string | null;
	setError: (value: string | null) => void;
	showErr: boolean;
	setShowErr: (value: boolean) => void;
};

interface ErrorProviderProps {
	children: ReactNode;
}

export const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider: FC<ErrorProviderProps> = ({ children }) => {
	const [error, setError] = useState<string | null>(null);
	const [showErr, setShowErr]  = useState<boolean>(false);
	return (
		<ErrorContext.Provider value={{ error, setError, showErr, setShowErr }}>
			{children}
		</ErrorContext.Provider>
	);
};
