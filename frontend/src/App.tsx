// import { useState } from 'react'
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import './App.css'

function App() {
  return (
    <Provider theme={defaultTheme}>
      <h1>Integer to Roman numeral service</h1>
    </Provider>
  )
}

export default App;
