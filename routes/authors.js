//gathering module
const route = require("express").Router();

//getting the model exported from other file
let Author = require('../backend/models/author.model.js');

//get request for base page stores users in response json
route.route('/').get((req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json('err: ' + err))
});


route.route('/addAuthor').post((req, res) => {

    const fName = req.body.fName;
    const lName = req.body.lName;

    Author.find()
        .sort('-authorId')
        .limit(1)
        .then(author => {
            let authorId = author[0].authorId + 1;
            const newAuthor = new Author({ authorId, fName, lName });

            newAuthor.save()
                .then(() => res.json("result: new author " + newAuthor.fName + " " + newAuthor.lName + " has been added"))
                .catch(err => res.status(400).json('Err thrown on adding: ' + err));

        });
})

route.route('/findauthor').get((req, res) => {
    const authorId = req.body.authorId;
    const fName = req.body.fName;
    const lName = req.body.lName;

    let params = "";
    if (authorId != null) {
        params = params + " authorId:" + authorId;
        if (fName != null) {
            params = "$and:[{" + params + "}, {fName: '" + fName + "'}";
            if (lName != null) {
                params = params + ", lName:'" + lName + "'";

            }
        }
    }
    console.log(params);

    Author.find({ params })
        .then(author => {
            console.log(author)
            res.json(author)
        })
        .catch(err => res.status(400).json('Err: ' + err))
})

module.exports = route;