const router = require('express').Router();
let Pot = require('../models/pot.model');

router.route('/').get((req, res) => {
    Pot.find()
        .then(pots => res.json(pots))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const date = Date.parse(req.body.date);
    const flowers = req.body.flowers;
    
    const newPot = new Pot ({
        username,
        date,
        flowers,
    });

    newPot.save()
        .then(() => res.json('Pot added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Pot.findById(req.params.id)
        .then(pot => res.json(pot))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Pot.findByIdAndDelete(req.params.id)
        .then(() => res.json('Pot deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('update/:id').post((req, res) => {
    Pot.findById(req.params.id)
        .then(pot => {
            pot.username = req.body.username;
            pot.date = Date.parse(req.body.date);
            pot.flowers = req.body.flowers;

            pot.save()
                .then(() => res.json('Pot updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;