import supertest from "supertest";

import { app } from "../app";
import { ERR_INVALID_INPUT_NAN, ERR_INVALID_INPUT_OUT_OF_RANGE } from "../constants";

const requestWithSuperTest = supertest(app);

describe("test express app", () => {
	describe("test /romannumeral endpoint", () => {
		test("?query=1994 returns MCMXCIV", async () => {
			const res = await requestWithSuperTest.get("/romannumeral?query=1994");
			expect(res.status).toEqual(200);
			expect(res.body).toHaveProperty("output");
			expect(res.body).toHaveProperty("input");
			expect(res.body.output).toBe("MCMXCIV");
		});

		test("?query=5000 returns an error message", async () => {
			const res = await requestWithSuperTest.get("/romannumeral?query=5000");
			expect(res.status).toEqual(400);
			expect(res.body).toHaveProperty("err");
			expect(res.body.err).toBe(ERR_INVALID_INPUT_OUT_OF_RANGE);
		});

		test("?query=foobar returns an error message", async () => {
			const res = await requestWithSuperTest.get("/romannumeral?query=foobar");
			expect(res.status).toEqual(400);
			expect(res.body).toHaveProperty("err");
			expect(res.body.err).toBe(ERR_INVALID_INPUT_NAN);
		});

		test("?query=ab20cd returns an error message", async () => {
			const res = await requestWithSuperTest.get("/romannumeral?query=ab20cd");
			expect(res.status).toEqual(400);
			expect(res.body).toHaveProperty("err");
			expect(res.body.err).toBe(ERR_INVALID_INPUT_NAN);
		});

		test("POST method should not be allowed", async () => {
			const res = await requestWithSuperTest.post("/romannumeral?query=ab20cd");
			expect(res.status).toEqual(405);
			expect(res.body.err).toBe("POST not accepted");
		});
	});

	describe("test 404", () => {
		test("/invalidpath?query=1994 should return a 404", async () => {
			const res = await requestWithSuperTest.get("/invalidpath?query=1994");
			expect(res.status).toEqual(404);
		});
	});
});
