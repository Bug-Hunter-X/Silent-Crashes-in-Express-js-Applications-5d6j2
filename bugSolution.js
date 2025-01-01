const express = require('express');
const app = express();
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.get('/', (req, res) => {
  try {
    //Simulate potential error
    //const result = someFunctionThatMightThrowAnError();
    res.send('Hello from Express!');
  } catch (error) {
    console.error('Error during request handling:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});