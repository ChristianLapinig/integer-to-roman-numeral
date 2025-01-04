import { ElementType, ReactNode, FC } from "react";

interface ComposeProvidersProps {
	providers: ElementType[];
	children: ReactNode;
}

const ComposeProviders: FC<ComposeProvidersProps> = ({ providers, children }) => (
	<>
		{providers.reduce((acc, Provider) => (
			<Provider>{acc}</Provider>
		), children)}
	</>
);

export default ComposeProviders;
