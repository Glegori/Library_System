//gathering module
const route = require("express").Router();
//getting the model exported from other file
const Member = require("../backend/models/member.model.js");

//get request for base page stores users in response json
route.route('/').get((req, res) => {
    Member.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('err: ' + err))
});
//adding a new book using post
//todo fill in the rest of the schema details
route.route('/addMember').post((req, res) => {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    const books = [];
    const outstanding = 0;
    const address = req.body.address;

    Author.find()
    .sort('-memberId')
    .limit(1)
    .then(member => {
        let memberId = member[0].memberId + 1;
        const newMember = new Member({ authorId, fName, lName, email, books, outstanding, address });

        newMember.save()
            .then(() => res.json("result: new author " + newMember.fName + " " + newMember.lName + " has been added"))
            .catch(err => res.status(400).json('Err thrown on adding: ' + err));
    });
});
//finds a book by id :id is like variable in this case
route.route('/:id').get((req,res) => {
    Member.findByID(req.paramms.id)
    .then(member => res.json(member))
    .catch(err => res.status(400).json('Err: ' + err))
})

module.exports = route;