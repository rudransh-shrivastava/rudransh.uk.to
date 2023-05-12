const { readFileSync, writeFileSync } = require('fs');

const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
	const count = readFileSync('./count.txt');
	console.log('count ', count)

	const newCount = parseInt(count) + 1

	writeFileSync('./count.txt', newCount);

	res.send(`

		<!DOCTYPE html>
		<html lang="en">
		<head>
		   <meta charset="utf-8" />
		   <meta name="viewport" content="width=device-width, initial-scale=1" />
		   <title>Hello There!</title>
		</head>
		<body>
		   <h1>Welcome to the Website!</h1>
		   <p>This Website has been visited   ${newCount} times!</p>
		</body>
		</html>

	`);

});

app.get('/results-summary-component-page', (req, res) => {
  const filePath = path.join(__dirname, 'results-summary-component-page', 'index.html');
  const resultsPage = readFileSync(filePath, 'utf-8');
  res.send(resultsPage);
});

app.listen(5000, () => console.log('http://localhost:5000/'));
