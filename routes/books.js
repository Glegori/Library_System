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
    const title = req.body.title;
    const publisher = req.body.publisher;
    const authorId = req.body.authorId;
    const edition = req.body.edition;

    Book.find()
        .sort('-bookId')
        .limit(1)
        .then(book => {
            let bookId = book[0].bookId + 1;
            const newBook = new Book({ bookId, title, edition, publisher, authorId});
            Author.findOne({ "authorId": authorId })
                .then(author => {
                    console.log(author);
                    if (author == null) {
                        console.log("author was able to be found");
                        res.json("author was not able to be found please add author before adding this book");
                    }
                    else {
                        newBook.save()
                            .then(() => res.json("result: new book " + newBook.title + " has been added"))
                            .catch(err => res.status(400).json('Err thrown on adding: ' + err));
                    }
                })
                .catch(err => res.status(400).json('Err: author not found please add author'));
        });
});
//finds a book by id :id is like variable in this case
route.route('/findbook').get((req, res) => {
    const bookId = req.body.bookId;
    const title = req.body.title;
    const publisher = req.body.publisher;
    const authorId = req.body.authorId;

    let params = "";
    if (bookId != null) {
        params = params + " bookId:" + bookId;
        if (title != null) {
            params = "$and:[{" +params + "}, {title: '" + title + "'}";
            if (publisher != null) {
                params = params + ", publisher:'" + publisher + "'";
                if (authorId) {
                    params = params + ", {authorId:" + authorId + "}";
                }
            } else {
                if (authorId != null) {
                    params = params + ", {authorId:" + authorId + "}";
                }
            }
        } else {
            if (publisher != null) {
                params = "$and:[{" + params + "}, {publisher:'" + publisher + "'}";
                if (authorId != null) {
                    params = params + ", {authorId:" + authorId + "}";
                }
            } else {
                if (authorId != null) {
                    params = "$and:[{" + params + "}, {authorId:" + authorId + "}";
                }
            }
        }
    } else {
        if (title != null) {
            params = params + "title:'" + title + "'";
            if (publisher != null) {
                params = "$and:[{" + params + "}, {publisher:'" + publisher + "'}";
                if (authorId != null) {
                    params = params + ", {authorId:" + authorId + "}";
                }
            } else {
                if (authorId != null) {
                    params = "$and:[{" + params + "}, {authorId:" + authorId +"}";
                }
            }
        } else {
            if (publisher != null) {
                params = params + "publisher:'" + publisher + "'";
                if (authorId != null) {
                    params = "$and:[{" + params + "}, {authorId:" + authorId +"}";
                }
            } else {
                if (authorId != null) {
                    params = params + "authorId:" + authorId;
                }
            }
        }
    }
    console.log(params);

    Book.find({ params })
        .then(book => {
            console.log(book)
            res.json(book)
        })
        .catch(err => res.status(400).json('Err: ' + err))
})

module.exports = route;