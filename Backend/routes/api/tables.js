const express = require('express');
const router = express.Router();

const TableData = require('../../TableData');

// @route GET api/items

router.get('/', (req, res) => {

    TableData.find()
        .then(tables => res.json(tables))
})

router.post('/', (req, res) => {

    const newTable = new TableData({


        type: req.body.type,
        subType: req.body.subType,
        projectName: req.body.projectName,
        banner: req.body.banner,
        city: req.body.city,
        orgName: req.body.orgName,
        name: req.body.name,
        bidDocName: req.body.bidDocName,


    });

    newTable.save().then(table => res.json(table));
});

router.delete('/:id', (req, res) => {
    TableData.findById(req.params.id)
        .then(table => table.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
})


module.exports = router;