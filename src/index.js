const express = require('express');
const app = express();

require('./database');
// Settings
const port = 3000;

// Routes
app.use(require('./routes/index.routes'));

app.use(express.urlencoded({
    extended: true
}));

app.post('/patient', (req, res) => {
    const body = req.body;
    console.log(req.body);
    res.send(req.body);
})

// Staring Server
app.listen(port, () => {
    console.log(`Server on port http://localhost:${port}`)
})