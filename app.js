// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const path = require('path');
const app = express();
const port = 3002;

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
    // eslint-disable-next-line no-undef
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
