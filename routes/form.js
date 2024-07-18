const router = require('express').Router();
let Form = require('../models/form.model');

router.route('/add').post((req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;

    const newForm = new Form({ fullName, email });

    newForm.save()
        .then(() => res.json('Form added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
