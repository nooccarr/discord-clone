const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('./dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Discord!');
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
})