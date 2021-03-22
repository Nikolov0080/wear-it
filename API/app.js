const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.set('port', port);

app.get('/', (req, res) => {
    res.send('NUDES');
});

app.listen(port, () => {
    console.log("App online listening to port " + port);
})