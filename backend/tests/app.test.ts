import supertest from "supertest";

import { app } from "../src/app";

const requestWithSuperTest = supertest(app);

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
		expect(res.body.err).toBe("Input out of range. Must be inbetween 1 and 3999");
	});

	test("?query=foobar returns an error message", async () => {
		const res = await requestWithSuperTest.get("/romannumeral?query=foobar");
		expect(res.status).toEqual(400);
		expect(res.body).toHaveProperty("err");
		expect(res.body.err).toBe("Invalid input. Must be a positive whole number");
	});

	test("?query=ab20cd returns an error message", async () => {
		const res = await requestWithSuperTest.get("/romannumeral?query=ab20cd");
		expect(res.status).toEqual(400);
		expect(res.body).toHaveProperty("err");
		expect(res.body.err).toBe("Invalid input. Must be a positive whole number");
	});

	test ("/romannumeral should return an error message", async () => {
		const res = await requestWithSuperTest.get("/romannumeral");
		expect(res.status).toEqual(400);
		expect(res.body).toHaveProperty("err");
		expect(res.body.err).toBe("No input passed");
	});
});
