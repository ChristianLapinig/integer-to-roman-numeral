import { 
  defaultTheme, 
  Provider, 
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
				<h1>Integer to Roman Numeral Converter</h1>
				<ToggleColorScheme />
				<RomanNumeralForm />
				<RomanNumeral />
				<ErrorDialog />
			</div>
		</Provider>
	);
};

export default AppProvider;
