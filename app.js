import express from 'express';
const app = express();
import configRoutesFunction from './routes/index.js';
app.use('/public', express.static('public'));
configRoutesFunction(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});