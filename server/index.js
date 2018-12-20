const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));

const port = 1337;
app.listen(port, () => console.log(`Server running on port ${port}`));
