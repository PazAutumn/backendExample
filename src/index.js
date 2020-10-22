const express = require('express');
const app = express();

require('./database');
// Settings
const port = 3000;

// Routes
app.use(require('./routes/index'));

// Staring Server
app.listen(port, () => {
    console.log(`Server on port http://localhost:${port}`)
})