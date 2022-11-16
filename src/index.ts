import express from 'express';
import * as throwbone from 'throwbone';

const app: express.Application = express();
const port: number = 3000;

const diceThrow = throwbone.rollDice("3");

app.get('/', (_req, _res) => {
	_res.send(`Hedralisk Time Baybee. Here's a dice roll: ${diceThrow}`);
});

app.listen(port, () => {
	console.log(`Hedralisk Online at: http://localhost:${port}/`)
});
