import { 
  defaultTheme, 
  Provider, 
} from "@adobe/react-spectrum";

import { RomanNumeralProvider } from "./context/RomanNumeralContext";
import { ErrorProvider } from "./context/ErrorContext";
import RomanNumeralForm from "./components/RomanNumeralForm";
import RomanNumeral from "./components/RomanNumeral";
import ErrorDialog from "./components/ErrorDialog";
import './App.css';

function App() {
  return (
    <ErrorProvider>
      <RomanNumeralProvider>
        <Provider theme={defaultTheme} >
          <h1>Integer to Roman Numeral Converter</h1>
          <RomanNumeralForm />
          <RomanNumeral />
          <ErrorDialog />
        </Provider>
      </RomanNumeralProvider>
    </ErrorProvider>
  );
}

export default App;
