// const router = require('express').Router();
// let Form = require('../models/form.model');

// router.route('/add').post((req, res) => {
//     const fullName = req.body.fullName;
//     const email = req.body.email;

//     const newForm = new Form({ fullName, email });

//     newForm.save()
//         .then(() => res.json('Form added!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;

const router = require('express').Router();
let Form = require('../models/form.model');

router.route('/add').post((req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;

    if (!fullName || !email) {
        return res.status(400).json('Error: Missing required fields');
    }

    const newForm = new Form({ fullName, email });

    newForm.save()
        .then(() => res.json('Form added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

