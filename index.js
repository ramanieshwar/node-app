const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello eshwar how are you!'));
app.listen(3000, () => console.log('App running on port 3000'));

