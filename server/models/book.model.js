const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [2, 'Title must be at least 2 characters long'],
        maxlength: [255, 'Title cannot exceed 255 characters']
    },
    author: {
        type: String,
        required: [true, 'Author is required'],
        minlength: [5, 'Author name must be at least 5 characters long'],
        maxlength: [255, 'Author name cannot exceed 255 characters']
    },
    pages: {
        type: Number,
        required: [true, 'Pages are required'],
        min: [1, 'Pages must be at least 1']
    },
    isAvailable: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);