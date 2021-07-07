const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  const num = req.body.number

  const result = num + 10;

  return res.send({ result });
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
