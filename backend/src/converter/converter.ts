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

/**
 * Converts the given input into a roman numeral. The input should be a valid number
 * While following the given rules to convert it to a roman numeral:
 * 
 * 1. From the SYMBOLS table above, find the highest decimal value that is less than
 * or equal to the given decimal number from the input.
 * 
 * 2. Once the decimal from SYMBOLS is found, subtract it from the current input.
 * 
 * 3. Repeat steps 1 and 2 until the given input is <= 0. 
 * 
 * Source: https://www.rapidtables.com/convert/number/how-number-to-roman-numerals.html
 * 
 * @param val 
 * @returns 
 */
export default function integerToRoman(val: any): { 
	input?: string,
	output?: string,
	err?: string, 
} {
	let num: number = parseInt(val);

	if (isNaN(num)) {
		return {
			err: "Invalid input. Must be a positive whole number",
		};
	}

	if (num < 1 || num > 3999) {
		return {
			err: "Input out of range. Must be inbetween 1 and 3999",
		};
	}

	let output: string = "";
	
	// Rule #1, find the highest decimal from SYMBOLS 
	Object.keys(SYMBOLS).forEach((key) => {
		// Rule #3 has been fulfilled
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

	return {
		input: val,
		output,
	}
}
