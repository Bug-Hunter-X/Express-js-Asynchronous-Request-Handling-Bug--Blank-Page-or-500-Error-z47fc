const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    try {
      //Simulate an error that will cause the catch block to execute
      // const result = 1/0;
      res.send('Hello from Express!');
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Internal Server Error');
    }
  }, 0);
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});