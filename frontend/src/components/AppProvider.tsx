import { 
  defaultTheme, 
  Provider, 
  Flex,
} from "@adobe/react-spectrum";
import ErrorDialog from "./ErrorDialog";
import RomanNumeral from "./RomanNumeral";
import RomanNumeralForm from "./RomanNumeralForm";
import ToggleColorScheme from "./ToggleColorScheme";
import useColorScheme from "../hooks/useColorScheme";

const AppProvider = () => {
	const { colorScheme } = useColorScheme();
	return (
		<Provider height="100vh" theme={defaultTheme} colorScheme={colorScheme}>
			<div style={{ padding: "15px" }}>
				<Flex direction="column" alignItems="center">
					<h1>Integer to Roman Numeral Converter</h1>
					<ToggleColorScheme />
					<RomanNumeralForm />
					<RomanNumeral />
				</Flex>
				<ErrorDialog />
			</div>
		</Provider>
	);
};

export default AppProvider;
