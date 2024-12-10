const BookController = require('../controllers/book.controller');

module.exports = (app) => {
    app.post('/api/books', BookController.createBook);
    app.get('/api/books', BookController.getAllBooks);
    app.get('/api/books/:id', BookController.getBookById);
    app.put('/api/books/:id', BookController.updateBook);
    app.delete('/api/books/:id', BookController.deleteBook);
};