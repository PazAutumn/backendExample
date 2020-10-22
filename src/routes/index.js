const express = require('express');
const { Router } = require('express');
const router = Router();

const Patient = require('../models/patient');

router.use(express.urlencoded({
    extended: true
}));

router.get('/', (req, res) => {
    res.send({ data: 'Hello World' })
});

router.post('/patient', (req, res) => {
    console.log(req.body)
    res.status(200).send(req.body);
})

module.exports = router;