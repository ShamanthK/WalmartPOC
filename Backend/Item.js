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
    },

    quantity7: {

        type: Number
    },

    quantity8: {

        type: Number
    },

    quantity9: {

        type: Number
    },

    quantity10: {

        type: Number
    },

    quantity11: {

        type: Number
    },

    quantity12: {

        type: Number
    },

    quantity13: {

        type: Number
    },

    quantity14: {

        type: Number
    },

    quantity15: {

        type: Number
    },
    quantity16: {

        type: Number
    },
    quantity17: {

        type: Number
    },
    quantity18: {

        type: Number
    },

    quantity19: {

        type: Number
    }







})

module.exports = Item = mongoose.model('item', ItemSchema);