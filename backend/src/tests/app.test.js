"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../src/app");
const requestWithSuperTest = (0, supertest_1.default)(app_1.app);
describe("test /romannumeral endpoint", () => {
    test("?query=1994 returns MCMXCIV", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield requestWithSuperTest.get("/romannumeral?query=1994");
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("output");
        expect(res.body).toHaveProperty("input");
        expect(res.body.output).toBe("MCMXCIV");
    }));
    test("?query=5000 returns an error message", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield requestWithSuperTest.get("/romannumeral?query=5000");
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty("err");
        expect(res.body.err).toBe("Input out of range. Must be inbetween 1 and 3999");
    }));
    test("?query=foobar returns an error message", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield requestWithSuperTest.get("/romannumeral?query=foobar");
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty("err");
        expect(res.body.err).toBe("Invalid input. Must be a positive whole number");
    }));
    test("?query=ab20cd returns an error message", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield requestWithSuperTest.get("/romannumeral?query=ab20cd");
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty("err");
        expect(res.body.err).toBe("Invalid input. Must be a positive whole number");
    }));
    test("/romannumeral should return an error message", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield requestWithSuperTest.get("/romannumeral");
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty("err");
        expect(res.body.err).toBe("No input passed");
    }));
});
