//gathering module
const route = require("express").Router();
//getting the model exported from other file
let Book = require('../models/book.model');

//get request for base page stores users in response json
route.route('/').get((req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('err: ' + err))
});
//adding a new book using post
//todo fill in the rest of the schema details
route.route('/add').post((req, res) => {
    //fill in rest
    const bookId = req.body.BookId

    //builds a new book based on the model
    let newBook = new Book({bookId})
    newBook.save()
    .then(() => res.json("response to new book goes here"))
    .catch(err => res.status(400).json('Err: ' + err));
});
//finds a book by id :id is like variable in this case
route.route('/:id').get((req,res) => {
    Book.findByID(req.paramms.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Err: ' + err))
})

module.exports = route;