import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

const app: Express = express(); 
const PORT = process.env.PORT || 8081;

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
		"message": "successful connection to api",
	});
});

app.listen(PORT, () => {
	console.log(`Started integer to roman numeral service on port ${PORT}`)
});
