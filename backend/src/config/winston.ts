import appRoot from "app-root-path";
import winston from "winston";

const options = {
	file: {
		level: "info",
		filename: `${appRoot}/logs/error.log`,
		handleExceptions: true,
		maxsize: 5242880,
		maxFiles: 5,
		format: winston.format.combine(
			winston.format.timestamp(),
			winston.format.json(),
		),
	},
	console: {
		level: "debug",
		handleExceptions: true,
		maxFiles: 5,
		format: winston.format.combine(
			winston.format.colorize(),
			winston.format.simple(),
		),
	},
};

const loggerOpts = {
	transports: [
		new winston.transports.File(options.file),
		new winston.transports.Console(options.console),
	],
	exitOnError: false,
}

const errorLoggerOpts = {
	...loggerOpts,
	dumpExceptions: true,
	showStack: true,
};

export { loggerOpts, errorLoggerOpts };

