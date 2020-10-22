const express = require('express');
const { Router, response } = require('express');
const router = Router();

const Patient = require('../models/patient');
/**
             * 
             * const { Query } = require('mongoose')

            const findById = Model => async id => {
              const query = Model.findOne({ id: Number(id) })
              query instanceof Query
              return await query
            }
             */
router.use(express.urlencoded({
    extended: true
}));

router.use(express.json());

router.get('/', (req, res) => {
    res.send({ data: 'Hello World' })
});

router.post('/patient', (req, res) => {
    Patient.create(req.body)
        .then((patient) => {
            res.send(patient)
        }).catch((err) => {
            res.send(err)
        })
});
router.get('/patient', (req, res) => {
    Patient.find()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })

});

router.get('/patient/:id', (req, res) => {
    Patient.findOne({ _id: req.params.id })
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })
});

router.patch('/patient/:id', (req, res) => {
    console.log(req.params)
    Patient.findOneAndUpdate(req.params.id, req.body, { new: true })
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })
})
router.put('/patient/:id', (req, res) => {
    Patient.replaceOne({ _id: req.params.id }, req.body)
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })
});
router.delete('/patient/:id', (req, res) => {
    Patient.findByIdAndDelete({ _id: req.params.id })
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })
});

module.exports = router;