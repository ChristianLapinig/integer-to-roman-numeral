import { Switch } from "@adobe/react-spectrum";
import Moon from "@spectrum-icons/workflow/Moon";
import Light from "@spectrum-icons/workflow/Light";

import useColorScheme from "../hooks/useColorScheme";

export default function ToggleColorScheme() {
	const { colorScheme, toggleColorScheme } = useColorScheme();
	return (
		<Switch data-testid="theme-toggle" onChange={toggleColorScheme}>
			{colorScheme === "light" ? <Moon aria-label="dark-mode" /> : <Light aria-label="light-mode" />}
		</Switch>
	);
}
