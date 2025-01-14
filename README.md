# Integer to Roman Numeral Converter

## Overview
Web service that takes a user input from a form and converts it into a roman numeral.

For example, if 1993 is entered, MCMXCIII will be returned and displayed to the user.

The conversion of user input adheres to the following [rules](https://www.rapidtables.com/convert/number/how-number-to-roman-numerals.html) to convert a number into a
roman numeral.

## Usage
Converting a number into a roman numeral is done by providing a number that is within
the range 1 to 3999 to the form in the UI. Once submitted, an HTTP end-point `/romannumeral` that accepts a querystring parameter `query`.

```
http://localhost:8081/romannumeral?query={input}
```

Properly submitted values will return the following JSON ouput:

```json
{
	"input": <submitted input>,
	"output": <converted value>
}
```

For example, `http://localhost:8081/romannumeral?query=1993` results in the following:

```json
{
	"input": "1993",
	"output": "MCMXCIII"
}
```

Invalid inputs will return an error message. For example, `/romannumeral?query=foobar` returns the following response:

```json
{
	"err": "Invalid input foobar. Must be a positive whole number"
}
```

While inputs not within the range of 1-3999 returns:

```json
{
	"err": "Invalid input 5000. Must be inbetween 1 and 3999"
}
```

Upon form submission, the URL to the UI will change to `/romannumeral?query={input}`.
This URL will also prefill the form when initially loading the page. 

Output is then displayed to the user.

## Services
The project consists of the following services:

[backend](https://github.com/ChristianLapinig/integer-to-roman-numeral/tree/main/backend): NodeJS server which converts the users input
to a roman numeral.

[frontend](https://github.com/ChristianLapinig/integer-to-roman-numeral/tree/main/frontend): UI built in React that allows users to 
submit numbers to be converted to roman numeral.

Prometheus and Grafana for monitoring and metrics.

## Build and Run

### Prequisites
1. NodeJS must be installed. You can install `node` via:
	- The official download page: https://nodejs.org/en/download 
	- `nvm`: https://github.com/nvm-sh/nvm
2. Clone the code
```bash
$ git clone git@github.com:ChristianLapinig/integer-to-roman-numeral.git 

# Or if you have forked the repository
$ git clone git@github.com:YourUserName/integer-to-roman-numeral.git 
```
3. Install dependencies for both frontend and backend
```bash
$ cd frontend && npm install

$ cd ../backend && npm install
```
4. Install Docker: https://docs.docker.com/engine/install/

### Running the frontend and backend via `node`
The frontend and backend can be run as standalone services following these commands:

```bash
$ cd frontend
$ npm run dev
```

The frontend is now available at `http://localhost:8080`

Run the backend server in a separate terminal window/tab:
```bash
$ cd backend
$ npm run start:watch
```

Requests to the server at `http://localhost:8081` can now be made.

Please note that Prometheus and Grafana will not be available using this approach.

### Running and building using Docker
You can use Docker to run and build the entire application. There are two Docker Compose files
that can be used:

1. `compose.dev.yml` for running the application, Prometheus, and Grafana as dev.
2. `compose.yml` for building and running a proudction build of the application and relavent containers.

The following commands can be used to run the application via Docker Compose:

```bash
# production build
$ docker compose up --build

# dev build
$ docker compose -f compose.dev.yml up --build
```

Where you can find these containers running:

1. React UI running on `http://localhost:4000`.
2. Backend running at `http://localhost:8080`
3. Promethus for monitoring at `http://localhost:9090`
4. Grafana for observability at `http://localhost:3000`.

## Testing
Tests can be run via `npm` or `docker compose`

```bash
# npm
$ cd frontend
$ npm test
$ cd ../backend
$ npm test

# docker compose
$ docker compose -f compose.dev.yml run frontend npm test
$ docker compose -f compose.dev.yml run backend npm test
```
