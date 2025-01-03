import { app } from "./app";

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
	console.log(`Started integer to roman numeral service on port ${PORT}`)
});
