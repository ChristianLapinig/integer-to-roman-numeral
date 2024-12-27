import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const app: Express = express(); 
const PORT = process.env.PORT || 8081;

app.get("/", (req: Request, res: Response) => {
	res.json({
		"title": "Integer to Roman numeral service",
		"description": "Backend service for converting integers to roman numerals",
	});
});

app.listen(PORT, () => {
	console.log(`Started integer to roman numeral service on port ${PORT}`)
});
