const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(morgan('tiny'));

app.get('/rooms/:id/checkout', (req, res) => {
  const roomId = req.params.id;
  // TODO
});

const port = 1337;
app.listen(port, () => console.log(`Server running on port ${port}`));
