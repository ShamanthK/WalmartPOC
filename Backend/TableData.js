const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TableSchema = new Schema({


    type: String,
    subType: String,
    projectName: String,
    banner: String,
    city: String,
    orgName: String,
    name: String,
    bidDocName: String

})

module.exports = TableData = mongoose.model('table', TableSchema);