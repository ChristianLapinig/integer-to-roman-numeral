import integerToRoman from "../../converter/converter";
import { ERR_INVALID_INPUT_NAN, ERR_INVALID_INPUT_OUT_OF_RANGE } from "../../constants"; 

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
		expect(integerToRoman("4000").err).toBe(ERR_INVALID_INPUT_OUT_OF_RANGE);
	});

	test("0 returns an error", () => {
		expect(integerToRoman("0").err).toBe(ERR_INVALID_INPUT_OUT_OF_RANGE);
	});
	
	test("-5 returns an error", () => {
		expect(integerToRoman("-5").err).toBe(ERR_INVALID_INPUT_OUT_OF_RANGE);
	});

	test("5.5 returns an error", () => {
		expect(integerToRoman("5.5").err).toBe(ERR_INVALID_INPUT_NAN);
	});

	test("10,5 returns an error", () => {
		expect(integerToRoman("10,5").err).toBe(ERR_INVALID_INPUT_NAN);
	});

	test("abc returns an error", () => {
		expect(integerToRoman("abc").err).toBe(ERR_INVALID_INPUT_NAN);
	});

	test("ab200cd returns an error", () => {
		expect(integerToRoman("ab200cd").err).toBe(ERR_INVALID_INPUT_NAN);
	});
});
