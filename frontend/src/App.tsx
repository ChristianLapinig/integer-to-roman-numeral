import { useEffect } from 'react'
import useSWR from 'swr';
import { defaultTheme, Provider } from "@adobe/react-spectrum";

import './App.css';

const API_URI: string = import.meta.env.VITE_API_URI;
const fetcher = (url: string) => fetch(url).then(res => res.json());

function App() {
  const { data, error, isLoading } = useSWR(`${API_URI}/test`, fetcher);

  useEffect(() => {
    if (!isLoading) {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
  }, [data, error, isLoading]);

  return (
    <Provider theme={defaultTheme}>
      <h1>Integer to Roman Numeral Converter</h1>
    </Provider>
  )
}

export default App;
