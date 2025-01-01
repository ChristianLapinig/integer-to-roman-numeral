import { useState, FormEvent } from "react";
import { 
  defaultTheme, 
  Provider, 
  Form, 
  TextField, 
  Button, 
} from "@adobe/react-spectrum";

import './App.css';

const API_URI = import.meta.env.VITE_API_URI;

function App() {
  const [input, setInput] = useState("");
  const [romanNumeral, setRomanNumeral] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`[INFO] Value ${input} submitted for conversion`);
    try {
      const res = await fetch(`${API_URI}/romannumeral?query=${input}`);
      const json = await res.json();
      if (!res.ok) {
        console.error(`[ERROR] ${json.err}`);
        alert(json.err);
      } else {
        console.log(`[INFO] Successful conversion - input: ${json.input}, roman numeral: ${json.output}`);
        setRomanNumeral(json.output);
      }
    } catch (err) {
        console.error(`[ERROR] ${err}`);
        alert("An error occurred. Sorry for the inconvenience.");
    }
  };

  return (
    <Provider theme={defaultTheme} >
      <h1>Integer to Roman Numeral Converter</h1>
      <Form maxWidth="size-3000" onSubmit={handleSubmit}>
        <TextField 
          isRequired
          margin="size-200" 
          width="size-3000" 
          value={input}
          onChange={(val) => {
            setInput(val);
          }}
          type="text" 
          label="Enter a Number" 
        />
        <Button 
          margin="size-200" 
          type="submit" 
          variant="primary"
        >
          Convert to roman numeral
        </Button> 
      </Form>
      <div>
        {romanNumeral !== "" ?
          (<p>
            <strong>Roman Numeral</strong>: {romanNumeral}
          </p>)
          : null
        }
      </div>
    </Provider>
  )
}

export default App;
