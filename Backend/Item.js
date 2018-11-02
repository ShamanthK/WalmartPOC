const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({

   total: {

      type: String,
      //required : true
   },

    cpviz: {

        type: String,
        //required : true
    },

    completed: {

        type: String,
        //required : true
    },

    active: {

        type: String,
        //required : true
    },

    inprogress: {

        type: String,
        //required : true
    },
    draft: {

        type: String,
        //required : true
    },

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