const Book = require('../models/book.model');

module.exports.createBook = (req, res) => {
    Book.create(req.body)
        .then(newBook => res.json(newBook))
        .catch(err => res.status(400).json(err));
};

module.exports.getAllBooks = (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json(err));
};

module.exports.getBookById = (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(400).json(err));
};

module.exports.updateBook = (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedBook => res.json(updatedBook))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteBook = (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(deletedBook => res.json(deletedBook))
        .catch(err => res.status(400).json(err));
};