const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
}, {
    timestamps: true,
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
