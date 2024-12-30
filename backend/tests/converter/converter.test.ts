import integerToRoman  from "../../src/converter/converter";

describe("testing integer to roman converter", () => {
	test("3749 converts to MMMDCCXLIX", () => {
		expect(integerToRoman("3749").output).toBe({
			input: "3749",
			output: "MMMDCCXLIX",
		});
	});

	test("58 converts to LVIII", () => {
		expect(integerToRoman("58").output).toBe({
			input: "58",
			output: "LVIII",
		});
	});

	test("1994 converts to MCMXCIV", () => {
		expect(integerToRoman("1994").output).toBe({
			input: "1994",
			output: "MCMXCIV",
		});
	});

	test("4000 returns an error", () => {
		expect(integerToRoman("4000").err).toBe("Input out of range. Must be inbetween 1 and 3999");
	});

	test("0 returns an error", () => {
		expect(integerToRoman("0").err).toBe("Input out of range. Must be inbetween 1 and 3999");
	});

	test("abc returns an error", () => {
		expect(integerToRoman("abc").err).toBe("Invalid input. Must be a positive whole number");
	});
});
