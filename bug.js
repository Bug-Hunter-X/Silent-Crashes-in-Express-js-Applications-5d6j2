const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This is where the error might occur
  res.send('Hello from Express!');
  // The 'end' event is emitted after the response is sent
  res.on('end', () => {
    console.log('Response sent');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});