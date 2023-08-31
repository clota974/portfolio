# Roman numerals converter by KILLIAN CLOTAGATIDE

# Objectives

Convert arabic numerals to roman numerals via an Event Source

## Technical stack

Express server with Typescript.
Jest for testing.

## Commands 

### Step to get it running 

* 1. Run `npm install`
* 2. Run `npm run dev`
* 3. In your favourite browser, go to `http://localhost:3000`

N.B: To change the port, simply change the `.env` file. It has been published for convenience reasons.

### Other commands

Run `npm test` to run the npm testing

## Limitations
The server currently only supports one client at a time.
If multiple clients send multiple requests they will see results of the others.

Big numbers are excluded from the calculation. Indeed the source was specifying that number above symbols for numbers above 5000 are uncommon.

## Tests

I have decided to only test the mathematical part of the work.
Although I could have tested the server logic, it would not have been very useful as it is strongly typed.