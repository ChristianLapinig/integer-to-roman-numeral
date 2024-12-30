interface Output {
	input: string;
	output: string;
}

export default function integerToRoman(val: any): { 
	output?: Output,
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

	return {
		output: {
			input: val,
			output: "I",
		},
	}
}
