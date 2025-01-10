# Project Decisions
This document provides details on the thought process and decision making for the implementation
of the Integer to Roman Numeral application.

## Tech Stack
The following technologies were used to build the application.

### Frontend: React
React allowed me to create the UI for the application using individual components. 
For example, creating separate components for the form for submitting
the input for conversion (`RomanNumeralForm.tsx`) and displaying the result of 
the conversion (`RomanNumeral.tsx`).

Additionally, I used [Adobe's React Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html)
component library as it provides a wide variety of components to build the UI.

### Backend: NodeJS/Express
I used [Express](https://expressjs.com/) to build the backend API that handles the conversion
of the user's input to Roman numeral.

### Prometheus and Grafana
For monitoring and observability, Prometheus and Grafana were implemented.

### Language: Typescript
Typescript was the langauge of choice for both the frontend and the backend as it provides
type safety and makes the code easier to maintain.
