import { 
  defaultTheme, 
  Provider, 
} from "@adobe/react-spectrum";

import { RomanNumeralProvider } from "./context/RomanNumeralContext";
import ConverterForm from "./components/ConverterForm";
import RomanNumeral from "./components/RomanNumeral";
import './App.css';

function App() {
  return (
    <RomanNumeralProvider>
      <Provider theme={defaultTheme} >
        <h1>Integer to Roman Numeral Converter</h1>
        <ConverterForm />
        <RomanNumeral />
      </Provider>
    </RomanNumeralProvider>
  );
}

export default App;
