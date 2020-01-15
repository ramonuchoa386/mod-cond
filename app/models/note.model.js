const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('notes', NoteSchema);

