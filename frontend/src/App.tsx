import { ErrorProvider, ColorSchemeProvider, RomanNumeralProvider } from "./context";
import ComposeProviders from "./components/ComposeProviders";
import AppProvider from "./components/AppProvider";
import './App.css';

const providers = [ErrorProvider, ColorSchemeProvider, RomanNumeralProvider];

function App() {
  return (
    <ComposeProviders providers={providers}>
      <AppProvider />
    </ComposeProviders>
  );
}

export default App;
