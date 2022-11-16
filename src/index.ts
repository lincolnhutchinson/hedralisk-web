import express from 'express';
import * as throwbone from 'throwbone';
import pug from 'pug';

const app: express.Application = express();
// Serve files in the public folder
app.use(express.static('public'));
const port: number = 3000;

const diceThrow = throwbone.rollDice("3");

const compiledIndex = pug.compileFile('./views/index.pug');

app.get('/', (_req, _res) => {
	_res.send(compiledIndex({ roll: diceThrow }));
});

app.listen(port, () => {
	console.log(`Hedralisk Online at: http://localhost:${port}/`)
});
