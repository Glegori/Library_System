//gathering module
const route = require("express").Router();
//getting the model exported from other file
let Book = require('../backend/models/book.model.js');
let Author = require('../backend/models/author.model.js');

//get request for base page stores users in response json
route.route('/').get((req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('err: ' + err))
});
//adding a new book using post
//todo fill in the rest of the schema details
route.route('/addBook').post((req, res) => {
    //fill in rest
    const bookId = req.body.bookId;
    const title = req.body.title;
    const publisher = req.body.publisher;
    const authorId = req.body.authorId;
    const edition = req.body.edition;
    
    const newBook = new Book({bookId, title, edition, publisher, authorId});
    console.log(newBook);

    //Author.findOne({"authorId":authorId}).catch(err => res.status(400).json('Err: author not found please add author'));
    newBook.save()
    .then(() => res.json("result: new book " + newBook.title + " has been added"))
    .catch(err => res.status(400).json('Err thrown on adding: ' + err));
});
//finds a book by id :id is like variable in this case
route.route('/:id').get((req,res) => {
    Book.findByID(req.paramms.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Err: ' + err))
})

module.exports = route;