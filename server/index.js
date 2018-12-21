const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { getRoomData } = require('./controllers.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(morgan('tiny'));

app.get('/rooms/:id/booking', (req, res) => {
  const roomId = req.params.id;
  getRoomData(roomId)
    .then((roomInfo) => {
      res.send(roomInfo);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(501);
    });
});

const port = 1337;
app.listen(port, () => console.log(`Server running on port ${port}`));
