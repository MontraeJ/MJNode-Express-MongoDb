//TODO: Create a schema
//TODO: Create a model from that schema

//? What is a Schema?
//*A schema is a set of rules that defines the shape of a single document in MongoDb

const mongoose = require ("mongoose")

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 255},
    description: {type: String, required: true, minlength: 2},
    category: {type: Number, required: true, minlength: 2, maxlength: 255},
    price: {type: Number, required: true},
    dateAdded: {type: Date, default: Date.now() },
    )
);
const Product = mongoose.model("Product", productSchema);

module.export = Product;