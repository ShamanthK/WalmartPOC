const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({


    quantity1: {

        type: Number
    },

    quantity2: {

        type: Number
    },

    quantity3: {

        type: Number
    },

    quantity4: {

        type: Number
    },

    quantity5: {

        type: Number
    },

    quantity6: {

        type: Number
    }


})

module.exports = Item = mongoose.model('item', ItemSchema);