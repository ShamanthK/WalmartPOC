const express = require('express');
const router = express.Router();

const Item = require('../../Item');

// @route GET api/items

router.get('/', (req, res) => {

    Item.find()
        .then(items => res.json(items))
})

router.post('/', (req, res) => {

    const newItem = new Item({
        total: req.body.total,
        cpviz: req.body.cpviz,
        completed: req.body.completed,
        active: req.body.active,
        inprogress: req.body.inprogress,
        draft: req.body.draft,
        quantity1: req.body.quantity1,
        quantity2: req.body.quantity2,
        quantity3: req.body.quantity3,
        quantity4: req.body.quantity4,
        quantity5: req.body.quantity5,
        quantity6: req.body.quantity6,
    });

    newItem.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {

    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
})


module.exports = router;