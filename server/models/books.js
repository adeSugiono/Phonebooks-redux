const mongoose =require ('mongoose');

const dataSchema = new mongoose.Schema({
    id : Number,
    name : String,
    phone : String
});

module.exports = mongoose.model('Phone', dataSchema);