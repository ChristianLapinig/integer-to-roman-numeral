"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const converter_1 = __importDefault(require("../../src/converter/converter"));
describe("testing integer to roman converter", () => {
    test("3749 converts to MMMDCCXLIX", () => {
        expect((0, converter_1.default)("3749").output).toBe("MMMDCCXLIX");
    });
    test("58 converts to LVIII", () => {
        expect((0, converter_1.default)("58").output).toBe("LVIII");
    });
    test("1994 converts to MCMXCIV", () => {
        expect((0, converter_1.default)("1994").output).toBe("MCMXCIV");
    });
    test("4000 returns an error", () => {
        expect((0, converter_1.default)("4000").err).toBe("Input out of range. Must be inbetween 1 and 3999");
    });
    test("0 returns an error", () => {
        expect((0, converter_1.default)("0").err).toBe("Input out of range. Must be inbetween 1 and 3999");
    });
    test("abc returns an error", () => {
        expect((0, converter_1.default)("abc").err).toBe("Invalid input. Must be a positive whole number");
    });
    test("ab200cd returns an error", () => {
        expect((0, converter_1.default)("ab200cd").err).toBe("Invalid input. Must be a positive whole number");
    });
});
