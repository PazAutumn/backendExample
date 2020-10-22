const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send({ data: 'Hello World' })
});

router.post('/patient', (req, res) => {
    const body = req.body;
    console.log(req.body);
    res.send('Patient');
})

module.exports = router;