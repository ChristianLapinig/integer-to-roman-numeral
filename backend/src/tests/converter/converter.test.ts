import integerToRoman  from "../../converter/converter";

describe("testing integer to roman converter", () => {
	test("3749 converts to MMMDCCXLIX", () => {
		expect(integerToRoman("3749").output).toBe("MMMDCCXLIX");
	});

	test("58 converts to LVIII", () => {
		expect(integerToRoman("58").output).toBe("LVIII");
	});

	test("1994 converts to MCMXCIV", () => {
		expect(integerToRoman("1994").output).toBe("MCMXCIV");
	});

	test("4000 returns an error", () => {
		expect(integerToRoman("4000").err).toBe("Input out of range. Must be inbetween 1 and 3999");
	});

	test("0 returns an error", () => {
		expect(integerToRoman("0").err).toBe("Input out of range. Must be inbetween 1 and 3999");
	});

	test("abc returns an error", () => {
		expect(integerToRoman("abc").err).toBe("Invalid input abc. Must be a positive whole number");
	});

	test("ab200cd returns an error", () => {
		expect(integerToRoman("ab200cd").err).toBe("Invalid input ab200cd. Must be a positive whole number");
	});
});
