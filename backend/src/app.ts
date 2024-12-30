import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import dotenv from "dotenv";

import integerToRoman from "./converter/converter";

const app: Express = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
	res.json({
		"title": "Integer to Roman numeral service",
		"description": "Backend service for converting integers to roman numerals",
	});
});

app.get("/test", (req: Request, res: Response) => {
	res.json({
		"title": "testing connection to api",
		"message": "connection successful",
	});
});

app.get("/romannumeral", (req: Request, res: Response) => {
	if (req.query.query === undefined) {
		res.status(400).json({ err: "No input passed" });
		return;
	}

	const { output, err } = integerToRoman(req.query.query);

	if (err && err.length > 0) {
		res.status(400).json({ err });
		return;
	}

	res.status(200).json({ ...output });
});

export { app };
