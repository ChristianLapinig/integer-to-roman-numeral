import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import promBundle from "express-prom-bundle";
import epxressWinston from "express-winston";

import integerToRoman from "./converter/converter";
import { loggerOpts, errorLoggerOpts } from "./config/winston";

const app: Express = express(); 
const metricsMiddleware = promBundle({ 
	includeMethod: true, 
	includePath: true,
	buckets: [0.001, 0.01, 0.1, 1, 2, 3, 5, 7, 10, 15, 20, 25, 30, 35, 40, 50, 70, 100, 200],
	customLabels: { model: "No" },
	transformLabels: (labels, req, res) => {
        labels.model = req?.body?.model ?? req?.body?.imageModel ?? req?.body?.voice ?? "No";
        return labels;
    },
});

app.use(metricsMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(epxressWinston.logger(loggerOpts))

app.get("/", (req: Request, res: Response) => {
	res.json({
		"title": "Integer to Roman numeral service",
		"description": "Backend service for converting integers to a roman numeral",
	});
});

app.get("/test", (req: Request, res: Response) => {
	res.json({
		"title": "testing connection to api",
		"message": "connection successful",
	});
});

app.route("/romannumeral")
	.get((req: Request, res: Response) => {
		if (req.query.query === undefined || req.query === undefined) {
			res.status(400).json({ err: "No input passed" });
			return;
		}

		const { input, output, err } = integerToRoman(req.query.query);

		if (err && err.length > 0) {
			res.status(400).json({ err });
			return;
		}

		res.status(200).json({ input, output });
	})
	.all((req: Request, res: Response) => {
		res.status(405).json({ err: `${req.method} not accepted`});
	});

app.use(epxressWinston.errorLogger(errorLoggerOpts));

export { app };
