# Project Decisions
This document provides details on the thought process and decision making for the implementation
of the Integer to Roman Numeral application.

## Table of Contents
1. [Technologies Used](#technologies-used)
	
	a. [Frontend: React](#frontend-react)
	b. [Backend: NodeJS/Express](#backend-nodejsexpress)
	c. [Language: Typescript](#language-typescript)
	d. [Testing](#testing)
	e. [DevOps Features](#devops-features)

2.  

## Technologies Used
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

### Language: Typescript
Typescript was the langauge of choice for both the frontend and the backend as it provides
type safety and makes the code easier to maintain.

### Testing
Unit tests are available for both the frontend and backend services. The main test
runner for the backend is [`jest`](https://jestjs.io/) while the frontend uses
[`vitest`](https://vitest.dev/).

[Frontend Tests](https://github.com/ChristianLapinig/integer-to-roman-numeral/tree/main/frontend/src/tests)

[Backend Tests](https://github.com/ChristianLapinig/integer-to-roman-numeral/tree/main/backend/src/tests)

### DevOps Features

#### Prometheus and Grafana
For monitoring and observability, Prometheus and Grafana were implemented due to popularity
and what is used within Adobe.

#### Containerization with Docker
Per the requirements in the test, I chose Docker as the container technology.

#### Continuous Integration with Github Actions
A GitHub Action workflow is enabled to run tests and build the containers.

See the full workflow [here](https://github.com/ChristianLapinig/integer-to-roman-numeral/blob/main/.github/workflows/main.yml)

## Integer to Roman Numeral Algorithm
Converting a number into a roman numeral must adhere to the following rules 
found [here](https://www.rapidtables.com/convert/number/how-number-to-roman-numerals.html).

I used a hash map/object to represent the table found in step 1. A two array apporach 
can have better performance, but for readability, I decided to go with an object.
```typescript
const SYMBOLS: any = {
	"M": 1000,
	"CM": 900,
	"D": 500,
	"CD": 400,
	"C": 100,
	"XC": 90,
	"L": 50,
	"XL": 40,
	"X": 10,
	"IX": 9,
	"V": 5,
	"IV": 4,
	"I": 1,
};
``` 

The next step was to check the constraints for the input:

1. Must be a positive whole number
2. Must be within the range `1 <= input <= 3999`

If these two constraints are broken, an error will be thrown notifying the user of
their faulty input. The reason for the range being 1-3999 is that there is no symbol to
represent 0, and 3999 is the largest number that can be represented in roman numerals,
as stated [here](https://en.wikipedia.org/wiki/Roman_numerals).

After checking the constraints, we can move on to converting the number into a roman numeral.
As defined in the rules for conversion, we repeat steps 1 and 2, until number is <= 0.

```typescript
// Rule #1, find the highest value from SYMBOLS that fits into
// the current remainder.
Object.keys(SYMBOLS).forEach((key) => {
	// Input has been fully processed
	if (num <= 0) {
		return;
	}

	// Rule #2, subtract the highest found SYMBOL that can fit in the current
	// remainder and subtract it from num.
	while (SYMBOLS[key] <= num) {
		num -= SYMBOLS[key]; 
		output += key;
	}
});
```

For example, if we are converting 3749, the algorithm would look like this
```
// Start of the algorithm
key = "M", SYMBOLS["M"] = 1000, output = ""
3749 > 1000
3749 - 1000 = 2749 
append "M" to the output

key = "M", SYMBOLS["M"] = 1000, output = "M"
2749 > 1000
2749 - 1000 = 1749
append "M" to the output


key = "M", SYMBOLS["M"] = 1000, output = "MM"
1749 > 1000
1749 - 1000 = 749
append "M" to the output

key = "M", SYMBOLS["M"] = 1000, output = "MMM"
Move on to the next symbol since 749 < 1000

key = "CM", SYMBOLS["CM"] = 900, output = "MMM"
Move on to the next symbol since 749 < 900

key = "D", SYMBOLS["D"] = 500, output = "MMM"
749 > 500
749 - 500 = 249
append "D" to the output

key = "D", SYMBOLS["D"] = 500, output = "MMMD"
Move on to the next symbol since 249 < 500

key = "CD", SYMBOLS["CD"] = 400, output = "MMMD"
Move on to the next symbol since 249 < 400

key = "C", SYMBOLS["C"] = 100, output = "MMMD"
249 > 100
249 - 100 = 149
append "C" to the output

key = "C", SYMBOLS["C"] = 100, output = "MMMDC"
149 > 100
149 - 100 = 49
append "C" to the output

key = "C", SYMBOLS["C"] = 100, output = "MMMDCC"
Move to the next symbol since 49 < 100

key = "L", SYMBOLS["L"] = 50, output = "MMMDCC"
Move to the next symbol since 49 < 50

key = "XL", SYMBOLS["XL"] = 40, output = "MMMDCC"
49 > 40
49 - 40 = 9
append XL to the output

key = "XL", SYMBOLS["XL"] = 40, output = "MMMDCCXL"
Move on to the next symbol since 9 < 40

key = "X", SYMBOLS["X"] = 10, output = "MMMDCCXL"
Move on to the next symbol since 9 < 10

key = "IX", SYMBOLS["IX"] = 9, output = "MMMDCCXL"
9 == 9
9 - 9 = 0
append "IX" to the output

// final output
{
	"input": "3749",
	"output": "MMMDCCXLIX"
}
```


