const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 45,
        required: [true, 'Ingresa un precio'],
    },
    category:{
        type: String,
        minlength: 2,
        maxlength: 45,
        required: [true, 'Ingresa categoria'],

    },
});

const Product = model('Product', productSchema);

module.exports = Product;